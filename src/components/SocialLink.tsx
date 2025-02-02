import { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => {
  return (
    <a href={href} className="hover:text-blue-200 transition-colors">
      {icon}
    </a>
  );
};

export default SocialLink;
