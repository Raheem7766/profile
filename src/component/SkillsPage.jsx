import React from 'react'
import { FaReact, FaNodeJs, FaLaravel, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub, FaMobile, FaAndroid, FaApple } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss, SiWeb3Dotjs, SiSolidity, SiEthereum, SiBitcoin, SiFlutter, SiDart, SiFirebase } from 'react-icons/si'

export default function SkillsPage() {
  const skillsData = [
    {
      title: "Web Development",
      subtitle: "MERN Stack & Laravel",
      description: "Full-stack web development using modern frameworks and technologies",
      icon: "🌐",
      technologies: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-300" /> },
        { name: "Laravel", icon: <FaLaravel className="text-red-400" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-400" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-300" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Bootstrap", icon: <FaBootstrap className="text-purple-400" /> }
      ]
    },
    {
      title: "Web 3 Development",
      subtitle: "Decentralized Applications",
      description: "Building decentralized applications and smart contracts",
      icon: "🔗",
      technologies: [
        { name: "Web3.js", icon: <SiWeb3Dotjs className="text-blue-400" /> },
        { name: "Solidity", icon: <SiSolidity className="text-gray-300" /> },
        { name: "Ethereum", icon: <SiEthereum className="text-blue-300" /> },
        { name: "Bitcoin", icon: <SiBitcoin className="text-orange-400" /> },
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> }
      ]
    },
    {
      title: "Crypto Blockchain Development",
      subtitle: "Blockchain Solutions",
      description: "Developing blockchain applications and cryptocurrency solutions",
      icon: "₿",
      technologies: [
        { name: "Blockchain", icon: <SiEthereum className="text-blue-300" /> },
        { name: "Solidity", icon: <SiSolidity className="text-gray-300" /> },
        { name: "Web3.js", icon: <SiWeb3Dotjs className="text-blue-400" /> },
        { name: "Ethereum", icon: <SiEthereum className="text-blue-300" /> },
        { name: "Bitcoin", icon: <SiBitcoin className="text-orange-400" /> },
        { name: "Smart Contracts", icon: <FaReact className="text-blue-400" /> },
        { name: "DeFi", icon: <SiWeb3Dotjs className="text-blue-400" /> },
        { name: "NFTs", icon: <SiEthereum className="text-blue-300" /> }
      ]
    },
    {
      title: "Mobile App Development",
      subtitle: "Flutter Cross-Platform",
      description: "Creating beautiful and performant mobile applications",
      icon: "📱",
      technologies: [
        { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
        { name: "Dart", icon: <SiDart className="text-blue-300" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
        { name: "Android", icon: <FaAndroid className="text-green-400" /> },
        { name: "iOS", icon: <FaApple className="text-gray-300" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
        { name: "GitHub", icon: <FaGithub className="text-white" /> }
      ]
    }
  ];

  return (
    <div className='min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-0'>
      <div className='w-full max-w-[60%] mx-auto'>
        {/* Header */}
        <div className='text-center mb-12 sm:mb-16'>
          <h1 className='text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-white mb-4'>
            My <span className='text-[#7127BA]'>Skills</span> & Expertise
          </h1>
          <p className='text-white text-[16px] sm:text-[18px] lg:text-[20px] opacity-80 max-w-[600px] mx-auto px-4'>
            I specialize in modern web technologies, blockchain development, and mobile applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8'>
          {skillsData.map((skill, index) => (
            <div 
              key={index}
              className='bg-gradient-to-r from-[#25104a] via-[#2b0b3a] to-[#483670] rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 lg:p-8 border-2 border-[#7127BA] hover:border-[#9857D3] transition-all duration-300 hover:scale-[1.02] sm:hover:scale-105 hover:shadow-lg hover:shadow-[#7127BA]/30'
            >
              {/* Skill Header */}
              <div className='flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6'>
                <div className='w-12 h-12 sm:w-16 sm:h-16 bg-[#7127BA] rounded-[12px] sm:rounded-[16px] flex items-center justify-center mb-3 sm:mb-0 sm:mr-4'>
                  <span className='text-[24px] sm:text-[32px]'>{skill.icon}</span>
                </div>
                <div className='sm:ml-0'>
                  <h3 className='text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-white mb-1'>{skill.title}</h3>
                  <p className='text-[#9857D3] text-[14px] sm:text-[16px] font-medium'>{skill.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <p className='text-white text-[14px] sm:text-[15px] lg:text-[16px] opacity-80 mb-4 sm:mb-6 leading-relaxed'>
                {skill.description}
              </p>

              {/* Technologies */}
              <div>
                <h4 className='text-white text-[16px] sm:text-[17px] lg:text-[18px] font-semibold mb-3 sm:mb-4'>Technologies & Tools:</h4>
                <div className='flex flex-wrap gap-2 sm:gap-3'>
                  {skill.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex}
                      className='flex items-center gap-1 sm:gap-2 bg-[#1a0b2e] px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded-[8px] sm:rounded-[12px] border border-[#7127BA] hover:border-[#9857D3] transition-colors'
                    >
                      <span className='text-[16px] sm:text-[18px] lg:text-[20px]'>{tech.icon}</span>
                      <span className='text-white text-[12px] sm:text-[13px] lg:text-[14px] font-medium'>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className='mt-12 sm:mt-16 text-center'>
          <div className='bg-gradient-to-r from-[#25104a] via-[#2b0b3a] to-[#483670] rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 border-2 border-[#7127BA]'>
            <h3 className='text-[24px] sm:text-[26px] lg:text-[28px] font-bold text-white mb-4'>
              Ready to Build Something Amazing?
            </h3>
            <p className='text-white text-[16px] sm:text-[17px] lg:text-[18px] opacity-80 mb-6 px-4'>
              I'm passionate about creating innovative solutions using cutting-edge technologies
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-3 sm:gap-4'>
              <div className='flex items-center justify-center gap-2 bg-[#1a0b2e] px-4 sm:px-6 py-2 sm:py-3 rounded-[10px] sm:rounded-[12px] border border-[#7127BA]'>
                <FaGitAlt className="text-orange-400 text-[16px] sm:text-[18px]" />
                <span className='text-white font-medium text-[14px] sm:text-[16px]'>Version Control</span>
              </div>
              <div className='flex items-center justify-center gap-2 bg-[#1a0b2e] px-4 sm:px-6 py-2 sm:py-3 rounded-[10px] sm:rounded-[12px] border border-[#7127BA]'>
                <FaGithub className="text-white text-[16px] sm:text-[18px]" />
                <span className='text-white font-medium text-[14px] sm:text-[16px]'>Collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}