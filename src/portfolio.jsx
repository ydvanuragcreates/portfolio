import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, Shield, Cpu, Wifi, Lock, Unlock, 
  AlertTriangle, CheckCircle, Database, Zap, 
  Globe, Code, Server, Eye, ExternalLink, Activity, Mail, Github,
  FileText, Box
} from 'lucide-react';

// --- Glitch Text Component ---
const GlitchText = ({ text, active = true }) => {
  return (
    <div className={`relative inline-block font-mono font-bold ${active ? 'animate-pulse' : ''}`}>
      <span className="relative z-10">{text}</span>
      {active && (
        <>
          <span className="absolute top-0 left-0 -ml-1 text-red-500 opacity-70 animate-ping">{text}</span>
          <span className="absolute top-0 left-0 ml-1 text-cyan-500 opacity-70 animate-pulse">{text}</span>
        </>
      )}
    </div>
  );
};

// --- Custom Cursor Component ---
const CyberCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const updateClick = () => setClicked(true);
    const endClick = () => setClicked(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', updateClick);
    window.addEventListener('mouseup', endClick);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', updateClick);
      window.removeEventListener('mouseup', endClick);
    };
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-[100] hidden md:block mix-blend-difference"
      style={{ left: position.x, top: position.y, transform: 'translate(-50%, -50%)' }}
    >
      <div className={`border border-cyan-500 rounded-full transition-all duration-100 ${clicked ? 'w-4 h-4 bg-cyan-500' : 'w-8 h-8'}`}></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full w-[1px] h-4 bg-cyan-500"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-[1px] h-4 bg-cyan-500"></div>
      <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 w-4 h-[1px] bg-cyan-500"></div>
      <div className="absolute right-0 top-1/2 translate-x-full -translate-y-1/2 w-4 h-[1px] bg-cyan-500"></div>
    </div>
  );
};

