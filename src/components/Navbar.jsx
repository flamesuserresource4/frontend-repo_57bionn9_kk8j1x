import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-lg bg-white/80 shadow-md' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-wide text-fuchsia-700">KJ</a>
        <button
          className="md:hidden p-2 rounded-md hover:bg-white/60 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M3.75 5.25a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75zm0 6a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5H3.75z" clipRule="evenodd" />
          </svg>
        </button>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 rounded-full text-slate-700 hover:text-fuchsia-700 hover:shadow-[0_0_0_2px_rgba(236,72,153,0.25)] hover:bg-white transition"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/40 bg-white/80 backdrop-blur px-4 pb-4">
          <ul className="flex flex-col py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-3 rounded-lg text-slate-700 hover:bg-white hover:text-fuchsia-700 transition"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
