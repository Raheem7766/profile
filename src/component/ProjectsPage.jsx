import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { HiCursorClick } from "react-icons/hi";
import Gradient from "../assets/Gradient.png";
import Port from "../assets/port.png";
import Portfolio from "../assets/Portfolio-1.png";

export default function ProjectsPage() {
 const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/projects?limit=20');
        const data = await response.json();

        if (data.success) {
          setProjects(data.data.projects);
        } else {
          console.error('Failed to fetch projects:', data.error);
          setError(data.error);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleProjectClick = (projectSlug) => {
    navigate(`/project-detail/${projectSlug}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Mobile and Tablet Layout (hidden on lg and xl) */}
      <div className="w-[90%] sm:w-[80%] md:w-[70%] h-max m-auto mt-[6rem] sm:mt-[8rem] md:mt-[10rem] flex items-center justify-center flex-col lg:hidden">
        {/* Mobile Header */}
        <div className="text-center mb-8">
          <h1 className='text-[28px] sm:text-[32px] md:text-[40px] font-bold text-white mb-4'>
            My <span className='text-[#7127BA]'>Projects</span>
          </h1>
          <p className='text-white text-[16px] sm:text-[18px] opacity-80 max-w-[600px] mx-auto px-4'>
            Explore my portfolio of innovative projects across different technologies and domains
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-8">
            <p className="text-white text-[16px] opacity-80">Loading projects...</p>
          </div>
        )}

        {/* Mobile Projects */}
        {projects.map((project, index) => (
          <div 
            key={project.id}
            onClick={() => handleProjectClick(project.slug)} 
            className="h-max w-full mt-8 sm:mt-12 relative cursor-pointer hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="w-[100%] h-[100%] flex flex-col">
              {/* Mobile Project Image */}
              <div className="h-[200px] sm:h-[250px] w-[100%] mb-6">
                <div className="h-[100%] w-[100%] bg-[#2b0b3a] rounded-xl flex items-center justify-center">
                  <img 
                    src={project.thumbnail || (index % 2 === 0 ? Port : Portfolio)} 
                    alt={project.title} 
                    className="w-[95%] h-[95%] object-cover rounded-xl" 
                  />
                </div>
              </div>

              {/* Mobile Project Content */}
              <div className="h-max w-[100%] relative">
                <h3 className="text-[#9857D3] text-[14px] sm:text-[16px] font-medium mb-2">
                  Featured Project
                </h3>
                <h2 className="text-[#CCD6F6] text-[20px] sm:text-[24px] md:text-[26px] font-medium mb-4">
                  {project.title}
                </h2>
                <div className="w-[100%] p-4 sm:p-6 rounded-xl text-white bg-gradient-to-r from-[#25104a] via-[#25104a] to-[#483670] mb-6">
                  <p className="text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-2">
                  <HiCursorClick size={18} color="white" />
                  <HiCursorClick size={18} color="white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout (lg and xl only) */}
      <div className="w-[60%] h-max m-auto mt-[6rem] pb-[10rem] flex items-center justify-center flex-col hidden lg:block">
        {/* Desktop Header */}
        <div className="text-center mb-12">
          <h1 className='text-[48px] font-bold text-white mb-4'>
            My <span className='text-[#7127BA]'>Projects</span>
          </h1>
          <p className='text-white text-[20px] opacity-80 max-w-[600px] mx-auto'>
            Explore my portfolio of innovative projects across different technologies and domains
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-8">
            <p className="text-white text-[18px] opacity-80">Loading projects...</p>
          </div>
        )}


        {/* Desktop Projects */}
        {projects.map((project, index) => (
          <div 
            key={project.id}
            onClick={() => handleProjectClick(project.slug)} 
            className="h-max w-full mt-20 relative cursor-pointer hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src={Gradient}
              alt=""
              className={`h-[35rem] absolute top-[10rem] ${index % 2 === 0 ? 'right-0' : 'left-0'} -translate-y-1/2 -z-10`}
            />
            <div className="w-[100%] h-[100%] flex">
              {index % 2 === 0 ? (
                // Left-aligned content (even index)
                <>
                  <div className="h-max w-[55%]">
                    <h3 className="text-[#9857D3] text-[16px] font-medium">
                      Featured Project
                    </h3>
                    <h2 className="text-[#CCD6F6] text-[26px] font-medium">
                      {project.title}
                    </h2>
                    <div className="max-w-[680px] w-[63%] p-6 rounded-xl text-white bg-gradient-to-r from-[#25104a] via-[#25104a] to-[#483670] absolute top-20 left-0">
                      <p className="text-[15px] leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 flex gap-2 pl-4">
                      <HiCursorClick size={20} color="white" />
                      <HiCursorClick size={20} color="white" />
                    </div>
                  </div>
                  <div className="h-[250px] w-[45%]">
                    <div className="h-[100%] w-[100%] bg-[#2b0b3a] rounded-xl flex items-end justify-end">
                      <img 
                        src={project.thumbnail || (index % 2 === 0 ? Port : Portfolio)} 
                        alt={project.title} 
                        className="w-[95%] h-[95%] object-cover rounded-xl" 
                      />
                    </div>
                  </div>
                </>
              ) : (
                // Right-aligned content (odd index)
                <>
                  <div className="h-[250px] w-[45%]">
                    <div className="h-[100%] w-[100%] bg-[#2b0b3a] rounded-xl flex">
                      <img 
                        src={project.thumbnail || (index % 2 === 0 ? Port : Portfolio)} 
                        alt={project.title} 
                        className="w-[100%] h-[100%] object-cover rounded-xl" 
                      />
                    </div>
                  </div>
                  <div className="h-max w-[55%]">
                    <h3 className="text-[#9857D3] text-[16px] font-medium text-right">
                      Featured Project
                    </h3>
                    <h2 className="text-[#CCD6F6] text-[26px] font-medium text-right">
                      {project.title}
                    </h2>
                    <div className="max-w-[680px] w-[63%] p-6 rounded-xl text-white bg-gradient-to-r from-[#25104a] via-[#25104a] to-[#483670] absolute top-20 right-0">
                      <p className="text-[15px] leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="absolute bottom-0 right-0 flex gap-2 pl-4">
                      <HiCursorClick size={20} color="white" />
                      <HiCursorClick size={20} color="white" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}

        {/* Desktop Bottom Section */}
        <div className="mt-16 text-center">
          <div className='bg-gradient-to-r from-[#25104a] via-[#2b0b3a] to-[#483670] rounded-[20px] p-8 border-2 border-[#7127BA]'>
            <h3 className='text-[28px] font-bold text-white mb-4'>
              Interested in Working Together?
            </h3>
            <p className='text-white text-[18px] opacity-80 mb-6'>
              Let's discuss your next project and bring your ideas to life
            </p>
            <div className='flex justify-center gap-4'>
              <button
                onClick={() => {
                  navigate('/contact-form');
                  window.scrollTo(0, 0);
                }}
                className='border-2 border-[#7127BA] rounded-[12px] bg-gradient-to-r from-[#25104a] via-[#2b0b3a] to-[#483670] text-white text-[16px] font-semibold py-[12px] px-8 hover:bg-gradient-to-r hover:from-[#7127BA] hover:to-[#9857D3] hover:border-[#9857D3] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7127BA]/30'
              >
                Get In Touch
              </button>
              <button
                onClick={() => {
                  navigate('/');
                  window.scrollTo(0, 0);
                }}
                className='border-2 border-[#7127BA] rounded-[12px] text-white text-[16px] font-semibold py-[12px] px-8 hover:bg-[#7127BA] transition-all duration-300 hover:scale-105'
              >
                Back to Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
