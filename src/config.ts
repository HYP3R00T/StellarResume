import type { EducationConfig, ExperiencesConfig, PersonalInfo, SocialLinks } from "@/utils/types";

export const personal_info: PersonalInfo = {
  name: "Rajesh Kumar Das",
  title: "",
  email: {
    label: "rajesh@hyperoot.dev",
    href: "mailto:rajesh@hyperoot.dev",
  },
  phone: "",
  location: "Hyderabad, IN",
  portfolio: {
    label: "hyperoot.dev",
    href: "https://hyperoot.dev/",
  },
};

export const social_links: SocialLinks[] = [
  {
    label: "HYP3R00T",
    href: "https://github.com/HYP3R00T",
    active: true,
    icon: "github",
  },
  {
    label: "rajesh-kumar-das",
    href: "https://www.linkedin.com/in/rajesh-kumar-das/",
    active: true,
    icon: "linkedin",
  },
];

export const experiences_config: ExperiencesConfig = {
  name: "Experiences",
  visible: true,
};

export const education_config: EducationConfig = {
  name: "Education",
  visible: true,
  items: [
    {
      visible: true,
      institute: "National Institute of Technology, Surat",
      type_of_study: "Integrated Master of Science",
      area_of_study: "Physics",
      date_range: "Jul 2017 - May 2022",
      score: "8.72 CGPA",
      website: {
        label: "Credential ID: 2GFZ4Y7PH7VD",
        href: "https://www.coursera.org/account/accomplishments/records/2GFZ4Y7PH7VD",
      },
    },
    {
      visible: false,
      institute: "Kendriya Vidyalaya",
      type_of_study: "Senior Secondary",
      area_of_study: "Science",
      date_range: "2015 - 2016",
      score: "75.4%",
      website: {
        label: "Credential ID: 2GFZ4Y7PH7VD",
        href: "https://www.coursera.org/account/accomplishments/records/2GFZ4Y7PH7VD",
      },
    },
  ],
};

export const projects_config = {
  name: "Projects",
  visible: true,
};

export const skills_config = {
  visible: true,
  name: "Skills",
  items: [
    {
      visible: false,
      category: "Languages",
      category_name_visible: false,
      skills: "Python, Bash, SQL, JavaScript, TypeScript, HTML5, CSS3, YAML, FastAPI, pandas, numpy, AstroJS, ReactJS, Git, GitHub, Docker, Jenkins, Ansible, Linux, AWS, GCP, Azure, OpenShift",
    },
    {
      visible: true,
      category: "Languages",
      category_name_visible: true,
      skills: "Python, Bash, SQL, JavaScript, TypeScript, HTML5, CSS3, YAML",
    },
    {
      visible: true,
      category: "Frameworks & Libraries",
      category_name_visible: true,
      skills: "FastAPI, pandas, numpy, AstroJS, ReactJS",
    },
    {
      visible: true,
      category: "DevOps & Cloud",
      category_name_visible: true,
      skills: "Git, GitHub, Docker, Jenkins, Ansible, Linux, AWS, GCP, Azure, OpenShift",
    },
  ],
};

export const certifications_config = {
  name: "Certifications",
  visible: true,
  items: [
    {
      visible: true,
      name: "IT Automation with Python Professional Certificate",
      issuer: "Google",
      date: "Oct 2024",
      url: "https://www.credly.com/badges/7aa530c7-9ae0-4f05-9766-9faee5ac98cc/public_url",
    },
    {
      visible: true,
      name: "Introduction to Generative AI Learning Path",
      issuer: "Google Cloud",
      date: "Sep 2024",
      url: "https://www.coursera.org/account/accomplishments/specialization/8WNI5H80XDTG",
    },
    {
      visible: true,
      name: "Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      date: "Jul 2022",
      url: "https://www.credly.com/badges/be903c6e-bc08-4117-bb7e-942e5364e32b/public_url",
    },
    {
      visible: true,
      name: "Introduction to Agile Development and Scrum",
      issuer: "IBM (Coursera)",
      date: "Apr 2024",
      url: "https://www.credly.com/badges/3bc12e55-8398-4d79-ab64-b569e7eb0858/public_url",
    },
    {
      visible: true,
      name: "DevOps Essentials",
      issuer: "IBM (Coursera)",
      date: "Mar 2024",
      url: "https://www.credly.com/badges/868906dd-a866-41de-8cac-05f7245eb885/public_url",
    },
    {
      visible: true,
      name: "Python for Data Science and AI",
      issuer: "IBM (Coursera)",
      date: "Apr 2024",
      url: "https://www.credly.com/badges/678e8685-1559-4a48-a69a-4c3febb53fbd/public_url",
    },
    {
      visible: true,
      name: "Linux Commands & Shell Scripting Essentials V2",
      issuer: "IBM (Coursera)",
      date: "Aug 2024",
      url: "https://www.credly.com/badges/a870b95b-528f-4c14-b18b-c47bcbf82d7c/public_url",
    },
    {
      visible: true,
      name: "Software Engineering Essentials",
      issuer: "IBM (Coursera)",
      date: "Sep 2024",
      url: "https://www.credly.com/badges/f599cb4a-dbe5-4260-9706-edd4fb4cbec4/public_url",
    },
  ],
};
