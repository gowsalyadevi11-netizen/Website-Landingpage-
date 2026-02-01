import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FBFBFD]">
      <Navigation />
      <Hero />
      <Products />
      <About />
      <Contact />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
