import { ThemeProps } from './types';
import { Globe, Mail, Award, GraduationCap, MapPin, Phone } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function MinimalTheme({ data, projects }: ThemeProps) {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        
        {/* Header Section */}
        <header className="mb-20">
          {data.profileImage && (
            <div className="mb-8">
              <img
                src={data.profileImage}
                alt={data.name}
                className="w-24 h-24 rounded-full object-cover border-2 border-gray-100 shadow-sm"
              />
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{data.name}</h1>
          <h2 className="text-xl md:text-2xl text-gray-600 font-light mb-6">{data.title}</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mb-8">{data.bio}</p>

          <div className="flex flex-wrap gap-6 mb-8 text-sm text-gray-600">
            {data.location && (
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {data.location}</span>
            )}
            {data.phone && (
              <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> {data.phone}</span>
            )}
          </div>
          
          <div className="flex gap-4">
            <a href={`mailto:${data.email}`} className="text-gray-600 hover:text-black transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            {data.socialLinks.map((link) => (
              <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black transition-colors" title={link.platform}>
                <Globe className="w-5 h-5" />
              </a>
            ))}
          </div>
        </header>

        {/* Experience Section */}
        {data.experience?.length > 0 && (
          <section className="mb-20">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">Experience</h3>
            <div className="space-y-12">
              {data.experience.map((exp, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                  <div className="text-gray-500 text-sm mt-1">{exp.duration}</div>
                  <div className="md:col-span-3">
                    <h4 className="text-lg font-semibold">{exp.role}</h4>
                    <div className="text-gray-600 mb-3">{exp.company}</div>
                    <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education Section */}
        {data.education?.length > 0 && (
          <section className="mb-20">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">Education</h3>
            <div className="space-y-8">
              {data.education.map((edu, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
                  <div className="text-gray-500 text-sm mt-1">{edu.duration}</div>
                  <div className="md:col-span-3">
                    <h4 className="text-lg font-semibold">{edu.degree} in {edu.field}</h4>
                    <div className="text-gray-600">{edu.institution}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications Section */}
        {data.certifications?.length > 0 && (
          <section className="mb-20">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">Certifications</h3>
            <div className="space-y-4">
              {data.certifications.map((cert, i) => (
                <div key={i} className="flex items-start gap-4">
                  <Award className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                  <div>
                    {cert.url ? (
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline underline-offset-2">
                        {cert.name}
                      </a>
                    ) : (
                      <span className="font-semibold">{cert.name}</span>
                    )}
                    <div className="text-gray-500 text-sm">{cert.issuer} · {cert.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section */}
        {projects?.length > 0 && (
          <section className="mb-20">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">Selected Work</h3>
            <div className="space-y-16">
              {projects.map((project, i) => (
                <div key={i}>
                  <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map(tech => (
                      <span key={tech} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="prose prose-sm text-gray-600 max-w-none mb-4">
                    <ReactMarkdown>{project.body}</ReactMarkdown>
                  </div>

                  <div className="flex gap-4">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold underline underline-offset-4 hover:text-gray-600">
                        View Project
                      </a>
                    )}
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold underline underline-offset-4 hover:text-gray-600">
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills Section */}
        {data.skills?.length > 0 && (
          <section className="mb-20">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.skills.map((skillGroup, i) => (
                <div key={i}>
                  <h4 className="font-semibold mb-3">{skillGroup.category}</h4>
                  <ul className="text-gray-600 space-y-1">
                    {skillGroup.items.map(skill => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        <footer className="pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {data.name}. Built with Next.js & Decap CMS.
        </footer>
      </div>
    </div>
  );
}

