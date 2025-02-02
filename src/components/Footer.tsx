import { Linkedin, Mail, Github } from "lucide-react";
import SocialLink from "./SocialLink";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          {" "}
          <div className="social-container">
            <SocialLink
              href="https://linkedin.com/in/kaviraj-vedi"
              icon={<Linkedin size={24} />}
            />
            <SocialLink
              href="mailto:kavirajvedi@gmail.com"
              icon={<Mail size={24} />}
            />
            <SocialLink
              href="https://github.com/kavirajvedi"
              icon={<Github size={24} />}
            />
          </div>
          <p>© 2024 Kavi Raj Vedi. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
