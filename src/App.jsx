import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutAndSkills from './components/AboutAndSkills';
import ProjectsAndContact from './components/ProjectsAndContact';

function App() {
  return (
    <div className="font-['Manrope',_'Inter',sans-serif] text-slate-800 bg-white selection:bg-fuchsia-200 selection:text-slate-900">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <AboutAndSkills />
        <ProjectsAndContact />
        <footer className="py-10 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Kavya Jagtap — Girls can code.
        </footer>
      </main>
    </div>
  );
}

export default App;
