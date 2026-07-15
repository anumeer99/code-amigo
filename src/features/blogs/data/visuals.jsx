export const NeuralNetworkSVG = ({ c }) => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 80, height: 80 }}>
    <circle cx="20" cy="30" r="6" fill={c.blue.base} fillOpacity="0.6" />
    <circle cx="20" cy="60" r="6" fill={c.blue.base} fillOpacity="0.6" />
    <circle cx="20" cy="90" r="6" fill={c.blue.base} fillOpacity="0.6" />
    <circle cx="60" cy="20" r="6" fill={c.blue.light} fillOpacity="0.8" />
    <circle cx="60" cy="50" r="6" fill={c.blue.light} fillOpacity="0.8" />
    <circle cx="60" cy="80" r="6" fill={c.blue.light} fillOpacity="0.8" />
    <circle cx="60" cy="110" r="6" fill={c.blue.light} fillOpacity="0.8" />
    <circle cx="100" cy="40" r="6" fill={c.blue.lighter} />
    <circle cx="100" cy="70" r="6" fill={c.blue.lighter} />
    <line x1="26" y1="30" x2="54" y2="20" stroke={c.blue.base} strokeOpacity="0.3" strokeWidth="1" />
    <line x1="26" y1="30" x2="54" y2="50" stroke={c.blue.base} strokeOpacity="0.3" strokeWidth="1" />
    <line x1="26" y1="60" x2="54" y2="50" stroke={c.blue.base} strokeOpacity="0.3" strokeWidth="1" />
    <line x1="26" y1="60" x2="54" y2="80" stroke={c.blue.base} strokeOpacity="0.3" strokeWidth="1" />
    <line x1="26" y1="90" x2="54" y2="80" stroke={c.blue.base} strokeOpacity="0.3" strokeWidth="1" />
    <line x1="26" y1="90" x2="54" y2="110" stroke={c.blue.base} strokeOpacity="0.3" strokeWidth="1" />
    <line x1="66" y1="20" x2="94" y2="40" stroke={c.blue.light} strokeOpacity="0.4" strokeWidth="1" />
    <line x1="66" y1="50" x2="94" y2="40" stroke={c.blue.light} strokeOpacity="0.4" strokeWidth="1" />
    <line x1="66" y1="50" x2="94" y2="70" stroke={c.blue.light} strokeOpacity="0.4" strokeWidth="1" />
    <line x1="66" y1="80" x2="94" y2="70" stroke={c.blue.light} strokeOpacity="0.4" strokeWidth="1" />
    <line x1="66" y1="110" x2="94" y2="70" stroke={c.blue.light} strokeOpacity="0.4" strokeWidth="1" />
  </svg>
);

export const CloudSVG = ({ c }) => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 80, height: 80 }}>
    <path d="M90 55C90 55 95 50 95 42C95 34 89 28 81 28C81 28 80 18 68 18C56 18 50 28 50 28C50 28 42 22 34 28C26 34 28 44 28 44C20 44 14 50 14 58C14 66 20 72 28 72H88C96 72 102 66 102 58C102 50 96 44 90 44" stroke={c.cyan.base} strokeOpacity="0.5" strokeWidth="2" fill={c.cyan.base} fillOpacity="0.1" />
    <rect x="40" y="80" width="8" height="12" rx="1" fill={c.cyan.base} fillOpacity="0.4" />
    <rect x="56" y="80" width="8" height="12" rx="1" fill={c.cyan.base} fillOpacity="0.4" />
    <rect x="72" y="80" width="8" height="12" rx="1" fill={c.cyan.base} fillOpacity="0.4" />
    <circle cx="60" cy="50" r="8" fill={c.cyan.light} fillOpacity="0.3" />
    <path d="M56 50L59 53L64 47" stroke={c.cyan.light} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CodeEditorSVG = ({ c }) => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 80, height: 80 }}>
    <rect x="10" y="15" width="100" height="70" rx="8" fill={c.purple.base} fillOpacity="0.08" stroke={c.purple.base} strokeOpacity="0.3" strokeWidth="1.5" />
    <rect x="10" y="15" width="100" height="18" rx="8" fill={c.purple.base} fillOpacity="0.15" />
    <circle cx="22" cy="24" r="3" fill={c.error.base} fillOpacity="0.7" />
    <circle cx="32" cy="24" r="3" fill={c.amber.base} fillOpacity="0.7" />
    <circle cx="42" cy="24" r="3" fill={c.green.base} fillOpacity="0.7" />
    <rect x="20" y="42" width="30" height="3" rx="1.5" fill={c.purple.light} fillOpacity="0.5" />
    <rect x="20" y="50" width="50" height="3" rx="1.5" fill={c.purple.light} fillOpacity="0.3" />
    <rect x="20" y="58" width="40" height="3" rx="1.5" fill={c.purple.light} fillOpacity="0.4" />
    <rect x="20" y="66" width="60" height="3" rx="1.5" fill={c.purple.light} fillOpacity="0.3" />
    <rect x="20" y="74" width="25" height="3" rx="1.5" fill={c.purple.light} fillOpacity="0.5" />
  </svg>
);

