import type { CollectionEntry } from "astro:content";

// ! Content Collection
export type Experiences = {
  visible: boolean;
  company: string;
  homepage: string;
  position: string;
  location: string;
  date: string;
};

export type ExperiencesProps = CollectionEntry<"experience"> & {
  data: Experiences;
};

export type Projects = {
  visible: boolean;
  title: string;
  homepage?: string;
  repository?: string;
};

export type ProjectsProps = CollectionEntry<"project"> & {
  data: Projects;
};

// !Config types

export interface PersonalInfo {
  name: string;
  title?: string;
  email: {
    href: string;
    label: string;
  };
  phone?: string;
  location: string;
  portfolio?: {
    label: string;
    href: string;
  };
  github?: {
    label: string;
    href: string;
  };
  linkedin?: {
    label: string;
    href: string;
  };
}

export interface SocialLinks {
  label: string;
  href: string;
  active: boolean;
  icon: string;
}

export type ExperiencesConfig = {
  name: string;
  visible: boolean;
};

export type Education = {
  visible: boolean;
  institute: string;
  type_of_study: string;
  area_of_study: string;
  date_range: string;
  score: string;
};

export type EducationConfig = {
  name: string;
  visible: boolean;
  items: Education[];
};

export type ProjectConfig = {
  name: string;
  visible: boolean;
};

export type Skill = {
  visible: boolean;
  category: string;
  category_name_visible: boolean;
  skills: string;
};

export type SkillsConfig = {
  visible: boolean;
  name: string;
  items: Skill[];
};
