import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, LayoutTemplate, Server, Cpu, Database, Brain, Zap, Shield, Image } from 'lucide-react';
import { projects } from '../components/Projects';
import { projectDetailsData } from '../data/projectDetails';

// Helper function to map tech stack names to icons (for nicer UI)
const getTechIcon = (name: string) => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('react') || lowerName.includes('tailwind') || lowerName.includes('frontend')) return <LayoutTemplate className="w-5 h-5 text-blue-500" />;
  if (lowerName.includes('fastapi') || lowerName.includes('python') || lowerName.includes('backend')) return <Server className="w-5 h-5 text-green-500" />;
  if (lowerName.includes('db') || lowerName.includes('qdrant') || lowerName.includes('sql')) return <Database className="w-5 h-5 text-orange-500" />;
  if (lowerName.includes('llm') || lowerName.includes('agent') || lowerName.includes('langgraph')) return <Brain className="w-5 h-5 text-purple-500" />;
  return <Cpu className="w-5 h-5 text-slate-500" />;
};

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!slug) return <div className="p-20 text-center">Project not found.</div>;

  const baseProject = projects.find(p => p.slug === slug);
  const details = projectDetailsData[slug];

  if (!baseProject || !details) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Project Details Coming Soon</h2>
        <p className="text-slate-600 mb-8">I am currently documenting the detailed case study for this project.</p>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Back Button */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-primary transition-colors font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-slate-100 mb-12"
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {baseProject.tags.map(tag => (
              <span key={tag} className="text-xs font-mono px-3 py-1.5 rounded-md bg-primary/10 text-primary border border-primary/20">
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">{baseProject.title}</h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">{details.tagline}</p>
          
          <div className="flex flex-wrap gap-4">
            {baseProject.demoUrl && baseProject.demoUrl !== "#" && (
              <a href={baseProject.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
            {baseProject.githubUrl && baseProject.githubUrl !== "#" && (
              <a href={baseProject.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition-colors font-medium border border-slate-200">
                <Github className="w-4 h-4" /> View Source Code
              </a>
            )}
          </div>
        </motion.div>

        {/* Cover Image */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full h-64 sm:h-96 rounded-2xl overflow-hidden shadow-xl mb-16"
        >
          <img src={baseProject.image} alt={baseProject.title} className="w-full h-full object-cover" />
        </motion.div>

        {/* Overview & How it works */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Zap className="w-6 h-6 text-primary" /> Project Overview
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              {details.overview.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <LayoutTemplate className="w-6 h-6 text-primary" /> How It Works
            </h2>
            <ol className="relative border-l border-slate-200 ml-3 space-y-6">
              {details.howItWorks.map((step, idx) => (
                <li key={idx} className="mb-6 ml-6">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-primary/20 rounded-full -left-3 ring-4 ring-slate-50 text-primary text-xs font-bold">
                    {idx + 1}
                  </span>
                  <p className="text-slate-600 leading-relaxed pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl p-6 sm:p-10 shadow-lg border border-slate-100"
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Technology Stack</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {details.techStack.map((tech, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-primary/30 transition-colors">
                <div className="flex-shrink-0 mt-1">
                  {getTechIcon(tech.name)}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{tech.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{tech.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features & Challenges */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Brain className="w-6 h-6 text-primary" /> Key Features
            </h2>
            <div className="space-y-6">
              {details.features.map((feature, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {details.challenges && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" /> Challenges & Solutions
              </h2>
              <div className="space-y-6">
                {details.challenges.map((challenge, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
                    <div className="mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-red-500 mb-1 block">Challenge</span>
                      <p className="text-sm font-medium text-slate-900">{challenge.problem}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-500 mb-1 block">Solution</span>
                      <p className="text-sm text-slate-600 leading-relaxed">{challenge.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="mt-20 pt-10 border-t border-slate-200 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Interested in learning more?</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {baseProject.githubUrl && baseProject.githubUrl !== "#" && (
              <a href={baseProject.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium">
                <Github className="w-4 h-4" /> Explore Code
              </a>
            )}
            <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-900 rounded-lg hover:bg-slate-200 transition-colors font-medium border border-slate-200">
              <ArrowLeft className="w-4 h-4" /> View Other Projects
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;
