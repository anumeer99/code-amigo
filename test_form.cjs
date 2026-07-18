const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  await page.goto('https://code-amigo.vercel.app', { waitUntil: 'networkidle2' });
  
  // Find and click consultation button
  const btns = await page.$$('button');
  for (const btn of btns) {
    const text = await page.evaluate(e => e.textContent, btn);
    if (text.includes('Get a Free Consultation')) {
      await btn.click();
      break;
    }
  }
  
  await new Promise(r => setTimeout(r, 2000));
  
  // Check the country selector default
  const countryText = await page.evaluate(() => {
    // Look for the country selector button text
    const btns = document.querySelectorAll('button');
    for (const btn of btns) {
      const text = btn.textContent || '';
      if (text.includes('+') && text.length < 20) {
        return text.trim();
      }
    }
    return 'not found';
  });
  
  console.log('Country selector shows:', countryText);
  
  // Fill form
  const inputs = await page.$$('input');
  for (const input of inputs) {
    const ph = await page.evaluate(e => e.placeholder, input);
    if (ph === 'Full Name' || ph === 'Enter your full name') {
      await input.click({ clickCount: 3 });
      await input.type('Test User');
    }
    if (ph === 'Email' || ph === 'Enter your email') {
      await input.click({ clickCount: 3 });
      await input.type('test@example.com');
    }
    if (ph === 'Phone Number') {
      await input.click({ clickCount: 3 });
      await input.type('4155551234');
    }
  }
  
  await new Promise(r => setTimeout(r, 500));
  
  // Intercept the API call to see what's sent
  await page.setRequestInterception(true);
  let capturedBody = null;
  page.on('request', req => {
    if (req.url().includes('/api/send-email')) {
      capturedBody = JSON.parse(req.postData());
      req.continue();
    } else {
      req.continue();
    }
  });
  
  // Fill project details
  const textareas = await page.$$('textarea');
  for (const ta of textareas) {
    await ta.click();
    await ta.type('Test project details for verification of phone number format in PDF generation.');
  }
  
  // Select budget
  const budgetSelect = await page.$('div[role="combobox"]');
  if (budgetSelect) {
    await budgetSelect.click();
    await new Promise(r => setTimeout(r, 500));
    const options = await page.$$('li[role="option"]');
    for (const opt of options) {
      const text = await page.evaluate(e => e.textContent, opt);
      if (text.includes('5,000')) {
        await opt.click();
        break;
      }
    }
  }
  
  // Submit
  await new Promise(r => setTimeout(r, 500));
  const submitBtns = await page.$$('button[type="submit"]');
  for (const btn of submitBtns) {
    const text = await page.evaluate(e => e.textContent, btn);
    if (text.includes('Send') || text.includes('Submit')) {
      await btn.click();
      break;
    }
  }
  
  await new Promise(r => setTimeout(r, 5000));
  
  if (capturedBody) {
    console.log('API request body:');
    console.log('  phone:', capturedBody.phone);
    console.log('  dial:', capturedBody.dial);
    console.log('  country:', capturedBody.country);
    console.log('  countryCode:', capturedBody.countryCode);
  } else {
    console.log('No API call captured');
  }
  
  await browser.close();
})();
