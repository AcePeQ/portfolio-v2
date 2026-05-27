import LinkIcon from "@/components/ui/linkIcon/LinkIcon";
import { SOCIAL_MEDIA_NAVIGATION } from "@/lib/constants/navigation";

function FooterSocials() {
  return (
    <nav>
      <ul className="flex gap-4">
        {SOCIAL_MEDIA_NAVIGATION.map(link => {
          const Icon = link.icon;
          return (
            <li key={link.path}>
              <LinkIcon path={link.path}>{Icon ? <Icon /> : null}</LinkIcon>
            </li>
          );
        })}
      </ul>
    </nav>
  )
}

export default FooterSocials