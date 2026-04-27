import { ThemeProps } from './types';
import { Globe, Mail, ExternalLink, Code, GraduationCap, Award, Briefcase, MapPin, Phone } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

export default function GlassTheme({ data, projects }: ThemeProps) {
  const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen relative font-sans text-white/90 overflow-x-hidden selection:bg-white/30">
      {/* Mesh Gradient Background */}
      <div className="fixed inset-0 z-0 bg-slate-900">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-[500px] h-[500px] bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto p-6 md:p-12">
        {/* Header */}
        <motion.header 
          initial="hidden" animate="show" variants={fadeUp}
          className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-[2.5rem] shadow-2xl mb-12"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {data.profileImage && (
              <img src={data.profileImage} alt={data.name} className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-xl" />
            )}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">{data.name}</h1>
              <h2 className="text-xl md:text-2xl text-teal-300 font-medium mb-6">{data.title}</h2>
              <p className="text-lg text-white/80 leading-relaxed max-w-2xl mb-6">{data.bio}</p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8 text-sm text-teal-100 font-medium tracking-wide">
                {data.location && (
                  <span className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full border border-white/5"><MapPin className="w-4 h-4 text-teal-300" /> {data.location}</span>
                )}
                {data.phone && (
                  <span className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full border border-white/5"><Phone className="w-4 h-4 text-teal-300" /> {data.phone}</span>
                )}
              </div>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a href={`mailto:${data.email}`} className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex items-center gap-2 transition-all">
                  <Mail className="w-5 h-5" /> Contact Me
                </a>
                {data.socialLinks.map(link => (
                  <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 w-12 h-12 flex justify-center items-center rounded-full transition-all" title={link.platform}>
                    <Globe className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Skills */}
          {data.skills?.length > 0 && (
            <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem]">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3"><Code className="text-purple-400" /> Technical Skills</h3>
              <div className="space-y-6">
                {data.skills.map((group, i) => (
                  <div key={i}>
                    <h4 className="text-sm font-medium text-white/50 uppercase tracking-widest mb-3">{group.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map(skill => (
                        <span key={skill} className="bg-white/10 px-4 py-2 rounded-xl text-sm border border-white/5">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* Experience */}
          {data.experience?.length > 0 && (
            <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-[2rem]">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3"><Briefcase className="text-teal-400" /> Experience</h3>
              <div className="space-y-8">
                {data.experience.map((exp, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-white/10">
                    <div className="absolute w-3 h-3 bg-teal-400 rounded-full -left-[7px] top-2"></div>
                    <h4 className="text-lg font-bold">{exp.role}</h4>
                    <div className="text-teal-300 text-sm mb-2">{exp.company} <span className="text-white/40 ml-2">{exp.duration}</span></div>
                    <p className="text-white/70 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}
        </div>

        {/* Projects */}
        {projects?.length > 0 && (
          <motion.section initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h3 className="text-3xl font-bold mb-8 pl-4">Selected Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2rem] overflow-hidden group hover:bg-white/10 transition-colors">
                  {project.image && (
                    <div className="h-56 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-700" />
                    </div>
                  )}
                  <div className="p-8">
                    <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                    <p className="text-white/70 mb-6 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.techStack.map(tech => (
                        <span key={tech} className="text-xs bg-black/20 text-teal-200 px-3 py-1 rounded-full border border-teal-500/20">{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold px-5 py-2.5 rounded-full text-sm transition-colors flex items-center gap-2">
                          Live Demo <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 border border-white/10 font-semibold px-5 py-2.5 rounded-full text-sm transition-colors flex items-center gap-2">
                          Source <Code className="w-4 h-4" />
                        </a>
                      )}
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
