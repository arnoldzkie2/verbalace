import About from '@/components/web/About';
import Contact from '@/components/web/Contact';
import Footer from '@/components/web/Footer';
import Header from '@/components/web/Header';
import Main from '@/components/web/Main';
import Services from '@/components/web/Services';
import React from 'react';
import 'aos/dist/aos.css';
import Thankyou from '@/components/web/Thankyou';

interface AppProps {

}

const App: React.FC<AppProps> = async ({ }) => {

  return (
    <div className='overflow-hidden'>
      <Header />
      <Main />
      <About />
      <Services />
      <Contact />
      <Thankyou />
      <Footer />
    </div>
  );
};

export default App;


