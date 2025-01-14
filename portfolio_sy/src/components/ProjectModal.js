import { useEffect } from "react";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const preventScroll = (e) => {
      if (!e.target.closest('.modal-content')) {
        e.preventDefault();
      }
    };
  
    document.body.style.overflow = "hidden";
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
  
    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
        {/* 배경 클릭 시 닫힘 */}
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        {/* 모달 박스 */}
        <div className="relative inline-block w-full max-w-3xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          {/* 모달 헤더 */}
          <div className="flex items-center justify-between bg-gray-100 px-6 py-4 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <span className="sr-only">닫기</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* 모달 콘텐츠 */}
          <div 
            className="modal-content p-6 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
            // 터치 무브 이벤트 중지
            onTouchMove={(e) => {
              if (e.target.closest('.modal-content')) {
                e.stopPropagation();
              }
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-80 object-cover rounded-lg mb-6"
            />
            {/* 기술 스택 섹션 */}
            {project.technologies && project.technologies.length > 0 && (
                <div style={{ marginTop: "20px" }}>
                  <h4 className="text-lg font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-gray-200 text-gray-800 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {/* 프로젝트 기간 */}
              {project.details.period && (
                <div style={{ marginTop: "20px" }}> 
                  <h4 className="text-lg font-semibold mb-2">Project Period</h4>
                  <p className="text-gray-600">{project.details.period}</p>
                </div>
              )}
              {/* 팀 구성 */}
              {project.details.teamComposition && (
                <div style={{ marginTop: "20px" }}>
                  <h4 className="text-lg font-semibold mb-2">Team Composition</h4>
                  <p className="text-gray-600">{project.details.teamComposition}</p>
                </div>
              )}
              {/* 개인 역할 */}
              {project.details.myRole && (
                <div style={{ marginTop: "20px" }}> 
                  <h4 className="text-lg font-semibold mb-2">My Role</h4>
                  <p className="text-gray-600">{project.details.myRole}</p>
                </div>
              )}
              {/* 상세 역할 */}
              {project.details.detailedRoles && project.details.detailedRoles.length > 0 && (
                <div style={{ marginTop: "20px" }}>
                  <h4 className="text-lg font-semibold mb-2">Detailed Roles</h4>
                  {project.details.detailedRoles.map((role, index) => (
                    <div key={index} className="mb-4">
                      <h5 className="font-medium text-gray-800">{role.title}</h5>
                      <ul className="list-disc list-inside text-gray-600">
                        {role.description.map((desc, descIndex) => (
                          <li 
                            key={descIndex} 
                            dangerouslySetInnerHTML={{ __html: desc }}
                          />
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            <div className="space-y-4" style={{ marginTop: "20px" }}>
              <div>
                <h4 className="text-lg font-semibold mb-2">Overview</h4>
                <div
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{ __html: project.details.overview }}
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Key Features</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {project.details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              

              {/* GitHub 및 데모 링크 */}
              <div className="flex flex-wrap gap-4">
                {project.details.github && (
                  <a
                    href={project.details.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700"
                  >
                    View on GitHub
                  </a>
                )}
                {project.details.demo && (
                  <a
                    href={project.details.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700"
                  >
                    View Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;