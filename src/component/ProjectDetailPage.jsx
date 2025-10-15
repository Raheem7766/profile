import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { HiCursorClick } from 'react-icons/hi'
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import Port from "../assets/port.png";
import Portfolio from "../assets/Portfolio-1.png";

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch project details from API
  useEffect(() => {
    const fetchProject = async () => {
      // Check if we're in development environment
      const isDevelopment = window.location.hostname === 'localhost';
      
      if (!isDevelopment) {
        // In production, redirect to projects page since we don't have backend data
        navigate('/projects');
        return;
      }

      try {
        const response = await fetch(`http://localhost:3000/api/projects/slug/${projectId}`);
        const data = await response.json();
        
        if (data.success) {
          setProject(data.data);
        } else {
          console.error('Failed to fetch project:', data.error);
          setError(data.error);
        }
      } catch (error) {
        console.error('Error fetching project:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (projectId) {
      fetchProject();
    }
  }, [projectId, navigate]);

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7127BA] mx-auto mb-4"></div>
          <p className="text-white text-[18px]">Loading project details...</p>
        </div>
      </div>
    );
  }

  // Show error state
  if (error && !project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-[18px] mb-4">Error loading project: {error}</p>
          <button 
            onClick={() => navigate('/projects')}
            className="bg-[#7127BA] text-white px-6 py-3 rounded-lg hover:bg-[#9857D3] transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  // Show not found state
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className='text-[32px] font-bold text-white mb-4'>Project Not Found</h1>
          <p className='text-white text-[18px] mb-8'>The project you're looking for doesn't exist.</p>
          <button
            onClick={() => {
              navigate('/projects');
              window.scrollTo(0, 0);
            }}
            className='border-2 border-[#7127BA] rounded-[16px] bg-gradient-to-r from-[#25104a] via-[#2b0b3a] to-[#483670] text-white text-[16px] font-semibold py-[12px] px-8 hover:bg-gradient-to-r hover:from-[#7127BA] hover:to-[#9857D3] hover:border-[#9857D3] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7127BA]/30'
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-0'>
      <div className='w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto'>
        {/* Back Button */}
        <div className='mb-6 sm:mb-8'>
          <button
            onClick={() => {
              navigate('/projects');
              window.scrollTo(0, 0);
            }}
            className='inline-flex items-center gap-2 text-[#7127BA] hover:text-[#9857D3] transition-colors text-[14px] sm:text-[16px] font-medium'
          >
            <FaArrowLeft size={16} />
            Back to Projects
          </button>
        </div>

        {/* Project Header */}
        <div className='mb-8 sm:mb-12'>
          <div className='flex items-center gap-2 mb-4'>
            <span className='text-[#9857D3] text-[14px] sm:text-[16px] font-medium bg-[#7127BA]/20 px-3 py-1 rounded-[8px]'>
              {project.category}
            </span>
            <div className='flex gap-1'>
              <HiCursorClick size={18} color="white" />
              <HiCursorClick size={18} color="white" />
            </div>
          </div>
          
          <h1 className='text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold text-white mb-4'>
            {project.title}
          </h1>
          
          <p className='text-white text-[16px] sm:text-[18px] lg:text-[20px] opacity-80 leading-relaxed'>
            {project.description}
          </p>
        </div>

        {/* Project Image */}
        <div className='mb-8 sm:mb-12'>
          <div className='h-[300px] sm:h-[400px] md:h-[500px] w-[100%] rounded-[16px] sm:rounded-[20px] overflow-hidden'>
            <div className='h-[100%] w-[100%] bg-[#2b0b3a] rounded-[16px] sm:rounded-[20px] flex items-center justify-center'>
              <img src={project.thumbnail} alt={project.title} className='w-[90%] h-[90%] object-cover rounded-[12px]' />
            </div>
          </div>
        </div>

        {/* Project Details Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12'>
          {/* Left Column */}
          <div className='space-y-8'>
            {/* About Project */}
            <div className='bg-gradient-to-r from-[#25104a] via-[#2b0b3a] to-[#483670] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 border-2 border-[#7127BA]'>
              <h2 className='text-[22px] sm:text-[24px] font-bold text-white mb-4'>About This Project</h2>
              <p className='text-white text-[14px] sm:text-[16px] opacity-80 leading-relaxed'>
                {project.long_description || project.description}
              </p>
            </div>

            {/* Key Features */}
            <div className='bg-gradient-to-r from-[#25104a] via-[#2b0b3a] to-[#483670] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 border-2 border-[#7127BA]'>
              <h2 className='text-[22px] sm:text-[24px] font-bold text-white mb-4'>Key Features</h2>
              <ul className='space-y-2'>
                {(project.features || []).map((feature, index) => (
                  <li key={index} className='flex items-start gap-3'>
                    <div className='w-2 h-2 bg-[#7127BA] rounded-full mt-2 flex-shrink-0'></div>
                    <span className='text-white text-[14px] sm:text-[15px] opacity-80'>
                      {typeof feature === 'string' ? feature : feature.name || feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className='space-y-8'>
            {/* Project Info */}
            <div className='bg-gradient-to-r from-[#25104a] via-[#2b0b3a] to-[#483670] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 border-2 border-[#7127BA]'>
              <h2 className='text-[22px] sm:text-[24px] font-bold text-white mb-4'>Project Information</h2>
              <div className='space-y-3'>
                <div className='flex justify-between'>
                  <span className='text-[#9857D3] font-medium'>Duration:</span>
                  <span className='text-white'>{project.duration}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-[#9857D3] font-medium'>Team Size:</span>
                  <span className='text-white'>{project.team_size || project.team || 'Solo'}</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-[#9857D3] font-medium'>Category:</span>
                  <span className='text-white'>{project.category}</span>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className='bg-gradient-to-r from-[#25104a] via-[#2b0b3a] to-[#483670] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 border-2 border-[#7127BA]'>
              <h2 className='text-[22px] sm:text-[24px] font-bold text-white mb-4'>Technologies Used</h2>
              <div className='flex flex-wrap gap-2'>
                {(project.technologies || []).map((tech, index) => (
                  <span 
                    key={index}
                    className='text-[12px] sm:text-[14px] bg-[#1a0b2e] text-[#9857D3] px-3 py-2 rounded-[8px] border border-[#7127BA]'
                  >
                    {typeof tech === 'string' ? tech : tech.name || tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className='bg-gradient-to-r from-[#25104a] via-[#2b0b3a] to-[#483670] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 border-2 border-[#7127BA]'>
              <h2 className='text-[22px] sm:text-[24px] font-bold text-white mb-4'>Project Links</h2>
              <div className='space-y-3'>
                {(project.live_url || project.liveUrl) && (
                  <a
                    href={project.live_url || project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center gap-3 text-white hover:text-[#7127BA] transition-colors'
                  >
                    <FaExternalLinkAlt size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
                {(project.github_url || project.githubUrl) && (
                  <a
                    href={project.github_url || project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='flex items-center gap-3 text-white hover:text-[#7127BA] transition-colors'
                  >
                    <FaGithub size={16} />
                    <span>GitHub Repository</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='text-center'>
          <div className='bg-gradient-to-r from-[#25104a] via-[#2b0b3a] to-[#483670] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 border-2 border-[#7127BA]'>
            <h3 className='text-[22px] sm:text-[24px] lg:text-[28px] font-bold text-white mb-4'>
              Like What You See?
            </h3>
            <p className='text-white text-[14px] sm:text-[16px] lg:text-[18px] opacity-80 mb-6 px-4'>
              Let's discuss how we can work together on your next project
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4'>
              <button
                onClick={() => {
                  navigate('/contact-form');
                  window.scrollTo(0, 0);
                }}
                className='border-2 border-[#7127BA] rounded-[12px] bg-gradient-to-r from-[#25104a] via-[#2b0b3a] to-[#483670] text-white text-[14px] sm:text-[16px] font-semibold py-[10px] sm:py-[12px] px-6 sm:px-8 hover:bg-gradient-to-r hover:from-[#7127BA] hover:to-[#9857D3] hover:border-[#9857D3] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7127BA]/30'
              >
                Get In Touch
              </button>
              <button
                onClick={() => {
                  navigate('/projects');
                  window.scrollTo(0, 0);
                }}
                className='border-2 border-[#7127BA] rounded-[12px] text-white text-[14px] sm:text-[16px] font-semibold py-[10px] sm:py-[12px] px-6 sm:px-8 hover:bg-[#7127BA] transition-all duration-300 hover:scale-105'
              >
                View More Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}