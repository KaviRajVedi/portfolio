const Experience = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Experience</h2>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800">Software Engineer</h3>
          <p className="text-gray-600 mb-2">Tata Consultancy Services • 2022 - Present</p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Developed and maintained web applications using React.js and Node.js</li>
            <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
            <li>Implemented responsive designs and optimized application performance</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;