export const MicroservicesSVG = ({ c }) => (
  <svg viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <defs>
      <linearGradient id="ms-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={c.blue.base} stopOpacity="0.08" />
        <stop offset="100%" stopColor={c.purple.base} stopOpacity="0.06" />
      </linearGradient>
      <filter id="ms-blur">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
      </filter>
    </defs>
    <rect width="1600" height="900" fill="url(#ms-bg)" />
    
    {/* Connection lines */}
    <g opacity="0.3" stroke={c.blue.base} strokeWidth="2">
      <line x1="300" y1="350" x2="600" y2="350" />
      <line x1="300" y1="350" x2="600" y2="550" />
      <line x1="300" y1="550" x2="600" y2="350" />
      <line x1="300" y1="550" x2="600" y2="550" />
      <line x1="300" y1="750" x2="600" y2="550" />
      <line x1="300" y1="750" x2="600" y2="750" />
      <line x1="700" y1="350" x2="1000" y2="450" />
      <line x1="700" y1="550" x2="1000" y2="450" />
      <line x1="700" y1="550" x2="1000" y2="650" />
      <line x1="700" y1="750" x2="1000" y2="650" />
      <line x1="1100" y1="450" x2="1400" y2="400" />
      <line x1="1100" y1="450" x2="1400" y2="500" />
      <line x1="1100" y1="650" x2="1400" y2="500" />
      <line x1="1100" y1="650" x2="1400" y2="600" />
    </g>

    {/* Service nodes - Layer 1 */}
    <g filter="url(#ms-blur)">
      <circle cx="300" cy="350" r="45" fill={c.blue.base} fillOpacity="0.18" stroke={c.blue.base} strokeOpacity="0.5" strokeWidth="2" />
      <circle cx="300" cy="550" r="45" fill={c.blue.base} fillOpacity="0.18" stroke={c.blue.base} strokeOpacity="0.5" strokeWidth="2" />
      <circle cx="300" cy="750" r="45" fill={c.blue.base} fillOpacity="0.18" stroke={c.blue.base} strokeOpacity="0.5" strokeWidth="2" />
    </g>
    
    {/* Service nodes - Layer 2 */}
    <g filter="url(#ms-blur)">
      <rect x="555" y="305" width="90" height="90" rx="16" fill={c.purple.base} fillOpacity="0.18" stroke={c.purple.base} strokeOpacity="0.5" strokeWidth="2" />
      <rect x="555" y="505" width="90" height="90" rx="16" fill={c.purple.base} fillOpacity="0.18" stroke={c.purple.base} strokeOpacity="0.5" strokeWidth="2" />
      <rect x="555" y="705" width="90" height="90" rx="16" fill={c.purple.base} fillOpacity="0.18" stroke={c.purple.base} strokeOpacity="0.5" strokeWidth="2" />
    </g>

    {/* Service nodes - Layer 3 */}
    <g filter="url(#ms-blur)">
      <circle cx="1000" cy="450" r="50" fill={c.cyan.base} fillOpacity="0.18" stroke={c.cyan.base} strokeOpacity="0.5" strokeWidth="2" />
      <circle cx="1000" cy="650" r="50" fill={c.cyan.base} fillOpacity="0.18" stroke={c.cyan.base} strokeOpacity="0.5" strokeWidth="2" />
    </g>

    {/* Service nodes - Layer 4 */}
    <g filter="url(#ms-blur)">
      <rect x="1355" y="355" width="90" height="90" rx="16" fill={c.green.base} fillOpacity="0.18" stroke={c.green.base} strokeOpacity="0.5" strokeWidth="2" />
      <rect x="1355" y="455" width="90" height="90" rx="16" fill={c.green.base} fillOpacity="0.18" stroke={c.green.base} strokeOpacity="0.5" strokeWidth="2" />
      <rect x="1355" y="555" width="90" height="90" rx="16" fill={c.green.base} fillOpacity="0.18" stroke={c.green.base} strokeOpacity="0.5" strokeWidth="2" />
    </g>

    {/* Center hub */}
    <circle cx="800" cy="500" r="80" fill={c.blue.base} fillOpacity="0.12" stroke={c.blue.base} strokeOpacity="0.55" strokeWidth="2.5" />
    <circle cx="800" cy="500" r="40" fill={c.blue.light} fillOpacity="0.3" />
    
    {/* Node icons */}
    <circle cx="300" cy="350" r="12" fill={c.blue.light} fillOpacity="0.8" />
    <circle cx="300" cy="550" r="12" fill={c.blue.light} fillOpacity="0.8" />
    <circle cx="300" cy="750" r="12" fill={c.blue.light} fillOpacity="0.8" />
    <rect x="590" y="340" width="20" height="20" rx="4" fill={c.purple.light} fillOpacity="0.8" />
    <rect x="590" y="540" width="20" height="20" rx="4" fill={c.purple.light} fillOpacity="0.8" />
    <rect x="590" y="740" width="20" height="20" rx="4" fill={c.purple.light} fillOpacity="0.8" />
    <circle cx="1000" cy="450" r="14" fill={c.cyan.light} fillOpacity="0.8" />
    <circle cx="1000" cy="650" r="14" fill={c.cyan.light} fillOpacity="0.8" />
    <rect x="1390" y="390" width="20" height="20" rx="4" fill={c.green.light} fillOpacity="0.8" />
    <rect x="1390" y="490" width="20" height="20" rx="4" fill={c.green.light} fillOpacity="0.8" />
    <rect x="1390" y="590" width="20" height="20" rx="4" fill={c.green.light} fillOpacity="0.8" />
    
    {/* Floating particles */}
    <circle cx="200" cy="200" r="5" fill={c.blue.base} fillOpacity="0.4" />
    <circle cx="1400" cy="150" r="4" fill={c.purple.base} fillOpacity="0.4" />
    <circle cx="1500" cy="800" r="6" fill={c.cyan.base} fillOpacity="0.35" />
    <circle cx="100" cy="700" r="4" fill={c.green.base} fillOpacity="0.4" />
  </svg>
);

