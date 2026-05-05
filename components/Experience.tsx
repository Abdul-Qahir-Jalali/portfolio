import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem } from '../types';
import { Briefcase, Calendar, ExternalLink, MapPin, Globe } from 'lucide-react';

const experiences: ExperienceItem[] = [
  {
    id: 2,
    role: "Junior AI Engineer",
    company: "Metropolitan Solutions (Pvt) Limited",
    companyUrl: "https://www.gomwd.com",
    period: "Dec 2025 - Present",
    workMode: "Onsite",
    location: "Islamabad",
    description: [
      "Architected and deployed autonomous AI agent chatbots, utilizing LangGraph, CrewAI, and MCP servers, directly onto the company’s production servers to automate complex workflows.",
      "Fine-tuned state-of-the-art Open Source Large Language Models (LLMs) such as Llama 3.1 8B and Mistral using LoRA, QLoRA, and DoRA techniques for specialized domain-specific enterprise tasks.",
      "Designed and implemented advanced Retrieval-Augmented Generation (RAG) architectures incorporating hybrid search, semantic chunking, and cross-encoder reranking to ensure highly accurate, context-aware responses.",
      "Engineered end-to-end MLOps pipelines using MLflow and DVC to automate training, version control, CI/CD, and drift monitoring of AI models."
    ]

  },
    {
    id: 3,
    role: "AI Engineer & Ambassador",
    company: "eMental Health International Collaborative (EMHIC)",
    companyUrl: "https://emhicglobal.com/",
    period: "Jan 2026 - Present",
    workMode: "Remote",
    location: "New Zealand",
    description: [
      "Replaced legacy basic keyword searching with an advanced RAG-based intelligent search system, significantly improving information retrieval accuracy.",
      "Fine-tuned Meta Llama 3.1 (8B) to automatically generate highly accurate profile tags by analyzing user descriptions and background details.",
      "Supported international collaboration and knowledge exchange to ensure digitally enabled support systems."
    ]

  },

  {
    id: 1,
    role: "AI & ML Intern",
    company: "ITSOLERA Pvt. Ltd.",
    companyUrl: "https://www.itsolera.com",
    period: "June 2025 - Aug 2025",
    workMode: "Onsite",
    location: "Islamabad",
    description: [
      "Contributed to AI and ML projects including AI-Enhanced Detection of Fake and Bot Profiles on Social Media.",
      "Engineered and implemented full end-to-end MLOps pipelines across all projects, ensuring seamless model training, deployment, and lifecycle management.",
      "Assisted in multi-modal risk scoring data preprocessing, model development, and performance evaluation."
    ]

  }
  ,
  {
    id: 4,
    role: "AI & MLIntern",
    company: "DevelopersHub Corporation",
    companyUrl: "https://www.linkedin.com/company/developershub-corporation/",
    period: "June 2024 - Aug 2024",
    workMode: "Remote",
    description: [
      "Completed a 3-month remote internship focused on the practical application of Machine Learning and Deep Learning techniques.",
      "Gained hands-on experience in data preprocessing, training predictive models using supervised and unsupervised algorithms, and implementing neural network architectures.",
      "Successfully translated theoretical AI concepts into functional models, with a strong focus on hyperparameter tuning, model evaluation, and performance optimization."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-slate-900">
          Professional <span className="text-accent">Journey</span>
        </h2>

        <div className="relative border-l border-slate-200 ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(6,182,212,0.4)]"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2">
                     {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-medium mt-1 text-sm sm:text-base">
                    <Briefcase className="w-4 h-4" />
                    {exp.companyUrl ? (
                      <a 
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-accent transition-colors flex items-center gap-1 group"
                      >
                        {exp.company}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <span>{exp.company}</span>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-2 sm:mt-0">
                  {/* Date Pill */}
                  <div className="flex items-center gap-2 text-slate-500 text-xs sm:text-sm font-mono bg-slate-100 px-3 py-1 rounded-full border border-slate-200 w-fit">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    {exp.period}
                  </div>
                  
                  {/* Work Mode Pill */}
                  {exp.workMode && (
                    <div className={`flex items-center gap-1.5 text-xs sm:text-sm font-mono px-3 py-1 rounded-full border w-fit ${
                      exp.workMode === 'Remote' 
                        ? 'bg-blue-50 text-blue-600 border-blue-200' 
                        : 'bg-emerald-50 text-emerald-600 border-emerald-200'
                    }`}>
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                      {exp.workMode}
                    </div>
                  )}
                                    {/* Location Pill */}
                  {exp.location && (
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono px-3 py-1 rounded-full border border-purple-200 bg-purple-50 text-purple-600 w-fit">
                      <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
                      {exp.location}
                    </div>
                  )}

                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-accent mt-1.5 min-w-[5px]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;