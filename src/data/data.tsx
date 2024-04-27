import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
//import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
//import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
//import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
//import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
//import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
//import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
//import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
//import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
//import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Jure.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">PhD student</strong> in climate science. </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, I enjoy reading adventure novels about tax policy.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a physicist & applied mathematician by education who began dabbling in climate in 2020. Currently, I am a PhD student 
  at the University of Cambridge, working on the representation of convective clouds in climate models. Additionally, I am a part-time as a 
  tutor at Cambridge Spark, where I teach basic data science. I also work part-time as an independent contractor for Google DeepMind, where 
    I provide climate science data for conversational AI. In my spare time, I enjoy exploring the intricacies of fiscal policy and economics. 
        On less exciting days, you can find me outdoors, preferably surrounded by trees.`,
  aboutItems: [
    {label: 'Location', text: 'Cambridge, UK', Icon: MapIcon},
    {label: 'Undergraduate', text: 'University of Glasgow', Icon: AcademicCapIcon},
    {label: 'Age', text: '26', Icon: CalendarIcon},
    {label: 'Postgraduate', text: 'University of Cambridge', Icon: AcademicCapIcon},
    {label: 'Nationality', text: 'Slovenia', Icon: FlagIcon},
    {label: 'Part-time', text: 'Cambridge Spark', Icon: BuildingOffice2Icon},
    {label: 'Interests', text: 'Nature, fiscal policy, sailing, surfing', Icon: SparklesIcon},
    {label: 'Independent contractor', text: 'Google DeepMind', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
    {
    name: 'Tools',
    skills: [
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Fortran',
        level: 3,
      },
      {
        name: 'Git',
        level: 7,
      },
      {
        name: 'Vim',
        level: 6,
      },
      {
        name: 'Linux',
        level: 5,
      },
    ],
  },

  {
    name: 'Technical',
    skills: [
      {
        name: 'Data analysis',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'German',
        level: 2,
      },
    ],
  },
  {
    name: 'Languages',
    skills: [
      {
        name: 'Slovenian',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'German',
        level: 2,
      },
    ],
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://.com',
    image: porfolioImage2,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'June 2021',
    location: 'University of Glasgow',
    title: 'MSci in Mathematics & Physics',
    content: <p>A Scottish special: joint degree! Thesis on percolation characteristics of systems with a barrier.</p>,
  },
  {
    date: 'September 2022',
    location: 'University of Cambridge',
    title: 'MPhil Geography',
    content: <p>MPhil by research with a thesis on the impact of convection schemes in climate models.</p>,
  },
];


export const experience: TimelineItem[] = [
  {
    date: 'December 2022 - Present',
    location: 'Cambridge Spark',
    title: 'Teacher & tutor',
    content: (
      <p>
        Teaching and tutoring Excel, Python, data science, and, on rare occasions, machine learning, 
        to company clients- catering to a spectrum of learner expertise, ranging from complete beginners to advanced learners.
      </p>
    ),
  },
  //{
    //date: 'May 2024 - Present',
    //location: 'Google DeepMind',
    //title: 'Expert AI tutor',
    //content: (
      //<p>
        //I help provide conversational AI models with data on climate science by generating questions and evaluating responses. THen collaborating with engineers to improve model effectiveness and safety.
      //</p>
    //),
  //},
];


/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Joe Bloggs',
      text: 'Wow, so that',
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Wow, so that',
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out to me in any way that suits you best!',
  items: [
    {
      type: ContactType.Email,
      text: 'jz557@cam.ac.uk',
      href: 'mailto:jz557@cam.ac.uk',
    },
    {
      type: ContactType.Location,
      text: 'Cambridge, UK',
      href: 'https://www.google.ca/maps/place/Cambridge/@52.1988875,0.0787879,13z/data=!3m1!4b1!4m6!3m5!1s0x47d85d89f32a012d:0x63a320e1a35e3d21!8m2!3d52.1950788!4d0.1312729!16zL20vMDk3OHI?entry=ttu',
    },
    //{
      //type: ContactType.Instagram,
      //text: '@tbakerx',
      //href: 'https://www.instagram.com/tbakerx/',
    //},
    {
      type: ContactType.Github,
      text: 'jurezgubic',
      href: 'https://github.com/jurezgubic',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/jurezgubic'},
  //{label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jure-zgubic/'},
  //{label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  //{label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