export const AIToolsSVG = ({ c }) => (
  <svg viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <defs>
      <linearGradient id="ai-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={c.purple.base} stopOpacity="0.08" />
        <stop offset="100%" stopColor={c.pink.base} stopOpacity="0.06" />
      </linearGradient>
      <filter id="ai-glow">
        <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
      </filter>
    </defs>
    <rect width="1600" height="900" fill="url(#ai-bg)" />
    
    {/* Neural network structure */}
    <g opacity="0.25" stroke={c.purple.base} strokeWidth="1.5">
      <line x1="200" y1="200" x2="500" y2="300" />
      <line x1="200" y1="200" x2="500" y2="450" />
      <line x1="200" y1="200" x2="500" y2="600" />
      <line x1="200" y1="350" x2="500" y2="300" />
      <line x1="200" y1="350" x2="500" y2="450" />
      <line x1="200" y1="350" x2="500" y2="600" />
      <line x1="200" y1="500" x2="500" y2="300" />
      <line x1="200" y1="500" x2="500" y2="450" />
      <line x1="200" y1="500" x2="500" y2="600" />
      <line x1="200" y1="650" x2="500" y2="300" />
      <line x1="200" y1="650" x2="500" y2="450" />
      <line x1="200" y1="650" x2="500" y2="600" />
      
      <line x1="500" y1="300" x2="800" y2="400" />
      <line x1="500" y1="300" x2="800" y2="500" />
      <line x1="500" y1="450" x2="800" y2="400" />
      <line x1="500" y1="450" x2="800" y2="500" />
      <line x1="500" y1="600" x2="800" y2="400" />
      <line x1="500" y1="600" x2="800" y2="500" />
      
      <line x1="800" y1="400" x2="1100" y2="350" />
      <line x1="800" y1="400" x2="1100" y2="500" />
      <line x1="800" y1="500" x2="1100" y2="350" />
      <line x1="800" y1="500" x2="1100" y2="500" />
    </g>

    {/* Input nodes */}
    <circle cx="200" cy="200" r="30" fill={c.purple.base} fillOpacity="0.22" stroke={c.purple.base} strokeOpacity="0.55" strokeWidth="2" />
    <circle cx="200" cy="350" r="30" fill={c.purple.base} fillOpacity="0.22" stroke={c.purple.base} strokeOpacity="0.55" strokeWidth="2" />
    <circle cx="200" cy="500" r="30" fill={c.purple.base} fillOpacity="0.22" stroke={c.purple.base} strokeOpacity="0.55" strokeWidth="2" />
    <circle cx="200" cy="650" r="30" fill={c.purple.base} fillOpacity="0.22" stroke={c.purple.base} strokeOpacity="0.55" strokeWidth="2" />

    {/* Hidden nodes */}
    <circle cx="500" cy="300" r="35" fill={c.pink.base} fillOpacity="0.22" stroke={c.pink.base} strokeOpacity="0.55" strokeWidth="2" />
    <circle cx="500" cy="450" r="35" fill={c.pink.base} fillOpacity="0.22" stroke={c.pink.base} strokeOpacity="0.55" strokeWidth="2" />
    <circle cx="500" cy="600" r="35" fill={c.pink.base} fillOpacity="0.22" stroke={c.pink.base} strokeOpacity="0.55" strokeWidth="2" />

    {/* Core processing */}
    <circle cx="800" cy="450" r="60" fill={c.purple.base} fillOpacity="0.16" stroke={c.purple.base} strokeOpacity="0.6" strokeWidth="2.5" />
    <circle cx="800" cy="450" r="30" fill={c.purple.light} fillOpacity="0.4" />

    {/* Output nodes */}
    <circle cx="1100" cy="350" r="35" fill={c.blue.base} fillOpacity="0.22" stroke={c.blue.base} strokeOpacity="0.55" strokeWidth="2" />
    <circle cx="1100" cy="500" r="35" fill={c.blue.base} fillOpacity="0.22" stroke={c.blue.base} strokeOpacity="0.55" strokeWidth="2" />

    {/* AI code window */}
    <rect x="1200" y="250" width="300" height="400" rx="12" fill={c.purple.base} fillOpacity="0.12" stroke={c.purple.base} strokeOpacity="0.45" strokeWidth="2" />
    <rect x="1200" y="250" width="300" height="40" rx="12" fill={c.purple.base} fillOpacity="0.2" />
    <circle cx="1224" cy="270" r="6" fill={c.error.base} fillOpacity="0.8" />
    <circle cx="1244" cy="270" r="6" fill={c.amber.base} fillOpacity="0.8" />
    <circle cx="1264" cy="270" r="6" fill={c.green.base} fillOpacity="0.8" />
    <rect x="1220" y="310" width="180" height="8" rx="4" fill={c.purple.light} fillOpacity="0.55" />
    <rect x="1220" y="330" width="140" height="8" rx="4" fill={c.purple.light} fillOpacity="0.4" />
    <rect x="1220" y="350" width="200" height="8" rx="4" fill={c.purple.light} fillOpacity="0.5" />
    <rect x="1220" y="370" width="120" height="8" rx="4" fill={c.purple.light} fillOpacity="0.4" />
    <rect x="1220" y="390" width="160" height="8" rx="4" fill={c.purple.light} fillOpacity="0.55" />

    {/* Floating elements */}
    <circle cx="150" cy="150" r="5" fill={c.purple.base} fillOpacity="0.4" />
    <circle cx="1450" cy="120" r="4" fill={c.pink.base} fillOpacity="0.4" />
    <circle cx="1500" cy="780" r="6" fill={c.blue.base} fillOpacity="0.35" />
  </svg>
);

