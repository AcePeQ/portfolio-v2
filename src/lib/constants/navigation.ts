import LinkedinIcon from "@/assets/icons/linkedin.svg";
import GithubIcon from "@/assets/icons/github.svg";

import MailIcon from "@/assets/icons/mail.svg";
import PhoneIcon from "@/assets/icons/phone.svg";
import { NavigationLink } from "@/types/common.types";

export const MAIN_NAVIGATION: NavigationLink[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Skills",
    path: "/skills",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "About Me",
    path: "/about-me",
  },
  {
    name: "Contact Me",
    path: "/contact-me",
  },
] as const;

export const SOCIAL_MEDIA_NAVIGATION: NavigationLink[] = [
  {
    name: "Github",
    path: "https://github.com/AcePeQ",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/maciej-nojszewski-81359a35a/",
    icon: LinkedinIcon,
  },
] as const;

export const CONTACT_NAVIGATION: NavigationLink[] = [
  {
    name: "Mail",
    icon: MailIcon,
    path: "mailto:maciej.nojszewski22@gmail.com",
  },
  {
    name: "Phone number",
    icon: PhoneIcon,
    path: "tel:+48664138084",
  },
] as const;
