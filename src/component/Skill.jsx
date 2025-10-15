import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Skills from "../assets/Skills.png";
import Gradient from "../assets/Gradient.png";
import { HiCursorClick } from "react-icons/hi";

export default function Skill() {
  const navigate = useNavigate();
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      // Check if we're in development environment
      const isDevelopment = window.location.hostname === 'localhost';
      
      if (!isDevelopment) {
        // In production, use static data or skip API calls
        setFeaturedProjects([]);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "http://localhost:3000/api/projects/featured?limit=2"
        );
        const data = await response.json();

        if (data.success) {
          setFeaturedProjects(data.data);
        } else {
          setFeaturedProjects([]);
        }
      } catch (error) {
        console.error("Error fetching featured projects:", error);
        setFeaturedProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProjects();
  }, []);

  const handleProjectClick = (projectSlug) => {
    navigate(`/project-detail/${projectSlug}`);
    window.scrollTo(0, 0);
  };

  const handleViewAllClick = () => {
    navigate("/projects");
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Mobile & Tablet Layout */}
      <div className="w-[90%] sm:w-[80%] md:w-[70%] h-max m-auto mt-[6rem] sm:mt-[8rem] md:mt-[10rem] flex items-center justify-center flex-col lg:hidden">
        <div className="text-center mb-8">
          <img src={Skills} alt="" className="w-[100%] sm:w-[250px] mx-auto" />
        </div>

        {/* Show projects only if available */}
        {featuredProjects.length > 0 &&
          featuredProjects.slice(0, 2).map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.slug)}
              className={`h-max w-full ${
                index === 0 ? "mt-8 sm:mt-12" : "mt-12 sm:mt-16"
              } relative cursor-pointer hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="w-[100%] h-[100%] flex flex-col">
                <div className="h-[200px] sm:h-[250px] w-[100%] mb-6">
                  <div className="h-[100%] w-[100%] bg-[#2b0b3a] rounded-xl flex items-end justify-end">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-[95%] h-[95%] object-cover rounded-xl"
                    />
                  </div>
                </div>

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
                  <div
                    className={`flex gap-2 ${index === 0 ? "" : "justify-start"}`}
                  >
                    <HiCursorClick size={18} color="white" />
                    <HiCursorClick size={18} color="white" />
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Show "View All" button only if projects exist */}
        {featuredProjects.length > 0 && (
          <div className="flex justify-center mt-12 sm:mt-16">
            <button
              onClick={handleViewAllClick}
              className="border-2 border-[#7127BA] rounded-[16px] bg-gradient-to-r from-[#25104a] via-[#2b0b3a] to-[#483670] text-white text-[14px] sm:text-[16px] font-semibold py-[12px] px-8 hover:bg-gradient-to-r hover:from-[#7127BA] hover:to-[#9857D3] hover:border-[#9857D3] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7127BA]/30"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>

      {/* Desktop Layout */}
      <div className="w-[60%] h-max m-auto mt-[10rem] flex items-center justify-center flex-col hidden lg:block">
        <img src={Skills} alt="" />

        {featuredProjects.length > 0 &&
          featuredProjects.slice(0, 2).map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.slug)}
              className="h-max w-full mt-20 relative cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={Gradient}
                alt=""
                className={`h-[35rem] absolute top-[10rem] ${
                  index === 0 ? "right-0" : "left-0"
                } -translate-y-1/2 -z-10`}
              />
              <div className="w-[100%] h-[100%] flex">
                {index === 0 ? (
                  <>
                    {/* First project layout */}
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
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-[95%] h-[95%] object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Second project layout */}
                    <div className="h-[250px] w-[45%]">
                      <div className="h-[100%] w-[100%] bg-[#2b0b3a] rounded-xl flex">
                        <img
                          src={project.thumbnail}
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

        {/* Show button only if projects exist */}
        {featuredProjects.length > 0 && (
          <div className="flex justify-center mt-16">
            <button
              onClick={handleViewAllClick}
              className="border-2 border-[#7127BA] rounded-[16px] bg-gradient-to-r from-[#25104a] via-[#2b0b3a] to-[#483670] text-white text-[16px] font-semibold py-[12px] px-8 hover:bg-gradient-to-r hover:from-[#7127BA] hover:to-[#9857D3] hover:border-[#9857D3] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7127BA]/30"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </>
  );
}
