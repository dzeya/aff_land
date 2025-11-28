import React from 'react';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Science from './components/Science';
import UseCases from './components/UseCases';
import { TESTIMONIALS, FAQS, PRICING } from './constants';
import { Star, Check, ChevronDown, ChevronUp, Menu, X, Instagram, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';

// Simple Components within App.tsx to reduce file count for the XML requirement, 
// as permitted by instructions ("handful of files").

// --- Navbar ---
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="https://www.dropbox.com/scl/fi/xxqrjooqhi3jdwi8b24wd/small_logo.png?rlkey=poddfypzl5ewfc9ndedbo64j0&raw=1" 
            alt="Affirmetry Logo" 
            className="w-10 h-10 object-contain" 
          />
          <span className="font-serif text-2xl font-bold text-stone-800 tracking-tight">{t('navbar.brand')}</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-stone-600 hover:text-terracotta-600 text-sm font-medium">{t('navbar.howItWorks')}</a>
          <a href="#science" className="text-stone-600 hover:text-terracotta-600 text-sm font-medium">{t('navbar.science')}</a>
          <a href="#pricing" className="text-stone-600 hover:text-terracotta-600 text-sm font-medium">{t('navbar.pricing')}</a>
          <LanguageSwitcher />
          <button className="bg-stone-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition-colors">
            {t('navbar.startTrial')}
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-100 p-6 absolute w-full flex flex-col gap-4 shadow-lg">
          <a href="#how-it-works" className="text-stone-800 py-2">{t('navbar.howItWorks')}</a>
          <a href="#science" className="text-stone-800 py-2">{t('navbar.science')}</a>
          <a href="#pricing" className="text-stone-800 py-2">{t('navbar.pricing')}</a>
          <LanguageSwitcher className="w-full" />
          <button className="bg-terracotta-500 text-white px-6 py-3 rounded-full text-sm font-medium w-full">
            {t('navbar.startTrial')}
          </button>
        </div>
      )}
    </nav>
  );
};

// --- Testimonials ---
const TestimonialSection = () => {
  const { t } = useTranslation();
  const testimonialCopy = t('testimonials.items', { returnObjects: true }) as { quote: string; name: string; age: string | number }[];
  const testimonials = TESTIMONIALS.map((item, idx) => ({
    ...item,
    ...testimonialCopy?.[idx]
  }));

  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-6">
              {t('testimonials.title')}
            </h2>
         </div>
         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-sand-50 p-6 rounded-2xl">
                <div className="flex gap-1 text-terracotta-400 mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-stone-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-stone-900 text-sm">{testimonial.name}</p>
                    <p className="text-stone-500 text-xs">{testimonial.age}</p>
                  </div>
                </div>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
};

