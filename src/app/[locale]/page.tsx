'use client'
import About from '@/components/web/About';
import Contact from '@/components/web/Contact';
import Footer from '@/components/web/Footer';
import Header from '@/components/web/Header';
import Main from '@/components/web/Main';
import Services from '@/components/web/Services';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import Thankyou from '@/components/web/Thankyou';
import axios from 'axios';

interface AppProps {

}

const App: React.FC<AppProps> = async ({ }) => {

  const getData = async () => {
    try {
      const { data } = await axios.get('https://languages-space.com/api/news?departmentID=c2939e25-6bdf-45c9-850a-2c49aacda913')

      console.log(data)
    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {

    getData()
  }, [])

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


