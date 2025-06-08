import { list } from 'postcss'

type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

// data/workExperience.ts
export const WORK_EXPERIENCE = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "FanDuel",
    start: "Apr 2023",
    end: "Present",
    link: "https://www.fanduel.com/",
    description: [
      "FanDuel is online fantasy sports and betting company. At FanDuel, I work on building systems for API Gateway and related to auth flow which are both a T1 critical service.",
      "Building and owning services for 30M users at very demanding throughput and spikey traffic",
      "Enhancing scalability with deep-dive engineering analysis and scalability improvements on memory, compute-density, queue pressure, RDS for DB's with millions of rows",
      "Taking part in on-call support as part of \"build it, own it\" team. Mentoring junior and mid-level engineers."
    ],
  },
  {
    id: 2,
    title: "Team Lead",
    company: "OneFin",
    start: "Apr 2020",
    end: "Mar 2023",
    link: "https://onefin.in/",
    description: [
      "Pivoted the company from a monolith to SaaS, launching a no-code finance platform used by 50+ clients.",
      "Led ~10-person cross-functional team; boosted release frequency 3× via CI/CD on GitHub Actions.",
      "Designed financial APIs processing 10 M+ invoices/month.",
    ],
  },
  {
    id: 3,
    title: "Backend Engineer",
    company: "PrivateCircle",
    start: "Feb 2019",
    end: "Mar 2020",
    link: "https://privatecircle.co/",
    description: [
      "PrivateCircle is a FinTech startup, building a B2B SaaS that enables customers to find and connect with the right customers, lenders, and investors.",
      "Created and managed pipelines, and scraping. and ingesting millions of records on each run, to finally show it to the user.",
    ],
  },
  {
    id: 4,
    title: "Senior Full-Stack Engineer",
    company: "ShipThis",
    start: "Nov 2017",
    end: "Feb 2019",
    link: "https://shipthis.com/",
    description: [
      "Led automating quotation of cargo, wherein a request for quotation is addressed in real-time.",
      "Used AI for the intent of the E-Mails to reduce human overload and enable automation. Automated tracking of shipments (such as for air and ship cargo), making it generic and using NLP for Track Trace.",
    ],
  },
  {
    id: 5,
    title: "Senior Full-Stack Engineer",
    company: "WittyFeed",
    start: "Jun 2016",
    end: "Oct 2017",
    link: "https://www.wittyfeed.com/",
    description: [
      "Co-architected and built WittyFeed’s mobile & desktop platform from zero to 100 M+ monthly users (45 k concurrent).",
      "Created an internal virality-analytics tool (Python + ML/NLP) that lifted ad revenue and was later pitched to investors.",
      "Delivered full stack with AngularJS, Python (Flask & Tornado), Node.js; scaled with Memcached and Redis.",
      "Platform metrics: 250 M page views/month, Alexa #17 in India & #277 global, 2.5 B ad impressions by Mar 2016."
    ],
  },

] as const;


export const EDUCATION = [
  {
    id: 1,
    title: "Bachelor of Science in Computer Science",
    company: "University of London",
    start: "",
    end: "",
    link: "",
    description: [
      "Grade: First Class Honours",
    ],
  },
  {
    id: 2,
    title: "AWS Solutions Architect",
    company: "Amazon Web Services",
    start: "",
    end: "",
    link: "",
    description: [
    ],
  },
] as const;


export const BLOG_POSTS: BlogPost[] = [
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/dineshgupta630',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/dinesh-gupta-38a01a124/',
  }
]

export const EMAIL = 'dineshgupta630[at]outlook.com'
