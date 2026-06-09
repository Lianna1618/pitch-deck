import type { SkillCategory, Experience, Project, NavItem, Stat } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const stats: Stat[] = [
  { label: 'Years Experience', value: '5+', icon: 'calendar' },
  { label: 'Tested Features', value: '100+', icon: 'check-circle' },
  { label: 'Web3 & Trading', value: 'Skilled', icon: 'shield' },
  { label: 'API & SQL Testing', value: 'Solid', icon: 'database' },
];

export const aboutHighlights = [
  'Manual Testing',
  'API Testing',
  'SQL',
  'Web3',
  'Trading Platforms',
  'Agile/Scrum',
  'Mobile Testing',
  'Cross Browser Testing',
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Testing',
    skills: ['Manual Testing', 'Functional Testing', 'Regression Testing', 'Smoke Testing', 'UAT'],
  },
  {
    title: 'Tools',
    skills: ['Postman', 'Swagger', 'Bruno', 'JMeter','Jira', 'Azure DevOps', 'ClickUp', 'Trello', 'Git'],
  },
  {
    title: 'Web3',
    skills: ['Smart Contracts', 'IPFS', 'DEX', 'DApps', 'Blockchain'],
  },
  {
    title: 'Automation',
    skills: ['Python', 'Selenium', 'Cypress', 'Pytest'],
  },
  {
    title: 'Databases',
    skills: ['SQL', 'PostgreSQL', 'pgAdmin', 'Navicat'],
  },
  // {
  //   title: 'Performance',
  //   skills: ['JMeter'],
  // },
];

export const experiences: Experience[] = [
    {
    company: 'Blockstars',
    role: 'QA Engineer',
    period: 'May 2023 - Present',
    description: 'Specialized in Web3 and blockchain application testing.',
    responsibilities: [
      'Tested smart contracts and DApps on multiple blockchain networks',
      'Performed security audits and vulnerability assessments',
      'Developed test automation frameworks for Web3 applications',
      'Conducted cross-chain testing and integration verification',
    ],
    technologies: ['Blockchain', 'IPFS', 'MetaMask', 'Etherscan', 'DEX', 'ERC-20', 'ERC-721', 'Bridges', 'DAO', 'Staking', 'NFT Marketplace'],
  },
  {
    company: 'Armbrok',
    role: 'Senior QA Engineer',
    period: 'Nov 2025 – April 2026',
    description: 'Leading QA efforts for trading and financial platforms.',
    responsibilities: [
      'Performed functional, regression, API, and integration testing',
      'Validated trading workflows and order execution processes',
      'Tested market data, quotations, and trading operations',
      'Collaborated with developers and business analysts on issue resolution',
      'Participated in release verification and production support',
    ],
    technologies: ['QUIK', 'QORT','Trading Orders', 'Time in Force', 'Stocks', 'Bonds' , 'Limit Orders','Market Orders', 'Stop Orders', 'AML', 'SAMSUB'],
  },
  {
    company: 'National Center of Educational Technologies',
    role: 'QA Engineer',
    period: 'Nov 2022 - May 2023',
    description: 'Quality assurance for educational technology platforms.',
    responsibilities: [
      'Executed functional and regression testing for e-learning platforms',
      'Performed cross-browser and mobile compatibility testing',
      'Documented test cases and tracked defects in Jira',
      'Collaborated with product team on requirements validation',
    ],
    technologies: ['Selenium', 'Jira', 'SQL', 'Postman', 'Git'],
  },
  {
    company: 'X-Soft',
    role: 'QA Engineer',
    period: 'Apr 2021 - Nov 2022',
    description: 'Delivered quality software solutions across multiple projects.',
    responsibilities: [
      'Conducted manual and automated testing for web applications',
      'Performed API testing and database validation',
      'Created and maintained test documentation',
      'Participated in Agile ceremonies and sprint planning',
    ],
    technologies: ['Selenium', 'Postman', 'SQL', 'Jira', 'Git'],
  },
  {
    company: 'MINNOVA',
    role: 'QA Engineer',
    period: 'Nov 2020 - Mar 2021',
    description: 'Quality assurance for mobile and web applications.',
    responsibilities: [
      'Tested mobile applications on iOS and Android platforms',
      'Executed UI/UX testing and usability assessments',
      'Performed functional and non-functional testing',
      'Reported and tracked bugs through resolution',
    ],
    technologies: ['Selenium', 'Jira', 'Postman', 'Git'],
  },
  {
    company: '5MATIK',
    role: 'Junior QA Engineer',
    period: 'May 2020 - Oct 2020',
    description: 'Started career in software quality assurance.',
    responsibilities: [
      'Executed manual test cases for web applications',
      'Learned and applied testing methodologies',
      'Documented bugs and collaborated with developers',
      'Participated in code reviews and team meetings',
    ],
    technologies: ['Jira', 'Postman', 'Git', 'SQL'],
  },
];

