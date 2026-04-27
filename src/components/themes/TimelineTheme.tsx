import { ThemeProps } from './types';
import { Globe, Mail, ExternalLink, Code, Briefcase, ChevronRight, MapPin, Phone } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

export default function TimelineTheme({ data, projects }: ThemeProps) {
  const lineVariants: any = {
    hidden: { height: 0 },
    show: { height: "100%", transition: { duration: 1.5, ease: "easeInOut" } }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-stone-200">
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        {/* Header section without timeline line */}
        <header className="mb-32 text-center md:text-left flex flex-col md:flex-row items-center gap-12">
          {data.profileImage && (
            <motion.img 
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
              src={data.profileImage} alt={data.name} 
              className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-stone-200" 
            />
          )}
          <div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-5xl md:text-7xl font-light tracking-tight mb-4 text-stone-900">{data.name}</motion.h1>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-2xl text-stone-500 font-medium tracking-wide mb-6">{data.title}</motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto md:mx-0 mb-8">{data.bio}</motion.p>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 text-sm text-stone-500 font-medium tracking-wide">
              {data.location && (
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {data.location}</span>
              )}
              {data.phone && (
                <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> {data.phone}</span>
              )}
            </motion.div>
            
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="flex justify-center md:justify-start gap-4 mt-8">
              <a href={`mailto:${data.email}`} className="text-stone-500 hover:text-stone-900 transition-colors p-2"><Mail className="w-6 h-6" /></a>
              {data.socialLinks.map(link => (
                <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-900 transition-colors p-2" title={link.platform}>
                  <Globe className="w-6 h-6" />
                </a>
              ))}
            </motion.div>
          </div>
        </header>

        {/* Timeline Section */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-stone-200 transform md:-translate-x-1/2 hidden sm:block">
            <motion.div variants={lineVariants} initial="hidden" animate="show" className="w-full bg-stone-800" />
          </div>

          <div className="space-y-24">
            
            {/* Experience Label */}
            <div className="relative flex justify-start md:justify-center">
              <div className="bg-stone-800 text-white px-6 py-2 rounded-full font-medium tracking-widest uppercase text-sm shadow-lg z-10">
                The Journey
              </div>
            </div>

            {/* Experience Items */}
            {data.experience?.map((exp, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={itemVariants} className={`relative flex flex-col md:flex-row items-center justify-between ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-stone-800 border-4 border-stone-50 transform -translate-x-1/2 z-10 hidden sm:block" />
                <div className={`w-full md:w-5/12 pl-12 sm:pl-16 md:pl-0 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                    <span className="text-stone-400 font-mono text-sm block mb-2">{exp.duration}</span>
                    <h3 className="text-2xl font-semibold text-stone-900 mb-1">{exp.role}</h3>
                    <h4 className="text-lg text-stone-500 mb-4">{exp.company}</h4>
                    <p className="text-stone-600 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Projects Label */}
            {projects?.length > 0 && (
              <div className="relative flex justify-start md:justify-center mt-32">
                <div className="bg-stone-800 text-white px-6 py-2 rounded-full font-medium tracking-widest uppercase text-sm shadow-lg z-10">
                  Featured Work
                </div>
              </div>
            )}

            {/* Projects Items */}
            {projects?.map((project, i) => (
              <motion.div key={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} variants={itemVariants} className={`relative flex flex-col md:flex-row items-center justify-between ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-stone-800 border-4 border-stone-50 transform -translate-x-1/2 z-10 hidden sm:block" />
                <div className={`w-full md:w-5/12 pl-12 sm:pl-16 md:pl-0 ${i % 2 !== 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden group hover:shadow-xl transition-all duration-300">
                    {project.image && (
                      <div className="h-48 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    )}
                    <div className="p-8">
                      <h3 className="text-2xl font-semibold text-stone-900 mb-3">{project.title}</h3>
                      <p className="text-stone-600 leading-relaxed mb-6">{project.description}</p>
                      <div className={`flex flex-wrap gap-2 mb-6 ${i % 2 !== 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        {project.techStack.map(tech => (
                          <span key={tech} className="bg-stone-100 text-stone-600 px-3 py-1 rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className={`flex gap-4 ${i % 2 !== 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        {project.liveLink && (
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-semibold text-stone-900 hover:text-stone-500 transition-colors">
                            Visit Site <ChevronRight className="w-4 h-4" />
                          </a>
                        )}
                        {project.githubLink && (
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-semibold text-stone-500 hover:text-stone-900 transition-colors">
                            Source <Code className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}
