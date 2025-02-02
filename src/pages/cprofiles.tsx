// src/pages/CodingProfiles.tsx
import React from "react";
import { SiLeetcode, SiGeeksforgeeks, SiCodeforces } from "react-icons/si";
import "./cprofiles.css"; // Import a dedicated CSS file for custom styles

const CodingProfiles: React.FC = () => {
  return (
    <section className="coding-profiles">
      <h1>Coding Profiles</h1>
      <p>Check out my profiles on various competitive programming platforms:</p>
      <div className="profiles-container">
        <a
          href="https://leetcode.com/berryfur"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link"
        >
          <SiLeetcode size={40} />
          <span>LeetCode</span>
        </a>
        <a
          href="https://www.geeksforgeeks.org/user/berryfur/"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link"
        >
          <SiGeeksforgeeks size={40} />
          <span>GeeksforGeeks</span>
        </a>
        <a
          href="https://codeforces.com/profile/BerryFur"
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link"
        >
          <SiCodeforces size={40} />
          <span>Codeforces</span>
        </a>
      </div>
    </section>
  );
};

export default CodingProfiles;
