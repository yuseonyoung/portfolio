import { motion } from 'framer-motion';

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="border border-gray-300 p-4 rounded-lg shadow-lg h-full flex flex-col"
      onClick={onClick}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="mt-4 flex-grow">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-2">{project.description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span key={index} className="bg-blue-500 text-white px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;