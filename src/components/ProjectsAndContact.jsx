import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Neon UI Kit',
    tech: ['React', 'TailwindCSS'],
    image: 'data:image/svg+xml;utf8,\
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">\
        <defs>\
          <linearGradient id="g" x1="0" x2="1">\
            <stop offset="0%" stop-color="#fbcfe8"/>\
            <stop offset="100%" stop-color="#a78bfa"/>\
          </linearGradient>\
        </defs>\
        <rect width="800" height="500" fill="url(#g)"/>\
        <circle cx="620" cy="120" r="60" fill="#fff" opacity="0.6"/>\
        <rect x="80" y="180" width="640" height="160" rx="18" fill="#fff" opacity="0.9"/>\
      </svg>'
  },
  {
    title: 'Insight Dashboard',
    tech: ['Vite', 'TypeScript'],
    image: 'data:image/svg+xml;utf8,\
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">\
        <defs>\
          <linearGradient id="g2" x1="0" x2="1">\
            <stop offset="0%" stop-color="#ddd6fe"/>\
            <stop offset="100%" stop-color="#fda4af"/>\
          </linearGradient>\
        </defs>\
        <rect width="800" height="500" fill="url(#g2)"/>\
        <rect x="100" y="140" width="600" height="220" rx="18" fill="#fff" opacity="0.9"/>\
        <rect x="130" y="170" width="180" height="20" rx="10" fill="#f0abfc"/>\
      </svg>'
  },
  {
    title: 'AI Storyteller',
    tech: ['Python', 'FastAPI'],
    image: 'data:image/svg+xml;utf8,\
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500">\
        <defs>\
          <linearGradient id="g3" x1="0" x2="1">\
            <stop offset="0%" stop-color="#fbcfe8"/>\
            <stop offset="100%" stop-color="#c4b5fd"/>\
          </linearGradient>\
        </defs>\
        <rect width="800" height="500" fill="url(#g3)"/>\
        <circle cx="200" cy="120" r="70" fill="#fff" opacity="0.5"/>\
        <rect x="180" y="210" width="440" height="120" rx="18" fill="#fff" opacity="0.9"/>\
      </svg>'
  },
];

export default function ProjectsAndContact() {
  return (
    <section className="relative py-24" id="projects">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-violet-50 to-white" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Projects</h2>
          <a href="#contact" className="hidden sm:inline-flex text-fuchsia-700 hover:underline">Get in touch →</a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href="#"
              whileHover={{ y: -4, scale: 1.02 }}
              className="group rounded-3xl overflow-hidden border border-pink-100 bg-white shadow-sm"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-pink-50 to-violet-50">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="font-semibold text-slate-900">{p.title}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-pink-100 text-fuchsia-700 border border-pink-200">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1 text-sm text-fuchsia-700 group-hover:gap-2 transition">
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M13.72 3.72a.75.75 0 011.06 0l6.5 6.5a.75.75 0 01-1.06 1.06L15 6.56V20.25a.75.75 0 01-1.5 0V6.56l-5.22 4.72a.75.75 0 01-1.06-1.06l6.5-6.5z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div id="contact" className="mt-24 grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="bg-white/70 backdrop-blur rounded-3xl p-8 border border-pink-100 shadow-sm">
            <h3 className="text-3xl font-extrabold text-slate-900">Contact</h3>
            <p className="mt-3 text-slate-700">Let’s build something beautiful and brave together.</p>
            <form
              onSubmit={(e) => { e.preventDefault(); alert('Thanks! I will get back to you soon.'); }}
              className="mt-6 space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-xl border border-pink-200 bg-white/80 px-4 py-3 outline-none focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border border-pink-200 bg-white/80 px-4 py-3 outline-none focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  rows="4"
                  required
                  className="mt-1 w-full rounded-xl border border-pink-200 bg-white/80 px-4 py-3 outline-none focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-200"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-500 text-white shadow-lg shadow-pink-300/50 hover:shadow-pink-400/70 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 border border-pink-100 bg-gradient-to-br from-pink-100 via-white to-violet-100"
          >
            <div className="text-2xl font-bold text-slate-900">Feminine. Fearless. Future‑Focused.</div>
            <p className="mt-3 text-slate-700 max-w-prose">
              I champion expressive visuals and elegant engineering. Minimal text, maximum impact —
              because confidence is a vibe you can feel.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li>• Based in India • Open to remote collabs</li>
              <li>• Available for freelance & full‑time roles</li>
              <li>• Building experiences that inspire women in tech</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
