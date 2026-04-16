import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';
import { 
  Database, Layout, Brain, Cpu, Layers, Terminal, 
  Code2, FileCode, Coffee, Github, Laptop, FileJson, 
  BarChart, PieChart, TableProperties, Bot, Sparkles, 
  MessageSquareText, Link, Workflow, FileText, Search,
  Users, Server, Activity, MessageSquare, HardDrive, UserCheck,
  Globe, Cloud, Settings, Boxes, ShieldCheck, Monitor
} from 'lucide-react';

const PythonIcon = () => <span className="font-mono font-bold text-yellow-500">PY</span>;
const TFIcon = () => <span className="font-mono font-bold text-orange-500">TF</span>;
const TSIcon = () => <span className="font-mono font-bold text-blue-500">TS</span>;

const skills: Skill[] = [
  // Agentic AI & Systems
  { name: 'LangGraph & LangChain', level: 95, category: 'Agentic AI & Systems', icon: <Workflow className="text-blue-600" /> },
  { name: 'CrewAI & Multi-Agent', level: 90, category: 'Agentic AI & Systems', icon: <Users className="text-green-600" /> },
  { name: 'RAG Architecture', level: 95, category: 'Agentic AI & Systems', icon: <Database className="text-cyan-600" /> },
  { name: 'Pydantic AI', level: 88, category: 'Agentic AI & Systems', icon: <ShieldCheck className="text-purple-600" /> },
  { name: 'MCP Servers', level: 88, category: 'Agentic AI & Systems', icon: <Server className="text-pink-600" /> },
  { name: 'LangSmith', level: 85, category: 'Agentic AI & Systems', icon: <Activity className="text-pink-600" /> },
  { name: 'Human-in-the-Loop', level: 90, category: 'Agentic AI & Systems', icon: <UserCheck className="text-emerald-600" /> },

  // AI & Machine Learning
  { name: 'Generative AI', level: 95, category: 'AI & Machine Learning', icon: <Sparkles className="text-purple-500" /> },
  { name: 'Machine Learning', level: 95, category: 'AI & Machine Learning', icon: <Cpu className="text-blue-500" /> },
  { name: 'LlamaIndex', level: 90, category: 'AI & Machine Learning', icon: <Link className="text-orange-500" /> },
  { name: 'Deep Learning', level: 92, category: 'AI & Machine Learning', icon: <Brain className="text-pink-500" /> },
  { name: 'NLP & LLMs', level: 94, category: 'AI & Machine Learning', icon: <MessageSquareText className="text-indigo-500" /> },
  { name: 'Computer Vision', level: 88, category: 'AI & Machine Learning', icon: <Monitor className="text-emerald-500" /> },
  { name: 'TF & PyTorch', level: 92, category: 'AI & Machine Learning', icon: <TFIcon /> },
  { name: 'Scikit-learn & Keras', level: 90, category: 'AI & Machine Learning', icon: <Cpu className="text-orange-500" /> },
  { name: 'OpenCV & MediaPipe', level: 85, category: 'AI & Machine Learning', icon: <Layout className="text-blue-500" /> },
  


  // Data & Databases
  { name: 'Data Science', level: 96, category: 'Data & Databases', icon: <BarChart className="text-blue-600" /> },
  { name: 'SQL', level: 85, category: 'Data & Databases', icon: <Database className="text-slate-600" /> },
  { name: 'PostgreSQL & MySQL', level: 88, category: 'Data & Databases', icon: <Database className="text-blue-600" /> },
  { name: 'Redis & SQLite', level: 85, category: 'Data & Databases', icon: <Layers className="text-red-500" /> },
  { name: 'Data Visualization', level: 92, category: 'Data & Databases', icon: <PieChart className="text-purple-600" /> },
  { name: 'Pandas & NumPy', level: 98, category: 'Data & Databases', icon: <TableProperties className="text-cyan-600" /> },
  { name: 'Vector DBs (Chroma/FAISS)', level: 92, category: 'Data & Databases', icon: <Search className="text-indigo-500" /> },

  // Web & Backend
  { name: 'TypeScript & JS', level: 88, category: 'Web & Backend', icon: <TSIcon /> },
  { name: 'React', level: 85, category: 'Web & Backend', icon: <FileCode className="text-sky-400" /> },
  { name: 'FastAPI & Flask', level: 90, category: 'Web & Backend', icon: <Server className="text-emerald-500" /> },
  { name: 'Node.js & Express', level: 85, category: 'Web & Backend', icon: <Globe className="text-green-500" /> },
  { name: 'HTML & CSS', level: 90, category: 'Web & Backend', icon: <Layout className="text-orange-600" /> },
  { name: 'REST APIs & WebSockets', level: 92, category: 'Web & Backend', icon: <Link className="text-indigo-500" /> },

  // Cloud & DevOps
  { name: 'Amazon AWS', level: 85, category: 'Cloud & DevOps', icon: <Cloud className="text-orange-500" /> },
  { name: 'Docker', level: 88, category: 'Cloud & DevOps', icon: <Boxes className="text-blue-500" /> },
  { name: 'Kubernetes', level: 80, category: 'Cloud & DevOps', icon: <Activity className="text-indigo-600" /> },
  { name: 'CI/CD Pipelines', level: 85, category: 'Cloud & DevOps', icon: <Settings className="text-slate-600" /> },
  { name: 'MLOps', level: 88, category: 'Cloud & DevOps', icon: <Workflow className="text-green-500" /> },

  // Programming & Tools
  { name: 'Python', level: 99, category: 'Programming & Tools', icon: <PythonIcon /> },
  { name: 'C++ & Java', level: 85, category: 'Programming & Tools', icon: <Code2 className="text-blue-700" /> },
  { name: 'Git & GitHub', level: 92, category: 'Programming & Tools', icon: <Github className="text-slate-800" /> },
  { name: 'VS Code & Cursor', level: 95, category: 'Programming & Tools', icon: <Laptop className="text-blue-500" /> },
  { name: 'Jupyter & Hugging Face', level: 90, category: 'Programming & Tools', icon: <Bot className="text-yellow-500" /> },
  { name: 'Kaggle & Colab', level: 96, category: 'Programming & Tools', icon: <FileJson className="text-orange-500" /> },

];


