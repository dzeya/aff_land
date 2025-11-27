import { 
  Heart, 
  Brain, 
  Zap, 
  Sparkles, 
  Music, 
  CloudSun, 
  Users, 
  TrendingUp, 
  Briefcase 
} from 'lucide-react';
import { FAQItem, Persona, PricingTier, Testimonial, UseCase } from './types';

// Audio Sample URL (Dropbox raw link)
export const SAMPLE_AUDIO_URL = "https://www.dropbox.com/scl/fi/qmd71cf3ahtrlrkyou59o/5a246cab-ee43-4990-b0ca-1d257b16aa7e.mp3?rlkey=72k81rd3pjriqn775h2kndywx&raw=1";

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "I used to open my affirmation app, read a few quotes, and forget them. With Affirmetry I actually catch myself singing ‘I am worthy’ under my breath.",
    name: "Sofia",
    age: 27,
    avatar: "https://picsum.photos/seed/sofia/100/100"
  },
  {
    id: 2,
    quote: "I love manifestation, but I also like science. Seeing how the earworm research works makes me trust this more than ‘just believe’ advice.",
    name: "Laura",
    age: 31,
    avatar: "https://picsum.photos/seed/laura/100/100"
  },
  {
    id: 3,
    quote: "I play the money tracks while I get ready for work. A few weeks in, I noticed I negotiate more confidently. It’s like the lyrics rewrote how I talk to myself about money.",
    name: "Daniela",
    age: 34,
    avatar: "https://picsum.photos/seed/daniela/100/100"
  },
  {
    id: 4,
    quote: "I’m a mom; I don’t have 20 minutes to meditate. But I always have 5 minutes to listen while I clean up toys.",
    name: "Camila",
    age: 29,
    avatar: "https://picsum.photos/seed/camila/100/100"
  }
];

export const USE_CASES: UseCase[] = [
  {
    id: 'self-love',
    title: "Self-Love & Worthiness",
    description: "Quiet the “not enough” voice with tracks that repeat “I am enough,” “I am worthy of love.”",
    image: "https://www.dropbox.com/scl/fi/n8qnyi1hragxowrhzxui8/Screenshot-2025-11-27-at-20.36.32.jpg?rlkey=1m2a5shj5xetdrfd4pbgm74ok&raw=1",
    icon: Heart
  },
  {
    id: 'anxiety',
    title: "Anxiety & Overthinking",
    description: "Turn rumination into repetition of calm phrases. From “What if I fail?” to “I can handle what comes.”",
    image: "https://www.dropbox.com/scl/fi/l0bv9w9qbmfsflez1fv0c/Anxiety.jpg?rlkey=j8evs3zta5123k6i7xfki0wti&raw=1",
    icon: CloudSun
  },
  {
    id: 'money',
    title: "Money & Abundance",
    description: "Support a healthier money mindset with melodic lines like “I deserve to be well-paid.”",
    image: "https://www.dropbox.com/scl/fi/8solr065wvodyldmf9d6z/money1.jpg?rlkey=1x7z9d7664xi00eexy4j0pbk7&raw=1",
    icon: TrendingUp
  },
  {
    id: 'body',
    title: "Body & Confidence",
    description: "Move from body-shame loops to affirmations of appreciation, strength, and self-respect.",
    image: "https://www.dropbox.com/scl/fi/phddbo0vrr3fl17zin1t8/body.jpg?rlkey=py9adzhgzih4n6mcottif78y1&raw=1",
    icon: Sparkles
  },
  {
    id: 'relationships',
    title: "Love & Relationships",
    description: "Shift attachment and trust patterns with tracks focused on deserving healthy love.",
    image: "https://www.dropbox.com/scl/fi/lq1cwbakl54oo44gn6oj9/relations.jpg?rlkey=iba3w59y0h4zu5c8og19thaqo&raw=1",
    icon: Users
  },
  {
    id: 'success',
    title: "Productivity & Success",
    description: "Use before big projects or exams to reinforce “I follow through,” “I create results.”",
    image: "https://www.dropbox.com/scl/fi/mx02fsft8l2kqws4xbiiu/productivity1.jpg?rlkey=frc2ftcd98uz4eevgoedxksgl&raw=1",
    icon: Briefcase
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Is this just another affirmation app?",
    answer: "It looks familiar on the surface—but under the hood, Affirmetry uses neuroscience and music science to make affirmations stick in memory far more effectively than simple text notifications."
  },
  {
    question: "Do I need to stop using my current affirmation app?",
    answer: "No. Many users keep their favorite app for quotes and use Affirmetry as the audio “installation” layer—turning key phrases into earworm tracks."
  },
  {
    question: "How long before I notice changes?",
    answer: "Some users feel different after a few days; most notice a shift in self-talk within 2–3 weeks of regular listening (5–15 minutes a day)."
  },
  {
    question: "Is this therapy?",
    answer: "No. Affirmetry is not a medical treatment or a substitute for therapy. It’s a self-help and wellness tool designed to support your emotional well-being and mindset."
  }
];

export const PERSONAS: Persona[] = [
  {
    title: "The Affirmation Lover",
    description: "Already uses affirmation apps, has quotes on the lock screen. Wants something that goes deeper.",
    icon: Heart
  },
  {
    title: "The Self-Help Junkie",
    description: "Reads books, loves “manifestation” content—but also wants mechanisms, not just magic.",
    icon: Brain
  },
  {
    title: "The Anxious High-Achiever",
    description: "Highly functional but with a harsh inner critic. Needs to soften the voice in their head.",
    icon: Zap
  },
  {
    title: "The Busy Caregiver / Mom",
    description: "Has zero time for meditation streaks. Needs self-love and calm on the go.",
    icon: Users
  }
];

export const PRICING: PricingTier[] = [
  {
    name: "Free Plan",
    price: "$0",
    features: [
      "1–2 themes (e.g. Self-Love)",
      "Limited number of tracks",
      "Basic streak tracking"
    ],
    cta: "Start Free"
  },
  {
    name: "Premium Plan",
    price: "$9.99/mo",
    features: [
      "All themes unlocked",
      "New tracks added weekly",
      "21-day Reset Programs",
      "Offline listening"
    ],
    cta: "Start Free Trial",
    recommended: true
  }
];