export const CloudNativeSVG = ({ c }) => (
  <svg viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <defs>
      <linearGradient id="cn-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={c.cyan.base} stopOpacity="0.08" />
        <stop offset="100%" stopColor={c.blue.base} stopOpacity="0.06" />
      </linearGradient>
    </defs>
    <rect width="1600" height="900" fill="url(#cn-bg)" />
    
    {/* Cloud shape */}
    <path d="M400 300C400 300 450 250 550 250C650 250 680 320 680 320C680 320 720 280 800 280C880 280 920 340 920 340C920 340 980 300 1050 320C1120 340 1150 400 1150 400C1150 400 1200 380 1250 400C1300 420 1320 480 1320 480L380 480C380 480 360 400 400 300Z" 
      fill={c.cyan.base} fillOpacity="0.12" stroke={c.cyan.base} strokeOpacity="0.45" strokeWidth="2.5" />
    
    {/* Cloud connection lines */}
    <g opacity="0.3" stroke={c.cyan.base} strokeWidth="1.5">
      <line x1="550" y1="480" x2="550" y2="600" />
      <line x1="750" y1="480" x2="750" y2="600" />
      <line x1="950" y1="480" x2="950" y2="600" />
      <line x1="1150" y1="480" x2="1150" y2="600" />
    </g>

    {/* Server containers */}
    <rect x="480" y="600" width="140" height="100" rx="8" fill={c.cyan.base} fillOpacity="0.16" stroke={c.cyan.base} strokeOpacity="0.45" strokeWidth="2" />
    <rect x="680" y="600" width="140" height="100" rx="8" fill={c.cyan.base} fillOpacity="0.16" stroke={c.cyan.base} strokeOpacity="0.45" strokeWidth="2" />
    <rect x="880" y="600" width="140" height="100" rx="8" fill={c.cyan.base} fillOpacity="0.16" stroke={c.cyan.base} strokeOpacity="0.45" strokeWidth="2" />
    <rect x="1080" y="600" width="140" height="100" rx="8" fill={c.cyan.base} fillOpacity="0.16" stroke={c.cyan.base} strokeOpacity="0.45" strokeWidth="2" />

    {/* Container status indicators */}
    <circle cx="510" cy="630" r="8" fill={c.green.base} fillOpacity="0.8" />
    <circle cx="710" cy="630" r="8" fill={c.green.base} fillOpacity="0.8" />
    <circle cx="910" cy="630" r="8" fill={c.green.base} fillOpacity="0.8" />
    <circle cx="1110" cy="630" r="8" fill={c.green.base} fillOpacity="0.8" />

    {/* Container content lines */}
    <rect x="510" y="650" width="80" height="6" rx="3" fill={c.cyan.light} fillOpacity="0.55" />
    <rect x="710" y="650" width="80" height="6" rx="3" fill={c.cyan.light} fillOpacity="0.55" />
    <rect x="910" y="650" width="80" height="6" rx="3" fill={c.cyan.light} fillOpacity="0.55" />
    <rect x="1110" y="650" width="80" height="6" rx="3" fill={c.cyan.light} fillOpacity="0.55" />

    {/* Load balancer */}
    <rect x="700" y="750" width="200" height="60" rx="30" fill={c.blue.base} fillOpacity="0.2" stroke={c.blue.base} strokeOpacity="0.5" strokeWidth="2" />
    <circle cx="800" cy="780" r="15" fill={c.blue.light} fillOpacity="0.55" />

    {/* Connection from load balancer to containers */}
    <g opacity="0.35" stroke={c.blue.base} strokeWidth="1.5">
      <line x1="750" y1="750" x2="550" y2="700" />
      <line x1="775" y1="750" x2="750" y2="700" />
      <line x1="825" y1="750" x2="950" y2="700" />
      <line x1="850" y1="750" x2="1150" y2="700" />
    </g>

    {/* Decorative elements */}
    <circle cx="300" cy="200" r="5" fill={c.cyan.base} fillOpacity="0.4" />
    <circle cx="1400" cy="150" r="4" fill={c.blue.base} fillOpacity="0.4" />
    <circle cx="1500" cy="800" r="6" fill={c.green.base} fillOpacity="0.35" />
  </svg>
);

export const AIAgentsSVG = ({ c }) => (
  <svg viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <defs>
      <linearGradient id="ag-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={c.amber.base} stopOpacity="0.08" />
        <stop offset="100%" stopColor={c.orange.base} stopOpacity="0.06" />
      </linearGradient>
    </defs>
    <rect width="1600" height="900" fill="url(#ag-bg)" />
    
    {/* Central agent */}
    <circle cx="800" cy="400" r="100" fill={c.amber.base} fillOpacity="0.16" stroke={c.amber.base} strokeOpacity="0.5" strokeWidth="2.5" />
    <circle cx="800" cy="400" r="50" fill={c.amber.light} fillOpacity="0.3" />
    
    {/* Agent connections */}
    <g opacity="0.3" stroke={c.amber.base} strokeWidth="2">
      <line x1="800" y1="400" x2="400" y2="250" />
      <line x1="800" y1="400" x2="400" y2="450" />
      <line x1="800" y1="400" x2="400" y2="650" />
      <line x1="800" y1="400" x2="1200" y2="250" />
      <line x1="800" y1="400" x2="1200" y2="450" />
      <line x1="800" y1="400" x2="1200" y2="650" />
    </g>

    {/* Task nodes - left */}
    <rect x="320" y="210" width="160" height="80" rx="12" fill={c.amber.base} fillOpacity="0.16" stroke={c.amber.base} strokeOpacity="0.45" strokeWidth="2" />
    <rect x="320" y="410" width="160" height="80" rx="12" fill={c.amber.base} fillOpacity="0.16" stroke={c.amber.base} strokeOpacity="0.45" strokeWidth="2" />
    <rect x="320" y="610" width="160" height="80" rx="12" fill={c.amber.base} fillOpacity="0.16" stroke={c.amber.base} strokeOpacity="0.45" strokeWidth="2" />

    {/* Task nodes - right */}
    <rect x="1120" y="210" width="160" height="80" rx="12" fill={c.amber.base} fillOpacity="0.16" stroke={c.amber.base} strokeOpacity="0.45" strokeWidth="2" />
    <rect x="1120" y="410" width="160" height="80" rx="12" fill={c.amber.base} fillOpacity="0.16" stroke={c.amber.base} strokeOpacity="0.45" strokeWidth="2" />
    <rect x="1120" y="610" width="160" height="80" rx="12" fill={c.amber.base} fillOpacity="0.16" stroke={c.amber.base} strokeOpacity="0.45" strokeWidth="2" />

    {/* Task icons */}
    <circle cx="360" cy="250" r="12" fill={c.amber.light} fillOpacity="0.75" />
    <circle cx="360" cy="450" r="12" fill={c.amber.light} fillOpacity="0.75" />
    <circle cx="360" cy="650" r="12" fill={c.amber.light} fillOpacity="0.75" />
    <circle cx="1160" cy="250" r="12" fill={c.amber.light} fillOpacity="0.75" />
    <circle cx="1160" cy="450" r="12" fill={c.amber.light} fillOpacity="0.75" />
    <circle cx="1160" cy="650" r="12" fill={c.amber.light} fillOpacity="0.75" />

    {/* Task labels */}
    <rect x="390" y="244" width="60" height="8" rx="4" fill={c.amber.light} fillOpacity="0.55" />
    <rect x="390" y="444" width="60" height="8" rx="4" fill={c.amber.light} fillOpacity="0.55" />
    <rect x="390" y="644" width="60" height="8" rx="4" fill={c.amber.light} fillOpacity="0.55" />
    <rect x="1190" y="244" width="60" height="8" rx="4" fill={c.amber.light} fillOpacity="0.55" />
    <rect x="1190" y="444" width="60" height="8" rx="4" fill={c.amber.light} fillOpacity="0.55" />
    <rect x="1190" y="644" width="60" height="8" rx="4" fill={c.amber.light} fillOpacity="0.55" />

    {/* Agent core icon */}
    <circle cx="800" cy="400" r="20" fill={c.amber.light} fillOpacity="0.8" />

    {/* Floating elements */}
    <circle cx="200" cy="150" r="5" fill={c.amber.base} fillOpacity="0.4" />
    <circle cx="1400" cy="120" r="4" fill={c.orange.base} fillOpacity="0.4" />
    <circle cx="1500" cy="800" r="6" fill={c.amber.base} fillOpacity="0.35" />
  </svg>
);

