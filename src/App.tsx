import { Scene } from './components/3d/Scene';
import { Hero } from './components/ui/Hero';
import { FeatureSection } from './components/ui/FeatureSection';
import { Navbar } from './components/ui/Navbar';
import './App.css';

function App() {
  return (
    <>
      <Scene />

      <div className="ui-layer">
        <Navbar />
        <Hero />
        <FeatureSection />
      </div>
    </>
  );
}

export default App;
