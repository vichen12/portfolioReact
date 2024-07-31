import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Componets/Header/Header';
import Hero from './Componets/Hero/Hero';
import Footer from './Componets/Footer/Footer';
import theme from './Componets/Theme/Theme';
import Skills from './Componets/Skills/Skills';
import Portfolio from './Componets/Portfolio/Portfolio';
import Experience from './Componets/Experience/Experience';
import Testimonio from './Componets/Testimonios/Testimonio';
import Final from './Componets/Final/Final';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Header />
      <div id="home">
        <Hero /> {/* Esta es la sección "Sobre mí" */}
      </div>
      <Skills />
      <div id="portfolio">
         {/* Puedes ajustar esto según sea necesario */}
        <Portfolio /> {/* Esta es la sección "Portfolio" */}
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="testimonio">
        <Testimonio />
      </div>
      <div id="contact">
        <Footer /> {/* Esta es la sección "Contacto" */}
      </div>
      <Final />
    </ChakraProvider>
  </React.StrictMode>
);