export const MobileDevSVG = ({ c }) => (
  <svg viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <defs>
      <linearGradient id="mob-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={c.pink.base} stopOpacity="0.08" />
        <stop offset="100%" stopColor={c.purple.base} stopOpacity="0.06" />
      </linearGradient>
    </defs>
    <rect width="1600" height="900" fill="url(#mob-bg)" />
    
    {/* Phone frame - left */}
    <rect x="500" y="150" width="200" height="400" rx="24" fill={c.pink.base} fillOpacity="0.12" stroke={c.pink.base} strokeOpacity="0.5" strokeWidth="2.5" />
    <rect x="500" y="150" width="200" height="50" rx="24" fill={c.pink.base} fillOpacity="0.2" />
    <rect x="580" y="170" width="40" height="8" rx="4" fill={c.pink.base} fillOpacity="0.55" />
    
    {/* Phone frame - right */}
    <rect x="900" y="150" width="200" height="400" rx="24" fill={c.purple.base} fillOpacity="0.12" stroke={c.purple.base} strokeOpacity="0.5" strokeWidth="2.5" />
    <rect x="900" y="150" width="200" height="50" rx="24" fill={c.purple.base} fillOpacity="0.2" />
    <rect x="980" y="170" width="40" height="8" rx="4" fill={c.purple.base} fillOpacity="0.55" />

    {/* Content blocks - left phone */}
    <rect x="520" y="220" width="160" height="60" rx="8" fill={c.pink.light} fillOpacity="0.4" />
    <rect x="520" y="290" width="160" height="40" rx="8" fill={c.pink.light} fillOpacity="0.3" />
    <rect x="520" y="340" width="120" height="40" rx="8" fill={c.pink.base} fillOpacity="0.45" />
    <rect x="520" y="390" width="160" height="40" rx="8" fill={c.pink.light} fillOpacity="0.3" />
    <rect x="520" y="440" width="100" height="40" rx="8" fill={c.pink.light} fillOpacity="0.4" />

    {/* Content blocks - right phone */}
    <rect x="920" y="220" width="160" height="60" rx="8" fill={c.purple.light} fillOpacity="0.4" />
    <rect x="920" y="290" width="160" height="40" rx="8" fill={c.purple.light} fillOpacity="0.3" />
    <rect x="920" y="340" width="120" height="40" rx="8" fill={c.purple.base} fillOpacity="0.45" />
    <rect x="920" y="390" width="160" height="40" rx="8" fill={c.purple.light} fillOpacity="0.3" />
    <rect x="920" y="440" width="100" height="40" rx="8" fill={c.purple.light} fillOpacity="0.4" />

    {/* Sync arrow */}
    <g opacity="0.6">
      <path d="M720 350L780 350" stroke={c.pink.base} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M770 340L780 350L770 360" stroke={c.pink.base} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M880 350L820 350" stroke={c.purple.base} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M830 340L820 350L830 360" stroke={c.purple.base} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Cross-platform badge */}
    <rect x="700" y="600" width="200" height="60" rx="30" fill={c.pink.base} fillOpacity="0.2" stroke={c.pink.base} strokeOpacity="0.45" strokeWidth="2" />
    <circle cx="760" cy="630" r="12" fill={c.pink.light} fillOpacity="0.75" />
    <circle cx="840" cy="630" r="12" fill={c.purple.light} fillOpacity="0.75" />

    {/* Decorative elements */}
    <circle cx="300" cy="200" r="5" fill={c.pink.base} fillOpacity="0.4" />
    <circle cx="1300" cy="150" r="4" fill={c.purple.base} fillOpacity="0.4" />
    <circle cx="1400" cy="750" r="6" fill={c.pink.base} fillOpacity="0.35" />
  </svg>
);

