import { useEffect } from "react";

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    // 모든 디바이스에서 스크롤 방지
    const preventScroll = (e) => {
      e.preventDefault();
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    };

    // 스크롤 이벤트 리스너 추가
    window.addEventListener("touchmove", preventScroll, { passive: false });
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";

    // 클린업 함수에서 스크롤 복원
    return () => {
      window.removeEventListener("touchmove", preventScroll);
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
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
          <div className="p-6 max-h-[70vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-80 object-cover rounded-lg mb-6"
            />
            <div className="space-y-4">
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