import Navbar from '@/components/navbar/Navbar';
import PageMeta from '@/components/PageMeta';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import BuiltTechno from './components/BuiltTechno';
import WorkingWithInfrabyte from './components/WorkingwithInfrabyte';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HowWeWork from './components/HowWeWork';
import Statsection from './components/Statsection';
import AnimatedhowweWork from './components/AnimatedhowweWork';

const Index = () => {
  return (
    <>
      <PageMeta title='Infrabyte Technology' />
      <Navbar Headerclass="header navbar navbar-expand-lg position-absolute navbar-sticky"
        headerSticky="navbar-stuck" />
      <Hero />
      <Benefits />
      <Statsection />
      <HowWeWork />
      <AnimatedhowweWork />
      <BuiltTechno />
      <WorkingWithInfrabyte />
      <Awards />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
