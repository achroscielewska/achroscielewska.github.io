export interface WorkExperience {
  period: string;
  company: string;
  role: string;
  projects?: {
    name: string;
    description: string;
    technologies: string[];
  }[];
  technologies?: string[];
}

export interface Education {
  period: string;
  institution: string;
  degree?: string;
  field?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface PersonalInfo {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
}

export interface ProfileData {
  personalInfo: PersonalInfo;
  summary: string;
  workExperience: WorkExperience[];
  currentPosition: WorkExperience;
  education: Education[];
  skills: SkillCategory[];
  languages: { language: string; level: string }[];
}

export const profileData: ProfileData = {
  personalInfo: {
    name: "Agnieszka Chrościelewska",
    role: "Senior Frontend Developer",
    email: "achroscielewska@email.com",
    phone: "+48 602 370 054",
    location: "Pruszków, Poland",
    linkedin: "linkedin.com/in/achroscielewska",
  },
  summary:"Experienced Frontend Developer with over 9 years of hands-on experience in designing and implementing high-performance, enterprise-level web applications, primarily in the financial sector. Skilled in modern frontend technologies and best practices, with a strong focus on building scalable, maintainable, and secure solutions. Collaborates effectively with cross-functional teams to deliver projects that exceed client expectations.",
 currentPosition: {
    period: "12.2022 - Present",
    company: "Endava Poland",
    role: "Senior Frontend Developer / Junior Backend Developer",
    projects: [
         {
        name: "KMP",
        description:
          "This R&D project focuses on developing innovative applications powered by OpenAI’s API. It includes an interactive AI chatbot that transforms requirements interviews into standardized SpecKits, and an AI-driven tool that estimates and compares cloud infrastructure costs across major providers. The goal is to explore how generative AI can streamline software development processes and improve decision-making efficiency",
        technologies: [
          "Next 16",
          "NextAuth",
          "React 19",
          "TypeScript",
          "Tailwind CSS",
          "Shadcn UI",
          "OpenAI",
          "Supabase"
        ],
      },
      {
        name: "EQIP - Shareholder Service",
        description:"Responsible for delivering user interfaces aligned with the latest trends in React, working in a dynamic international environment to meet both business and technical goals.",
          technologies: [
          "React 18",
          "Redux",
          "TanStack Query",
          "react-i18next",
          "TypeScript",
          "Material UI",
          "Axios",
          ".NET 8/9",
          "Azure",
        ],
      },
      {
        name: "Synthetic Data Generation (Healthcare)",
        description:
          "R&D project aimed at validating the use of AWS services for synthetic data generation in the healthcare area.",
        technologies: [
          "React JS 18",
          "Redux",
          "react-i18next",
          "TypeScript",
          "Material UI",
          "Axios",
          "AWS Services",
        ],
      },
      {
        name: "Healthcare + ChatGPT Tools",
        description:
          "R&D project aimed at validating the use of AI tools in the healthcare domain, specifically integrating ChatGPT capabilities to enhance applications.",
        technologies: [
          "React 18",
          "React Query",
          "react-i18next",
          "TypeScript",
          "Material UI",
          "Vitest",
          "MSW",
          "Azure",
        ],
      },
      {
        name: "Home Sales Service (Insurance)",
        description:
          "Integration with over a dozen external systems, enabling seamless data exchange and ensuring a smooth and efficient insurance sales process across multiple external integrations.",
        technologies: [
          "React 18",
          "MobX-StateTree",
          "react-i18next",
          "TypeScript",
          "Material UI",
          "Vitest",
          "MSW",
          "Storybook",
          "Node.js",
          "kafka.js",
        ],
      },
    ],
  },
  workExperience: [
    {
      period: "06.2020 - 11.2022",
      company: "DAT Polska",
      role: "Senior Developer",
      projects: [
        {
          name: "ftAdmin - Configuration Panel",
          description: "Configuration management platform",
          technologies: [
            "React 17",
            "Redux",
            "TypeScript",
            "Bootstrap",
            "Laravel 8",
          ],
        },
        {
          name: "MyClaim - Order Processing",
          description: "Order processing and management system",
          technologies: ["jQuery", "JavaScript (ES5/ES6)", "XML", "Java 1.8"],
        },
        {
          name: "Fotohub - Configuration Panel",
          description: "Photo management configuration system",
          technologies: ["Vue.js 2", "Vuex", "Vuetify.js", "Laravel 8"],
        },
      ],
    },
    {
      period: "06.2009 - 05.2020",
      company: "Altkom Akademia S.A. / Altkom Software and Consulting",
      role: "Frontend Developer / Senior Analyst",
      technologies: [
        "Angular 7, 8",
        "RxJs",
        "ngx-formly",
        "TypeScript",
        "SASS",
        "Bootstrap",
        "GitHub",
        "Confluence",
        "JIRA",
      ],
    },
    {
      period: "09.2008 - 06.2009",
      company: "Affecto Poland (Mebius IT)",
      role: "Analyst",
    },
    {
      period: "03.2006 - 08.2008",
      company: "Invofide - Matrix S.A",
      role: "Analyst",
    },
  ],
  education: [
    {
      period: "2017 - 2018",
      institution: "Infoshare Academy",
      field: "Junior Frontend Developer Course",
    },
    {
      period: "2000 - 2006",
      institution: "Warsaw School of Economics",
      degree: "Master's Degree",
      field: "Quantitative Methods in Economics and Information Systems",
    },
  ],
  skills: [
    {
      name: "Fundamentals",
      skills: [
        "React",
        "React Hooks",
        "Next",
        ".NET / C# (Junior Level)",
      ],
    },
    {
      name: "Ecosystem",
      skills: [
        "Redux",
        "TanStack Query",
        "MobX-State-Tree",
        "React Router",
        "React Hook Form",
        "TypeScript",
        "Styled Components",
        "Tailwind CSS",
        "Shadcn UI",
        "Material UI",
        "Bootstrap",
        "Vitest",
        "React Testing Library",
        "Mock Service Worker",
        "React i18Next",
        "Storybook",
        "Ladle",
        "Webpack Module Federation",
      ],
    },
    {
      name: "Tools",
      skills: [
        "GitHub",
        "GitLab",
        "Confluence",
        "JIRA",
        "Azure Boards",
        "Azure Repos",
        "Azure Pipelines",
      ],
    },
    {
      name: "Cloud",
      skills: [
        "AWS API Gateway",
        "AWS Lambda",
        "AWS Step Functions",
        "AWS CloudWatch",
        "AWS S3",
      ],
    },
  ],
  languages: [
    { language: "Polish", level: "Native" },
    { language: "English", level: "Professional" },
  ],
};
