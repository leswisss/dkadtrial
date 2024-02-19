import { StaticImageData } from "next/image";

export interface sideBarProps {
  activeSide: boolean;
  setActiveSide: React.Dispatch<React.SetStateAction<boolean>>
}

export interface solutionProps {
  id: number;
  title: string;
  text: string;
  text2: string
  image: StaticImageData
}