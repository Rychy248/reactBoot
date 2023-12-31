import './App.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import About from './components/About';
import Home from './components/Home';
import Services from './components/Services';
import Tours from './components/Tours';

function App() {

  return(
    <>
      <Navbar />

      <Home />
      <About />
      <Services />
      <Tours />

      <Footer/ >
    </>
  );
};

export default App;