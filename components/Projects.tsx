import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const projects: Project[] = [
  // --- AGENTIC AI & LLMs ---
  {
    id: 101,
    title: "Quote and Order Agent",
    description: "An agent chatbot that acts as a sales representative to help fill complex forms, calculate quotes, and place orders.",
    tags: ["Python", "FastAPI", "LLMs", "Agentic AI", "LangGraph", "MCP Servers"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Abdul-Qahir-Jalali/Quote_and_Order_Agent",
    demoUrl: "https://quote-and-order-agent.vercel.app/"
  },
  {
    id: 102,
    title: "Fact Checker Agent",
    description: "This agent verifies claimed statements using live web search to confirm if they are true.",
    tags: ["Python", "LangGraph", "FastAPI", "Groq (Llama 3)", "LangChain", "Tavily API", "MCP Server"],
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Abdul-Qahir-Jalali/fact_checker_agent",
    demoUrl: "https://fact-checker-agent.vercel.app/"
  },
  {
    id: 103,
    title: "SQL Analyst Agent",
    description: "An agent that lets you talk to your database in plain English to view data and create new records.",
    tags: ["Python", "LangGraph", "Groq (Llama 3.3)", "MySQL", "SQL", "MCP server"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Abdul-Qahir-Jalali/sql_analyst-agent",
    demoUrl: "https://sql-analyst-agent.vercel.app/"
  },
  {
    id: 104,
    title: "24/7 AI Email Auto-Responder",
    description: "An AI agent acting as customer support for mobile shops, automatically replying to client queries about phones.",
    tags: ["Python", "LangGraph", "Groq (Llama 3)", "Gmail API", "Google OAuth2", "MCP Architecture"],
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Abdul-Qahir-Jalali/auto-mail-agent",
    demoUrl: "https://www.linkedin.com/posts/abdul-qahir-jalali_ai-agenticai-python-activity-7413610160088301568-P6JH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFKp7NQBm3kfn_u8WtJxwxRoKuL-vPxRjtg" 
  },
  {
    id: 5,
    title: "MindGuard AI",
    description: "Unlike basic chatbots, this therapist uses proper medical logic to diagnose symptoms, explain full problem, create flowcharts, and suggest videos.",
    tags: ["React", "Gemini API", "Mermaid.js", "Tailwind"],
    image: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Abdul-Qahir-Jalali/mental_health_chatbot",
    demoUrl: "https://mind-guard-ai-qahir.vercel.app/"
  },

  // --- COMPUTER VISION & MLOPS ---
  {
    id: 105,
    title: "Object Detection Dashboard UI",
    description: "A modern frontend interface featuring secure Sign Up and Sign In pages designed for an object detection platform.",
    tags: ["TypeScript", "React", "Python", "SQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Abdul-Qahir-Jalali/object-detector",
    demoUrl: "https://object-detector-eta.vercel.app/"
  },
  {
    id: 15,
    title: "Object Detector",
    description: "An end-to-end MLOps pipeline detecting objects like boxes, documents, houses and chairs. It automatically collects data and retrains itself.",
    tags: ["Python", "YOLO11", "Docker", "MLOps"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Abdul-Qahir-Jalali/object_detection",
    demoUrl: "https://huggingface.co/spaces/qahir00/object_detection"
  },
  {
    id: 6,
    title: "PostureGuard",
    description: "A real-time webcam tool that detects forward head posture and plays continuous audio alerts until you sit straight.",
    tags: ["React", "MediaPipe Pose", "Web Speech API"],
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Abdul-Qahir-Jalali/PostureGuard---Real-Time-Forward-Head-Posture-Detection",
    demoUrl: "https://real-time-postureguard.netlify.app/"
  },
  {
    id: 106,
    title: "Spam Email Detection",
    description: "An end-to-end spam email detection pipeline that auto-retrains when accuracy drops, adapting to new spam tricks to maintain high performance.",
    tags: ["Python", "Docker", "DVC", "MLflow", "MLOps"],
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Abdul-Qahir-Jalali/spam-email_detection",
    demoUrl: "" 
  },
  {
    id: 7,
    title: "Urdu Deepfake Audio Detector (FYP)",
    description: "The first-ever Urdu deepfake detector, trained on a custom dataset of 9,600 audio clips to identify voice clones.",
    tags: ["Python", "PyTorch", "Wav2Vec2", "ElevenLabs"],
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Abdul-Qahir-Jalali/urdu-deepfake-audio-detection",
    demoUrl: "https://abdulqahir-urdu-deepfake-audio-detector.hf.space"
  },

  // --- GENERATIVE AI ---
  {
    id: 13,
    title: "Text-to-Speech Generator",
    description: "Converts text to realistic speech using Coqui TTS with a simple interface.",
    tags: ["Python", "Coqui TTS", "Gradio"],
    image: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Abdul-Qahir-Jalali/TTS-with-gradio",
    demoUrl: "https://huggingface.co/spaces/qahir00/text-to-speech"
  },
  {
    id: 12,
    title: "Text-to-Image Generator",
    description: "Generates unique high-quality images from text prompts using Stable Diffusion.",
    tags: ["Python", "Stable Diffusion", "Gradio"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Abdul-Qahir-Jalali/text_to_image",
    demoUrl: "https://huggingface.co/spaces/qahir00/text-to-image-generator"
  },

  // --- DATA SCIENCE & ANALYTICS ---
  {
    id: 151,
    title: "EPL Data Analysis",
    description: "A comprehensive analysis of English Premier League stats featuring interactive Atlas visualizations and an ML model for match predictions.",
    tags: ["Python", "Altair", "Scikit-learn", "Pandas"],
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Abdul-Qahir-Jalali/epl-2019-2020-data-analysis",
    demoUrl: "https://abdul-qahir-jalali.github.io/epl-2019-2020-data-analysis/"
  },
  {
    id: 10,
    title: "Zomato Data Analysis",
    description: "Visualizes restaurant trends, pricing, and ratings from raw data.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Abdul-Qahir-Jalali/zomato-data-analysis",
    demoUrl: "https://abdul-qahir-jalali.github.io/zomato-data-analysis/"
  },
  {
    id: 9,
    title: "Customer Segmentation",
    description: "Uses unsupervised K-Means clustering to uncover hidden patterns and automatically group customers into distinct behavioral categories.",
    tags: ["Python", "Scikit-learn", "K-Means"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Abdul-Qahir-Jalali/customer_clustering_analysis",
    demoUrl: "https://abdul-qahir-jalali.github.io/customer_clustering_analysis/"
  },
  {
    id: 11,
    title: "Customer Churn Prediction",
    description: "Uses Deep Learning to predict if customers will leave.",
    tags: ["Python", "ANN", "Deep Learning"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Abdul-Qahir-Jalali/customer_churn_prediction",
    demoUrl: "https://abdul-qahir-jalali.github.io/customer_churn_prediction/"
  },
  {
    id: 4,
    title: "Crop Recommendation",
    description: "Analyzes soil nutrients and weather data provided by the user to recommend the best crop for optimal growth.",
    tags: ["Python", "Flask", "Scikit-learn"],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Abdul-Qahir-Jalali/crop-recommendation-system",
    demoUrl: "https://qahir.pythonanywhere.com/"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-12">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Featured <span className="text-secondary">Projects</span></h2>
            <p className="text-slate-600 max-w-xl text-sm sm:text-base">
              A showcase of my work in Agentic AI, MLOps, Computer Vision, and Data Science.
            </p>
          </div>
          <a href="https://github.com/Abdul-Qahir-Jalali" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium">
            View Github <Github className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-44 sm:h-48 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] sm:text-xs font-mono px-2 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex gap-4 mt-auto pt-4 border-t border-slate-50 flex-wrap">
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-800 hover:text-primary transition-colors">
                      {project.demoUrl.includes("linkedin.com") ? (
                        <>
                          <PlayCircle className="w-4 h-4" /> Watch Demo
                        </>
                      ) : (
                        <>
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </>
                      )}
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-800 hover:text-primary transition-colors">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                  {!project.githubUrl && !project.demoUrl && (
                     <span className="text-sm text-slate-400 italic">Links coming soon</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 md:mt-12 text-center md:hidden">
          <a href="https://github.com/Abdul-Qahir-Jalali" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium">
            View Github <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;