// --- Pricing ---
const PricingSection = () => {
  const { t } = useTranslation();
  const tiersCopy = t('pricing.tiers', { returnObjects: true }) as typeof PRICING;
  const tiers = PRICING.map((tier, idx) => ({
    ...tier,
    ...(tiersCopy?.[idx] || {})
  }));

  return (
    <section id="pricing" className="py-24 px-6 bg-sand-100">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-4">{t('pricing.title')}</h2>
          <p className="text-stone-600">{t('pricing.subtitle')}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {tiers.map((tier, idx) => (
            <div key={idx} className={`bg-white p-8 rounded-3xl border ${tier.recommended ? 'border-terracotta-500 shadow-xl relative' : 'border-stone-200'}`}>
              {tier.recommended && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-terracotta-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {t('pricing.recommendedLabel')}
                </span>
              )}
              <h3 className="font-serif text-2xl text-stone-900 mb-2">{tier.name}</h3>
              <div className="text-4xl font-bold text-stone-900 mb-6">{tier.price}</div>
              <ul className="space-y-4 mb-8">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-600">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                tier.recommended 
                ? 'bg-stone-900 text-white hover:bg-stone-800' 
                : 'bg-stone-100 text-stone-900 hover:bg-stone-200'
              }`}>
                {tier.cta}
              </button>
              <p className="text-center text-xs text-stone-400 mt-4">{t('pricing.cancelAnytime')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- FAQ ---
const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const { t } = useTranslation();
  const faqsCopy = t('faq.items', { returnObjects: true }) as typeof FAQS;
  const faqs = FAQS.map((faq, idx) => ({
    ...faq,
    ...(faqsCopy?.[idx] || {})
  }));

  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-serif text-stone-900 mb-12 text-center">{t('faq.title')}</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-stone-200 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
              >
                <span className="font-medium text-stone-900">{faq.question}</span>
                {openIndex === idx ? <ChevronUp className="text-stone-400" /> : <ChevronDown className="text-stone-400" />}
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-stone-600 leading-relaxed text-sm bg-stone-50/50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-stone-900 text-stone-400 py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 text-white">
              <img 
                src="https://www.dropbox.com/scl/fi/xxqrjooqhi3jdwi8b24wd/small_logo.png?rlkey=poddfypzl5ewfc9ndedbo64j0&raw=1" 
                alt="Affirmetry Logo" 
                className="w-8 h-8 object-contain rounded-md" 
              />
              <span className="font-serif text-2xl font-bold">{t('footer.brand')}</span>
            </div>
            <p className="max-w-xs mb-6">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4">
               <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-stone-700 cursor-pointer transition-colors">
                 <Instagram className="w-5 h-5" />
               </div>
               <div className="w-10 h-10 bg-stone-800 rounded-full flex items-center justify-center hover:bg-stone-700 cursor-pointer transition-colors">
                 <Twitter className="w-5 h-5" />
               </div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-serif mb-4">{t('footer.companyColumn')}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.links.about')}</a></li>
              <li><a href="#science" className="hover:text-white transition-colors">{t('footer.links.science')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.links.careers')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-serif mb-4">{t('footer.supportColumn')}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.links.help')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.links.privacy')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.links.terms')}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-800 pt-8 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p>{t('footer.copyright')}</p>
          <p className="opacity-60">{t('footer.disclaimer')}</p>
        </div>
      </div>
    </footer>
  );
};

// --- CTA Section ---
const FinalCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 px-6 bg-terracotta-500 text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-terracotta-400 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-terracotta-600 to-transparent"></div>
      </div>
      <div className="container mx-auto relative z-10 max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-serif mb-6">{t('finalCta.title')}</h2>
        <p className="text-terracotta-100 text-xl mb-10">{t('finalCta.subtitle')}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-terracotta-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-stone-50 transition-colors shadow-xl">
            {t('finalCta.primaryCta')}
          </button>
          <button className="border-2 border-terracotta-300 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-terracotta-600 transition-colors">
            {t('finalCta.secondaryCta')}
          </button>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  const { t } = useTranslation();
  const howStepsCopy = t('howItWorks.steps', { returnObjects: true }) as { title: string; description: string }[];
  const howItWorksSteps = [
    { step: 1, title: "Pick your theme", desc: "Choose themes like Self-Love, Money, or Anxiety. Similar to classic apps—but tuned for music." },
    { step: 2, title: "Get your tracks", desc: "Our system pairs powerful “I am” statements with melodies optimized for memorability." },
    { step: 3, title: "Listen daily", desc: "Play your tracks while getting ready. Repetition + melody strengthen new thought pathways." }
  ].map((item, idx) => ({
    ...item,
    title: howStepsCopy?.[idx]?.title ?? item.title,
    desc: howStepsCopy?.[idx]?.description ?? item.desc
  }));

  return (
    <div className="antialiased text-stone-800 bg-sand-50">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <div id="how-it-works" className="py-24 bg-white px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-16">
              <span className="text-terracotta-500 font-bold uppercase tracking-widest text-xs mb-2 block">{t('howItWorks.sectionLabel')}</span>
              <h2 className="text-4xl font-serif">{t('howItWorks.title')}</h2>
           </div>
           <div className="grid md:grid-cols-3 gap-8">
             {howItWorksSteps.map((item, i) => (
               <div key={i} className="relative p-8 rounded-3xl bg-sand-50 border border-sand-200">
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-stone-900 text-white rounded-xl flex items-center justify-center font-serif text-xl font-bold shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                  <p className="text-stone-600">{item.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </div>
      <div id="science">
        <Science />
      </div>
      <UseCases />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default App;