export const SaaSArchitectureSVG = ({ c }) => (
  <svg viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <defs>
      <linearGradient id="saas-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={c.purple.base} stopOpacity="0.08" />
        <stop offset="100%" stopColor={c.blue.base} stopOpacity="0.06" />
      </linearGradient>
    </defs>
    <rect width="1600" height="900" fill="url(#saas-bg)" />
    
    {/* Multi-tenant boxes */}
    <rect x="200" y="200" width="300" height="200" rx="12" fill={c.purple.base} fillOpacity="0.12" stroke={c.purple.base} strokeOpacity="0.45" strokeWidth="2" />
    <rect x="200" y="450" width="300" height="200" rx="12" fill={c.purple.base} fillOpacity="0.12" stroke={c.purple.base} strokeOpacity="0.45" strokeWidth="2" />
    <rect x="200" y="700" width="300" height="150" rx="12" fill={c.purple.base} fillOpacity="0.12" stroke={c.purple.base} strokeOpacity="0.45" strokeWidth="2" />

    {/* Tenant labels */}
    <rect x="220" y="220" width="80" height="20" rx="10" fill={c.purple.light} fillOpacity="0.55" />
    <rect x="220" y="470" width="80" height="20" rx="10" fill={c.purple.light} fillOpacity="0.55" />
    <rect x="220" y="720" width="80" height="20" rx="10" fill={c.purple.light} fillOpacity="0.55" />

    {/* Tenant content */}
    <rect x="220" y="260" width="120" height="8" rx="4" fill={c.purple.light} fillOpacity="0.4" />
    <rect x="220" y="280" width="100" height="8" rx="4" fill={c.purple.light} fillOpacity="0.3" />
    <rect x="220" y="300" width="140" height="8" rx="4" fill={c.purple.light} fillOpacity="0.4" />
    
    <rect x="220" y="510" width="120" height="8" rx="4" fill={c.purple.light} fillOpacity="0.4" />
    <rect x="220" y="530" width="100" height="8" rx="4" fill={c.purple.light} fillOpacity="0.3" />
    <rect x="220" y="550" width="140" height="8" rx="4" fill={c.purple.light} fillOpacity="0.4" />

    {/* API Gateway */}
    <rect x="600" y="350" width="200" height="200" rx="16" fill={c.blue.base} fillOpacity="0.16" stroke={c.blue.base} strokeOpacity="0.5" strokeWidth="2.5" />
    <circle cx="700" cy="450" r="30" fill={c.blue.light} fillOpacity="0.4" />

    {/* Connection lines to API */}
    <g opacity="0.35" stroke={c.purple.base} strokeWidth="2">
      <line x1="500" y1="300" x2="600" y2="400" />
      <line x1="500" y1="300" x2="600" y2="500" />
      <line x1="500" y1="550" x2="600" y2="450" />
      <line x1="500" y1="550" x2="600" y2="500" />
      <line x1="500" y1="775" x2="600" y2="500" />
      <line x1="500" y1="775" x2="600" y2="550" />
    </g>

    {/* Services */}
    <rect x="900" y="250" width="180" height="120" rx="12" fill={c.cyan.base} fillOpacity="0.16" stroke={c.cyan.base} strokeOpacity="0.45" strokeWidth="2" />
    <rect x="900" y="400" width="180" height="120" rx="12" fill={c.cyan.base} fillOpacity="0.16" stroke={c.cyan.base} strokeOpacity="0.45" strokeWidth="2" />
    <rect x="900" y="550" width="180" height="120" rx="12" fill={c.cyan.base} fillOpacity="0.16" stroke={c.cyan.base} strokeOpacity="0.45" strokeWidth="2" />

    {/* Connection to services */}
    <g opacity="0.35" stroke={c.blue.base} strokeWidth="2">
      <line x1="800" y1="425" x2="900" y2="310" />
      <line x1="800" y1="450" x2="900" y2="460" />
      <line x1="800" y1="475" x2="900" y2="610" />
    </g>

    {/* Database */}
    <ellipse cx="1250" cy="400" rx="80" ry="40" fill={c.green.base} fillOpacity="0.18" stroke={c.green.base} strokeOpacity="0.45" strokeWidth="2" />
    <ellipse cx="1250" cy="380" rx="80" ry="40" fill={c.green.base} fillOpacity="0.1" stroke={c.green.base} strokeOpacity="0.3" strokeWidth="1.5" />

    {/* Connection to database */}
    <g opacity="0.35" stroke={c.green.base} strokeWidth="2">
      <line x1="1080" y1="310" x2="1170" y2="380" />
      <line x1="1080" y1="460" x2="1170" y2="400" />
      <line x1="1080" y1="610" x2="1170" y2="420" />
    </g>

    {/* Floating elements */}
    <circle cx="150" cy="150" r="5" fill={c.purple.base} fillOpacity="0.4" />
    <circle cx="1450" cy="120" r="4" fill={c.blue.base} fillOpacity="0.4" />
    <circle cx="1500" cy="800" r="6" fill={c.green.base} fillOpacity="0.35" />
  </svg>
);

