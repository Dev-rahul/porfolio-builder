import { ThemeProps } from './types';
import { Globe, Mail, ExternalLink, Code, Terminal, Cpu, MapPin, Phone } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

export default function CyberpunkTheme({ data, projects }: ThemeProps) {
  const glitchVariants: any = {
    hidden: { opacity: 0, x: -10 },
    show: { 
      opacity: 1, x: 0,
      transition: { duration: 0.2, yoyo: Infinity, repeatDelay: 5 }
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-cyan-400 font-mono selection:bg-pink-500 selection:text-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Scanline overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>

      <div className="relative z-10 max-w-6xl mx-auto p-6 md:p-12">
        
        {/* Header */}
        <header className="border-l-4 border-pink-500 pl-6 mb-20 relative">
          <div className="absolute -left-[4px] top-0 w-2 h-8 bg-pink-500 animate-pulse"></div>
          {data.profileImage && (
            <img src={data.profileImage} alt={data.name} className="w-24 h-24 object-cover mb-8 border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] filter contrast-125" />
          )}
          <motion.h1 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-5xl md:text-7xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 uppercase tracking-tighter"
            style={{ textShadow: '0 0 10px rgba(34,211,238,0.3)' }}
          >
            {data.name}
          </motion.h1>
          <div className="text-xl md:text-2xl text-pink-500 mb-6 uppercase tracking-widest bg-pink-500/10 inline-block px-2 py-1 border border-pink-500/30">
            {'>'} {data.title}
          </div>
          <p className="text-cyan-100/70 max-w-2xl leading-relaxed mb-8">{data.bio}</p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-8 text-sm uppercase tracking-widest text-pink-500">
            {data.location && (
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-cyan-400" /> {data.location}</span>
            )}
            {data.phone && (
              <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-cyan-400" /> {data.phone}</span>
            )}
          </div>

          <div className="flex gap-4">
            <a href={`mailto:${data.email}`} className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-2 uppercase tracking-widest text-sm transition-all shadow-[0_0_10px_rgba(34,211,238,0.2)] hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] flex items-center gap-2">
              <Mail className="w-4 h-4" /> Initialize_Contact
            </a>
            {data.socialLinks.map(link => (
              <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-black w-10 h-10 flex items-center justify-center transition-all shadow-[0_0_10px_rgba(236,72,153,0.2)] hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]" title={link.platform}>
                <Globe className="w-4 h-4" />
              </a>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {/* Skills Area */}
          <div className="lg:col-span-1 space-y-8">
            <h3 className="text-2xl uppercase text-white flex items-center gap-2 border-b border-white/20 pb-2">
              <Cpu className="text-pink-500" /> Sys_Modules
            </h3>
            {data.skills?.map((group, i) => (
              <div key={i} className="bg-cyan-950/30 border border-cyan-900/50 p-4 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h4 className="text-pink-400 uppercase text-xs tracking-[0.2em] mb-4">{group.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(skill => (
                    <span key={skill} className="bg-black border border-cyan-800 text-cyan-300 px-2 py-1 text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Experience Area */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl uppercase text-white flex items-center gap-2 border-b border-white/20 pb-2">
              <Terminal className="text-cyan-400" /> Exec_Log
            </h3>
            <div className="space-y-6">
              {data.experience?.map((exp, i) => (
                <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={glitchVariants} key={i} className="flex flex-col md:flex-row gap-4 group">
                  <div className="md:w-1/4 text-pink-500 text-sm mt-1">{exp.duration}</div>
                  <div className="md:w-3/4 bg-black border border-cyan-900 p-6 relative">
                    <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500 opacity-50"></div>
                    <h4 className="text-xl text-white uppercase mb-1">{exp.role}</h4>
                    <div className="text-cyan-400 mb-4 tracking-wider text-sm">@ {exp.company}</div>
                    <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects */}
        {projects?.length > 0 && (
          <section>
            <h3 className="text-2xl uppercase text-white flex items-center gap-2 border-b border-white/20 pb-2 mb-8">
              Data_Nodes // Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, i) => (
                <div key={i} className="border border-pink-900 bg-black/50 relative overflow-hidden group">
                  {/* Decorative corners */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-pink-500"></div>
                  <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-pink-500"></div>
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-pink-500"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-pink-500"></div>

                  {project.image && (
                    <div className="h-48 overflow-hidden relative">
                      <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors"></div>
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover filter contrast-125 sepia-[.3] hue-rotate-180" />
                    </div>
                  )}
                  <div className="p-6">
                    <h4 className="text-xl text-white uppercase mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                    <p className="text-gray-400 text-sm mb-6 h-20 overflow-hidden">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map(tech => (
                        <span key={tech} className="text-xs text-pink-400 bg-pink-950/30 px-2 py-0.5">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 border-t border-white/10 pt-4">
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-sm text-cyan-400 hover:text-white uppercase flex items-center gap-1">
                          [Deploy] <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-sm text-pink-400 hover:text-white uppercase flex items-center gap-1">
                          [Source] <Code className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
