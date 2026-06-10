import type { SkillCategory, Experience, Project, NavItem, Stat } from '../types';
import { Bug, Cpu, Database, Wrench, Box, BotMessageSquare} from 'lucide-react';


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
    icon: Bug
  },
  {
    title: 'Tools',
    skills: ['Postman', 'Swagger', 'Bruno', 'JMeter','Jira', 'Azure DevOps', 'ClickUp', 'Trello', 'Git'],
    icon: Wrench
  },
  {
    title: 'Web3',
    skills: ['Smart Contracts', 'IPFS', 'DEX', 'DApps', 'Blockchain'],
    icon: Box
  },
  {
    title: 'Automation',
    skills: ['Python', 'Selenium', 'Cypress', 'Pytest'],
    icon: Cpu
  },
  {
    title: 'Databases',
    skills: ['SQL', 'PostgreSQL', 'pgAdmin', 'Navicat'],
    icon: Database
  },
  {
    title: 'AI Tools',
    skills: ['ChatGPT' , 'Claude', 'Bolt', 'Prompt Engineering', 'Code Generation', 'Test Case Generation'],
    icon: BotMessageSquare
  }
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
    role: 'QA Engineer',
    period: 'Nov 2025 – April 2026',
    description: 'Leading QA efforts for trading and financial platforms.',
    responsibilities: [
      'Performed functional, regression, API, and integration testing',
      'Validated trading workflows and order execution processes',
      'Tested market data, quotations, and trading operations',
      'Collaborated with developers and business analysts on issue resolution',
      'Participated in release verification and production support',
    ],
    technologies: ['QUIK', 'QORT','Trading Orders', 'Time in Force', 'Stocks', 'Bonds' , 'Limit Orders','Market Orders', 'Stop Orders', 'AML', 'SUMSUB'],
  },
  {
    company: 'National Center of Educational Technologies',
    role: 'QA Engineer',
    period: 'Nov 2022 - May 2023',
    description: 'Quality assurance for educational technology platforms.',
    responsibilities: [
      'Executed functional and regression testing for e-learning platforms',
      'Performed cross-browser testing',
      'Documented test cases and tracked defects in Jira',
      'Collaborated with product team on requirements validation',
    ],
    technologies: ['Selenium', 'Jira', 'SQL', 'Postman', 'API'],
  },
  {
    company: 'X-Soft',
    role: 'QA Engineer',
    period: 'Apr 2021 - Nov 2022',
    description: 'Delivered quality software solutions across multiple projects.',
    responsibilities: [
      'Conducted manual testing for web applications',
      'Performed API testing validation',
      'Created and maintained test documentation',
      'Participated in Agile ceremonies and sprint planning',
    ],
    technologies: ['Selenium', 'Postman', 'Jira', 'ClickUP', 'Blisk'],
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
    technologies: ['Jira', 'Trello','Android', 'iOS', 'Manual Testing' ],
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
    technologies: [    'Jira','Trello','Postman','Selenium','Manual Testing','UI/UX Testing',],
  },
];

