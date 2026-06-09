import { Navbar, Footer } from './components/layout';
import {
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Contact,
} from './components/sections';

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