export const UIUXDesignSVG = ({ c }) => (
  <svg viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <defs>
      <linearGradient id="ui-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={c.green.base} stopOpacity="0.08" />
        <stop offset="100%" stopColor={c.cyan.base} stopOpacity="0.06" />
      </linearGradient>
    </defs>
    <rect width="1600" height="900" fill="url(#ui-bg)" />
    
    {/* Browser window */}
    <rect x="300" y="150" width="1000" height="600" rx="16" fill={c.green.base} fillOpacity="0.12" stroke={c.green.base} strokeOpacity="0.45" strokeWidth="2.5" />
    <rect x="300" y="150" width="1000" height="50" rx="16" fill={c.green.base} fillOpacity="0.2" />
    
    {/* Browser dots */}
    <circle cx="330" cy="175" r="8" fill={c.error.base} fillOpacity="0.8" />
    <circle cx="355" cy="175" r="8" fill={c.amber.base} fillOpacity="0.8" />
    <circle cx="380" cy="175" r="8" fill={c.green.base} fillOpacity="0.8" />
    
    {/* URL bar */}
    <rect x="420" y="165" width="300" height="20" rx="10" fill={c.green.base} fillOpacity="0.15" stroke={c.green.base} strokeOpacity="0.35" strokeWidth="1.5" />

    {/* Sidebar */}
    <rect x="300" y="200" width="200" height="550" fill={c.green.base} fillOpacity="0.08" />
    <rect x="320" y="230" width="120" height="12" rx="6" fill={c.green.light} fillOpacity="0.55" />
    <rect x="320" y="260" width="100" height="12" rx="6" fill={c.green.light} fillOpacity="0.4" />
    <rect x="320" y="290" width="140" height="12" rx="6" fill={c.green.light} fillOpacity="0.5" />
    <rect x="320" y="320" width="80" height="12" rx="6" fill={c.green.light} fillOpacity="0.4" />
    <rect x="320" y="350" width="110" height="12" rx="6" fill={c.green.light} fillOpacity="0.55" />

    {/* Main content area */}
    <rect x="520" y="230" width="760" height="80" rx="12" fill={c.green.light} fillOpacity="0.3" />
    <rect x="540" y="250" width="200" height="16" rx="8" fill={c.green.base} fillOpacity="0.5" />
    <rect x="540" y="280" width="300" height="10" rx="5" fill={c.green.light} fillOpacity="0.4" />

    {/* Grid cards */}
    <rect x="520" y="340" width="240" height="180" rx="12" fill={c.green.base} fillOpacity="0.15" stroke={c.green.base} strokeOpacity="0.35" strokeWidth="1.5" />
    <rect x="540" y="360" width="200" height="60" rx="8" fill={c.green.light} fillOpacity="0.3" />
    <rect x="540" y="430" width="160" height="12" rx="6" fill={c.green.light} fillOpacity="0.5" />
    <rect x="540" y="450" width="120" height="12" rx="6" fill={c.green.light} fillOpacity="0.4" />
    <rect x="540" y="470" width="80" height="24" rx="12" fill={c.green.base} fillOpacity="0.55" />

    <rect x="780" y="340" width="240" height="180" rx="12" fill={c.green.base} fillOpacity="0.15" stroke={c.green.base} strokeOpacity="0.35" strokeWidth="1.5" />
    <rect x="800" y="360" width="200" height="60" rx="8" fill={c.green.light} fillOpacity="0.3" />
    <rect x="800" y="430" width="160" height="12" rx="6" fill={c.green.light} fillOpacity="0.5" />
    <rect x="800" y="450" width="120" height="12" rx="6" fill={c.green.light} fillOpacity="0.4" />
    <rect x="800" y="470" width="80" height="24" rx="12" fill={c.green.base} fillOpacity="0.55" />

    <rect x="1040" y="340" width="240" height="180" rx="12" fill={c.green.base} fillOpacity="0.15" stroke={c.green.base} strokeOpacity="0.35" strokeWidth="1.5" />
    <rect x="1060" y="360" width="200" height="60" rx="8" fill={c.green.light} fillOpacity="0.3" />
    <rect x="1060" y="430" width="160" height="12" rx="6" fill={c.green.light} fillOpacity="0.5" />
    <rect x="1060" y="450" width="120" height="12" rx="6" fill={c.green.light} fillOpacity="0.4" />
    <rect x="1060" y="470" width="80" height="24" rx="12" fill={c.green.base} fillOpacity="0.55" />

    {/* Color palette */}
    <circle cx="1400" cy="250" r="25" fill={c.green.base} fillOpacity="0.6" />
    <circle cx="1400" cy="310" r="25" fill={c.blue.base} fillOpacity="0.6" />
    <circle cx="1400" cy="370" r="25" fill={c.purple.base} fillOpacity="0.6" />
    <circle cx="1400" cy="430" r="25" fill={c.pink.base} fillOpacity="0.6" />

    {/* Floating elements */}
    <circle cx="200" cy="200" r="5" fill={c.green.base} fillOpacity="0.4" />
    <circle cx="1500" cy="750" r="6" fill={c.cyan.base} fillOpacity="0.35" />
  </svg>
);

