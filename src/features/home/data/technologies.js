import { FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaVuejs } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiGraphql, SiMongodb, SiPostgresql, SiRedis, SiKubernetes, SiTensorflow, SiPytorch, SiFigma, SiSass, SiJavascript, SiNodedotjs, SiDjango, SiFlask, SiFlutter, SiSwift, SiKotlin } from 'react-icons/si';

export const techCategories = [
  {
    label: 'Frontend',
    color: 'brand.blue',
    technologies: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Vue.js', icon: FaVuejs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Sass', icon: SiSass },
    ],
  },
  {
    label: 'Backend',
    color: 'accent.green',
    technologies: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Python', icon: FaPython },
      { name: 'Django', icon: SiDjango },
      { name: 'Flask', icon: SiFlask },
      { name: 'GraphQL', icon: SiGraphql },
      { name: 'Express', icon: SiNodedotjs },
    ],
  },
  {
    label: 'Mobile',
    color: 'brand.purple',
    technologies: [
      { name: 'React Native', icon: FaReact },
      { name: 'Flutter', icon: SiFlutter },
      { name: 'Swift', icon: SiSwift },
      { name: 'Kotlin', icon: SiKotlin },
    ],
  },
  {
    label: 'Databases',
    color: 'accent.amber',
    technologies: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Redis', icon: SiRedis },
    ],
  },
  {
    label: 'DevOps & Cloud',
    color: 'accent.cyan',
    technologies: [
      { name: 'AWS', icon: FaAws },
      { name: 'Docker', icon: FaDocker },
      { name: 'Kubernetes', icon: SiKubernetes },
    ],
  },
  {
    label: 'AI & Design',
    color: 'accent.pink',
    technologies: [
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'Figma', icon: SiFigma },
    ],
  },
];
