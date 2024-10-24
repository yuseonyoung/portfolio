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

  const educationData = [
    {
      school: "국립방송통신대학교",
      major: "Computer Science",
      period: "2024 ~ 2026"
    },
    {
      school: "대덕인재개발원",
      major: "전자정부 표준프레임워크기반 - 풀스택양성과정",
      period: "2023 ~ 2023 (7개월)"
    },
    {
      school: "스파르타코딩클럽",
      major: "웹개발 종합반 풀스택",
      period: "2022 ~ 2022 (약 2개월)"
    },
    {
      school: "우송정보대학교",
      major: "전자정보통신공학과",
      period: "2014 ~ 2018"
    }
  ];

  const certifications = [
    {
      name: "정보처리기사",
      organization: "한국산업인력공단",
      date: "2024년 12월"
    },
    {
      name: "컴퓨터활용능력 1급",
      organization: "대한상공회의소",
      date: "2021년 4월"
    },
    {
      name: "운전면허 1종 보통",
      organization: "대전지방경찰청",
      date: "2020년 9월"
    },
    {
      name: "정보통신 산업기사",
      organization: "한국방송통신전파진흥원",
      date: "2016년 5월"
    }
  ];

  return (
    <section id="about" className="min-h-screen bg-gray-50 pt-24"> {/* Added top padding */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-6" // Reduced max-width and adjusted padding
      >
        {/* Profile and Skills Section */}
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-4 items-start mb-12"> {/* Adjusted grid layout */}
          {/* Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-start"
            variants={containerVariants}
          >
            <motion.div 
              className="w-72 sm:w-80 relative group" // Adjusted width
              style={{ height: '550px' }} // Fixed height for rectangular shape
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-75 blur-xl group-hover:opacity-100 transition-opacity"></div>
              <img
                src="/images/myProfile2.jpg"
                alt="Profile"
                className="relative w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </motion.div>

          {/* About and Skills */}
          <div className="space-y-4"> {/* Reduced space between About and Skills */}
            <motion.div variants={containerVariants} className="text-left">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"> {/* Reduced margin-bottom */}
                About Me
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg sm:text-xl mb-6">
                <span className="text-red-600 font-bold">열린 사고</span>로 다양한 시각에서 문제를 바라보고, 빠르게 적응하며<br />
                <span className="text-red-600 font-bold">새로운 도전</span>을 두려워하지 않는 개발자입니다.
              </p>
              
              <ul className="list-disc list-outside pl-5 space-y-2 text-black-700 leading-relaxed text-lg sm:text-lg mb-6"> {/* pl-5로 들여쓰기, space-y-4로 항목 간격 추가 */}
                <li>일상 속에서도 고객들의 니즈를 파악하고, 이를 통해 새로운 서비스를 창출하는 것에 큰 흥미를 느낍니다.</li>
                <li>"벽을 넘어뜨리면 다리가 된다"라는 명언처럼 자신의 능력에 벽을 두지 않고 그것을 기회로 삼고 성장해 나갑니다.</li>
                <li>동료와의 협업 및 소통을 통해 문제 해결에 있어서 각자의 시선에서 나오는 창의적인 접근을 토론하여 회고합니다.</li>
              </ul>
            </motion.div>


            <motion.div variants={containerVariants}>
            <h3
              className="text-4xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text " 
            >
              Skills
            </h3>
              <div className="flex flex-wrap gap-3">
                {['Java', 'JavaScript', 'Python', 'SpringFramework', 'EgovFramework', 'HTML', 'CSS', 'QGIS', 'Geoserver', 'Oracle', 'Tibero', 'MariaDB', 'Postgresql', 'SVN', 'Github'].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm shadow-md hover:shadow-lg transition-shadow"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

          
          </div>
        </div>
        
        {/* Certification Section */}
        <motion.div variants={containerVariants} className="mt-20 " > {/* Added margin-top */}
            <h3 className="text-4xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text text-center">Certification</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6"
                >
                  <h4 className="font-semibold text-xl mb-2">{cert.name}</h4>
                  <p className="text-gray-600 text-sm mb-1">{cert.organization}</p>
                  <p className="text-gray-500 text-sm">{cert.date}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        {/* Education Section */}
        <motion.div variants={containerVariants} className="mt-20">
          <h3 className="text-4xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text text-center">Education</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6"
              >
                <h4 className="font-semibold text-xl mb-3">{edu.school}</h4>
                <p className="text-gray-600 text-sm mb-2">{edu.major}</p>
                <p className="text-gray-500 text-sm">{edu.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
