import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer/Footer';
import About from './About/About';
import Gallery from './Gallery/Gallery';

const Layout = () => {
  return (
    <>
        <Nav />
        <Home />
        <Gallery />
        <About />
        <Footer />
    </>
  );
};

export default Layout;