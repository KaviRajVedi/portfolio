interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="font-semibold mb-3 text-gray-800">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;