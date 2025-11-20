import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Shield, 
  Zap, 
  Flame, 
  Droplets, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Database, 
  Server,
  Brain,
  Layers,
  Snowflake,
  Thermometer
} from 'lucide-react';

/* --- Particle Component for Snow/Embers --- */
const ParticleBackground = ({ mode }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create random particles
    const particleCount = 25;
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: Math.random() * 10 + 10 + 's',
      animationDelay: Math.random() * 5 + 's',
      size: Math.random() * 4 + 2 + 'px',
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute rounded-full transition-colors duration-1000 ${
            mode === 'peace' ? 'bg-cyan-200/60' : 'bg-orange-500/60'
          }`}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: mode === 'peace' ? p.size : `${parseInt(p.size) * 1.5}px`, // Embers are slightly elongated
            borderRadius: mode === 'peace' ? '50%' : '2px', // Snow is round, embers are rough
            top: mode === 'peace' ? '-10%' : '110%',
            animation: mode === 'peace' 
              ? `snowfall ${p.animationDuration} linear infinite` 
              : `rise ${p.animationDuration} linear infinite`,
            animationDelay: p.animationDelay,
            opacity: Math.random() * 0.5 + 0.2
          }}
        />
      ))}
      <style>{`
        @keyframes snowfall {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.8; }
          100% { transform: translateY(110vh) translateX(20px); opacity: 0; }
        }
        @keyframes rise {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.8; }
          100% { transform: translateY(-110vh) translateX(-20px) rotate(180deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const Portfolio = () => {
  const [mode, setMode] = useState('peace'); // 'peace' or 'fire'
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll for navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mouse movement for dynamic backgrounds
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleMode = () => {
    setMode(mode === 'peace' ? 'fire' : 'peace');
  };

  // Resume Data Mapping
  const projects = [
    {
      id: 1,
      title: "Medical AI Chatbot",
      peaceDesc: "A secure, privacy-focused health assistant. Built with Flask architecture and precise information retrieval protocols using Pinecone vector databases.",
      fireDesc: "A Generative AI powerhouse powered by Gemini & LangChain. Features RAG architecture for dynamic, context-aware medical intelligence.",
      tech: ["Python", "Flask", "LangChain", "Gemini", "Pinecone"],
      icon: <Brain size={24} />,
      type: "AI/ML"
    },
    {
      id: 2,
      title: "TrueHomes Real Estate",
      peaceDesc: "Robust MERN stack architecture with JWT authentication and secure CRUD operations. Optimized for data integrity and reliable user sessions.",
      fireDesc: "Dynamic property discovery engine. Features interactive browsing, instant filtering, and seamless Google OAuth integration for rapid onboarding.",
      tech: ["React", "Node.js", "MongoDB", "JWT", "Redux"],
      icon: <Layers size={24} />,
      type: "Full Stack"
    },
    {
      id: 3,
      title: "SWE 180 Internship",
      peaceDesc: "Optimized MongoDB queries cutting load times by 30%. Architected scalable RESTful APIs supporting 1000+ concurrent users.",
      fireDesc: "Accelerated deployment cycles by 40% via CI/CD. Implemented high-speed Redis caching to slash API latency by 15%.",
      tech: ["Node.js", "Redis", "CI/CD", "Optimization"],
      icon: <Server size={24} />,
      type: "Experience"
    }
  ];

  const skills = {
    peace: [
      { name: "Node.js & Express", level: "Architect" },
      { name: "MongoDB & SQL", level: "Secure" },
      { name: "Java (OOP)", level: "Core" },
      { name: "System Design", level: "Stable" }
    ],
    fire: [
      { name: "Generative AI", level: "Creative" },
      { name: "React & Tailwind", level: "Dynamic" },
      { name: "Python Scripting", level: "Rapid" },
      { name: "Hackathons", level: "Competitive" }
    ]
  };

  return (
    <div className={`min-h-screen transition-colors duration-1000 overflow-x-hidden font-sans selection:bg-opacity-30 ${
      mode === 'peace' 
        ? 'bg-slate-950 text-slate-100 selection:bg-cyan-400' 
        : 'bg-neutral-950 text-orange-50 selection:bg-orange-500'
    }`}>
      
      {/* Particle Background System */}
      <ParticleBackground mode={mode} />

      {/* Dynamic Mouse Gradient Overlay */}
      <div 
        className={`fixed inset-0 opacity-20 pointer-events-none transition-all duration-1000 z-0`}
        style={{
          background: mode === 'peace'
            ? `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, #a5f3fc, transparent 40%)` // More icy white/cyan
            : `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, #ef4444, transparent 40%)` // More intense red/orange
        }}
      />

      {/* Frost/Heat Overlay for Texture */}
      <div className={`fixed inset-0 pointer-events-none transition-opacity duration-1000 z-0 ${
        mode === 'peace' ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.03\'/%3E%3C/svg%3E")'
      }} />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-md bg-opacity-80 py-4 shadow-lg' : 'py-6 bg-opacity-0'
      } ${
        mode === 'peace' 
          ? 'bg-slate-950/50 border-b border-cyan-100/10 shadow-cyan-900/20' 
          : 'bg-neutral-950/50 border-b border-orange-500/20 shadow-orange-900/30'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <span className={`transition-all duration-500 ${mode === 'peace' ? 'text-cyan-300 drop-shadow-[0_0_8px_rgba(103,232,249,0.5)]' : 'text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.6)]'}`}>
              {mode === 'peace' ? <Snowflake size={24} /> : <Flame size={24} />}
            </span>
            AY.
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:opacity-70 transition-opacity hidden md:block">About</a>
            <a href="#projects" className="hover:opacity-70 transition-opacity hidden md:block">Work</a>
            <button 
              onClick={toggleMode}
              className={`relative px-6 py-2 rounded-full font-medium transition-all duration-500 overflow-hidden group border backdrop-blur-sm ${
                mode === 'peace' 
                  ? 'border-cyan-300/30 text-cyan-200 bg-cyan-900/20 hover:bg-cyan-800/30 hover:shadow-[0_0_20px_rgba(103,232,249,0.2)]' 
                  : 'border-orange-500/50 text-orange-300 bg-orange-900/20 hover:bg-orange-900/40 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {mode === 'peace' ? 'Ignite' : 'Freeze'}
                {mode === 'peace' ? <Zap size={16} className="animate-pulse"/> : <Snowflake size={16} className="animate-pulse"/>}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 z-10">
        <div className="max-w-4xl relative">
          <div className={`inline-block mb-4 px-4 py-1.5 rounded-full text-sm border backdrop-blur-md transition-all duration-700 ${
            mode === 'peace' 
              ? 'border-cyan-200/20 bg-slate-800/40 text-cyan-200 shadow-[0_0_15px_rgba(103,232,249,0.1)]' 
              : 'border-orange-500/40 bg-neutral-900/60 text-orange-300 shadow-[0_0_20px_rgba(249,115,22,0.2)]'
          }`}>
            {mode === 'peace' ? 'Backend Architect & Security Specialist' : 'GenAI Innovator & Rapid Prototyper'}
          </div>
          
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 tracking-tight transition-all duration-700 ${
            mode === 'peace' 
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 via-blue-200 to-cyan-100 drop-shadow-[0_0_15px_rgba(165,243,252,0.3)]' 
              : 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 drop-shadow-[0_0_25px_rgba(234,88,12,0.4)]'
          }`}>
            Anurag Yadav
          </h1>
          
          <p className={`text-xl md:text-2xl max-w-2xl mx-auto mb-10 transition-all duration-700 ${
            mode === 'peace' ? 'text-cyan-100/80 font-light' : 'text-orange-100/90 font-medium'
          }`}>
            {mode === 'peace' 
              ? "Architecting stability. Optimizing systems. I build the calm, frozen logic beneath complex applications."
              : "Forging innovation. Igniting ideas. I build high-speed AI solutions that burn through the status quo."}
          </p>

          <div className="flex gap-4 justify-center">
            <a href="#contact" className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 transform hover:-translate-y-1 ${
              mode === 'peace' 
                ? 'bg-cyan-900/40 border border-cyan-400/30 hover:bg-cyan-800/50 text-cyan-100 shadow-[0_0_20px_rgba(8,145,178,0.2)] backdrop-blur-sm' 
                : 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white shadow-[0_0_30px_rgba(234,88,12,0.4)] border border-orange-500'
            }`}>
              Get in Touch
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className={`px-8 py-3 rounded-lg font-bold border transition-all duration-300 hover:bg-opacity-10 flex items-center gap-2 backdrop-blur-sm ${
              mode === 'peace' 
                ? 'border-cyan-500/40 text-cyan-300 hover:bg-cyan-900/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]' 
                : 'border-orange-500/60 text-orange-400 hover:bg-orange-900/30 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)]'
            }`}>
              View GitHub
            </a>
          </div>
        </div>

        {/* Decor elements */}
        <div className={`absolute bottom-10 animate-bounce transition-colors duration-1000 ${
          mode === 'peace' ? 'text-cyan-400/70' : 'text-orange-500/90'
        }`}>
          Scroll to Explore
        </div>
      </header>

      {/* Skills Split Section */}
      <section id="about" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`grid md:grid-cols-2 gap-12 p-1 rounded-3xl transition-all duration-1000 ${
            mode === 'peace' 
              ? 'bg-slate-900/40 border border-cyan-200/10 backdrop-blur-xl shadow-[0_0_40px_rgba(6,182,212,0.05)]' 
              : 'bg-neutral-900/60 border border-orange-500/20 backdrop-blur-xl shadow-[0_0_40px_rgba(249,115,22,0.1)]'
          }`}>
            
            {/* Left: Logic/Core (Peace) */}
            <div className={`p-8 md:p-12 rounded-3xl transition-all duration-700 ${
              mode === 'peace' 
                ? 'bg-slate-800/30 opacity-100 border border-cyan-500/10' 
                : 'opacity-50 blur-[1px] grayscale hover:blur-0 hover:grayscale-0 hover:opacity-100'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <Database className="text-cyan-300" />
                <h2 className="text-2xl font-bold text-cyan-100">The Foundation</h2>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                My background in **Backend Engineering** provides the stability every project needs. 
                From optimizing MongoDB queries at **SWE 180** to securing RESTful APIs, I ensure 
                systems are robust and scalable.
              </p>
              <ul className="space-y-3">
                {skills.peace.map((s, i) => (
                  <li key={i} className="flex justify-between items-center border-b border-slate-700/50 pb-2">
                    <span className="font-mono text-cyan-200">{s.name}</span>
                    <span className="text-xs px-2 py-1 rounded bg-slate-700/50 text-cyan-100 border border-cyan-900/30">{s.level}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Chaos/Creation (Fire) */}
            <div className={`p-8 md:p-12 rounded-3xl transition-all duration-700 ${
              mode === 'fire' 
                ? 'bg-neutral-800/40 opacity-100 border border-orange-500/20 shadow-inner shadow-orange-900/20' 
                : 'opacity-50 blur-[1px] grayscale hover:blur-0 hover:grayscale-0 hover:opacity-100'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="text-orange-500" />
                <h2 className="text-2xl font-bold text-orange-100">The Spark</h2>
              </div>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                My passion for **Generative AI** drives innovation. Whether winning top 10 at **Hackbyte '24** or building RAG systems with **Gemini**, I push boundaries to create intelligent, 
                adaptive software.
              </p>
              <ul className="space-y-3">
                {skills.fire.map((s, i) => (
                  <li key={i} className="flex justify-between items-center border-b border-neutral-700/50 pb-2">
                    <span className="font-mono text-orange-300">{s.name}</span>
                    <span className="text-xs px-2 py-1 rounded bg-orange-900/20 text-orange-200 border border-orange-500/20">{s.level}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-700 ${
                mode === 'peace' ? 'text-cyan-100 drop-shadow-[0_0_10px_rgba(103,232,249,0.3)]' : 'text-orange-100 drop-shadow-[0_0_15px_rgba(234,88,12,0.4)]'
              }`}>
                {mode === 'peace' ? 'Frozen Architecture' : 'Forged Creations'}
              </h2>
              <div className={`h-1 w-20 transition-all duration-700 ${
                mode === 'peace' ? 'bg-cyan-400 shadow-[0_0_10px_#22d3ee]' : 'bg-orange-500 shadow-[0_0_15px_#f97316]'
              }`}/>
            </div>
            <span className={`hidden md:block font-mono text-sm ${
              mode === 'peace' ? 'text-cyan-400' : 'text-orange-500'
            }`}>
              {mode === 'peace' ? 'Listing: Optimized & Secure' : 'Listing: Innovative & Dynamic'}
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id}
                className={`group relative p-6 rounded-2xl border transition-all duration-500 hover:-translate-y-2 ${
                  mode === 'peace' 
                    ? 'bg-slate-900/40 border-cyan-200/10 backdrop-blur-md hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(103,232,249,0.15)]' 
                    : 'bg-neutral-900/60 border-orange-500/10 backdrop-blur-md hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]'
                }`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-lg transition-all duration-500 ${
                    mode === 'peace' 
                      ? 'bg-cyan-900/30 text-cyan-300 shadow-[inset_0_0_10px_rgba(103,232,249,0.2)]' 
                      : 'bg-orange-900/30 text-orange-500 shadow-[inset_0_0_15px_rgba(249,115,22,0.3)]'
                  }`}>
                    {project.icon}
                  </div>
                  <ExternalLink size={20} className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    mode === 'peace' ? 'text-cyan-400' : 'text-orange-400'
                  }`}/>
                </div>

                <h3 className={`text-xl font-bold mb-3 transition-colors duration-500 ${
                  mode === 'peace' ? 'text-slate-100 group-hover:text-cyan-300' : 'text-neutral-100 group-hover:text-orange-300'
                }`}>
                  {project.title}
                </h3>

                <p className={`text-sm mb-6 min-h-[80px] transition-colors duration-500 ${
                  mode === 'peace' ? 'text-slate-300 font-light' : 'text-neutral-300'
                }`}>
                  {mode === 'peace' ? project.peaceDesc : project.fireDesc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span key={i} className={`text-xs px-2 py-1 rounded transition-colors duration-500 ${
                      mode === 'peace' 
                        ? 'bg-cyan-900/20 border border-cyan-500/20 text-cyan-200' 
                        : 'bg-orange-900/20 border border-orange-500/20 text-orange-300'
                    }`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Bar */}
      <section className="py-10 px-6 border-y border-white/5 relative z-10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16 opacity-80 hover:opacity-100 transition-opacity">
           {["AWS Academy Cloud Foundations", "Oracle OCI GenAI Professional", "Top 10 Hackbyte '24", "Data Analysis (SQL)"].map((cert, i) => (
             <div key={i} className="flex items-center gap-2">
               <Shield size={16} className={mode === 'peace' ? 'text-cyan-400' : 'text-orange-500'} />
               <span className={`font-mono text-sm uppercase tracking-wider ${mode === 'peace' ? 'text-cyan-100' : 'text-orange-100'}`}>{cert}</span>
             </div>
           ))}
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-20 px-6 relative overflow-hidden z-10">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className={`text-4xl md:text-6xl font-bold mb-8 transition-all duration-700 ${
            mode === 'peace' 
              ? 'text-transparent bg-clip-text bg-gradient-to-b from-cyan-100 to-blue-300' 
              : 'text-transparent bg-clip-text bg-gradient-to-b from-orange-200 to-red-500'
          }`}>
            {mode === 'peace' ? 'Ready to Stabilize?' : 'Ready to Ignite?'}
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto">
            Whether you need robust backend architecture or cutting-edge AI integration, I bring the duality required for modern software.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
            <a href="mailto:anuragyadav.creates@gmail.com" className={`flex items-center gap-2 px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 ${
              mode === 'peace' 
                ? 'bg-cyan-950 border border-cyan-500/30 text-cyan-100 hover:bg-cyan-900 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]' 
                : 'bg-neutral-900 border border-orange-500/30 text-orange-100 hover:bg-neutral-800 hover:shadow-[0_0_25px_rgba(249,115,22,0.3)]'
            }`}>
              <Mail size={20} /> anuragyadav.creates@gmail.com
            </a>
            <div className="flex gap-4">
              <a href="#" className={`p-4 rounded-lg transition-colors border ${
                mode === 'peace' 
                  ? 'bg-cyan-950/50 border-cyan-500/20 hover:bg-cyan-900/50 text-cyan-400' 
                  : 'bg-neutral-900/50 border-orange-500/20 hover:bg-orange-900/30 text-orange-500'
              }`}>
                <Linkedin size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className={`p-4 rounded-lg transition-colors border ${
                mode === 'peace' 
                  ? 'bg-cyan-950/50 border-cyan-500/20 hover:bg-cyan-900/50 text-cyan-400' 
                  : 'bg-neutral-900/50 border-orange-500/20 hover:bg-orange-900/30 text-orange-500'
              }`}>
                <Github size={24} />
              </a>
            </div>
          </div>

          <div className="mt-20 text-sm text-slate-600">
            © 2025 Anurag Yadav. Built with React & Tailwind.
          </div>
        </div>
      </footer>
      
    </div>
  );
};

export default Portfolio;