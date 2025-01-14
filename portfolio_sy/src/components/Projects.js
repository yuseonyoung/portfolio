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
        id: 1,
        title: "스마트댐 안전관리 플랫폼",
        description: "4차 산업혁명 기술 (디지털트윈, 인공지능, 빅데이터 분석) 등 데이터 기반의 스마트 댐 안전관리 체계 구축 ",
        image: "/images/smartdam.png",
        technologies: ["WebSquare5","JavaScript","Java","Hasim framework","D3.js","rMateChart.js","echarts.js","ArcGIS","Mybatis","Tibero"],
        details: {
          overview: `스마트댐 안전관리의 재난안전관리 기능을 맡아 작업하였습니다.  <br>
                    ※ 맡은 기능 <br><br>
                    1. 댐 안전성 해석 시나리오 관리  <br>
                    2. 댐 안전성 해석 시뮬레이션 시각화  <br>
                    3. 실시간 수위 연동 및 수위모니터링  <br>
                    4. CCTV POI 연동, 실시간 영상 조회 및 프리셋 관리 <br>
                    5. 지진이력 <br>
                       <span class="pl-4"> -지진발생이력, 계측기정보, 위기대응보고서, 안전성해석, 긴급점검대상시설물  <span><br> 
                    6. 재난대응매뉴얼<br> 
                    <p><strong>[ 폐쇄망 보안 작업이므로 Github는 제공하지 않습니다. ]</strong></p>
                    `,
          period: "2024.02 ~ 2025.02",
          teamComposition: "기업 프로젝트",
          myRole: "Full-Stack 개발",
          features: null,
          detailedRoles: [
            {
              title: "댐 안전성 해석 시나리오 관리",
              description: [
                "연구원에서 넘어오는 댐안전성 해석데이터를 관리하는 기능",
                "Pagination, 상세검색 적용"
              ]
            },
            {
              title: "댐 안전성 해석 시뮬레이션 시각화",
              description: [
                "댐 안전성 해석 결과 데이터를 기반으로 분석결과를 시뮬레이션 하는 기능",
                "댐, 지진발생목록을 선택하면 해당 댐의 재질과 축변위를 SVG에 그려 보여주며",
                "결과 축과 배율을 선택하여 재생하면 지진발생 시간별로 댐이 지진에 의해 영향을 받은 결과와 컨투어별 색상을을 보여준다.",
                "영향의 방향을 화살표를 이동하여 표시하며 각 시간대별로 지진계와 X축절점, Y축절점을 rMate 차트로 나타내어 보여준다."
              ]
            },
            {
              title: "실시간 수위 연동 및 수위모니터링 ",
              description: [
                "통합모니터링(대시보드)에서 수위버튼을 클릭하면 37개 댐DT를 기준으로 댐의 상류면으로 카메라의 시점을 이용하여 댐의 뒷면을 보여준다.",
                "통합모니터링상의 댐DT 상류면에 waterLayer를 생성하여 화면에 출력한다.",
                "댐DT상의 기준수위를 3D Polygon객체를 생성하여 표시한다.",
                "실시간수위모니터링 기능을 이용하여 기간별로 수위의 높이를 표시하며 TimeLine차트를 통하여 시간대를 이동시 댐의 수위를 해당 시간에 맞는 수위로 표시한다.(waterLayer와 차트 연동)"
              ]
            },
            {
              title: "CCTV POI 연동, 실시간 영상 조회 및 프리셋 관리",
              description: [
                "통합모니터링(대시보드)에서 CCTV버튼을 클릭하면 37개 댐DT에 CCTV POI와 CCTV 모니터링 Widget 화면을 출력한다.",
                "Poi 및 CCTV 모니터링의 영상을 클릭시 큰 화면의 CCTV가 widget으로 출력되며 실시간 영상이 출력된다. ",
                "프리셋(즐겨찾기)를 관리하며 조회시 프리셋으로 등록된 CCTV 리스트가 큰 화면의 CCTV로 조회된다."
                ]
            },
            {
              title: "지진이력",
              description: [
                "지진발생 이력,계측기정보, 위기대응보고서, 안전성해석, 긴급점검대상시설물에 대한 정보를 탭으로 구분하여 조회한다."
                ]
            },
            {
              title: "재난대응매뉴얼",
              description: [
                "D3의 Flowchart를 이용하여 조직도를 객체화하여 만들고 각 노드를 클릭시 해당되는 이벤트가 발생하여 정보를 조회한다."
                ]
            }
          ] 
        }
      }
      ,{
        id: 2,
        title: "AIM ERP Project",
        description: "UI/UX를 개선한 ERP Project",
        image: "/images/erpImages.PNG",
        technologies: ["SpringFrameWork", "SpringSecurity", "tilesFrameWork","javascript", "Mybatis", "Oracle", "SVN","java", "HTML", "Css", "bootstrap","Kakao API", "Google Map API"],
        details: {
          overview: `AIM ERP 프로젝트는 재고관리, 창고관리, 구매 및 판매, 인사관리 프로세스를 통합하여 효율적인 창고 및 재고 관리를 목표로 한 ERP 시스템입니다. <br>
                    주요 목표:
                    - 효율적인 창고 및 재고 관리
                    - 프로세스 간소화
                    - 사용자 경험(UX) 대폭 향상
                    <p><strong>[ Github의 readMe에 더욱 자세한 설명이 작성되어 있습니다.]</strong></p>
                    `,
          period: "2023.10.26 ~ 2023.12.14",
          teamComposition: "총 7명 (PL, TA, AA x 2, BA, DA, UA)",
          myRole: "프로젝트 리더 (PL)",
          detailedRoles: [
            {
              title: "품목관리",
              description: [
                "품목 등록, 수정, 삭제 및 조회 기능 구현",
                "대량 데이터 페이징 처리 및 조건부 검색 최적화",
                "품목별 정보 연계 (재고수량, 단가, 품목 상태 등)"
              ]
            },
            {
              title: "창고관리",
              description: [
                "창고 등록, 수정, 삭제 기능 구현",
                "Google Map을 활용한 GIS 기반 창고 위치 시각화",
                "Kakao 주소 API 활용한 정확한 주소 등록"
              ]
            },
            {
              title: "창고구역관리",
              description: [
                "창고 구역 등록 및 최적화 배치",
                "비동기 처리를 통한 빠른 데이터 로딩",
                "창고 및 구역 데이터 매핑",
                `세부 기능: <br> 
                  <span class="pl-4">- 드래그 앤 드롭 방식의 구역 등록/수정</span><br> 
                  <span class="pl-4">- 실제 창고 도면 기반 구역 설정</span><br> 
                  <span class="pl-4">- 층별 구역 관리</span><br> 
                  <span class="pl-4">- 구역 중첩 및 최소 면적 검증</span><br> 
                  <span class="pl-4">- 품목 이동 기능</span>`
              ]
            },
            {
              title: "발주요청관리",
              description: [
                "발주요청서 작성, 승인, 상태 관리",
                "실시간 메일 알림 시스템",
                "비즈니스 로직 기반 트랜잭션 처리"
              ]
            },
            {
              title: "재고입출고관리",
              description: [
                `창고 입고관리: <br>
                  <span class="pl-4">- 발주서 기반 입고 예정 품목 모니터링 및 입고 처리</span>`,
                `창고 출고관리: <br> 
                  <span class="pl-4">- 출하지시서 기반 출고 예정 품목 모니터링 및 출고 처리</span><br> 
                  <span class="pl-4">- 데이터베이스 트리거를 통한 자동 재고 연동</span>`
              ]
            },
            {
              title: "재고관리",
              description: [
                `실사재고 관리: <br>
                  <span class="pl-4">- 시스템 재고와 실사재고 간 오차 확인</span><br> 
                  <span class="pl-4">- 재고 조정 기능</span>`,
                `불량재고 관리: <br>
                  <span class="pl-4">- 불량 자재 추적 및 관리</span><br> 
                  <span class="pl-4">- 데이터베이스 트리거를 통한 재고 수량 자동 연동</span><br> 
                  <span class="pl-4">- 폐기 프로세스 통합 관리</span>`
            ]
            }
          ],
          features: ["품목관리", "창고관리", "창고구역관리", "발주요청관리", "재고입출고관리" , "재고입출고관리" , "재고관리", "발주관리", "대시보드", "메일관리", "로그인/권한관리", "알람", "전자결재관리", "판매관리", "게시판관리", "인사관리", "시스템관리"],
          github: "https://github.com/yuseonyoung/FinalProject"
        }
      },
      {
        id: 3,
        title: "등산어때",
        description: "등산러들을 위한 sns",
        image: "/images/mountainProject.png",
        technologies: ["Qgis", "Geoserver", "EgovFramework","javascript", "java"],
        details: {
          overview: `Gis(지리 정보 시스템)과 EgovFramework(전자정부 서비스 개발표준 프레임워크)를 공부하기 위하여 시작된 토이 프로젝트이며 <br>
                    최근 등산이 유행한다고 하여 등산러들을 위한 SNS를 기획하여 만들었고, 벤치마킹은 Instagram을 참고하여 만들었습니다. <br>
                    <p><strong>[ Github의 readMe에 더욱 자세한 설명이 작성되어 있습니다. ]</strong></p>
                    `,
          period : null,
          teamComposition : null,
          myRole : null,
          detailedRoles : null, 
          features: ["로그인", "게시물관리", "친구의 게시물 조회", "모집게시물 관리", "댓글" , "도 경계 조회 및 선택" , "100대명산 정보 조회", "지역통계"],
          github: "https://github.com/yuseonyoung/mountain_projects?tab=readme-ov-file"
        }
      },
      {
        id: 4,
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
          period : null,
          teamComposition : null,
          myRole : null,    
          detailedRoles : null,      
          features: ["인터파크 서버 시간 동기화", "Google Chrome 계정 동기화", "티켓 예매", "계정별 API호출", "캡챠인증"],
          demo: "/video/interparkTestVideo.mp4"
        }
      },
      {
        id: 5,
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
          period : null,
          teamComposition : null,
          myRole : null,        
          detailedRoles : null,  
          features: ["파일 업로드", "3D모델 Viewer"],
          demo: "/video/3DModelViewer.mp4",
          github: "https://github.com/yuseonyoung/3DModelViewer"
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