import {
  FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaAngular,
  FaMicrosoft, FaRobot, FaMicrochip, FaVuejs, FaCogs,
} from 'react-icons/fa';
import {
  SiNextdotjs, SiTypescript, SiKubernetes, SiTensorflow, SiPytorch,
  SiFlutter, SiSwift, SiKotlin, SiNestjs, SiDjango, SiFastapi,
  SiDotnet, SiSpringboot, SiCypress, SiSelenium, SiTerraform,
  SiLangchain, SiLanggraph, SiCrewai, SiHuggingface, SiAppium,
  SiGithubactions, SiApachejmeter,
} from 'react-icons/si';

export const techCategories = [
  {
    label: 'AI Solutions',
    color: 'accent.pink',
    technologies: [
      { name: 'LangChain', icon: SiLangchain },
      { name: 'LangGraph', icon: SiLanggraph },
      { name: 'LlamaIndex', icon: FaMicrochip },
      { name: 'CrewAI', icon: SiCrewai },
      { name: 'AutoGen', icon: FaRobot },
      { name: 'Hugging Face', icon: SiHuggingface },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'PyTorch', icon: SiPytorch },
    ],
  },
  {
    label: 'Front End',
    color: 'brand.blue',
    technologies: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Angular', icon: FaAngular },
      { name: 'Vue.js', icon: FaVuejs },
      { name: 'TypeScript', icon: SiTypescript },
    ],
  },
  {
    label: 'Back End',
    color: 'accent.green',
    technologies: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'NestJS', icon: SiNestjs },
      { name: 'Python', icon: FaPython },
      { name: 'Django', icon: SiDjango },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Spring Boot', icon: SiSpringboot },
      { name: '.NET', icon: SiDotnet },
    ],
  },
  {
    label: 'Mobile',
    color: 'brand.purple',
    technologies: [
      { name: 'Flutter', icon: SiFlutter },
      { name: 'React Native', icon: FaReact },
      { name: 'Swift', icon: SiSwift },
      { name: 'Kotlin', icon: SiKotlin },
    ],
  },
  {
    label: 'QA & Automation',
    color: 'accent.amber',
    technologies: [
      { name: 'Playwright', icon: FaCogs },
      { name: 'Cypress', icon: SiCypress },
      { name: 'Selenium', icon: SiSelenium },
      { name: 'Appium', icon: SiAppium },
      { name: 'JMeter', icon: SiApachejmeter },
    ],
  },
  {
    label: 'DevOps & Cloud',
    color: 'accent.cyan',
    technologies: [
      { name: 'AWS', icon: FaAws },
      { name: 'Azure', icon: FaMicrosoft },
      { name: 'Docker', icon: FaDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
      { name: 'Terraform', icon: SiTerraform },
      { name: 'GitHub Actions', icon: SiGithubactions },
    ],
  },
];
