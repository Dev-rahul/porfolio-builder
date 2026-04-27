import { ThemeProps } from './types';
import { Globe, Mail, ExternalLink, Code } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function ModernTheme({ data, projects }: ThemeProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Hero Section with Gradient */}
      <section className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white py-24 px-6 mb-16 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-12 rounded-3xl shadow-xl max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-md">{data.name}</h1>
            <h2 className="text-xl md:text-3xl font-medium text-white/90 mb-6">{data.title}</h2>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">{data.bio}</p>
            
            <div className="flex flex-wrap gap-4">
              <a href={`mailto:${data.email}`} className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-full font-semibold transition-colors flex items-center gap-2 shadow-lg">
                <Mail className="w-5 h-5" /> Get in touch
              </a>
              {data.socialLinks.map((link) => {
                const Icon = link.platform.toLowerCase() === 'github' ? Globe : 
                             link.platform.toLowerCase() === 'linkedin' ? Globe : Globe;
                return Icon ? (
                  <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-full transition-colors flex items-center justify-center backdrop-blur-sm border border-white/10">
                    <Icon className="w-5 h-5" />
                  </a>
                ) : null;
              })}
            </div>
          </div>
        </div>
        {/* Decorative background circles */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-indigo-900/20 blur-3xl"></div>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-24">
        
        {/* Experience Section */}
        {data.experience?.length > 0 && (
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-1 bg-indigo-500 rounded"></div>
              <h3 className="text-3xl font-bold text-slate-800">Experience</h3>
            </div>
            <div className="grid gap-6">
              {data.experience.map((exp, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-800">{exp.role}</h4>
                      <div className="text-indigo-600 font-medium">{exp.company}</div>
                    </div>
                    <div className="bg-slate-100 text-slate-600 px-4 py-1.5 rounded-full text-sm font-medium mt-2 md:mt-0 w-fit">
                      {exp.duration}
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {projects?.length > 0 && (
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-1 bg-purple-500 rounded"></div>
              <h3 className="text-3xl font-bold text-slate-800">Featured Work</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {project.image && (
                    <div className="h-48 bg-slate-200 relative">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="p-8 flex flex-col flex-grow">
                    <h4 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h4>
                    <p className="text-slate-600 mb-6 flex-grow">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map(tech => (
                        <span key={tech} className="text-xs font-semibold bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full border border-indigo-100">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4 pt-4 border-t border-slate-100 mt-auto">
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-indigo-600 transition-colors">
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-indigo-600 transition-colors">
                          <Code className="w-4 h-4" /> Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills Section */}
        {data.skills?.length > 0 && (
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-1 bg-pink-500 rounded"></div>
              <h3 className="text-3xl font-bold text-slate-800">Skills & Tools</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {data.skills.map((skillGroup, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
                  <h4 className="text-lg font-bold text-slate-800 mb-4">{skillGroup.category}</h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {skillGroup.items.map(skill => (
                      <span key={skill} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
      
      <footer className="bg-white py-8 text-center text-slate-500 text-sm border-t border-slate-200">
        <p>© {new Date().getFullYear()} {data.name}. Template by Decap CMS.</p>
      </footer>
    </div>
  );
}
