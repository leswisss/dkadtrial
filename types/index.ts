import { StaticImageData } from "next/image";

export interface sideBarProps {
  activeSide: boolean;
  setActiveSide: React.Dispatch<React.SetStateAction<boolean>>;
  setLocalState: React.Dispatch<React.SetStateAction<string>>
}

export interface solutionProps {
  id: number;
  title: string;
  text: string;
  text2: string;
  image: StaticImageData
}

export interface ImageDescription {
  en: string;
  fr: string;
};

export interface ImageProps {
  image: StaticImageData;
};

export interface Services {
  en: string[];
  fr: string[];
};

export interface ServiceSlug {
  en: string[];
  fr: string[];
};

export interface Location {
  en: string;
  fr: string;
};

export interface IntroDescription {
  en: string;
  fr: string;
};

export interface AboutProject {
  en: string[];
  fr: string[];
};

export interface ProjectInfoDetails {
  style: string;
  environment: string;
  features: string;
};

export interface ProjectInfo {
  en: ProjectInfoDetails;
  fr: ProjectInfoDetails;
};

export interface ProjectProps {
  id: number;
  slug: string;
  name: string;
  year: number;
  images: ImageProps[];
  services: Services;
  serviceslug: ServiceSlug;
  location: Location;
  introDescription: IntroDescription;
  aboutProject: AboutProject;
  projectInfo: ProjectInfo;
};
