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