import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <main className="overflow-hidden">
        <About />
        <Projects onProjectClick={setSelectedProject} />
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </main>
    </div>
  );
};

export default App;