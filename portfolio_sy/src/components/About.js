import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="min-h-screen pt-20">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-6 py-20"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
          >
            <motion.div 
              className="w-64 h-64 mx-auto md:mx-0 relative group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-75 blur-lg group-hover:opacity-100 transition-opacity"></div>
              <img
                src="/api/placeholder/400/400"
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full shadow-lg"
              />
            </motion.div>
          </motion.div>
          <div className="space-y-8">
            <motion.div variants={containerVariants}>
              <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                About Me
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                [자기소개를 입력하세요]
              </p>
            </motion.div>
            <motion.div variants={containerVariants}>
              <h3 className="text-2xl font-bold mb-4 h-5">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'JavaScript', 'Node.js', 'Python'].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-md"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div variants={containerVariants}>
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <ul className="space-y-4">
                <motion.li 
                  className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="font-semibold block text-lg">[학교명]</span>
                  <span className="text-gray-600">[전공] • [졸업연도]</span>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