const Skills: React.FC = () => {
    const categories = ['Agentic AI & Systems', 'AI & Machine Learning', 'Data & Databases', 'Web & Backend', 'Cloud & DevOps', 'Programming & Tools'] as const;

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-slate-900">Technical <span className="text-primary">Expertise</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            A robust set of skills spanning advanced Agentic AI, Generative AI, Data Science, and Full Stack Development.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll with Snap | Desktop: Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 -mx-4 px-4 md:mx-auto md:px-0">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="flex-shrink-0 w-[85%] sm:w-[380px] md:w-auto snap-center bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-lg hover:border-primary/30 transition-all duration-300 hover:shadow-xl h-full"

            >
              <h3 className="text-lg md:text-xl font-bold mb-6 text-slate-800 border-b border-slate-100 pb-2 flex items-center gap-2">
                {category}
              </h3>
              <div className="space-y-4 md:space-y-5">
                {skills.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <div className="flex items-center gap-2.5">
                         <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                           {skill.icon}
                         </div>
                         <span className="font-medium text-slate-700 text-sm">{skill.name}</span>
                      </div>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                                                className={`h-full rounded-full ${
                          category === 'Agentic AI & Systems' ? 'bg-gradient-to-r from-violet-600 to-indigo-600' :
                          category === 'AI & Machine Learning' ? 'bg-gradient-to-r from-primary to-accent' :
                          category === 'Data & Databases' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                          category === 'Web & Backend' ? 'bg-gradient-to-r from-sky-400 to-blue-500' : 
                          category === 'Cloud & DevOps' ? 'bg-gradient-to-r from-orange-400 to-rose-500' : 
                          'bg-gradient-to-r from-slate-400 to-slate-600'
                        }`}

                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;