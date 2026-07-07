import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/landingData';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky inset-x-0 top-0 z-50 -mb-20 transition ${scrolled ? 'border-b border-white/10 bg-emerald-950/70 shadow-2xl shadow-black/20 backdrop-blur-xl' : 'bg-black/10 backdrop-blur-sm'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300" aria-label="Smart Irrigation home">
          <BrandLogo />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="rounded-full text-sm font-medium text-emerald-50/70 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#preview" className="rounded-full px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">View Demo</a>
          <a href="#contact" className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-bold text-emerald-950 shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">Request Demo</a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-2xl border border-white/10 p-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div id="mobile-navigation" className="mx-5 mb-4 rounded-3xl border border-white/10 bg-emerald-950/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <a key={link.href} onClick={() => setOpen(false)} href={link.href} className="rounded-2xl px-4 py-3 text-emerald-50/80 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">
                {link.label}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <a href="#preview" onClick={() => setOpen(false)} className="rounded-2xl border border-white/10 px-4 py-3 text-center font-semibold text-white">View Demo</a>
              <a href="#contact" onClick={() => setOpen(false)} className="rounded-2xl bg-emerald-400 px-4 py-3 text-center font-bold text-emerald-950">Request Demo</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