export const AgentSVG = ({ c }) => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 80, height: 80 }}>
    <rect x="35" y="10" width="50" height="50" rx="10" fill={c.amber.base} fillOpacity="0.1" stroke={c.amber.base} strokeOpacity="0.3" strokeWidth="1.5" />
    <circle cx="60" cy="30" r="8" fill={c.amber.base} fillOpacity="0.3" />
    <rect x="56" y="26" width="8" height="8" rx="4" fill={c.amber.light} fillOpacity="0.6" />
    <path d="M52 30H68" stroke={c.amber.light} strokeOpacity="0.4" strokeWidth="1" />
    <path d="M60 22V18" stroke={c.amber.light} strokeOpacity="0.4" strokeWidth="1" />
    <path d="M60 42V46" stroke={c.amber.light} strokeOpacity="0.4" strokeWidth="1" />
    <circle cx="50" cy="68" r="6" fill={c.amber.base} fillOpacity="0.2" stroke={c.amber.base} strokeOpacity="0.3" strokeWidth="1" />
    <circle cx="70" cy="68" r="6" fill={c.amber.base} fillOpacity="0.2" stroke={c.amber.base} strokeOpacity="0.3" strokeWidth="1" />
    <circle cx="60" cy="80" r="6" fill={c.amber.base} fillOpacity="0.2" stroke={c.amber.base} strokeOpacity="0.3" strokeWidth="1" />
    <line x1="55" y1="56" x2="52" y2="64" stroke={c.amber.base} strokeOpacity="0.3" strokeWidth="1" />
    <line x1="65" y1="56" x2="68" y2="64" stroke={c.amber.base} strokeOpacity="0.3" strokeWidth="1" />
    <line x1="60" y1="56" x2="60" y2="74" stroke={c.amber.base} strokeOpacity="0.3" strokeWidth="1" />
  </svg>
);

export const MobileAppSVG = ({ c }) => (
  <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 70, height: 84 }}>
    <rect x="20" y="10" width="60" height="100" rx="10" fill={c.pink.base} fillOpacity="0.08" stroke={c.pink.base} strokeOpacity="0.3" strokeWidth="1.5" />
    <rect x="20" y="10" width="60" height="20" rx="10" fill={c.pink.base} fillOpacity="0.12" />
    <rect x="38" y="15" width="24" height="3" rx="1.5" fill={c.pink.base} fillOpacity="0.3" />
    <rect x="26" y="38" width="48" height="8" rx="4" fill={c.pink.light} fillOpacity="0.3" />
    <rect x="26" y="50" width="48" height="8" rx="4" fill={c.pink.light} fillOpacity="0.2" />
    <rect x="26" y="62" width="48" height="8" rx="4" fill={c.pink.light} fillOpacity="0.3" />
    <rect x="26" y="74" width="30" height="8" rx="4" fill={c.pink.base} fillOpacity="0.4" />
    <circle cx="50" cy="100" r="4" fill={c.pink.base} fillOpacity="0.3" stroke={c.pink.base} strokeOpacity="0.3" strokeWidth="1" />
  </svg>
);

export const SaaSSVG = ({ c }) => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 80, height: 80 }}>
    <rect x="10" y="20" width="100" height="60" rx="8" fill={c.purple.mid} fillOpacity="0.08" stroke={c.purple.mid} strokeOpacity="0.3" strokeWidth="1.5" />
    <rect x="10" y="20" width="100" height="15" rx="8" fill={c.purple.mid} fillOpacity="0.12" />
    <rect x="16" y="24" width="8" height="8" rx="2" fill={c.purple.light} fillOpacity="0.4" />
    <rect x="28" y="24" width="8" height="8" rx="2" fill={c.purple.light} fillOpacity="0.3" />
    <rect x="40" y="24" width="8" height="8" rx="2" fill={c.purple.light} fillOpacity="0.2" />
    <rect x="16" y="42" width="20" height="6" rx="3" fill={c.purple.mid} fillOpacity="0.3" />
    <rect x="16" y="52" width="40" height="4" rx="2" fill={c.purple.mid} fillOpacity="0.15" />
    <rect x="16" y="60" width="35" height="4" rx="2" fill={c.purple.mid} fillOpacity="0.15" />
    <rect x="70" y="42" width="34" height="30" rx="4" fill={c.purple.mid} fillOpacity="0.1" stroke={c.purple.mid} strokeOpacity="0.2" strokeWidth="1" />
    <rect x="76" y="50" width="8" height="18" rx="2" fill={c.purple.light} fillOpacity="0.4" />
    <rect x="88" y="56" width="8" height="12" rx="2" fill={c.purple.light} fillOpacity="0.3" />
  </svg>
);

