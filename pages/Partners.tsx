import React from 'react';

type Partner = {
  name: string;
  logo?: string;
  url?: string;
};

// ----- EDIT THESE LISTS -----
const sponsors: Partner[] = [];

const partners: Partner[] = [];
// ----------------------------

const PartnerCard: React.FC<{ partner: Partner }> = ({ partner }) => {
  const content = partner.logo ? (
    <img
      src={partner.logo}
      alt={partner.name}
      className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
    />
  ) : (
    <span className="text-lg font-bold uppercase tracking-widest text-white/70 group-hover:text-white transition-colors text-center">
      {partner.name}
    </span>
  );

  const cardClass =
    'group flex items-center justify-center h-32 p-6 glass-effect rounded-xl border border-white/10 hover:border-primary/50 transition-colors';

  return partner.url ? (
    <a href={partner.url} target="_blank" rel="noopener noreferrer" aria-label={partner.name} className={cardClass}>
      {content}
    </a>
  ) : (
    <div className={cardClass}>{content}</div>
  );
};

const Partners: React.FC = () => {
  return (
    <div className="pt-32 pb-32 px-6 max-w-7xl mx-auto animate-in fade-in duration-700">
      {/* Header */}
      <div className="text-center mb-20">
        <div className="inline-block px-4 py-1 border border-primary/50 text-primary text-xs uppercase tracking-[0.3em] mb-8 rounded-full bg-primary/5">
          Our Supporters
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold uppercase tracking-tighter mb-6">
          Partners & <span className="text-primary italic">Sponsors</span>
        </h1>
        <p className="text-lg text-white/60 font-light max-w-2xl mx-auto leading-relaxed">
          TEDx Deree ACG is made possible by organizations that believe in ideas worth spreading. Thank you for helping us go Beyond Horizons.
        </p>
      </div>

           {/* Sponsors */}
      {sponsors.length > 0 && (
        <section className="mb-20">
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.4em] mb-8 text-center">Sponsors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.map((item, idx) => (
              <PartnerCard key={idx} partner={item} />
            ))}
          </div>
        </section>
      )}

      {/* Partners */}
      {partners.length > 0 && (
        <section className="mb-20">
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.4em] mb-8 text-center">Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((item, idx) => (
              <PartnerCard key={idx} partner={item} />
            ))}
          </div>
        </section>
      )}

       {/* More soon */}
      {sponsors.length === 0 && partners.length === 0 && (
        <div className="flex flex-col items-center justify-center min-h-[500px] bg-white/[0.02] rounded-xl border border-white/5 border-dashed p-12 text-center mb-20">
          <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-4">
            <span className="material-symbols-outlined text-primary text-3xl">help</span>
          </div>
          <h3 className="text-lg font-bold text-slate-500 uppercase tracking-widest">More Soon</h3>
          <p className="text-slate-600 text-sm mt-2">Our partners and sponsors will be announced soon.</p>
        </div>
      )}

      {/* Become a partner */}
      <div className="text-center p-12 glass-effect rounded-2xl border border-white/10">
        <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4">Become a Partner</h3>
        <p className="text-white/60 font-light mb-8 max-w-xl mx-auto">
          Interested in supporting TEDx Deree ACG? We'd love to hear from you.
        </p>
        <a
          href="mailto:contact@tedxderee.com?subject=Partnership%20with%20TEDx%20Deree%20ACG"
          className="inline-block bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-widest transition-all glow-red"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default Partners;
