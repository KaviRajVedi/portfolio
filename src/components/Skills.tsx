import React from 'react';
import SkillCard from './SkillCard';

const Skills = () => {
  const skillsets = [
    {
      title: "Frontend",
      skills: ["React.js", "TypeScript", "HTML/CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB"]
    },
    {
      title: "Tools",
      skills: ["Git", "Docker", "AWS"]
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillsets.map((skillset) => (
          <SkillCard key={skillset.title} title={skillset.title} skills={skillset.skills} />
        ))}
      </div>
    </section>
  );
};

export default Skills;