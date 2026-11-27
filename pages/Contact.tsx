
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from TEDx Deree ACG Website - ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:contact@tedxderee.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="pt-32 pb-32 px-6 max-w-7xl mx-auto animate-in fade-in duration-700">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        {/* Left Form */}
        <div className="space-y-12">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 border border-primary text-primary text-[10px] font-bold tracking-[0.2em] uppercase rounded bg-primary/5">
              Direct Link
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-none uppercase">
              Connect with <br /><span className="text-primary italic">the Future.</span>
            </h1>
            <p className="text-neutral-400 max-w-md text-lg font-light leading-relaxed">
              Have an idea worth spreading or a question about our next event? Reach out and start the conversation.
            </p>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="group">
                <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-3 block group-focus-within:text-primary transition-colors font-bold">Full Name</label>
                <input 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-background-input border border-white/10 rounded-lg px-5 py-4 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-neutral-700" 
                  placeholder="Your name" 
                  type="text"
                />
              </div>
              <div className="group">
                <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-3 block group-focus-within:text-primary transition-colors font-bold">Email Address</label>
                <input 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-background-input border border-white/10 rounded-lg px-5 py-4 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-neutral-700" 
                  placeholder="hello@future.com" 
                  type="email"
                />
              </div>
              <div className="group">
                <label className="text-[10px] uppercase tracking-widest text-neutral-500 mb-3 block group-focus-within:text-primary transition-colors font-bold">Your Message</label>
                <textarea 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-background-input border border-white/10 rounded-lg px-5 py-4 text-white focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-neutral-700 resize-none" 
                  placeholder="Share your thoughts..." 
                  rows={4}
                ></textarea>
              </div>
            </div>
            <button type="submit" className="w-full bg-primary py-5 rounded-lg text-white font-bold tracking-widest uppercase flex items-center justify-center gap-3 group hover:shadow-[0_0_20px_rgba(242,13,13,0.4)] transition-all active:scale-[0.98]">
              Send Message
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">send</span>
            </button>
          </form>
        </div>

        {/* Right Info */}
        <div className="space-y-10 lg:pl-10">
          {/* Map Card */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-background-card group">
            <div className="h-72 grayscale contrast-125 opacity-30 group-hover:opacity-50 transition-opacity">
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://maps.google.com/maps?q=The%20American%20College%20of%20Greece&t=&z=14&ie=UTF8&iwloc=&output=embed"
                style={{ filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
              ></iframe>
            </div>
            <div className="absolute top-28 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-full animate-pulse shadow-[0_0_30px_rgba(242,13,13,0.6)]">
                <span className="material-symbols-outlined text-white">location_on</span>
              </div>
            </div>
            <div className="p-10 space-y-4">
              <h3 className="text-2xl font-bold tracking-tight uppercase">The ACG Campus</h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                Gravias 6, Agia Paraskevi<br />
                Athens, 153 42, Greece
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Gravias+6%2C+Agia+Paraskevi%2C+Athens%2C+Greece"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary text-xs font-bold uppercase tracking-widest mt-4 hover:underline gap-2"
              >
                Get Directions
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
              <span className="material-symbols-outlined text-primary mb-4 block">mail</span>
              <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-1">Direct Email</div>
              <div className="font-medium">contact@tedxderee.com</div>
            </div>
            <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
              <span className="material-symbols-outlined text-primary mb-4 block">forum</span>
              <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold mb-1">Social Media</div>
              <div className="font-medium">@TEDxDereeACG</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
