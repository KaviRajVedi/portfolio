import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <div className="space-y-12">
        <Experience />
        <Education />
        <Skills />
      </div>
    </div>
  );
};

export default About;