// --- Matrix Rain Effect ---
const MatrixRain = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-10 font-mono text-green-500 text-xs overflow-hidden leading-none whitespace-pre select-none">
      {Array.from({ length: 50 }).map((_, i) => (
        <div 
          key={i} 
          className="absolute animate-matrix-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 2 + 1}s`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: Math.random()
          }}
        >
          {String.fromCharCode(0x30A0 + Math.random() * 96)}
          <br/>{String.fromCharCode(0x30A0 + Math.random() * 96)}
          <br/>1
          <br/>0
        </div>
      ))}
      <style>{`
        @keyframes matrix-fall {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const Portfolio = () => {
  const [bootState, setBootState] = useState('terminal'); // 'terminal', 'breaching', 'granted'
  const [logs, setLogs] = useState([]);
  const [activeTab, setActiveTab] = useState('overview'); // overview, projects, skills
  
  // Terminal Logic
  const [termInput, setTermInput] = useState('');
  const [termHistory, setTermHistory] = useState([
    { type: 'system', text: 'Welcome to AY_SHELL v1.0. Type "help" for commands.' }
  ]);
  const logsEndRef = useRef(null);
  const termEndRef = useRef(null);

  // Resume Data
  const projects = [
    {
      id: "P-01",
      name: "Medical_AI_Core",
      realName: "Medical AI Chatbot",
      desc: "RAG architecture integrating Gemini LLM with Pinecone Vector DB for precise medical diagnostics.",
      status: "OPERATIONAL",
      securityLevel: "MAXIMUM",
      tech: ["Python", "LangChain", "Gemini", "Flask"]
    },
    {
      id: "P-02",
      name: "Sector_TrueHomes",
      realName: "TrueHomes Real Estate",
      desc: "MERN Stack property engine featuring JWT Auth, Google OAuth protocols, and Real-time Geo-mapping.",
      status: "ONLINE",
      securityLevel: "HIGH",
      tech: ["React", "MongoDB", "Node.js", "JWT"]
    },
    {
      id: "P-03",
      name: "AI_Doc_Gen_V1",
      realName: "AI Document Generator",
      desc: "Automated report engine. Uses Gemini & FastAPI to generate Word/PPT. Features Three.js for real-time 3D document previews.",
      status: "BETA_TEST",
      securityLevel: "PROTOTYPE",
      tech: ["FastAPI", "React", "Three.js", "Gemini"]
    }
  ];

  // UPDATED CREATIVE SKILLS
  const skills = [
    { cat: "SYNTHETIC_MIND", items: ["Generative AI", "Gemini API", "LangChain", "Hugging Face"], color: "text-purple-400" },
    { cat: "VISUAL_CORTEX", items: ["Three.js", "React", "Tailwind", "Figma"], color: "text-cyan-400" },
    { cat: "BACKEND_GRID", items: ["FastAPI", "Node.js", "Arcjet Security", "Microservices"], color: "text-green-400" },
    { cat: "INFRASTRUCTURE", items: ["Docker", "CI/CD", "Pinecone", "Redis"], color: "text-yellow-400" }
  ];

  // Boot Sequence Logic
  useEffect(() => {
    if (bootState === 'terminal') {
      const sequence = [
        "Initializing connection...",
        "Pinging server: 127.0.0.1...",
        "Response received: 2ms",
        "Target identified: ANURAG_YADAV_MAINFRAME",
        "Security Protocol: ACTIVE",
        "Firewall: DETECTED",
        "Awaiting User Override..."
      ];
      
      let delay = 0;
      sequence.forEach((line, index) => {
        delay += Math.random() * 500 + 200;
        setTimeout(() => {
          setLogs(prev => [...prev, `> ${line}`]);
        }, delay);
      });
    }
  }, [bootState]);

  // Auto-scroll terminal
  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);
  
  // Auto-scroll interactive terminal
  useEffect(() => {
    termEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [termHistory]);

  const handleBreach = () => {
    setBootState('breaching');
    setLogs([]);
    const breachSequence = [
      "INJECTING PAYLOAD...",
      "BYPASSING AUTHENTICATION...",
      "DECRYPTING SSL PACKETS...",
      "ACCESS GRANTED."
    ];
    
    let delay = 0;
    breachSequence.forEach((line, index) => {
      delay += 800;
      setTimeout(() => {
        setLogs(prev => [...prev, `> ${line}`]);
        if (index === breachSequence.length - 1) {
          setTimeout(() => setBootState('granted'), 1000);
        }
      }, delay);
    });
  };

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    if (!termInput.trim()) return;

    const cmd = termInput.trim().toLowerCase();
    const newHistory = [...termHistory, { type: 'user', text: termInput }];

    switch (cmd) {
      case 'help':
        newHistory.push({ type: 'system', text: 'AVAILABLE COMMANDS: help, about, skills, contact, clear' });
        break;
      case 'about':
        newHistory.push({ type: 'system', text: 'TARGET: Anurag Yadav. CS Student. Backend & AI Specialist.' });
        break;
      case 'skills':
        newHistory.push({ type: 'system', text: 'MODULES: Python, React, Node.js, Generative AI, Three.js' });
        break;
      case 'contact':
        newHistory.push({ type: 'system', text: 'EMAIL: anuragyadav.creates@gmail.com' });
        break;
      case 'clear':
        setTermHistory([]);
        setTermInput('');
        return;
      default:
        newHistory.push({ type: 'error', text: `ERROR: Command "${cmd}" not recognized.` });
    }

    setTermHistory(newHistory);
    setTermInput('');
  };

  // --- RENDER: TERMINAL / BOOT SCREEN ---
  if (bootState !== 'granted') {
    return (
      <div className="min-h-screen bg-black text-green-500 font-mono p-6 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        
        <div className="w-full max-w-2xl border-2 border-green-800 bg-black/90 p-4 rounded shadow-[0_0_50px_rgba(0,255,0,0.2)] relative z-10">
          <div className="flex justify-between items-center border-b border-green-800 pb-2 mb-4">
            <span className="text-xs">SYS_TERMINAL_V.2.0.25</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-900"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-900"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            </div>
          </div>
          
          <div className="h-64 overflow-y-auto font-mono text-sm space-y-1 mb-4 scrollbar-hide">
            {logs.map((log, i) => (
              <div key={i} className={log.includes("ACCESS GRANTED") ? "text-green-300 font-bold text-lg animate-pulse" : "opacity-80"}>
                {log}
              </div>
            ))}
            <div ref={logsEndRef} />
          </div>

          {bootState === 'terminal' && logs.length >= 6 && (
            <button 
              onClick={handleBreach}
              className="w-full py-4 bg-green-900/20 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black font-bold tracking-widest transition-all duration-200 uppercase group"
            >
              <span className="group-hover:hidden">[ INITIATE SYSTEM BREACH ]</span>
              <span className="hidden group-hover:block text-center">ACCESSING CORE...</span>
            </button>
          )}

          {bootState === 'breaching' && (
            <div className="w-full h-2 bg-green-900 rounded overflow-hidden">
              <div className="h-full bg-green-500 animate-progress"></div>
            </div>
          )}
        </div>
        <style>{`
          @keyframes progress { 0% { width: 0% } 100% { width: 100% } }
          .animate-progress { animation: progress 3s linear forwards; }
        `}</style>
      </div>
    );
  }

  // --- RENDER: MAIN INTERFACE (HUD) ---
  return (
    <div className="min-h-screen bg-slate-950 text-cyan-50 font-mono relative overflow-x-hidden selection:bg-cyan-500 selection:text-black cursor-none">
      
      <CyberCursor />

      {/* Background Effects */}
      <MatrixRain />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_2px,3px_100%]"></div>
      <div className="fixed inset-0 pointer-events-none z-20 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)]"></div>

      {/* Main Container */}
      <div className="relative z-30 max-w-7xl mx-auto p-4 md:p-8 min-h-screen flex flex-col">
        
        {/* Header HUD */}
        <header className="border-b border-cyan-900/50 pb-6 mb-8 flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <div className="text-xs text-cyan-600 mb-1 flex items-center gap-2">
              <Wifi size={12} className="animate-pulse" /> CONNECTION_SECURE
            </div>
            {/* UPDATED NAME STYLING FOR BETTER VISIBILITY */}
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] glitch-effect">
              ANURAG_YADAV
            </h1>
            <p className="text-cyan-400/60 mt-2 text-sm max-w-md border-l-2 border-cyan-800 pl-3">
              :: SYSTEM ARCHITECT :: BACKEND OPERATIVE :: AI INNOVATOR
            </p>
          </div>

          <div className="flex gap-4 items-center">
             <div className="text-right hidden md:block">
                <div className="text-xs text-slate-500">SESSION ID</div>
                <div className="font-mono text-cyan-500">0x24A9-F7</div>
             </div>
             <div className="h-12 w-12 border border-cyan-500/50 rounded-full flex items-center justify-center bg-cyan-900/10 animate-spin-slow">
                <Cpu size={24} className="text-cyan-400" />
             </div>
          </div>
        </header>

        {/* Navigation Tabs (Cyberpunk Style) */}
        <nav className="flex flex-wrap gap-4 mb-10">
          {[
            { id: 'overview', icon: <Activity size={16} />, label: 'SYS_STATUS' },
            { id: 'projects', icon: <Database size={16} />, label: 'DATA_VAULT' },
            { id: 'skills', icon: <Zap size={16} />, label: 'MODULES' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 flex items-center gap-2 border skew-x-[-12deg] transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-cyan-600 border-cyan-400 text-black shadow-[0_0_15px_rgba(8,145,178,0.6)]' 
                  : 'bg-black/40 border-cyan-900 text-cyan-600 hover:border-cyan-500 hover:text-cyan-400'
              }`}
            >
              <div className="skew-x-[12deg] flex items-center gap-2 font-bold tracking-wider text-sm">
                {tab.icon} {tab.label}
              </div>
            </button>
          ))}
        </nav>

        {/* Content Area */}
        <main className="flex-1 relative">
          
          {/* OVERVIEW PANEL */}
          {activeTab === 'overview' && (
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
              <div className="border border-cyan-900/50 bg-black/40 p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-2 text-xs text-cyan-800 border-l border-b border-cyan-900">BIO_METRICS</div>
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-20 h-20 bg-cyan-900/20 rounded flex items-center justify-center border border-cyan-500/30">
                      <Shield size={40} className="text-cyan-400" />
                   </div>
                   <div>
                      <h2 className="text-xl font-bold text-white">PROFILE_SUMMARY</h2>
                      <div className="text-cyan-500 text-xs">CLASS: HUMAN // LVL: 2026</div>
                   </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed font-mono">
                  Target is a highly skilled CS Student at <span className="text-cyan-400">VIT AP University</span>. 
                  Specializes in constructing robust backend architectures and deploying Generative AI models.
                  <br/><br/>
                  {'>'} Current Focus: Generative AI & 3D Web Tech<br/>
                  {'>'} Optimization Record: High Performance APIs<br/>
                  {'>'} Status: <span className="text-green-400 animate-pulse">AVAILABLE FOR HIRE</span>
                </p>
              </div>

              <div className="border border-cyan-900/50 bg-black/40 p-6 relative">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
                 <h3 className="text-cyan-500 font-bold mb-4 flex items-center gap-2"><AlertTriangle size={16}/> RECENT_ALERTS (Achievements)</h3>
                 <ul className="space-y-4 text-sm font-mono">
                    <li className="flex gap-3 items-start">
                       <span className="text-yellow-500">[WARN]</span>
                       <span className="text-slate-300">System Overload: Top 10 at Hackbyte '24 (200+ Teams)</span>
                    </li>
                    <li className="flex gap-3 items-start">
                       <span className="text-green-500">[OK]</span>
                       <span className="text-slate-300">Cert Acquired: Oracle OCI GenAI Professional</span>
                    </li>
                    <li className="flex gap-3 items-start">
                       <span className="text-green-500">[OK]</span>
                       <span className="text-slate-300">Cert Acquired: AWS Cloud Foundations</span>
                    </li>
                 </ul>
              </div>
            </div>
          )}

          {/* PROJECTS PANEL (DATA VAULT) */}
          {activeTab === 'projects' && (
            <div className="grid gap-6 animate-fade-in">
              {projects.map((p) => (
                <div key={p.id} className="group border-l-4 border-cyan-800 bg-slate-900/30 p-6 hover:border-cyan-400 transition-all duration-300 relative overflow-hidden">
                  {/* Scanline Effect on Hover */}
                  <div className="absolute inset-0 bg-cyan-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 pointer-events-none"></div>
                  
                  <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 relative z-10">
                    <div>
                      <div className="text-xs text-cyan-600 mb-1">{p.id} // {p.status}</div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {p.name}
                      </h3>
                      <div className="text-xs text-slate-500 font-mono">ALIAS: {p.realName}</div>
                    </div>
                    <div className="mt-2 md:mt-0 px-3 py-1 border border-red-900 text-red-500 text-xs font-bold rounded">
                      SEC_LVL: {p.securityLevel}
                    </div>
                  </div>

                  <p className="text-slate-300 font-mono text-sm mb-4 relative z-10 max-w-3xl">
                    <span className="text-cyan-700">{'>'}</span> {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 relative z-10">
                    {p.tech.map(t => (
                      <span key={t} className="text-xs bg-cyan-900/30 text-cyan-400 px-2 py-1 rounded border border-cyan-900/50">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <button className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400 bg-black/80 px-4 py-2 border border-cyan-400 flex items-center gap-2 text-sm hover:bg-cyan-400 hover:text-black font-bold">
                    <Unlock size={14} /> DECRYPT_SOURCE
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* SKILLS PANEL (MODULES) */}
          {activeTab === 'skills' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="border border-slate-800 bg-black/60 p-4 hover:border-white transition-colors">
                  <h3 className={`text-sm font-bold mb-4 uppercase tracking-widest border-b border-slate-800 pb-2 ${skillGroup.color}`}>
                    {skillGroup.cat}
                  </h3>
                  <div className="space-y-3">
                    {skillGroup.items.map(item => (
                      <div key={item} className="flex justify-between items-center group cursor-crosshair">
                        <span className="text-slate-400 text-sm group-hover:text-white transition-colors">
                          {item}
                        </span>
                        <div className="w-12 h-1 bg-slate-800 rounded-full overflow-hidden">
                          <div className={`h-full w-[85%] ${skillGroup.color.replace('text', 'bg')} opacity-50 group-hover:opacity-100 group-hover:w-full transition-all duration-500`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

        </main>

        {/* INTERACTIVE TERMINAL FOOTER */}
        <footer className="mt-12 border-t border-cyan-900/30 pt-4 bg-black/40 p-4">
          <div className="h-32 overflow-y-auto font-mono text-sm mb-2 scrollbar-hide border border-cyan-900/30 p-2 bg-black/60">
             {termHistory.map((line, i) => (
               <div key={i} className={`mb-1 ${
                 line.type === 'error' ? 'text-red-500' : 
                 line.type === 'user' ? 'text-cyan-300' : 'text-green-500'
               }`}>
                 {line.type === 'user' ? '> ' : ''}{line.text}
               </div>
             ))}
             <div ref={termEndRef} />
          </div>
          
          <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 text-sm font-mono text-slate-500">
             <span className="text-cyan-500">guest@anurag-portfolio:~$</span>
             <input 
               type="text" 
               value={termInput}
               onChange={(e) => setTermInput(e.target.value)}
               className="bg-transparent outline-none text-slate-300 flex-1 border-none focus:ring-0"
               placeholder="Type 'help' for commands..."
               autoFocus
             />
          </form>
          
          <div className="flex justify-center gap-6 mt-4 opacity-50 text-xs uppercase tracking-widest">
             <a href="mailto:anuragyadav.creates@gmail.com" className="hover:text-cyan-400 flex items-center gap-2">
               <Mail size={12} /> Email
             </a>
             <a href="https://github.com" className="hover:text-cyan-400 flex items-center gap-2">
               <Github size={12} /> GitHub
             </a>
          </div>
        </footer>

      </div>
      
      {/* Global CSS for CRT lines and animations */}
      <style>{`
        .glitch-effect {
          text-shadow: 2px 0 #ff00ff, -2px 0 #00ffff;
          animation: glitch 1s infinite linear alternate-reverse;
        }
        @keyframes glitch {
          0% { clip-path: inset(20% 0 80% 0); transform: translate(-2px, 1px); }
          20% { clip-path: inset(60% 0 10% 0); transform: translate(2px, -1px); }
          40% { clip-path: inset(40% 0 50% 0); transform: translate(-2px, 2px); }
          60% { clip-path: inset(80% 0 5% 0); transform: translate(2px, -2px); }
          80% { clip-path: inset(10% 0 60% 0); transform: translate(-1px, 2px); }
          100% { clip-path: inset(30% 0 40% 0); transform: translate(1px, -2px); }
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;