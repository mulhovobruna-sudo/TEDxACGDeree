
import React, { useState, useEffect } from 'react';
import { CountdownTime } from '../types';
import Contact from './Contact';

const Home: React.FC = () => {
  const calculateTimeLeft = (): CountdownTime => {
    const eventDate = new Date('2027-04-13T09:00:00').getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<CountdownTime>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative z-10 max-w-5xl">
          <div className="inline-block px-4 py-1 border border-primary/50 text-primary text-xs uppercase tracking-[0.3em] mb-8 rounded-full bg-primary/5">
            The Future is Now
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter mb-6 leading-[0.9]">
            Beyond <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Horizons</span>
          </h1>
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-full max-w-md mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl font-light text-white/70 mb-10 tracking-wide">
            April 13, 2027 | Deree ACG Campus
          </p>
          <div className="flex justify-center items-center">
            <button className="w-full sm:w-auto min-w-[200px] border border-white/20 hover:border-white/50 bg-white/5 px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-widest transition-all">
              View Schedule
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <span className="material-symbols-outlined text-3xl">expand_more</span>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-24 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-12">
            <div className="text-center">
              <h2 className="text-primary text-sm font-bold uppercase tracking-[0.4em] mb-2">Countdown</h2>
              <p className="text-3xl font-light tracking-tight">The Horizon Approaches</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-4xl">
              {[
                { val: timeLeft.days, label: 'Days' },
                { val: timeLeft.hours, label: 'Hours' },
                { val: timeLeft.minutes, label: 'Minutes' },
                { val: timeLeft.seconds, label: 'Seconds' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center p-8 glass-effect rounded-xl">
                  <span className="text-5xl md:text-7xl font-bold text-white mb-2">
                    {item.val.toString().padStart(2, '0')}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-primary font-bold">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="aspect-square rounded-2xl overflow-hidden glass-effect p-2 transition-transform duration-700 group-hover:scale-[1.02]">
              <div 
                className="w-full h-full bg-cover bg-center rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1475721027785-f74dea327912?q=80&w=1200&auto=format&fit=crop')` }}
              ></div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-primary/30 rounded-full animate-pulse pointer-events-none"></div>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
              Exploring the <span className="text-primary italic">Unknown</span>
            </h3>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              Beyond Horizons is more than just a theme; it's a call to action. We are gathering visionaries, innovators, and disruptors to dismantle the boundaries of technology and human potential. Join us at TEDx Deree ACG on April 13, 2027, as we peer into the future of ideas that will reshape our universe.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: 'rocket_launch', title: 'Innovation', desc: 'Redefining what is possible through technology.' },
                { icon: 'public', title: 'Discovery', desc: 'Uncovering hidden truths in our ecosystem.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 transition-colors cursor-default">
                  <span className="material-symbols-outlined text-primary">{item.icon}</span>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-white/50 leading-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <button className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest hover:gap-4 transition-all">
                Learn More <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default Home;