export const projects: Project[] = [
  // Mobile Apps
  {
    title: 'Mobile Banking App',
    description: 'Comprehensive testing of a fintech mobile banking application with biometric authentication, transaction flows, and real-time notifications.',
    responsibilities: [
      'Functional testing of core banking features',
      'Biometric authentication validation',
      'Transaction flow testing and verification',
      'Push notification testing across devices',
    ],
    technologies: ['Appium', 'Postman', 'Jira', 'TestFlight', 'ADB'],
    icon: 'smartphone',
    image: 'https://images.pexels.com/pexels/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'mobile',
  },
  {
    title: 'Crypto Wallet Mobile App',
    description: 'End-to-end testing of a multi-chain cryptocurrency wallet supporting token swaps, NFT management, and DeFi integrations.',
    responsibilities: [
      'Multi-chain wallet functionality testing',
      'Swap and bridge transaction validation',
      'NFT display and transfer testing',
      'Security and recovery flow testing',
    ],
    technologies: ['Cypress', 'MetaMask', 'TestRail', 'Firebase'],
    icon: 'wallet',
    image: 'https://images.pexels.com/pexels/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'mobile',
  },
  // Telegram Mini Apps
  {
    title: 'TG Mini App - NFT Marketplace',
    description: 'Quality assurance for a Telegram mini app NFT marketplace with in-app purchases and wallet connectivity.',
    responsibilities: [
      'Telegram WebApp API integration testing',
      'In-app purchase flow validation',
      'Wallet connection testing',
      'Cross-platform compatibility testing',
    ],
    technologies: ['Postman', 'Selenium', 'Jira', 'Telegram API'],
    icon: 'message-circle',
    image: 'https://images.pexels.com/pexels/7567802/pexels-photo-7567802.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'mini-app',
  },
  {
    title: 'TG Mini App - Trading Bot',
    description: 'Testing of a Telegram-based trading bot with real-time signals, portfolio tracking, and automated trading features.',
    responsibilities: [
      'Bot command testing and validation',
      'Real-time signal delivery verification',
      'Portfolio sync testing',
      'API integration testing',
    ],
    technologies: ['Python', 'Postman', 'JMeter', 'WebSocket'],
    icon: 'bot',
    image: 'https://images.pexels.com/pexels/8389441/pexels-photo-8389441.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'mini-app',
  },
  // Web Applications
  {
    title: 'Trading Platform Dashboard',
    description: 'Comprehensive testing of a professional trading platform with real-time charts, order execution, and portfolio management.',
    responsibilities: [
      'Chart and data visualization testing',
      'Order execution validation',
      'WebSocket real-time data testing',
      'Performance and load testing',
    ],
    technologies: ['Selenium', 'Postman', 'JMeter', 'WebSocket', 'SQL'],
    icon: 'trending-up',
    image: 'https://images.pexels.com/pexels/590056/pexels-photo-590056.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'web',
  },
  {
    title: 'Admin Dashboard & Analytics',
    description: 'Quality assurance for an enterprise admin dashboard with user management, analytics, and reporting features.',
    responsibilities: [
      'Complex dashboard UI testing',
      'Data accuracy validation',
      'User role and permission testing',
      'Report generation testing',
    ],
    technologies: ['Cypress', 'Postman', 'SQL', 'Grafana'],
    icon: 'layout-dashboard',
    image: 'https://images.pexels.com/pexels/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'web',
  },
  // Smart Contracts
  {
    title: 'DeFi Smart Contract Suite',
    description: 'Security and functionality testing for DeFi smart contracts including staking, yield farming, and liquidity pools.',
    responsibilities: [
      'Smart contract function testing',
      'Security vulnerability assessment',
      'Gas optimization verification',
      'Integration testing with frontend',
    ],
    technologies: ['Hardhat', 'Foundry', 'Slither', 'Mythril', 'Ethers.js'],
    icon: 'file-code',
    image: 'https://images.pexels.com/pexels/6772077/pexels-photo-6772077.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'smart-contract',
  },
  {
    title: 'NFT Collection Smart Contract',
    description: 'Comprehensive testing of ERC-721 smart contracts for NFT collections with minting, royalties, and marketplace integration.',
    responsibilities: [
      'Minting mechanism testing',
      'Royalty distribution validation',
      'Marketplace compatibility testing',
      'Upgradeability pattern testing',
    ],
    technologies: ['Hardhat', 'OpenZeppelin', 'Foundry', 'IPFS'],
    icon: 'gem',
    image: 'https://images.pexels.com/pexels/7567802/pexels-photo-7567802.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'smart-contract',
  },
];

export const contactInfo = {
  email: 'liannnaqa@gmail.com',
  phone: '+374 99 018082',
  linkedin: 'Lianna-Tavadyan',
  github: 'Lianna1618',
};