export const DataAnalyticsSVG = ({ c }) => (
  <svg viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <defs>
      <linearGradient id="data-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={c.orange.base} stopOpacity="0.08" />
        <stop offset="100%" stopColor={c.amber.base} stopOpacity="0.06" />
      </linearGradient>
    </defs>
    <rect width="1600" height="900" fill="url(#data-bg)" />
    
    {/* Dashboard frame */}
    <rect x="200" y="100" width="1200" height="700" rx="16" fill={c.orange.base} fillOpacity="0.08" stroke={c.orange.base} strokeOpacity="0.35" strokeWidth="2.5" />
    
    {/* Top metrics */}
    <rect x="240" y="140" width="280" height="120" rx="12" fill={c.orange.base} fillOpacity="0.16" stroke={c.orange.base} strokeOpacity="0.45" strokeWidth="2" />
    <rect x="540" y="140" width="280" height="120" rx="12" fill={c.orange.base} fillOpacity="0.16" stroke={c.orange.base} strokeOpacity="0.45" strokeWidth="2" />
    <rect x="840" y="140" width="280" height="120" rx="12" fill={c.orange.base} fillOpacity="0.16" stroke={c.orange.base} strokeOpacity="0.45" strokeWidth="2" />
    <rect x="1140" y="140" width="220" height="120" rx="12" fill={c.orange.base} fillOpacity="0.16" stroke={c.orange.base} strokeOpacity="0.45" strokeWidth="2" />

    {/* Metric values */}
    <rect x="260" y="170" width="100" height="24" rx="12" fill={c.orange.light} fillOpacity="0.7" />
    <rect x="260" y="210" width="140" height="10" rx="5" fill={c.orange.light} fillOpacity="0.4" />
    <rect x="260" y="230" width="100" height="10" rx="5" fill={c.orange.light} fillOpacity="0.3" />
    
    <rect x="560" y="170" width="100" height="24" rx="12" fill={c.orange.light} fillOpacity="0.7" />
    <rect x="560" y="210" width="140" height="10" rx="5" fill={c.orange.light} fillOpacity="0.4" />
    <rect x="560" y="230" width="100" height="10" rx="5" fill={c.orange.light} fillOpacity="0.3" />
    
    <rect x="860" y="170" width="100" height="24" rx="12" fill={c.orange.light} fillOpacity="0.7" />
    <rect x="860" y="210" width="140" height="10" rx="5" fill={c.orange.light} fillOpacity="0.4" />
    <rect x="860" y="230" width="100" height="10" rx="5" fill={c.orange.light} fillOpacity="0.3" />
    
    <rect x="1160" y="170" width="80" height="24" rx="12" fill={c.orange.light} fillOpacity="0.7" />
    <rect x="1160" y="210" width="120" height="10" rx="5" fill={c.orange.light} fillOpacity="0.4" />

    {/* Main chart area */}
    <rect x="240" y="290" width="680" height="350" rx="12" fill={c.orange.base} fillOpacity="0.1" stroke={c.orange.base} strokeOpacity="0.35" strokeWidth="2" />
    
    {/* Chart bars */}
    <rect x="280" y="500" width="40" height="100" rx="4" fill={c.orange.base} fillOpacity="0.65" />
    <rect x="340" y="450" width="40" height="150" rx="4" fill={c.orange.light} fillOpacity="0.75" />
    <rect x="400" y="400" width="40" height="200" rx="4" fill={c.orange.base} fillOpacity="0.85" />
    <rect x="460" y="350" width="40" height="250" rx="4" fill={c.orange.light} fillOpacity="0.9" />
    <rect x="520" y="380" width="40" height="220" rx="4" fill={c.orange.base} fillOpacity="0.75" />
    <rect x="580" y="420" width="40" height="180" rx="4" fill={c.orange.light} fillOpacity="0.65" />
    <rect x="640" y="480" width="40" height="120" rx="4" fill={c.orange.base} fillOpacity="0.6" />
    <rect x="700" y="440" width="40" height="160" rx="4" fill={c.orange.light} fillOpacity="0.7" />
    <rect x="760" y="380" width="40" height="220" rx="4" fill={c.orange.base} fillOpacity="0.8" />
    <rect x="820" y="350" width="40" height="250" rx="4" fill={c.orange.light} fillOpacity="0.85" />

    {/* Side panel */}
    <rect x="940" y="290" width="400" height="350" rx="12" fill={c.orange.base} fillOpacity="0.1" stroke={c.orange.base} strokeOpacity="0.35" strokeWidth="2" />
    
    {/* Pie chart */}
    <circle cx="1140" cy="420" r="80" fill="none" stroke={c.orange.base} strokeOpacity="0.55" strokeWidth="20" />
    <circle cx="1140" cy="420" r="80" fill="none" stroke={c.orange.light} strokeOpacity="0.75" strokeWidth="20" strokeDasharray="150 350" />
    <circle cx="1140" cy="420" r="80" fill="none" stroke={c.amber.base} strokeOpacity="0.7" strokeWidth="20" strokeDasharray="100 400" strokeDashoffset="-150" />

    {/* Legend */}
    <circle cx="980" cy="540" r="8" fill={c.orange.base} fillOpacity="0.8" />
    <rect x="996" y="536" width="80" height="8" rx="4" fill={c.orange.light} fillOpacity="0.55" />
    <circle cx="980" cy="565" r="8" fill={c.orange.light} fillOpacity="0.8" />
    <rect x="996" y="561" width="60" height="8" rx="4" fill={c.orange.light} fillOpacity="0.55" />
    <circle cx="980" cy="590" r="8" fill={c.amber.base} fillOpacity="0.8" />
    <rect x="996" y="586" width="70" height="8" rx="4" fill={c.orange.light} fillOpacity="0.55" />

    {/* Bottom stats */}
    <rect x="240" y="660" width="1100" height="100" rx="12" fill={c.orange.base} fillOpacity="0.1" stroke={c.orange.base} strokeOpacity="0.35" strokeWidth="2" />
    <rect x="280" y="690" width="150" height="12" rx="6" fill={c.orange.light} fillOpacity="0.55" />
    <rect x="280" y="710" width="200" height="8" rx="4" fill={c.orange.light} fillOpacity="0.4" />
    <rect x="500" y="690" width="150" height="12" rx="6" fill={c.orange.light} fillOpacity="0.55" />
    <rect x="500" y="710" width="200" height="8" rx="4" fill={c.orange.light} fillOpacity="0.4" />
    <rect x="720" y="690" width="150" height="12" rx="6" fill={c.orange.light} fillOpacity="0.55" />
    <rect x="720" y="710" width="200" height="8" rx="4" fill={c.orange.light} fillOpacity="0.4" />

    {/* Floating elements */}
    <circle cx="150" cy="150" r="5" fill={c.orange.base} fillOpacity="0.4" />
    <circle cx="1450" cy="750" r="6" fill={c.amber.base} fillOpacity="0.35" />
  </svg>
);

