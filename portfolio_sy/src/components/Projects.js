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
    const itemVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };
    const projects = [
      {
        id: 2,
        title: "등산어때",
        description: "등산러들을 위한 sns",
        image: "/images/mountainProject.png",
        technologies: ["Qgis", "Geoserver", "EgovFramework","javascript", "java"],
        details: {
          overview: `Gis(지리 정보 시스템)과 EgovFramework(전자정부 서비스 개발표준 프레임워크)를 공부하기 위하여 시작된 토이 프로젝트이며 <br>
                    최근 등산이 유행한다고 하여 등산러들을 위한 SNS를 기획하여 만들었고, 벤치마킹은 Instagram을 참고하여 만들었습니다. <br>
                    <p><strong>[ Github의 readMe에 더욱 자세한 설명이 작성되어 있습니다. ]</strong></p>
                    `,
          features: ["로그인", "게시물관리", "친구의 게시물 조회", "모집게시물 관리", "댓글" , "도 경계 조회 및 선택" , "100대명산 정보 조회", "지역통계"],
          github: "https://github.com/yuseonyoung/mountain_projects?tab=readme-ov-file"
        }
      },
      {
        id: 3,
        title: "인터파크티켓 예매 매크로 및 캡챠인증",
        description: "대기열을 빨리 받을 수 있는 프로그램",
        image: "/images/interparkWatingMacro.png",
        technologies: ["python", "pytouch","selenium","machinLearning", "pyqt"],
        details: {
          overview: `※ 매크로를 이용하여 금전적인 이득을 취할 목적으로 티켓을 구매하는 행위는 불법이지만 개인이 사용하기 위해 매크로를 이용하는 행위는 불법이 아님을 명시합니다.<br>
                    ※ 다만 이 프로젝트를 공유시 악용될 우려가 있으므로 코드의 공유는 따로 하지 않겠습니다.<br>
                    <br>
                    불법적으로 티켓들을 구매하여 되판매하는 사람들이 많아지는 지금 티켓을 정상적인 방법으로는 티켓을 구매하기 힘들다는 판단하에 매크로 프로젝트를 제작하였습니다. <br>
                    <br>
                    <p><strong>[ 프로그램의 대략적인 기능 ]</strong></p>
                    <br>
                    <ul>
                        <li>※ 입력값: 상품코드, 채널코드, 버전(이전버전, 신버전의 API호출 방법이 다름), 호출빈도(1ms단위), 공연일자, 상품코드 (default: 001), 선예매 여부, 티켓오픈시간</li>
                        <li>※ 기능설명:</li>
                        <ol>
                            <li className = "list-item">1. 인터파크 서버 시간 동기화 : 인터파크서버의 시간을 저장하고 있는 API를 요청하여 response 받아 시간을 가공하여 QTIMER를 이용하여 시간을 동기화해 준다.</li>
                            <li className = "list-item">2. Google Chrome 계정 동기화 : selenium을 이용하여 Google Chrome 계정 연동과 Cookie의 정보를 저장하여 사용한다.</li>
                            <li className = "list-item">3. 티켓예매 : 예매요청을 0.01초당 한번 요청하여 대기열을 빠르게 받아온다.</li>
                            <li className = "list-item">4. 계정별 API호출 : 공연의 시간대가 여러개일 경우 한번에 실행으로 계정별로 다른 시간대의 공연을 선택하여 호출할 수 있다.</li>
                            <li className = "list-item">5. 캡챠인증 : CNN(합성곱 신경망) 방식의 MachineLeaning 학습된 Model정보를 가지고 캡챠정보를 빠르게 인증하여 준다. <br>
                                [무료OCR은 정확도가 낮기 때문에 CNN방식의 머신러닝을 채택하여 사용함.]<br>
                                설정값 : 학습률 : 0.0005, 정확도 95%도달시 학습 조기 종료, 최대문자길이 : 6 <br>
                                요약 : CNN기반 이미지 특징 추출, 데이터 GPU전송, 모델출력과 라벨 간 손실 계산, 오류역전파로 가중치 업데이트, 정확도 계산, 검증, 모델저장                                
                            </li>
                        </ol>
                    </ul>
                    `,
          features: ["인터파크 서버 시간 동기화", "Google Chrome 계정 동기화", "티켓 예매", "계정별 API호출", "캡챠인증"],
          demo: "/video/interparkTestVideo.mp4"
        }
      },
      {
        id: 4,
        title: "3D 모델 Viewer",
        description: "3D 모델 파일과 텍스처를 통합하는 웹 ",
        image: "/images/3dModelViewer.png",
        technologies: ["HTML", "Javascript","Three.js","CSS"],
        details: {
          overview: `3D 모델 Viewer는 3D 모델을 시각화하고 상호작용할 수 있는 웹 기반 애플리케이션 입니다.<br>
                    HTML,CSS,JavaScript 기술을 사용하였고 Three.js 라이브러리를 활용하여 3D 객체의 렌더링 및 조작을 제공합니다.<br>
                    <br>
                    <br>
                    사용자는 3D모델 파일과 텍스처 파일을 업로드하고, 이를 실시간으로 확인하거나 조작할 수 있어, 디자이나, 개발자, 3D 그래픽 분야의 사용자들에게 유용한 애플리케이션이 될것입니다. <br>
                    <p><strong>[ Github의 readMe에 더욱 자세한 설명이 작성되어 있습니다. ]</strong></p>
                    `,
          features: ["파일 업로드", "3D모델 Viewer"],
          github: "https://github.com/yuseonyoung/3DModelViewer",
          demo: "/video/3dModelViewer.mp4"
        }
      },
      // 더 많은 프로젝트 추가
    ];
  
  return (
      <section id="projects" className="min-h-screen py-10 md:py-20">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full text-2xl md:text-5xl lg:text-4xl font-bold mb-8 md:mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text leading-normal mt-4 line-height-2_9"
          >
            My Projects
          </motion.h2>
  
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
            variants={containerVariants}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => onProjectClick(project)}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    );
  };
  
  export default Projects;