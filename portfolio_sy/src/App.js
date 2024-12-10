import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';

const App = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollPositionRef = useRef(scrollPosition);

  useEffect(() => {
    scrollPositionRef.current = scrollPosition;
  }, [scrollPosition]);

  useEffect(() => {
    if (selectedProject) {
      const currentScrollPosition = window.pageYOffset;
      setScrollPosition(currentScrollPosition);
      document.body.style.position = 'fixed';
      document.body.style.top = `-${currentScrollPosition}px`;
      document.body.style.width = '100%';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollPositionRef.current);
    }
  }, [selectedProject]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      <main className="overflow-hidden">
        <About />
        <Projects onProjectClick={handleProjectClick} />
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={handleCloseModal} 
          />
        )}
      </main>
    </div>
  );
};

export default App;