import { ThemeProps } from './types';
import { Globe, Mail, ExternalLink, Code, Briefcase, GraduationCap, Award, MapPin, Phone } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

export default function BentoTheme({ data, projects }: ThemeProps) {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4 md:p-8 font-sans">
      <motion.div 
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Intro Box - Spans 2 cols */}
        <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 col-span-1 md:col-span-2 shadow-sm border border-gray-200/50 flex flex-col justify-between">
          <div>
            {data.profileImage && (
              <img src={data.profileImage} alt={data.name} className="w-16 h-16 rounded-2xl mb-6 object-cover" />
            )}
            <h1 className="text-4xl font-bold tracking-tight mb-2">{data.name}</h1>
            <h2 className="text-xl text-indigo-600 font-medium mb-4">{data.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{data.bio}</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-2 text-sm text-gray-500 font-medium">
              {data.location && (
                <span className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100"><MapPin className="w-4 h-4 text-indigo-500" /> {data.location}</span>
              )}
              {data.phone && (
                <span className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100"><Phone className="w-4 h-4 text-indigo-500" /> {data.phone}</span>
              )}
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <a href={`mailto:${data.email}`} className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-3 rounded-full transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            {data.socialLinks.map((link) => (
              <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-3 rounded-full transition-colors" title={link.platform}>
                <Globe className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Skills Box */}
        {data.skills?.length > 0 && (
          <motion.div variants={itemVariants} className="bg-indigo-600 text-white rounded-3xl p-8 col-span-1 md:col-span-1 lg:col-span-2 shadow-sm flex flex-col">
            <h3 className="text-xl font-bold mb-6">Expertise</h3>
            <div className="flex-grow flex flex-col gap-4">
              {data.skills.map((group, i) => (
                <div key={i}>
                  <div className="text-indigo-200 text-xs uppercase tracking-wider mb-2 font-semibold">{group.category}</div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(skill => (
                      <span key={skill} className="bg-indigo-500/50 px-3 py-1 rounded-full text-sm font-medium border border-indigo-400/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Experience Box */}
        {data.experience?.length > 0 && (
          <motion.div variants={itemVariants} className="bg-white rounded-3xl p-8 col-span-1 md:col-span-2 lg:col-span-2 shadow-sm border border-gray-200/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-emerald-100 text-emerald-600 p-2 rounded-xl"><Briefcase className="w-5 h-5" /></div>
              <h3 className="text-xl font-bold">Experience</h3>
            </div>
            <div className="space-y-6">
              {data.experience.map((exp, i) => (
                <div key={i} className="group">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                    <h4 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{exp.role}</h4>
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-md mt-1 sm:mt-0">{exp.duration}</span>
                  </div>
                  <div className="text-sm font-medium text-emerald-600 mb-2">{exp.company}</div>
                  <p className="text-sm text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Education & Certs - Stacked */}
        <motion.div variants={itemVariants} className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col gap-4">
          {data.education?.length > 0 && (
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200/50 flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-xl"><GraduationCap className="w-5 h-5" /></div>
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              <div className="space-y-4">
                {data.education.map((edu, i) => (
                  <div key={i}>
                    <h4 className="font-bold text-gray-900 text-sm">{edu.degree} in {edu.field}</h4>
                    <div className="text-sm text-gray-500">{edu.institution}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {data.certifications?.length > 0 && (
            <div className="bg-orange-50 rounded-3xl p-8 shadow-sm border border-orange-100 flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-200/50 text-orange-600 p-2 rounded-xl"><Award className="w-5 h-5" /></div>
                <h3 className="text-xl font-bold text-orange-900">Certifications</h3>
              </div>
              <div className="space-y-4">
                {data.certifications.map((cert, i) => (
                  <div key={i}>
                    <h4 className="font-bold text-orange-900 text-sm">{cert.name}</h4>
                    <div className="text-sm text-orange-700/80">{cert.issuer}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Projects Heading Box */}
        {projects?.length > 0 && (
          <motion.div variants={itemVariants} className="col-span-full mt-4">
            <h3 className="text-2xl font-bold px-4">Selected Work</h3>
          </motion.div>
        )}

        {/* Project Boxes */}
        {projects?.map((project, i) => (
          <motion.div key={i} variants={itemVariants} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-200/50 col-span-1 md:col-span-2 lg:col-span-2 flex flex-col group hover:shadow-md transition-shadow">
            {project.image && (
              <div className="h-48 overflow-hidden bg-gray-100 relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            )}
            <div className="p-8 flex flex-col flex-grow">
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-sm text-gray-600 mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.slice(0,4).map(tech => (
                  <span key={tech} className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-md">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && <span className="text-xs font-medium text-gray-400 py-1">+{project.techStack.length - 4}</span>}
              </div>

              <div className="flex gap-3 mt-auto">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 bg-gray-900 hover:bg-black text-white text-center py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2">
                    View Demo <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 text-center py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2">
                    Code <Code className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}

      </motion.div>
      <footer className="mt-16 text-center text-sm text-gray-400 pb-8">
        © {new Date().getFullYear()} {data.name}. Bento Template.
      </footer>
    </div>
  );
}
