import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer/Footer';
import About from './About/About';

const Layout = () => {
  return (
    <>
        <Nav />
        <Home />
        <h2>gallery component</h2>
        <About />
        <Footer />
    </>
  );
};

export default Layout;