const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="mt-3 max-h-[70vh] overflow-y-auto">
              <h3 className="text-2xl font-bold leading-6 text-gray-900 mb-4">
                {project.title}
              </h3>
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
    </div>
  );
};

export default ProjectModal;
