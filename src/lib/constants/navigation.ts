import LinkedinIcon from "@/assets/icons/linkedin.svg";
import GithubIcon from "@/assets/icons/github.svg";

import MailIcon from "@/assets/icons/mail.svg";
import PhoneIcon from "@/assets/icons/phone.svg";
import { NavigationLink } from "@/types/common.types";

export const MAIN_NAVIGATION: NavigationLink[] = [
  {
    id: "hero",
    name: "Home",
    path: "#hero",
  },
  {
    id: "about-me",
    name: "About Me",
    path: "#about-me",
  },
  {
    id: "skills",
    name: "Skills",
    path: "#skills",
  },
  {
    id: "projects",
    name: "Projects",
    path: "#projects",
  },
  // {
  //   id: "contact-me",
  //   name: "Contact Me",
  //   path: "#contact-me",
  // },
] as const;

export const SOCIAL_MEDIA_NAVIGATION: NavigationLink[] = [
  {
    id: "github",
    name: "Github",
    path: "https://github.com/AcePeQ",
    icon: GithubIcon,
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/maciej-nojszewski-81359a35a/",
    icon: LinkedinIcon,
  },
] as const;

export const CONTACT_NAVIGATION: NavigationLink[] = [
  {
    id: "mail",
    name: "maciej.nojszewski22@gmail.com",
    icon: MailIcon,
    path: "mailto:maciej.nojszewski22@gmail.com",
  },
  {
    id: "phone",
    name: "+48 664 138 084",
    icon: PhoneIcon,
    path: "tel:+48664138084",
  },
] as const;
