import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ArrowRight, Brain, Activity, Zap } from 'lucide-react';

const data = [
  { name: 'Reading (Text)', value: 20 },
  { name: 'Listening (Speech)', value: 45 },
  { name: 'Affirmetry (Music + Emotion)', value: 95 },
];

const Science: React.FC = () => {
  return (
    <section className="py-24 bg-stone-900 text-stone-50 relative overflow-hidden">
      {/* Background textural elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-800/20 skew-x-12"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-terracotta-400 font-bold tracking-widest text-xs uppercase mb-4 block">The Science</span>
          <h2 className="text-3xl md:text-5xl font-serif mb-6">
            Not magic. <span className="italic text-lilac-300">Mechanics.</span>
          </h2>
          <p className="text-stone-300 text-lg">
            Why singing your affirmations works better than just reading them. Our research shows that musical messages activate more of the brain and are remembered 3x better.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Infographic / Chart Side */}
          <div className="bg-stone-800/50 p-8 rounded-3xl border border-stone-700">
            <h3 className="text-xl font-serif mb-8 text-center text-stone-200">Retention Rates of Information</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={100} tick={{ fill: '#d6d3d1', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#292524', borderColor: '#44403c', color: '#fff' }}
                    itemStyle={{ color: '#d4a373' }}
                    cursor={{fill: 'transparent'}}
                  />
                  <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={40}>
                     {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 2 ? '#d4a373' : '#57534e'} />
                      ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-center text-stone-500 text-xs mt-4">Simplified representation of multi-modal learning efficacy.</p>
          </div>

          {/* Explanation Side */}
          <div className="space-y-10">
            {[
              {
                icon: Activity,
                title: "Earworm Engine (INMI)",
                desc: "Your brain naturally loops melodies. Affirmetry 'hijacks' this loop so instead of replaying worries, your brain replays 'I am capable'."
              },
              {
                icon: Brain,
                title: "Whole-Brain Encoding",
                desc: "Reading uses the left hemisphere. Music + Lyrics engage the whole brain, including emotional and motor centers, creating durable memories."
              },
              {
                icon: Zap,
                title: "Female Stickiness Advantage",
                desc: "Studies show women experience longer-lasting earworms. Musical affirmations are biologically optimized for our core audience."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center shrink-0 text-terracotta-400">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-sand-100 mb-2">{item.title}</h4>
                  <p className="text-stone-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}

            <div className="pt-6">
              <button className="flex items-center gap-2 text-terracotta-400 hover:text-terracotta-300 transition-colors font-semibold">
                See the full whitepaper <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Science;