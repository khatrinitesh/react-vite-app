import React from 'react'
import { Element } from 'react-scroll';

const ScrollSection = ({ id, children }) => {
    return (
      <Element name={id}>
      <section id={id} style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
        {children}
      </section>
      </Element>
    );
  };

export default ScrollSection