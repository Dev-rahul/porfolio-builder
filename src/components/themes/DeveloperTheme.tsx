import { ThemeProps } from './types';
import { Globe, Mail, Terminal, ChevronRight, GraduationCap, Award } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function DeveloperTheme({ data, projects }: ThemeProps) {
  return (
    <div className="min-h-screen bg-neutral-950 text-emerald-400 font-mono selection:bg-emerald-400 selection:text-neutral-950">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* Navigation / Fake Window Bar */}
        <div className="flex items-center border border-neutral-800 rounded-t-lg bg-neutral-900 px-4 py-2 mb-0">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="mx-auto text-neutral-500 text-xs flex items-center gap-2">
            <Terminal className="w-3 h-3" /> ~/{data.name.toLowerCase().replace(/\s+/g, '-')}/portfolio
          </div>
        </div>

        {/* Main Terminal Window */}
        <div className="border-x border-b border-neutral-800 rounded-b-lg bg-neutral-950 p-6 md:p-10 shadow-2xl shadow-emerald-900/10 mb-12">
          
          <header className="mb-12 border-b border-neutral-800 pb-10">
            <div className="flex items-center text-neutral-500 mb-4">
              <span className="text-emerald-500 font-bold">➜</span>
              <span className="text-cyan-400 mx-2">~</span>
              <span>whoami</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-neutral-100">{data.name}</h1>
            <h2 className="text-xl md:text-2xl text-emerald-400 mb-6">{'>'} {data.title}</h2>
            <p className="text-neutral-400 leading-relaxed max-w-2xl text-lg">{data.bio}</p>
            
            <div className="flex gap-6 mt-8">
              <a href={`mailto:${data.email}`} className="text-neutral-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                <Mail className="w-5 h-5" /> <span>Email</span>
              </a>
              {data.socialLinks.map((link) => (
                <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <Globe className="w-5 h-5" /> <span>{link.platform}</span>
                </a>
              ))}
            </div>
          </header>

          {/* Experience Section */}
          {data.experience?.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center text-neutral-500 mb-6">
                <span className="text-emerald-500 font-bold">➜</span>
                <span className="text-cyan-400 mx-2">~</span>
                <span>cat experience.txt</span>
              </div>
              <div className="space-y-8 pl-4 border-l border-neutral-800">
                {data.experience.map((exp, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-5 top-1.5 w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-neutral-200">{exp.role} <span className="text-neutral-500 font-normal">@ {exp.company}</span></h4>
                      <div className="text-cyan-400 text-sm mt-1 md:mt-0">[{exp.duration}]</div>
                    </div>
                    <p className="text-neutral-400">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education Section */}
          {data.education?.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center text-neutral-500 mb-6">
                <span className="text-emerald-500 font-bold">➜</span>
                <span className="text-cyan-400 mx-2">~</span>
                <span>cat education.txt</span>
              </div>
              <div className="space-y-6 pl-4 border-l border-neutral-800">
                {data.education.map((edu, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-5 top-1.5 w-2 h-2 bg-cyan-500 rounded-full"></div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                      <h4 className="text-xl font-bold text-neutral-200">{edu.degree} <span className="text-neutral-500 font-normal">in {edu.field}</span></h4>
                      <div className="text-cyan-400 text-sm mt-1 md:mt-0">[{edu.duration}]</div>
                    </div>
                    <div className="text-neutral-400">{edu.institution}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications Section */}
          {data.certifications?.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center text-neutral-500 mb-6">
                <span className="text-emerald-500 font-bold">➜</span>
                <span className="text-cyan-400 mx-2">~</span>
                <span>ls -la ./certifications</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-4">
                {data.certifications.map((cert, i) => (
                  <div key={i} className="bg-neutral-900 border border-neutral-800 p-4 rounded hover:border-emerald-500/30 transition-colors">
                    <div className="text-emerald-400 text-xs mb-2">-rw-r--r-- CERT</div>
                    {cert.url ? (
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="font-bold text-neutral-200 hover:text-emerald-400 transition-colors">
                        {cert.name}
                      </a>
                    ) : (
                      <div className="font-bold text-neutral-200">{cert.name}</div>
                    )}
                    <div className="text-neutral-500 text-sm mt-1">{cert.issuer} · {cert.date}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills Section */}
          {data.skills?.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center text-neutral-500 mb-6">
                <span className="text-emerald-500 font-bold">➜</span>
                <span className="text-cyan-400 mx-2">~</span>
                <span>ls -la ./skills</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pl-4">
                {data.skills.map((skillGroup, i) => (
                  <div key={i}>
                    <h4 className="text-cyan-400 font-bold mb-3">{`drwxr-xr-x ${skillGroup.category}`}</h4>
                    <ul className="text-neutral-400 space-y-1">
                      {skillGroup.items.map(skill => (
                        <li key={skill} className="flex items-center gap-2">
                          <ChevronRight className="w-3 h-3 text-emerald-500" /> {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects Section */}
          {projects?.length > 0 && (
            <section>
              <div className="flex items-center text-neutral-500 mb-6">
                <span className="text-emerald-500 font-bold">➜</span>
                <span className="text-cyan-400 mx-2">~</span>
                <span>./run_projects.sh</span>
              </div>
              <div className="space-y-10 pl-4">
                {projects.map((project, i) => (
                  <div key={i} className="bg-neutral-900 border border-neutral-800 p-6 rounded text-neutral-300 relative group hover:border-emerald-500/30 transition-colors">
                    <h4 className="text-2xl font-bold text-emerald-400 mb-2">{project.title}</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map(tech => (
                        <span key={tech} className="text-xs bg-neutral-800 text-cyan-400 px-2 py-1">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-neutral-400 mb-4">{project.description}</p>
                    
                    <div className="flex gap-4 mt-6">
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20 px-4 py-2 text-sm transition-colors">
                          [EXECUTE DEMO]
                        </a>
                      )}
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-neutral-800 text-neutral-300 border border-neutral-700 hover:bg-neutral-700 px-4 py-2 text-sm transition-colors">
                          [VIEW SOURCE]
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          <div className="mt-12 flex items-center text-neutral-500 animate-pulse">
            <span className="text-emerald-500 font-bold">➜</span>
            <span className="text-cyan-400 mx-2">~</span>
            <span className="w-2 h-5 bg-emerald-400 inline-block ml-1"></span>
          </div>

        </div>

        <footer className="text-center text-xs text-neutral-600">
          <p>SYSTEM.EXIT(0) // © {new Date().getFullYear()} {data.name}</p>
        </footer>
      </div>
    </div>
  );
}
