
import React, { useState } from 'react';
import { SPEAKERS } from '../constants';

const Speakers: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const tracks = ['All', 'Technology', 'Bio-Design', 'Culture', 'Psychology', 'Sustainability'];

  const filteredSpeakers = filter === 'All' 
    ? SPEAKERS 
    : SPEAKERS.filter(s => s.track === filter);

  return (
    <div className="pt-32 pb-32 px-6 max-w-7xl mx-auto animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] text-white">
            Speakers<span className="text-primary italic">.</span><br />
            <span className="text-transparent border-t-2 border-primary/20 bg-clip-text bg-gradient-to-r from-white to-slate-500">2027</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl font-light">
            Exploring the consept of <span className="text-white font-medium">RULES</span> at Deree - The American College of Greece.
          </p>
        </div>
        <button className="flex items-center gap-2 px-5 py-3 bg-background-card border border-white/5 rounded-xl hover:bg-primary/10 hover:border-primary/30 transition-all text-sm font-bold">
          <span className="material-symbols-outlined text-primary">add_circle</span>
          Nominate Speaker
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4 border-y border-white/5 py-6 mb-12">
        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mr-4">Filter by category</span>
        {tracks.map(track => (
          <button
            key={track}
            onClick={() => setFilter(track)}
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              filter === track 
                ? 'bg-primary text-white' 
                : 'bg-background-card border border-white/5 text-slate-400 hover:text-white hover:border-primary'
            }`}
          >
            {track}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        
        {/* Placeholder Card */}
        <div className="group relative flex flex-col items-center justify-center bg-white/[0.02] rounded-xl border border-white/5 border-dashed p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-primary text-3xl">help</span>
          </div>
          <h3 className="text-lg font-bold text-slate-500 uppercase tracking-widest">More Soon</h3>
          <p className="text-slate-600 text-sm mt-2">The final roster is still unfolding.</p>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
