import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";
import icon11 from "../assets/icon_11.svg"
import icon06 from "../assets/icon_06.svg"
import icon13 from "../assets/icon_13.svg"
import arrow from "../assets/arrow.svg"
import webdev from "../assets/webdev.png"
import codeedit from "../assets/codeedit.png"
import das from "../assets/das.svg"
import screw from "../assets/screw.svg"
import cust from '../assets/cust.svg'
export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Affordable Services",
    content:
      "Unlock the potential of premium digital services without the premium price tag, because top-tier doesn't have to mean expensive.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Highest Quality",
    content:
      "Our commitment to excellence ensures that every project we undertake is a masterpiece of quality, functionality, and aesthetics.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Fast Turnaround",
    content:
      "We don't just meet deadlines; we exceed expectations with swift, precision-crafted solutions allowing clients to see results sooner.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];
export const services = [
  {
    title: "Web Developer",
    // icon: web,
  },
  {
    title: "React Native Developer",
    // icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: arrow,
  },
  {
    title: "Content Creator",
    // icon: creator,
  },
];
export const stats = [
  {
    id: "stats-1",
    title: "Afforable Services",
 
  },
  // {
  //   id: "stats-2",
  //   title: "Safe and ",
   
   
  // },
  {
    id: "stats-3",
    title: "Quick Delivery & Set Up",
    
  },
];
export const projects = [
  {
    name: "Portfolio Websites",
    description:
    "Our specialty is crafting stunning websites that showcase your work or business. We create user-friendly, responsive sites that make a memorable online impression.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: webdev,
    source_code_link: "https://github.com/",
  },
  {
    name: "Data Analytics",
    description:
    "Unlock the power of your data with our analysis. We dive deep into numbers to uncover actionable insights, guiding smarter decisions for your business.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: das,
    source_code_link: "https://github.com/",
  },
  {
    name: "Code Editing",
    description:
    "Simplify website maintenance with our code editing. We optimize your code for speed, security, and bug-free performance, ensuring a seamless user experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: codeedit,
    source_code_link: "https://github.com/",
  },
];
export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];
export const startingFeatures = [
  'Establish Professionalism: Showcase expertise and credibility globally.',
  'Tailored Experience: Personalize layout, content, and branding.',
  'Showcase Skills: Display projects, achievements, and testimonials.',
  // 'Global Reach: Break geographical barriers and attract a wider audience.',
  'High Visibility: Optimize for search engines and attract organic traffic.',
  'Seamless Connectivity: Enable easy networking opportunities.',
];









export const analytics= [
  {
    imgUrl: '/vrpano.svg',
    title: 'Informed Decision-Making',
    subtitle:
        'Insights for evidence-based decisions.',
  },
  {
    imgUrl: '/headset.svg',
    title: 'Efficiency and Productivity',
    subtitle:
        'Streamlined operations for enhanced productivity.',
  },
  {
    imgUrl: '/vrpano.svg',
    title: 'Enhanced Customer Experience',
    subtitle:
        'Tailor offerings for a better customer journey.',
  },
  {
    imgUrl: '/headset.svg',
    title: 'Innovative Product Development',
    subtitle:
        ' Guide product improvements and innovations.',
  },
  {
    imgUrl: '/vrpano.svg',
    title: 'Targeted Marketing and Personalization',
    subtitle:
        'Tailor marketing for specific audiences.',
  },
  {
    imgUrl: '/headset.svg',
    title: 'Predictive Optimization',
    subtitle:
        'Optimize asset usage through predictions.',
  },
];
export const newFeatures = [
  {
    imgUrl: screw,
    title: 'Efficient Issue Resolution',
    subtitle:
        'We quickly identify and fix bugs in your existing website',
  },
  {
    imgUrl: cust,
    title: 'Customization',
    subtitle:
        'We Tailor the website to meet your specific needs and branding.',
  },
 
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];