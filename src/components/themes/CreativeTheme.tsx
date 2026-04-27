import { ThemeProps } from './types';
import { Globe, Mail, ExternalLink, Code, MapPin, Phone } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

export default function CreativeTheme({ data, projects }: ThemeProps) {
  const stagger: any = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const popIn: any = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 15 } }
  };

  return (
    <div className="min-h-screen bg-[#FDF9F1] text-[#2D2D2A] font-sans selection:bg-[#FFD166] selection:text-black overflow-hidden relative">
      
      {/* Decorative Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#EF476F] rounded-full mix-blend-multiply filter blur-[80px] opacity-20 pointer-events-none animate-pulse"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#118AB2] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="fixed top-[20%] right-[10%] w-[30vw] h-[30vw] bg-[#FFD166] rounded-full mix-blend-multiply filter blur-[60px] opacity-30 pointer-events-none animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        
        {/* Header */}
        <header className="mb-32">
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            {data.profileImage && (
              <motion.div initial={{ rotate: -10, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} transition={{ type: 'spring' }} className="relative">
                <div className="absolute inset-0 bg-[#06D6A0] rounded-full transform translate-x-4 translate-y-4"></div>
                <img src={data.profileImage} alt={data.name} className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover relative z-10 border-4 border-white" />
              </motion.div>
            )}
            <div className="text-center md:text-left flex-1 mt-4 md:mt-0">
              <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-[#2D2D2A]" style={{ fontFamily: 'Impact, sans-serif' }}>
                {data.name}
              </motion.h1>
              <motion.h2 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-2xl md:text-4xl font-bold text-[#EF476F] mb-6 inline-block bg-[#EF476F]/10 px-4 py-2 rounded-xl transform -rotate-1">
                {data.title}
              </motion.h2>
              <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto md:mx-0 mb-8 text-[#2D2D2A]/80">
                {data.bio}
              </motion.p>
              
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                {data.location && (
                  <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm font-semibold text-sm border border-[#2D2D2A]/10"><MapPin className="w-4 h-4 text-[#118AB2]" /> {data.location}</span>
                )}
                {data.phone && (
                  <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm font-semibold text-sm border border-[#2D2D2A]/10"><Phone className="w-4 h-4 text-[#06D6A0]" /> {data.phone}</span>
                )}
              </motion.div>

              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="flex justify-center md:justify-start gap-4">
                <a href={`mailto:${data.email}`} className="bg-[#118AB2] hover:bg-[#0E7490] text-white p-4 rounded-full transition-transform hover:scale-110 shadow-lg">
                  <Mail className="w-6 h-6" />
                </a>
                {data.socialLinks.map(link => (
                  <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 text-[#2D2D2A] p-4 rounded-full transition-transform hover:scale-110 shadow-lg" title={link.platform}>
                    <Globe className="w-6 h-6" />
                  </a>
                ))}
              </motion.div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
          
          {/* Skills Area */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="text-4xl font-black mb-8 transform -rotate-2 inline-block bg-[#FFD166] px-4 py-1">Superpowers</h3>
              <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-6">
                {data.skills?.map((group, i) => (
                  <motion.div variants={popIn} key={i} className="bg-white p-6 rounded-3xl shadow-sm border-2 border-[#2D2D2A]/5">
                    <h4 className="text-lg font-bold text-[#118AB2] mb-4">{group.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map(skill => (
                        <span key={skill} className="bg-[#FDF9F1] text-[#2D2D2A] px-4 py-2 rounded-xl text-sm font-bold shadow-[2px_2px_0px_0px_rgba(45,45,42,0.1)] border border-[#2D2D2A]/10">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Experience Area */}
          <div className="lg:col-span-7">
            <h3 className="text-4xl font-black mb-8 transform rotate-1 inline-block bg-[#06D6A0] px-4 py-1 text-white">The Journey</h3>
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-8">
              {data.experience?.map((exp, i) => (
                <motion.div variants={popIn} key={i} className="group relative">
                  <div className="absolute inset-0 bg-[#2D2D2A] rounded-3xl transform translate-x-2 translate-y-2 opacity-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
                  <div className="relative bg-white p-8 rounded-3xl border-2 border-[#2D2D2A]/10">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
                      <h4 className="text-2xl font-black text-[#2D2D2A]">{exp.role}</h4>
                      <span className="bg-[#EF476F]/10 text-[#EF476F] font-bold px-3 py-1 rounded-full text-sm mt-2 sm:mt-0 self-start">{exp.duration}</span>
                    </div>
                    <div className="text-xl font-bold text-[#118AB2] mb-4">{exp.company}</div>
                    <p className="text-[#2D2D2A]/70 font-medium text-lg leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

        {/* Projects */}
        {projects?.length > 0 && (
          <section>
            <div className="text-center mb-16">
              <h3 className="text-5xl md:text-6xl font-black inline-block relative">
                <span className="relative z-10">Cool Stuff I Built</span>
                <div className="absolute bottom-2 left-0 w-full h-4 bg-[#FFD166] z-0 -rotate-1"></div>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {projects.map((project, i) => (
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} key={i} className="bg-white rounded-[3rem] overflow-hidden shadow-xl border-4 border-white group">
                  {project.image && (
                    <div className="h-64 overflow-hidden relative">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                  )}
                  <div className="p-8 md:p-10 relative">
                    <div className="absolute top-0 right-10 transform -translate-y-1/2 flex gap-2">
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-[#EF476F] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      )}
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-[#2D2D2A] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
                          <Code className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                    
                    <h4 className="text-3xl font-black mb-4 mt-4">{project.title}</h4>
                    <p className="text-[#2D2D2A]/70 font-medium text-lg mb-8 line-clamp-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map(tech => (
                        <span key={tech} className="bg-[#FDF9F1] text-[#118AB2] px-4 py-2 rounded-xl text-sm font-bold border border-[#118AB2]/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
