
import React from 'react';

const Talks: React.FC = () => {
  return (
    <div className="pt-32 pb-32 px-6 max-w-7xl mx-auto animate-in fade-in duration-700">
            {/* Header */}
      <div className="mb-16 space-y-4">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] text-white">
          Talks<span className="text-primary italic">.</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-xl font-light">
          Watch every TEDx Deree ACG talk, organized by year.
        </p>
      </div>

      {/* Talks by Year */}
      <section className="space-y-20">
        {[
          {
            year: '2026',
            label: 'Playlist',
            embed: 'https://www.youtube.com/embed/videoseries?list=PLAYLIST_ID_2026',
          },
          {
            year: '2025',
            label: 'Playlist',
            embed: 'https://www.youtube.com/embed/videoseries?list=PLAYLIST_ID_2025',
          },
          {
            year: '2021',
            label: 'Full Livestream',
            embed: 'https://www.youtube.com/embed/VIDEO_ID_2021',
          },
        ].map((item) => (
          <div key={item.year} className="grid lg:grid-cols-3 gap-8 items-start border-t border-white/10 pt-12">
            <div className="space-y-4">
              <span className="block text-6xl md:text-7xl font-black tracking-tighter text-primary">{item.year}</span>
              <h3 className="text-2xl font-bold uppercase tracking-tight">TEDx Deree ACG {item.year}</h3>
              <span className="inline-block bg-primary/10 border border-primary/30 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                {item.label}
              </span>
            </div>
            <div className="lg:col-span-2 relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={item.embed}
                title={`TEDx Deree ACG ${item.year}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </section>
            {/* Podcast Section */}
      <section className="mt-24 relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 border border-primary/50 text-primary text-xs uppercase tracking-[0.3em] rounded-full bg-primary/5">
              Podcast
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
              Ideas <span className="text-primary italic">Unplugged</span>
            </h2>
            <p className="text-lg text-white/60 font-light leading-relaxed">
              Conversations with our speakers, organizers and the Deree community, going deeper into the ideas behind the talks.
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { name: 'Spotify', url: '#' },
                { name: 'Apple Podcasts', url: '#' },
                { name: 'YouTube', url: '#' },
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-white/20 hover:border-primary bg-white/5 rounded-lg text-sm font-bold uppercase tracking-widest transition-all"
                >
                  <span className="material-symbols-outlined text-primary">headphones</span>
                  {platform.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center min-h-[280px] bg-white/[0.02] rounded-xl border border-white/5 border-dashed p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">podcasts</span>
            </div>
            <h3 className="text-lg font-bold text-slate-500 uppercase tracking-widest">First Episode Soon</h3>
            <p className="text-slate-600 text-sm mt-2">Stay tuned for our launch.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Talks;
