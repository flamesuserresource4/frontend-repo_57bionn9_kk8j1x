import { motion } from 'framer-motion';

export default function AboutAndSkills() {
  const skills = [
    { name: 'JavaScript', level: 90, color: 'from-yellow-300 to-amber-400' },
    { name: 'React', level: 88, color: 'from-sky-300 to-blue-400' },
    { name: 'TailwindCSS', level: 85, color: 'from-cyan-300 to-teal-400' },
    { name: 'MySQL', level: 75, color: 'from-emerald-300 to-emerald-400' },
    { name: 'Python', level: 80, color: 'from-violet-300 to-fuchsia-400' },
  ];

  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50 to-white" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-white/70 backdrop-blur rounded-3xl p-8 border border-pink-100 shadow-sm"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">About</h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              I’m a developer who believes elegance and power can coexist. I design delightful
              interfaces and engineer robust systems — bringing ideas to life with creativity,
              clarity, and code. Feminine, fearless, and future-focused.
            </p>
          </motion.div>

          <motion.div
            id="skills"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-white/70 backdrop-blur rounded-3xl p-8 border border-pink-100 shadow-sm"
          >
            <h3 className="text-3xl font-extrabold text-slate-900">Skills</h3>
            <div className="mt-6 space-y-5">
              {skills.map((s) => (
                <div key={s.name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-slate-700">{s.name}</span>
                    <span className="text-sm text-slate-500">{s.level}%</span>
                  </div>
                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${s.color} shadow-inner`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
