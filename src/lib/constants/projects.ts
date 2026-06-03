import QustoPreview from "@/assets/images/projects/qustoPreview.jpg";
import GetDonePreview from "@/assets/images/projects/getDonePreview.jpg";
import LoLQuizPreview from "@/assets/images/projects/lolQuizPreview.jpg";
import NetWatchPreview from "@/assets/images/projects/netwatchPreview.jpg";
import PizzaPreview from "@/assets/images/projects/pizzaPreview.jpg";
import SolarSystemPreview from "@/assets/images/projects/solarSystemPreview.jpg";
import TranslateAppPreview from "@/assets/images/projects/translatePreview.jpg";
import UnsplashPreview from "@/assets/images/projects/unsplashPreview.jpg";
import WoasPreview from "@/assets/images/projects/woasPreview.jpg";

import { StaticImageData } from "next/image";

export type ShowcaseProject = {
  name: string;
  thumbnail: StaticImageData;
  link: string;
  type: "commercial" | "personal";
  technologies: string[];
};

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    name: "Qusto Restaurant",
    thumbnail: QustoPreview,
    link: "https://github.com/AcePeQ/react-redux-shop",
    type: "personal",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "React Router",
      "Express",
      "CSS Modules",
    ],
  },
  {
    name: "GetDone",
    thumbnail: GetDonePreview,
    link: "https://github.com/AcePeQ/GetDone",
    type: "personal",
    technologies: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Express",
      "MongoDB",
    ],
  },
  {
    name: "NETwatch",
    thumbnail: NetWatchPreview,
    link: "https://github.com/AcePeQ/Movie-App-NETwatch",
    type: "personal",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "ASP.NET Core",
      "Entity Framework",
      "SQL Server",
    ],
  },
  {
    name: "UnsplashBox",
    thumbnail: UnsplashPreview,
    link: "https://github.com/AcePeQ/UnsplashBox---Unsplash-copy",
    type: "personal",
    technologies: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Express",
      "MongoDB",
      "Unsplash API",
    ],
  },
  {
    name: "Wulkanizacja WOAS",
    thumbnail: WoasPreview,
    link: "https://github.com/AcePeQ/Wulkanizacja-Woas/tree/main/woas",
    type: "personal",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "CSS Modules",
      "Motion",
      "React Scroll",
    ],
  },
  {
    name: "Pizza App",
    thumbnail: PizzaPreview,
    link: "https://github.com/AcePeQ/Pizza-App",
    type: "personal",
    technologies: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Express",
      "MongoDB",
    ],
  },
  {
    name: "My Own Solar System",
    thumbnail: SolarSystemPreview,
    link: "https://github.com/AcePeQ/ThreeJsPlayground/tree/main/MyOwnSolarSystem",
    type: "personal",
    technologies: ["JavaScript", "Vite", "Three.js", "OrbitControls", "CSS"],
  },
  {
    name: "Translate App",
    thumbnail: TranslateAppPreview,
    link: "https://github.com/AcePeQ/translate-app",
    type: "personal",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "TanStack Query",
      "MyMemory API",
      "CSS Modules",
    ],
  },
  {
    name: "LoLQuiz",
    thumbnail: LoLQuizPreview,
    link: "https://github.com/AcePeQ/LOLQuiz",
    type: "personal",
    technologies: [
      "React",
      "JavaScript",
      "Vite",
      "Context API",
      "json-server",
      "CSS Modules",
    ],
  },
] as const;
