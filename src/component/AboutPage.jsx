import React from 'react'
import { FaReact, FaNodeJs, FaLaravel, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub, FaUser, FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss, SiWeb3Dotjs, SiSolidity, SiEthereum, SiBitcoin, SiFlutter, SiDart, SiFirebase } from 'react-icons/si'

export default function AboutPage() {
  const aboutSections = [
    {
      title: "About Me",
      icon: <FaUser className="text-blue-400" />,
      content: "I'm a passionate Software Engineer and UI/UX Designer with 3+ years of experience in creating meaningful digital products. I specialize in modern web technologies, blockchain development, and mobile applications.",
      highlight: "Self-taught designer and developer"
    },
    {
      title: "Education & Learning",
      icon: <FaGraduationCap className="text-green-400" />,
      content: "Continuously learning and staying updated with the latest technologies. I believe in the power of self-education and hands-on experience to master new skills and frameworks.",
      highlight: "Always learning, always growing"
    },
    {
      title: "Professional Experience",
      icon: <FaBriefcase className="text-purple-400" />,
      content: "Currently working as a Software Engineer at Facebook, where I focus on creating user-centric solutions that balance business goals with user needs. I've worked on various projects spanning web development, blockchain, and mobile applications.",
      highlight: "Software Engineer at Facebook"
    },
    {
      title: "Technical Expertise",
      icon: <FaCode className="text-orange-400" />,
      content: "My expertise spans across multiple domains including MERN stack development, Laravel, Web3/Blockchain technologies, and Flutter mobile development. I enjoy working with cutting-edge technologies to solve real-world problems.",
      highlight: "Full-stack developer with blockchain expertise"
    }
  ];

  const technologies = [
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300" /> },
    { name: "Laravel", icon: <FaLaravel className="text-red-400" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
    { name: "Solidity", icon: <SiSolidity className="text-gray-300" /> },
    { name: "Web3.js", icon: <SiWeb3Dotjs className="text-blue-400" /> },
    { name: "Ethereum", icon: <SiEthereum className="text-blue-300" /> }
  ];

  return (
    <div className='min-h-screen py-6 sm:py-8 md:py-12 px-4 sm:px-6 lg:px-0'>
      <div className='w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto'>
        {/* Header */}
        <div className='text-center mb-8 sm:mb-12 md:mb-16'>
          <h1 className='text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold text-white mb-3 sm:mb-4'>
            About <span className='text-[#7127BA]'>Me</span>
          </h1>
          <p className='text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] opacity-80 max-w-[600px] mx-auto px-2 sm:px-4'>
            Get to know more about my journey, experience, and passion for technology
          </p>
        </div>

        {/* About Sections Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16'>
          {aboutSections.map((section, index) => (
            <div 
              key={index}
              className='bg-gradient-to-r from-[#25104a] via-[#2b0b3a] to-[#483670] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] p-3 sm:p-4 md:p-6 lg:p-8 border-2 border-[#7127BA] hover:border-[#9857D3] transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] md:hover:scale-105 hover:shadow-lg hover:shadow-[#7127BA]/30'
            >
              {/* Section Header */}
              <div className='flex items-center mb-3 sm:mb-4 md:mb-6'>
                <div className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#7127BA] rounded-[8px] sm:rounded-[12px] md:rounded-[16px] flex items-center justify-center mr-3 sm:mr-4'>
                  <span className='text-[16px] sm:text-[20px] md:text-[24px]'>{section.icon}</span>
                </div>
                <h3 className='text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-bold text-white'>{section.title}</h3>
              </div>

              {/* Content */}
              <p className='text-white text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] opacity-80 mb-3 sm:mb-4 leading-relaxed'>
                {section.content}
              </p>

              {/* Highlight */}
              <div className='bg-[#7127BA]/20 border border-[#7127BA] rounded-[6px] sm:rounded-[8px] p-2 sm:p-3'>
                <p className='text-[#9857D3] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-semibold'>
                  "{section.highlight}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className='mb-12 sm:mb-16'>
          <div className='text-center mb-6 sm:mb-8'>
            <h2 className='text-[22px] sm:text-[26px] md:text-[28px] lg:text-[36px] font-bold text-white mb-3 sm:mb-4'>
              Technologies I Work With
            </h2>
            <p className='text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] opacity-80 px-2'>
              Here are some of the technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className='flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4'>
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className='flex items-center gap-1 sm:gap-2 bg-[#1a0b2e] px-2 sm:px-3 md:px-4 lg:px-6 py-1 sm:py-2 md:py-3 rounded-[8px] sm:rounded-[10px] md:rounded-[12px] border border-[#7127BA] hover:border-[#9857D3] transition-colors'
              >
                <span className='text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]'>{tech.icon}</span>
                <span className='text-white text-[11px] sm:text-[12px] md:text-[13px] lg:text-[16px] font-medium'>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Values & Philosophy */}
        <div className='bg-gradient-to-r from-[#25104a] via-[#2b0b3a] to-[#483670] rounded-[12px] sm:rounded-[16px] md:rounded-[20px] p-4 sm:p-6 md:p-8 border-2 border-[#7127BA] mb-12 sm:mb-16'>
          <h2 className='text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-bold text-white mb-4 sm:mb-6 text-center'>
            My Values & Philosophy
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
            <div className='text-center'>
              <div className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#7127BA] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <span className='text-[18px] sm:text-[20px] md:text-[24px]'>🎯</span>
              </div>
              <h3 className='text-white text-[16px] sm:text-[17px] md:text-[18px] font-semibold mb-2'>User-Centric</h3>
              <p className='text-white text-[12px] sm:text-[13px] md:text-[14px] opacity-80 px-2'>
                Every design decision is made with the end user in mind
              </p>
            </div>
            <div className='text-center'>
              <div className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#7127BA] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <span className='text-[18px] sm:text-[20px] md:text-[24px]'>⚡</span>
              </div>
              <h3 className='text-white text-[16px] sm:text-[17px] md:text-[18px] font-semibold mb-2'>Performance</h3>
              <p className='text-white text-[12px] sm:text-[13px] md:text-[14px] opacity-80 px-2'>
                Building fast, efficient, and scalable applications
              </p>
            </div>
            <div className='text-center sm:col-span-2 lg:col-span-1'>
              <div className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#7127BA] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4'>
                <span className='text-[18px] sm:text-[20px] md:text-[24px]'>🚀</span>
              </div>
              <h3 className='text-white text-[16px] sm:text-[17px] md:text-[18px] font-semibold mb-2'>Innovation</h3>
              <p className='text-white text-[12px] sm:text-[13px] md:text-[14px] opacity-80 px-2'>
                Always exploring new technologies and creative solutions
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className='text-center'>
          <h3 className='text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-bold text-white mb-3 sm:mb-4'>
            Let's Work Together
          </h3>
          <p className='text-white text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] opacity-80 mb-4 sm:mb-6 px-2'>
            I'm always excited to take on new challenges and create amazing digital experiences
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4'>
            <div className='flex items-center justify-center gap-2 bg-[#1a0b2e] px-4 sm:px-6 py-2 sm:py-3 rounded-[8px] sm:rounded-[12px] border border-[#7127BA]'>
              <FaGitAlt className="text-orange-400 text-[14px] sm:text-[16px]" />
              <span className='text-white font-medium text-[13px] sm:text-[14px] md:text-[16px]'>Open Source</span>
            </div>
            <div className='flex items-center justify-center gap-2 bg-[#1a0b2e] px-4 sm:px-6 py-2 sm:py-3 rounded-[8px] sm:rounded-[12px] border border-[#7127BA]'>
              <FaGithub className="text-white text-[14px] sm:text-[16px]" />
              <span className='text-white font-medium text-[13px] sm:text-[14px] md:text-[16px]'>Collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
