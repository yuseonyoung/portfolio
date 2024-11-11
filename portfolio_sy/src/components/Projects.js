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
        title: "등산어때",
        description: "등산러들을 위한 sns",
        image: "/images/mountainProject.png",
        technologies: ["Qgis", "Geoserver", "EgovFramework","javascript", "java"],
        details: {
          overview: `Gis(지리 정보 시스템)과 EgovFramework(전자정부 서비스 개발표준 프레임워크)를 공부하기 위하여 등산러들을 위한 SNS를 기획하여 만들었습니다. <br>
                    벤치마킹은 Instagram을 참고하였습니다. <br>`,
          features: ["로그인", "게시물관리", "친구의 게시물 조회", "모집게시물 관리", "댓글" , "도 경계 조회 및 선택" , "100대명산 정보 조회", "지역통계"],
          github: "https://github.com/yuseonyoung/mountain_projects?tab=readme-ov-file"
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