export const DesignSVG = ({ c }) => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 80, height: 80 }}>
    <circle cx="60" cy="50" r="35" fill={c.green.base} fillOpacity="0.06" stroke={c.green.base} strokeOpacity="0.2" strokeWidth="1.5" />
    <circle cx="60" cy="50" r="22" fill={c.green.base} fillOpacity="0.08" stroke={c.green.base} strokeOpacity="0.25" strokeWidth="1" />
    <circle cx="60" cy="50" r="10" fill={c.green.light} fillOpacity="0.4" />
    <path d="M60 28L64 38H56L60 28Z" fill={c.green.base} fillOpacity="0.5" />
    <path d="M60 72L56 62H64L60 72Z" fill={c.green.base} fillOpacity="0.5" />
    <path d="M38 50L48 46V54L38 50Z" fill={c.green.base} fillOpacity="0.5" />
    <path d="M82 50L72 54V46L82 50Z" fill={c.green.base} fillOpacity="0.5" />
    <circle cx="60" cy="50" r="4" fill={c.green.lighter} />
  </svg>
);

export const DataSVG = ({ c }) => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 80, height: 80 }}>
    <rect x="10" y="15" width="100" height="70" rx="8" fill={c.orange.base} fillOpacity="0.06" stroke={c.orange.base} strokeOpacity="0.2" strokeWidth="1.5" />
    <rect x="22" y="55" width="12" height="22" rx="3" fill={c.orange.base} fillOpacity="0.4" />
    <rect x="40" y="42" width="12" height="35" rx="3" fill={c.orange.light} fillOpacity="0.5" />
    <rect x="58" y="30" width="12" height="47" rx="3" fill={c.orange.base} fillOpacity="0.6" />
    <rect x="76" y="20" width="12" height="57" rx="3" fill={c.orange.light} fillOpacity="0.7" />
    <circle cx="28" cy="50" r="3" fill={c.orange.lighter} />
    <circle cx="46" cy="37" r="3" fill={c.orange.lighter} />
    <circle cx="64" cy="25" r="3" fill={c.orange.lighter} />
    <circle cx="82" cy="15" r="3" fill={c.orange.lighter} />
    <line x1="28" y1="50" x2="46" y2="37" stroke={c.orange.base} strokeOpacity="0.4" strokeWidth="1" />
    <line x1="46" y1="37" x2="64" y2="25" stroke={c.orange.base} strokeOpacity="0.4" strokeWidth="1" />
    <line x1="64" y1="25" x2="82" y2="15" stroke={c.orange.base} strokeOpacity="0.4" strokeWidth="1" />
  </svg>
);

export const SecuritySVG = ({ c }) => (
  <svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 80, height: 80 }}>
    <path d="M60 10L95 25V50C95 72 60 90 60 90C60 90 25 72 25 50V25L60 10Z" fill={c.error.base} fillOpacity="0.06" stroke={c.error.base} strokeOpacity="0.3" strokeWidth="1.5" />
    <rect x="50" y="38" width="20" height="24" rx="4" fill={c.error.base} fillOpacity="0.2" stroke={c.error.base} strokeOpacity="0.3" strokeWidth="1" />
    <circle cx="60" cy="48" r="4" fill={c.error.light} fillOpacity="0.6" />
    <rect x="58" y="52" width="4" height="8" rx="2" fill={c.error.light} fillOpacity="0.5" />
    <circle cx="60" cy="48" r="2" fill={c.error.lighter} />
  </svg>
);

export const visualMap = {
  'building-scalable-microservices': CodeEditorSVG,
  'future-of-ai-development-tools': NeuralNetworkSVG,
  'deploying-cloud-native-applications': CloudSVG,
  'ai-agents-business-automation': AgentSVG,
  'modern-mobile-app-development-trends': MobileAppSVG,
  'building-scalable-saas-applications': SaaSSVG,
  'ui-ux-design-principles': DesignSVG,
  'data-driven-decision-making': DataSVG,
  'cybersecurity-best-practices': SecuritySVG,
};
