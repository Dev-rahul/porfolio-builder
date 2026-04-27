import { ThemeProps } from './types';
import { Globe, Mail, ExternalLink, Code, MapPin, Phone } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

export default function BrutalistTheme({ data, projects }: ThemeProps) {
  return (
    <div className="min-h-screen bg-yellow-400 text-black p-4 md:p-8 font-mono">
      <div className="max-w-5xl mx-auto border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        
        {/* Header Marquee */}
        <div className="border-b-4 border-black bg-blue-500 text-white p-2 overflow-hidden flex whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="font-bold text-xl uppercase tracking-widest flex gap-8"
          >
            <span>{data.name} // {data.title}</span>
            <span>{data.name} // {data.title}</span>
            <span>{data.name} // {data.title}</span>
            <span>{data.name} // {data.title}</span>
          </motion.div>
        </div>

        <div className="p-8 md:p-12">
          {/* Hero */}
          <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
            {data.profileImage && (
              <img src={data.profileImage} alt={data.name} className="w-32 h-32 md:w-48 md:h-48 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] object-cover" />
            )}
            <div>
              <h1 className="text-5xl md:text-7xl font-black uppercase mb-4 leading-none tracking-tighter">{data.name}</h1>
              <h2 className="text-2xl md:text-3xl font-bold bg-red-500 text-white inline-block px-4 py-1 mb-6 border-2 border-black">{data.title}</h2>
              <p className="text-xl md:text-2xl font-medium leading-snug max-w-2xl mb-6">{data.bio}</p>
              
              <div className="flex flex-wrap gap-4 mb-8 font-bold uppercase text-lg">
                {data.location && (
                  <span className="flex items-center gap-2 bg-white border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"><MapPin className="w-5 h-5 text-blue-600" /> {data.location}</span>
                )}
                {data.phone && (
                  <span className="flex items-center gap-2 bg-white border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"><Phone className="w-5 h-5 text-blue-600" /> {data.phone}</span>
                )}
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <a href={`mailto:${data.email}`} className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all px-6 py-3 font-bold uppercase flex items-center gap-2">
                  <Mail className="w-6 h-6" /> Hit Me Up
                </a>
                {data.socialLinks.map(link => (
                  <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all w-14 h-14 flex justify-center items-center" title={link.platform}>
                    <Globe className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 border-t-4 border-black pt-12">
            {/* Experience */}
            <div>
              <h3 className="text-3xl font-black uppercase mb-8 flex items-center gap-4">
                <span className="bg-yellow-400 border-4 border-black px-4 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Experience</span>
              </h3>
              <div className="space-y-8">
                {data.experience?.map((exp, i) => (
                  <div key={i} className="border-4 border-black p-6 bg-blue-50">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-2xl font-bold uppercase">{exp.role}</h4>
                      <span className="bg-black text-white px-2 py-1 font-bold text-sm">{exp.duration}</span>
                    </div>
                    <div className="text-xl font-bold text-blue-600 mb-4 uppercase">{exp.company}</div>
                    <p className="font-medium text-lg border-t-4 border-black pt-4">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-3xl font-black uppercase mb-8 flex items-center gap-4">
                <span className="bg-red-500 text-white border-4 border-black px-4 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Arsenal</span>
              </h3>
              <div className="space-y-6">
                {data.skills?.map((group, i) => (
                  <div key={i} className="border-4 border-black p-6">
                    <h4 className="text-xl font-black uppercase mb-4 bg-black text-white inline-block px-3 py-1">{group.category}</h4>
                    <div className="flex flex-wrap gap-3">
                      {group.items.map(skill => (
                        <span key={skill} className="bg-yellow-400 border-2 border-black px-3 py-1 font-bold text-lg uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Projects */}
          {projects?.length > 0 && (
            <div className="border-t-4 border-black pt-12">
              <h3 className="text-4xl md:text-5xl font-black uppercase mb-12 text-center">Featured Work</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {projects.map((project, i) => (
                  <div key={i} className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col">
                    {project.image && (
                      <div className="border-b-4 border-black h-64 overflow-hidden bg-gray-200 grayscale hover:grayscale-0 transition-all duration-300">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="p-6 md:p-8 flex-grow flex flex-col">
                      <h4 className="text-3xl font-black uppercase mb-4">{project.title}</h4>
                      <p className="text-lg font-medium mb-6 flex-grow">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack.map(tech => (
                          <span key={tech} className="bg-black text-white font-bold px-2 py-1 text-sm uppercase">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4 border-t-4 border-black pt-6">
                        {project.liveLink && (
                          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 bg-red-500 text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all py-3 font-bold uppercase flex items-center justify-center gap-2">
                            Demo <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                        {project.githubLink && (
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-500 text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all py-3 font-bold uppercase flex items-center justify-center gap-2">
                            Code <Code className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
