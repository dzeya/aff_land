import React from 'react';
import { Scroll, Smartphone, Zap, Music } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ProblemSolution: React.FC = () => {
  const { t } = useTranslation();
  const problemCardCopy = t('problemSolution.problemCards', { returnObjects: true }) as { title: string; description: string }[];
  const solutionBullets = t('problemSolution.solutionBullets', { returnObjects: true }) as { title: string; description: string }[];
  const defaultProblemCards = [
    {
      icon: Scroll,
      title: "Scroll & Forget",
      desc: "You read dozens of affirmations daily but can't remember one in a stressful moment. Text rarely makes it to long-term memory."
    },
    {
      icon: Smartphone,
      title: "Generic & Disconnected",
      desc: "Recycled lines look good on Instagram but don't feel personal enough to change deep beliefs about money or love."
    },
    {
      icon: Zap,
      title: "All Vibe, No Science",
      desc: "Without a mechanism for neuroplasticity, 'manifesting' feels like magic. You need a way to actually rewire the brain."
    }
  ];
  const localizedProblemCards = defaultProblemCards.map((item, idx) => ({
    ...item,
    title: problemCardCopy?.[idx]?.title ?? item.title,
    desc: problemCardCopy?.[idx]?.description ?? item.desc
  }));
  const defaultSolutionBullets = [
    { title: "Classic Content, New Format", description: "“I am” statements about love, money, body—now as catchy tracks." },
    { title: "The Earworm Effect", description: "Designed so phrases resurface in your mind while you shower or walk." },
    { title: "Science-backed, not “woo-woo”", description: "Built on neuroplasticity and Involuntary Musical Imagery (INMI)." },
    { title: "Effortless Practice", description: "No journaling, no long meditations. Just press play." }
  ];
  const localizedSolutionBullets = defaultSolutionBullets.map((item, idx) => ({
    ...item,
    title: solutionBullets?.[idx]?.title ?? item.title,
    description: solutionBullets?.[idx]?.description ?? item.description
  }));

  return (
    <div className="bg-stone-50 overflow-hidden">
      {/* Problem Section */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-4">
              {t('problemSolution.problemTitle')}
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {t('problemSolution.problemIntro')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {localizedProblemCards.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-400 mb-6">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-stone-900 mb-3">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section - Transition */}
      <section className="py-24 px-6 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>
        
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
             <div className="absolute inset-0 bg-lilac-100 rounded-[50px] rotate-3 transform"></div>
             <img 
               src="https://www.dropbox.com/scl/fi/b9t3k0cbwqrflpskatz6d/Generated-Image-November-27-2025-9_31PM-2.jpeg?rlkey=1ifmwxvcphrstotu6ewnfcamp&raw=1" 
               alt="Woman listening comfortably" 
               className="relative rounded-[50px] shadow-2xl object-cover w-full h-[600px] z-10"
             />
            <div className="absolute bottom-10 left-10 right-10 z-20 bg-white/90 backdrop-blur p-6 rounded-2xl shadow-lg">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-terracotta-500 rounded-full flex items-center justify-center text-white">
                   <Music className="w-6 h-6" />
                 </div>
                 <div>
                   <div className="h-1 w-32 bg-stone-200 rounded mb-2 overflow-hidden">
                       <motion.div 
                         className="h-full bg-terracotta-500"
                         animate={{ width: ["0%", "100%"] }}
                         transition={{ duration: 3, repeat: Infinity }}
                       />
                   </div>
                    <p className="text-xs font-bold text-stone-800">{t('hero.progressLabel')}</p>
                  </div>
                </div>
             </div>
          </div>

          <div className="order-1 md:order-2">
            <span className="text-terracotta-600 font-bold tracking-widest text-xs uppercase mb-4 block">{t('problemSolution.solutionLabel')}</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 leading-tight">
              {t('problemSolution.solutionTitle')}
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              {t('problemSolution.solutionIntro')}
            </p>

            <ul className="space-y-6">
              {localizedSolutionBullets.map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-sand-200 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 bg-terracotta-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-800">{item.title}</h4>
                    <p className="text-stone-500 text-sm">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <p className="text-xl font-serif italic text-stone-400 mb-6">{t('problemSolution.tagline')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProblemSolution;
