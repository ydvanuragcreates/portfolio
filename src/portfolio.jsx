import React, { useState } from 'react';
import { 
  Github, Linkedin, Mail, ExternalLink, 
  Code2, Cpu, Database, Server, 
  ArrowRight, ChevronRight, Globe
} from 'lucide-react';

/* --- Main Portfolio Component --- */
const Portfolio = () => {
  // eslint-disable-next-line no-unused-vars
  const [activeSection, setActiveSection] = useState('work');

  const skills = [
    { category: "Backend Engineering", items: ["Node.js", "FastAPI", "Express.js", "Microservices", "System Design"], icon: <Server size={18}/> },
    { category: "AI & Machine Learning", items: ["Generative AI (Gemini/OpenAI)", "RAG Pipelines", "LangChain", "Vector DBs (Pinecone)"], icon: <Cpu size={18}/> },
    { category: "Core & Infrastructure", items: ["Python", "Docker", "CI/CD", "Redis", "AWS/Oracle Cloud"], icon: <Database size={18}/> },
    { category: "Frontend", items: ["React.js", "Tailwind CSS", "Three.js", "Redux"], icon: <Code2 size={18}/> }
  ];

  const projects = [
    {
      title: "Employee Task Manager",
      category: "Full Stack Productivity",
      desc: "Robust task management system with Kanban boards and role-based access. Features secure Clerk authentication, multi-tenancy for data isolation, and a scalable FastAPI backend with PostgreSQL.",
      tech: ["FastAPI", "React", "PostgreSQL", "Clerk Auth", "Three.js"],
      links: { live: "https://employee-task-manager-five.vercel.app/", code: "https://github.com/ydvanuragcreates/employee-task-manager" },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" // Dashboard/Analytics
    },
    {
      title: "Ocean AI (Doc Generator)",
      category: "Generative AI Tool",
      desc: "Automated report generation engine using FastAPI and Three.js. Generates structured Word/PPT documents with real-time 3D previews.",
      tech: ["FastAPI", "React", "Three.js", "Gemini API"],
      links: { live: "https://ocean-ai-eta.vercel.app/", code: "https://github.com/ydvanuragcreates/Ocean-AI" },
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" // Abstract AI/Nodes
    },
    {
      title: "Medical AI Chatbot",
      category: "Healthcare AI",
      desc: "A secure RAG-based assistant utilizing Gemini LLM and Pinecone for precise medical query resolution. Features strict data privacy protocols.",
      tech: ["Python", "Flask", "LangChain", "Gemini", "Pinecone"],
      links: { live: null, code: "https://github.com/ydvanuragcreates/Medical-chatbot" },
      // REPLACED IMAGE URL WITH A MORE RELIABLE ONE
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" 
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-zinc-50/80 backdrop-blur-md z-40 border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
          <span className="font-bold text-lg tracking-tight">Anurag Y.</span>
          <div className="flex gap-6 text-sm font-medium text-zinc-500">
            <a href="#work" className="hover:text-zinc-900 transition-colors">Work</a>
            <a href="#expertise" className="hover:text-zinc-900 transition-colors">Expertise</a>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Available for new opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-zinc-900">
            Building scalable backends & <br className="hidden md:block" />
            intelligent AI systems.
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl leading-relaxed mb-10">
            I am a Computer Science Engineer specializing in **Scalable Backend Architecture** and **Generative AI**. 
            I design high-performance systems that seamlessly integrate complex data logic with intuitive user experiences.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-6 py-3 bg-zinc-900 text-white rounded-lg font-medium hover:bg-zinc-800 transition-all flex items-center gap-2">
              Contact Me <ArrowRight size={18} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="px-6 py-3 bg-white border border-zinc-200 text-zinc-700 rounded-lg font-medium hover:bg-zinc-50 transition-all flex items-center gap-2">
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section (Case Studies) */}
      <section id="work" className="py-20 px-6 bg-white border-y border-zinc-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-12">Selected Work</h2>
          
          <div className="grid gap-12">
            {projects.map((project, idx) => (
              <div key={idx} className="group grid md:grid-cols-[1.5fr_1fr] gap-8 items-start">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-zinc-500 mb-4 font-medium">{project.category}</div>
                  <p className="text-zinc-600 leading-relaxed mb-6">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-1 bg-zinc-100 text-zinc-600 text-xs rounded border border-zinc-200">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.links.code} target="_blank" rel="noreferrer" className="text-sm font-medium text-zinc-900 flex items-center gap-1 hover:underline underline-offset-4">
                      <Github size={16} /> View Code
                    </a>
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noreferrer" className="text-sm font-medium text-zinc-900 flex items-center gap-1 hover:underline underline-offset-4">
                        <Globe size={16} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
                {/* Project Image Card */}
                <div className="hidden md:block h-full min-h-[250px] bg-zinc-50 rounded-xl border border-zinc-100 relative overflow-hidden group-hover:border-zinc-200 transition-colors">
                   <div className="absolute inset-0 bg-zinc-100">
                     <img 
                       src={project.image} 
                       alt={project.title}
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                     />
                     <div className="absolute inset-0 bg-zinc-900/5 group-hover:bg-transparent transition-colors"></div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise / Skills Section */}
      <section id="expertise" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-12">Technical Expertise</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl border border-zinc-200 hover:border-zinc-300 transition-colors shadow-sm hover:shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-zinc-100 rounded-lg text-zinc-700">
                    {skill.icon}
                  </div>
                  <h3 className="font-bold text-zinc-900">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item => (
                    <span key={item} className="text-sm text-zinc-600 bg-zinc-50 px-3 py-1 rounded-full border border-zinc-100">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Mini-Section */}
          <div className="mt-12 p-6 bg-zinc-900 text-zinc-300 rounded-xl flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-white font-bold mb-1">Certified Professional</h4>
              <p className="text-sm text-zinc-400">Validated expertise in Cloud & AI technologies.</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="px-4 py-2 bg-zinc-800 rounded-lg text-xs font-medium border border-zinc-700">AWS Cloud Foundations</span>
              <span className="px-4 py-2 bg-zinc-800 rounded-lg text-xs font-medium border border-zinc-700">Oracle OCI GenAI Pro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 px-6 bg-white border-t border-zinc-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-6">Let's build something specific.</h2>
          <p className="text-zinc-500 mb-10 max-w-lg mx-auto">
            I'm currently looking for opportunities to apply my backend and AI skills to solve real-world problems.
          </p>
          
          <div className="flex justify-center gap-6 mb-12">
            <a href="mailto:anuragyadav.creates@gmail.com" className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors">
              <Mail size={20} /> anuragyadav.creates@gmail.com
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors">
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>

          <div className="text-sm text-zinc-400">
            © 2025 Anurag Yadav. Engineered with React & Tailwind.
          </div>
        </div>
      </footer>
      
    </div>
  );
};

export default Portfolio;