import './App.css';
import DigitalTechnology from './components/DigitalTechnology';
import ExteriorColors from './components/ExteriorColors';
import ExteriorDesign from './components/ExteriorDesign';
import Footer from './components/Footer';
import HeaderSection from './components/HeaderSection';
import Individual from './components/Individual';
import InteriorColors from './components/InteriorColors';
import InteriorDesign from './components/InteriorDesign';
import Navbar from './components/Navbar';
import TechnicalLink from './components/TechnicalLink';

function App() {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <div className='block'></div>
      <DigitalTechnology />
      <ExteriorDesign />
      <ExteriorColors />
      <InteriorDesign />
      <InteriorColors />
      <Individual />
      <TechnicalLink />
      <Footer />
    </>
  );
}

export default App;
