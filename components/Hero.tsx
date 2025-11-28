import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Music, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { SAMPLE_AUDIO_URL } from '../constants';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    // Initialize audio object
    const audio = new Audio(SAMPLE_AUDIO_URL);
    audioRef.current = audio;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener('ended', handleEnded);

    // Cleanup on unmount
    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(error => {
        console.error("Playback failed:", error);
      });
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-lilac-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" />
        <div className="absolute top-0 -right-20 w-96 h-96 bg-sand-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-terracotta-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-sand-200 text-terracotta-600 text-xs font-bold tracking-widest uppercase mb-6">
            {t('hero.badge')}
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-800 leading-tight mb-6">
            {t('hero.title')}
            <br/>
            <span className="text-terracotta-500 italic">{t('hero.highlight')}</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 mb-8 max-w-lg mx-auto md:mx-0 font-light">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-terracotta-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-terracotta-600 transition-all shadow-lg shadow-terracotta-200 hover:shadow-xl transform hover:-translate-y-1">
              {t('hero.primaryCta')}
            </button>
            <button 
              onClick={togglePlay}
              className="flex items-center justify-center gap-2 bg-white text-stone-700 border border-stone-200 px-8 py-4 rounded-full font-medium hover:bg-stone-50 transition-all"
            >
              {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
              {isPlaying ? t('hero.pauseCta') : t('hero.listenCta')}
            </button>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center gap-4 text-sm text-stone-500">
            <div className="flex -space-x-2">
               {[1,2,3].map(i => (
                 <img key={i} src={`https://picsum.photos/seed/user${i}/40/40`} className="w-8 h-8 rounded-full border-2 border-white" alt="User" />
               ))}
            </div>
            <p>{t('hero.socialProof')}</p>
          </div>
        </motion.div>

        {/* Media / Phone Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Phone Frame */}
          <div className="relative w-[300px] h-[600px] bg-white rounded-[40px] shadow-2xl shadow-stone-300 border-8 border-white overflow-hidden z-10">
            <div className="absolute inset-0 bg-stone-50 flex flex-col">
              {/* App Header */}
              <div className="p-6 pt-12">
                 <div className="text-center text-stone-400 text-xs uppercase tracking-widest mb-1">{t('hero.nowPlaying')}</div>
                 <div className="text-center font-serif text-xl text-stone-800">{t('hero.trackTitle')}</div>
              </div>
              
              {/* Album Art / Visualizer */}
              <div className="flex-1 px-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-lilac-100 to-sand-100 opacity-50" />
                <div className={`w-48 h-48 rounded-full bg-gradient-to-tr from-terracotta-300 to-lilac-300 blur-xl opacity-60 ${isPlaying ? 'animate-pulse' : 'animate-pulse-slow'}`} />
                <div className="relative z-10 text-center">
                  <h3 className="font-serif text-2xl text-stone-800 mb-2">{t('hero.trackLine1')}</h3>
                  <p className="text-stone-500 text-sm">{t('hero.trackLine2')}</p>
                </div>
              </div>

              {/* Player Controls Mockup */}
              <div className="p-8 pb-12 bg-white/50 backdrop-blur-sm">
                <div className="w-full bg-stone-200 h-1 rounded-full mb-6 overflow-hidden">
                  <motion.div 
                    className="h-full bg-terracotta-500 rounded-full" 
                    animate={isPlaying ? { width: ["0%", "100%"] } : { width: "33%" }}
                    transition={isPlaying ? { duration: 30, ease: "linear", repeat: Infinity } : { duration: 0 }}
                  />
                </div>
                <div className="flex justify-between items-center text-stone-800">
                   <Music className="w-6 h-6 text-stone-400" />
                   <div 
                      onClick={togglePlay}
                      className="w-16 h-16 bg-stone-900 rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer hover:scale-105 transition-transform"
                   >
                      {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current" />}
                   </div>
                   <Heart className="w-6 h-6 text-terracotta-500 fill-current" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Player Teaser */}
          <motion.div 
            onClick={togglePlay}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 max-w-xs cursor-pointer hover:bg-stone-50 transition-colors"
          >
            <div className="w-10 h-10 bg-lilac-100 rounded-full flex items-center justify-center text-lilac-600">
              {isPlaying ? <Pause className="w-5 h-5" /> : <Music className="w-5 h-5" />}
            </div>
            <div>
              <p className="text-xs font-bold text-stone-800">
                {isPlaying ? t('hero.floatingPause') : t('hero.floatingPlay')}
              </p>
              <p className="text-[10px] text-stone-500">{t('hero.previewMeta')}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