export const projects: Project[] = [
  // Mobile Apps
  {
  title: 'NFT Marketplace',
  description:'Comprehensive testing of a mobile NFT marketplace application featuring NFT trading, wallet integration, collections, and blockchain transactions.',

  responsibilities: [
    'Tested NFT minting, buying, selling, and transfer workflows',
    'Validated wallet connection and authentication processes',
    'Performed functional and usability testing across mobile devices',
    'Verified NFT collection management and marketplace features',
    'Tested blockchain transaction statuses and user notifications',
  ],

  technologies: [
    'Android',
    'iOS',
    'MetaMask',
    'NFT',
    'Blockchain',
  ],

  icon: 'smartphone',

  image:
    'https://cdn.dockwalk.com/convert/files/2022/04/ed9afe70-c7a2-11ec-ae4a-c5a397219eac-Chub%20Cay%20Marina.jpg/r%5Bwidth%5D=1280/ed9afe70-c7a2-11ec-ae4a-c5a397219eac-Chub%20Cay%20Marina.jpg',

  category: 'mobile',
},
  {
    title: 'Fitness Tracking App',
    description: 'Testing a mobile fitness application focused on daily activity tracking, step counting, goal management, location tracking, and corporate wellness programs.',
  responsibilities: [
    'Tested step counting and activity tracking functionality',
    'Validated daily goals, achievements, and progress calculations',
    'Performed location and map feature testing',
    'Verified corporate subscription and user management flows',
    'Executed functional, usability, and regression testing across mobile devices',
  ],
    technologies: [  'Android','iOS'],
    icon: 'smartphone',
    image: 'https://minnova.io/platform.svg',
    category: 'mobile',
  },
{
  title: 'Agriculture Monitoring',
  description: 'Testing a mobile application for monitoring agricultural and SME development programs, including farmer data collection, crop production tracking, water usage monitoring, business performance reporting, and analytics dashboards.',
  responsibilities: [
    'Tested farmer and SME registration and profile management flows',
    'Validated land use, crop production, and water usage data entry forms',
    'Verified automatic calculations for water savings, expected yield, and business indicators',
    'Tested progress dashboards, charts, and data visualization components',
    'Performed functional, usability, API, and regression testing across mobile devices',
    'Validated admin panel functionality, filters, reporting, and user management features',
  ],
  technologies: ['Postman', 'Azure',   'Android','iOS',],
  icon: 'smartphone',
  image: 'wfp-lt.png',
  category: 'mobile',
},
{
  title: 'Trading App',

  description:
    'Comprehensive testing of a mobile trading application for stocks and bonds, including real-time quotes, order execution, portfolio management, and trading analytics.',

  responsibilities: [
    'Tested real-time market data and price updates (quotes)',
    'Validated order types: market, limit, stop, and TIF execution flows',
    'Tested portfolio management, balances, and transaction history',
    'Verified UI/UX of trading screens under high load and fast updates',
    'Validated API responses for trading operations and market data',
  ],

  technologies: ['QUIK', 'QORT', 'SUMSUB','Trading APIs','Market Data'],

  icon: 'smartphone',
  image: 'trading.png',
  category: 'mobile',
},
  // Telegram Mini Apps
{
  title: 'TG Game',
  description: 'Quality assurance for a Web3 NFT gaming ecosystem on the TON blockchain, featuring NFT breeding, marketplace trading, reward mechanics, and Telegram mini app integration.',
  responsibilities: [
    'Tested Telegram Mini App functionality and user flows',
    'Validated NFT minting, breeding, and marketplace transactions',
    'Verified wallet connectivity and TON blockchain interactions',
    'Tested reward distribution and in-game economy mechanics',
    'Performed functional, API, and regression testing across web and mobile platforms',
  ],
  technologies: ['Jira', 'TON', 'Telegram API'],
  icon: 'bot',
  image: 'asika-life.png',
  category: 'mini-app',
},
  {
  title: 'Trading Bot',
  description: 'Quality assurance for a Telegram mini app trading platform integrated with Binance Futures,  portfolio monitoring',
  responsibilities: [
    'Tested Telegram Mini App user flows and trading interfaces',
    'Validated Binance Futures integration and order execution processes',
  
    'Tested portfolio tracking, position management, and PnL calculations',
    'Performed API, regression testing across trading scenarios',
  ],
  technologies: ['Postman', 'Binance API',  'Azure'],
  icon: 'bot',
  image: 'brain.jpg',
  category: 'mini-app',
},
  // Web Applications
  {
  title: 'Real Estate Platform',

  description:
    'Early-stage testing of a real estate web platform including basic UI, forms, and user flows.',

  responsibilities: [
    'Tested registration and login flows',
    'Checked basic UI and form validation',
    'Verified profile creation and editing',
    'Reported UI bugs and usability issues',
    'Performed basic cross-browser testing',
  ],

  technologies: ['Swagger', 'Azure'],

  icon: 'globe',
  image:
    'real-estate.png',
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
    technologies: ['Postman', 'SQL'],
    icon: 'layout-dashboard',
    image: 'admin.png',
    category: 'web',
  },
  // Smart Contracts
{
  title: 'Smart Contract',
  description: 'Testing and validation of smart contract deployment and functionality across Ethereum and BNB Smart Chain, including staking mechanisms and on-chain verification.',
  responsibilities: [
    'Smart contract deployment verification on Ethereum and BNB Smart Chain',
    'Staking functionality testing',
    'Transaction and contract verification on Etherscan and BscScan',
    'Integration testing with frontend and Web3 wallets',
  ],
  technologies: ['Bscscan', 'Etherscan'],
  icon: 'file-code',
  image: 'https://ethereum.org/content/developers/tutorials/hello-world-smart-contract/etherscan-transaction.png',
  category: 'smart-contract',
},
{
  title: 'DEX',
  description: 'Comprehensive testing of a decentralized exchange (DEX) built as a Uniswap fork, focusing on automated market making, liquidity pools, and token swaps.',
  responsibilities: [
    'AMM swap mechanism testing',
    'Liquidity pool add/remove validation',
    'Slippage, price impact, and routing checks',
    'Smart contract security and edge-case testing',
  ],
  technologies: ['Web3.js','RPC'],
  icon: 'gem',
  image: 'dex.jpg',
  category: 'smart-contract',
}
];

export const contactInfo = {
  email: 'liannnaqa@gmail.com',
  phone: '+374 99 018082',
  linkedin: 'https://www.linkedin.com/in/lianna-tavadyan-56906a159',
  linkedinLabel: 'Lianna Tavadyan',
  github: 'Lianna1618',
};
