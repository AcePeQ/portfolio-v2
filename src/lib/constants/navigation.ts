import InstagramIcon from "@/assets/icons/instagram.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import GithubIcon from "@/assets/icons/github.svg";

import MailIcon from "@/assets/icons/mail.svg";
import PhoneIcon from "@/assets/icons/phone.svg";

export const HEADER_NAVIGATION = [
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

export const SOCIAL_MEDIA_NAVIGATION = [
  {
    name: "Github",
    path: "https://github.com/AcePeQ",
    icon: "",
  },
] as const;

export const CONTACT_NAVIGATION = [
  {
    icon: "",
    href: "mailto:maciej.nojszewski22@gmail.com",
  },
  {
    icon: "",
    href: "mailto:maciej.nojszewski22@gmail.com",
  },
] as const;
