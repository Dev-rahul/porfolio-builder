import { ThemeProps } from './types';
import { Globe, Mail, ExternalLink, MapPin, Phone } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

export default function ZenTheme({ data, projects }: ThemeProps) {
  const fadeSlow: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] } }
  };

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-[#4A4741] font-serif selection:bg-[#D5D0C5] selection:text-black">
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        
        {/* Header */}
        <motion.header 
          initial="hidden" animate="show" variants={fadeSlow}
          className="mb-32 text-center flex flex-col items-center"
        >
          {data.profileImage && (
            <div className="mb-12 relative">
              <div className="absolute inset-0 rounded-full border border-[#D5D0C5] transform scale-110"></div>
              <img src={data.profileImage} alt={data.name} className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-1000" />
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-normal tracking-widest uppercase mb-4 text-[#2C2A26]">{data.name}</h1>
          <h2 className="text-xl italic text-[#7A7568] mb-12">{data.title}</h2>
          
          <div className="w-12 h-[1px] bg-[#D5D0C5] mb-12"></div>
          
          <p className="text-lg md:text-xl leading-loose max-w-2xl text-[#5C5850] mb-12 font-light">
            {data.bio}
          </p>

          <div className="flex flex-col items-center gap-6 text-[#7A7568] text-sm tracking-widest uppercase mb-12">
            {data.location && (
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {data.location}</span>
            )}
            {data.phone && (
              <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> {data.phone}</span>
            )}
          </div>
          
          <div className="flex justify-center gap-8">
            <a href={`mailto:${data.email}`} className="text-[#7A7568] hover:text-[#2C2A26] transition-colors flex items-center gap-2 text-sm tracking-widest uppercase">
              <Mail className="w-4 h-4" /> Email
            </a>
            {data.socialLinks.map(link => (
              <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="text-[#7A7568] hover:text-[#2C2A26] transition-colors text-sm tracking-widest uppercase" title={link.platform}>
                {link.platform}
              </a>
            ))}
          </div>
        </motion.header>

        {/* Experience */}
        {data.experience?.length > 0 && (
          <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeSlow} className="mb-32">
            <div className="flex items-center gap-6 mb-16">
              <h3 className="text-xl tracking-widest uppercase text-[#2C2A26]">Experience</h3>
              <div className="flex-1 h-[1px] bg-[#D5D0C5]"></div>
            </div>
            <div className="space-y-16">
              {data.experience.map((exp, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-12">
                  <div className="md:col-span-1 text-[#7A7568] text-sm tracking-widest">{exp.duration}</div>
                  <div className="md:col-span-3">
                    <h4 className="text-xl text-[#2C2A26] mb-2">{exp.role}</h4>
                    <div className="text-[#7A7568] italic mb-6">{exp.company}</div>
                    <p className="text-[#5C5850] leading-loose font-light">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Skills */}
        {data.skills?.length > 0 && (
          <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeSlow} className="mb-32">
            <div className="flex items-center gap-6 mb-16">
              <h3 className="text-xl tracking-widest uppercase text-[#2C2A26]">Expertise</h3>
              <div className="flex-1 h-[1px] bg-[#D5D0C5]"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {data.skills.map((group, i) => (
                <div key={i}>
                  <h4 className="text-sm tracking-widest uppercase text-[#7A7568] mb-6">{group.category}</h4>
                  <ul className="space-y-3">
                    {group.items.map(skill => (
                      <li key={skill} className="text-[#5C5850] font-light">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Projects */}
        {projects?.length > 0 && (
          <motion.section initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={fadeSlow}>
            <div className="flex items-center gap-6 mb-16">
              <h3 className="text-xl tracking-widest uppercase text-[#2C2A26]">Works</h3>
              <div className="flex-1 h-[1px] bg-[#D5D0C5]"></div>
            </div>
            <div className="space-y-24">
              {projects.map((project, i) => (
                <div key={i} className="group">
                  {project.image && (
                    <div className="mb-8 overflow-hidden bg-[#EAE6DB]">
                      <img src={project.image} alt={project.title} className="w-full h-[60vh] object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-1000" />
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-12">
                    <div className="md:col-span-1">
                      <h4 className="text-2xl text-[#2C2A26] mb-4">{project.title}</h4>
                      <div className="flex flex-col gap-2">
                        {project.techStack.map(tech => (
                          <span key={tech} className="text-[#7A7568] text-xs tracking-widest uppercase">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-3 flex flex-col justify-between">
                      <p className="text-[#5C5850] leading-loose font-light mb-8">{project.description}</p>
                      <div className="flex gap-8">
                        {project.liveLink && (
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-[#2C2A26] text-sm tracking-widest uppercase border-b border-[#D5D0C5] pb-1 hover:border-[#2C2A26] transition-colors">
                            View Site
                          </a>
                        )}
                        {project.githubLink && (
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-[#7A7568] hover:text-[#2C2A26] text-sm tracking-widest uppercase border-b border-transparent pb-1 hover:border-[#2C2A26] transition-colors">
                            Source
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

      </div>
    </div>
  );
}
