import './App.css';

import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import About from './components/About';
import Home from './components/Home';
import Services from './components/Services';
import Tours from './components/Tours';

function App() {

  return (
    <>
      <Nav />

      <Home />
      <About />
      <Services />
      <Tours />

      <Footer/ >
    </>
  );
}

export default App;
