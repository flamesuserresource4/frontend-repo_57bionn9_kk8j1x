import { motion } from 'framer-motion';

function Particles() {
  const dots = Array.from({ length: 20 });
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((_, i) => (
        <span
          key={i}
          className="absolute w-2 h-2 rounded-full bg-fuchsia-400/60 blur-[1px]"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 23) % 100}%`,
            animation: `float ${(8 + (i % 5))}s ease-in-out ${(i % 4) * 0.5}s infinite`,
          }}
        />
      ))}
      <span className="absolute -inset-32 bg-gradient-to-br from-pink-200 via-fuchsia-200 to-white opacity-50 animate-pulse rounded-full blur-3xl" />
    </div>
  );
}

function Avatar3DStyle() {
  return (
    <div className="relative w-full max-w-md aspect-square mx-auto">
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-pink-300 via-fuchsia-400 to-violet-400" />
      <div className="absolute inset-3 rounded-[28px] bg-white" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute -inset-6 rounded-full bg-fuchsia-300/50 blur-2xl" />
          <div className="relative w-64 h-64 rounded-full bg-gradient-to-b from-pink-200 to-fuchsia-300 shadow-xl shadow-pink-300/50 border-4 border-white" />
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-48 h-28 bg-white rounded-t-full border-2 border-fuchsia-200" />
          <div className="absolute left-1/2 -translate-x-1/2 top-[52%] w-40 h-24 bg-gradient-to-b from-pink-50 to-pink-100 rounded-b-3xl border-x-2 border-b-2 border-fuchsia-200" />
          <div className="absolute left-1/2 -translate-x-1/2 top-[44%] flex gap-3">
            <div className="w-14 h-10 bg-white rounded-b-full border-2 border-fuchsia-200" />
            <div className="w-14 h-10 bg-white rounded-b-full border-2 border-fuchsia-200" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-[46%] flex gap-7">
            <div className="w-10 h-2 bg-fuchsia-200 rounded-full" />
            <div className="w-10 h-2 bg-fuchsia-200 rounded-full" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-[49%] w-12 h-2 bg-fuchsia-300 rounded-full" />
          <div className="absolute left-1/2 -translate-x-1/2 top-[63%] w-40 h-28 bg-gradient-to-br from-white to-pink-50 rounded-xl border border-fuchsia-200 flex items-center justify-center">
            <div className="w-28 h-6 rounded-md bg-gradient-to-r from-fuchsia-200 to-pink-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-violet-100 to-white" />
      <Particles />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-slate-900">
            Kavya Jagtap
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-700">
            Crafting Bold, Intelligent & Fearless Code ✨
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-fuchsia-600 text-white shadow-lg shadow-fuchsia-300/50 hover:shadow-fuchsia-400/70 transition hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-fuchsia-300 text-fuchsia-700 bg-white/70 backdrop-blur hover:bg-white transition"
            >
              Contact Me
            </a>
          </div>
          <div className="mt-8 text-sm uppercase tracking-widest text-fuchsia-700/80 font-semibold">
            Girls can code.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <Avatar3DStyle />
        </motion.div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.8; }
          50% { transform: translateY(-12px); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
