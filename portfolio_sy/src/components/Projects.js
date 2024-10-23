import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = ({ onProjectClick }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1
    });
  
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2
        }
      }
    };
  
    const projects = [
      {
        id: 1,
        title: "Project 1",
        description: "프로젝트 설명",
        image: "/api/placeholder/400/300",
        technologies: ["React", "Node.js"],
        details: {
          overview: "프로젝트 상세 설명",
          features: ["기능 1", "기능 2"],
          github: "https://github.com/...",
          demo: "https://..."
        }
      },
      // 더 많은 프로젝트 추가
    ];
  
    return (
      <section id="projects" className="min-h-screen py-20">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="container mx-auto px-6"
        >
            <h2 className="w-full text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text leading-none h-24">
                My Projects
            </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => onProjectClick(project)}
              />
            ))}
          </div>
        </motion.div>
      </section>
    );
  };

export default Projects;  