export const CyberSecuritySVG = ({ c }) => (
  <svg viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <defs>
      <linearGradient id="sec-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={c.error.base} stopOpacity="0.08" />
        <stop offset="100%" stopColor={c.purple.base} stopOpacity="0.06" />
      </linearGradient>
      <filter id="sec-glow">
        <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
      </filter>
    </defs>
    <rect width="1600" height="900" fill="url(#sec-bg)" />
    
    {/* Shield */}
    <path d="M800 150L1100 250V450C1100 600 800 750 800 750C800 750 500 600 500 450V250L800 150Z" 
      fill={c.error.base} fillOpacity="0.12" stroke={c.error.base} strokeOpacity="0.5" strokeWidth="2.5" />
    
    {/* Inner shield */}
    <path d="M800 220L1020 300V440C1020 550 800 670 800 670C800 670 580 550 580 440V300L800 220Z" 
      fill={c.error.base} fillOpacity="0.08" stroke={c.error.base} strokeOpacity="0.35" strokeWidth="2" />

    {/* Lock icon */}
    <rect x="750" y="400" width="100" height="80" rx="12" fill={c.error.base} fillOpacity="0.3" stroke={c.error.base} strokeOpacity="0.6" strokeWidth="2" />
    <circle cx="800" cy="430" r="15" fill={c.error.light} fillOpacity="0.7" />
    <rect x="796" y="445" width="8" height="20" rx="4" fill={c.error.light} fillOpacity="0.7" />
    <circle cx="800" cy="430" r="6" fill={c.error.lighter} fillOpacity="0.9" />

    {/* Security layers */}
    <g opacity="0.4" stroke={c.error.base} strokeWidth="1.5">
      <ellipse cx="800" cy="450" rx="250" ry="200" fill="none" />
      <ellipse cx="800" cy="450" rx="350" ry="280" fill="none" />
      <ellipse cx="800" cy="450" rx="450" ry="350" fill="none" />
    </g>

    {/* Data flow nodes */}
    <circle cx="300" cy="300" r="30" fill={c.purple.base} fillOpacity="0.22" stroke={c.purple.base} strokeOpacity="0.45" strokeWidth="2" />
    <circle cx="300" cy="500" r="30" fill={c.purple.base} fillOpacity="0.22" stroke={c.purple.base} strokeOpacity="0.45" strokeWidth="2" />
    <circle cx="300" cy="700" r="30" fill={c.purple.base} fillOpacity="0.22" stroke={c.purple.base} strokeOpacity="0.45" strokeWidth="2" />

    <circle cx="1300" cy="300" r="30" fill={c.blue.base} fillOpacity="0.22" stroke={c.blue.base} strokeOpacity="0.45" strokeWidth="2" />
    <circle cx="1300" cy="500" r="30" fill={c.blue.base} fillOpacity="0.22" stroke={c.blue.base} strokeOpacity="0.45" strokeWidth="2" />
    <circle cx="1300" cy="700" r="30" fill={c.blue.base} fillOpacity="0.22" stroke={c.blue.base} strokeOpacity="0.45" strokeWidth="2" />

    {/* Connection lines */}
    <g opacity="0.3" stroke={c.error.base} strokeWidth="1.5" strokeDasharray="4 4">
      <line x1="330" y1="300" x2="550" y2="450" />
      <line x1="330" y1="500" x2="550" y2="450" />
      <line x1="330" y1="700" x2="550" y2="550" />
      <line x1="1050" y1="450" x2="1270" y2="300" />
      <line x1="1050" y1="450" x2="1270" y2="500" />
      <line x1="1050" y1="550" x2="1270" y2="700" />
    </g>

    {/* Node icons */}
    <circle cx="300" cy="300" r="10" fill={c.purple.light} fillOpacity="0.75" />
    <circle cx="300" cy="500" r="10" fill={c.purple.light} fillOpacity="0.75" />
    <circle cx="300" cy="700" r="10" fill={c.purple.light} fillOpacity="0.75" />
    <circle cx="1300" cy="300" r="10" fill={c.blue.light} fillOpacity="0.75" />
    <circle cx="1300" cy="500" r="10" fill={c.blue.light} fillOpacity="0.75" />
    <circle cx="1300" cy="700" r="10" fill={c.blue.light} fillOpacity="0.75" />

    {/* Warning indicators */}
    <circle cx="250" cy="150" r="15" fill={c.error.base} fillOpacity="0.45" />
    <circle cx="1350" cy="150" r="15" fill={c.amber.base} fillOpacity="0.45" />

    {/* Floating elements */}
    <circle cx="150" cy="450" r="5" fill={c.error.base} fillOpacity="0.4" />
    <circle cx="1450" cy="450" r="5" fill={c.blue.base} fillOpacity="0.4" />
    <circle cx="800" cy="850" r="6" fill={c.purple.base} fillOpacity="0.35" />
  </svg>
);

export const visualMap = {
  'building-scalable-microservices': MicroservicesSVG,
  'future-of-ai-development-tools': AIToolsSVG,
  'deploying-cloud-native-applications': CloudNativeSVG,
  'ai-agents-business-automation': AIAgentsSVG,
  'modern-mobile-app-development-trends': MobileDevSVG,
  'building-scalable-saas-applications': SaaSArchitectureSVG,
  'ui-ux-design-principles': UIUXDesignSVG,
  'data-driven-decision-making': DataAnalyticsSVG,
  'cybersecurity-best-practices': CyberSecuritySVG,
};

export const CodeEditorSVG = ({ c }) => (
  <svg viewBox="0 0 1600 900" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
    <defs>
      <linearGradient id="code-fb" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={c.purple.base} stopOpacity="0.08" />
        <stop offset="100%" stopColor={c.blue.base} stopOpacity="0.06" />
      </linearGradient>
    </defs>
    <rect width="1600" height="900" fill="url(#code-fb)" />
    <rect x="300" y="150" width="1000" height="600" rx="16" fill={c.purple.base} fillOpacity="0.12" stroke={c.purple.base} strokeOpacity="0.45" strokeWidth="2.5" />
    <rect x="300" y="150" width="1000" height="50" rx="16" fill={c.purple.base} fillOpacity="0.2" />
    <circle cx="330" cy="175" r="8" fill={c.error.base} fillOpacity="0.8" />
    <circle cx="355" cy="175" r="8" fill={c.amber.base} fillOpacity="0.8" />
    <circle cx="380" cy="175" r="8" fill={c.green.base} fillOpacity="0.8" />
    <rect x="340" y="230" width="200" height="10" rx="5" fill={c.purple.light} fillOpacity="0.55" />
    <rect x="340" y="255" width="300" height="10" rx="5" fill={c.purple.light} fillOpacity="0.4" />
    <rect x="340" y="320" width="250" height="10" rx="5" fill={c.blue.light} fillOpacity="0.55" />
    <rect x="340" y="345" width="180" height="10" rx="5" fill={c.blue.light} fillOpacity="0.4" />
    <rect x="340" y="410" width="350" height="10" rx="5" fill={c.green.light} fillOpacity="0.55" />
    <rect x="340" y="435" width="280" height="10" rx="5" fill={c.green.light} fillOpacity="0.4" />
  </svg>
);