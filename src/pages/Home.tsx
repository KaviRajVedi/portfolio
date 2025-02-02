// import React from 'react';
// import { Github, Linkedin, Mail } from 'lucide-react';
// import SocialLink from '../components/SocialLink';

// const Header = () => {
//   return (
//     <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
//       <div className="container mx-auto px-6 py-16">
//         <div className="flex flex-col items-center text-center">
//           <h1 className="text-4xl font-bold mb-4">Kavi Raj Vedi</h1>
//           <p className="text-xl mb-6">Software Engineer</p>
//           <div className="flex gap-4">
//             <SocialLink href="https://linkedin.com/in/kaviraj-vedi" icon={<Linkedin size={24} />} />
//             <SocialLink href="mailto:kavirajvedi@gmail.com" icon={<Mail size={24} />} />
//             <SocialLink href="https://github.com/kavirajvedi" icon={<Github size={24} />} />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// const Home = () => {
//   return (
//     <div>
//       <Header />
//     </div>
//   );
// };

// export default Home;
// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import the dedicated CSS file for the Home page

const Home: React.FC = () => {
  return (
    <section className="hero-container">
      {/* Dark overlay for better contrast */}
      <div className="overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm [Your Name]</h1>
        <p className="hero-subtitle">
          I craft delightful digital experiences with passion and creativity.
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="button">
            See My Work
          </Link>
          <Link to="/contact" className="button secondary">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
