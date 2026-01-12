import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Eye, Brain, Server } from 'lucide-react';

const features = [
  {
    icon: <Layout className="w-6 h-6 text-primary" />,
    title: "Full-Stack ML & DL",
    desc: "Building complete AI apps with robust ML algorithms and user-friendly frontends."
  },
  {
    icon: <Eye className="w-6 h-6 text-secondary" />,
    title: "Computer Vision & NLP",
    desc: "Creating systems that see and understand, focusing on Object Detection and NLP."
  },
  {
    icon: <Brain className="w-6 h-6 text-accent" />,
    title: "Agentic & GenAI",
    desc: "Building Autonomous Agents with LLMs that plan and execute tasks independently."
  },
  {
    icon: <Server className="w-6 h-6 text-green-500" />,
    title: "Production MLOps",
    desc: "Designing scalable pipelines to turn experimental models into production deployments."
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden bg-white">
       <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-3">About Me</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-tight">
              Solving Real-World Problems with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Cutting-Edge AI</span>
            </h3>
            <div className="space-y-4 text-slate-600 leading-relaxed text-base">
              <p>
                I am a Computer Science graduate (BSCS) and AI Intern specializing in Agentic AI, GenAI, and Computer Vision. My technical expertise spans the entire AI landscape, including MLOps, NLP, Deep Learning, and Data Science.
              </p>
              <p>
                I am driven by a passion for solving real-world problems. I focus on applying these technologies to build practical, efficient solutions that deliver tangible value and impact.
              </p>
            </div>
            
            <div className="mt-8 flex gap-8">
              <div>
                <span className="block text-3xl md:text-4xl font-bold text-slate-900 mb-1">5+</span>
                <span className="text-xs sm:text-sm text-slate-500">Months Experience</span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-bold text-slate-900 mb-1">20+</span>
                <span className="text-xs sm:text-sm text-slate-500">Projects Completed</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center group-hover:scale-110 transition-transform text-slate-700 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">{feature.title}</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;