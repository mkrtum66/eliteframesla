import React, { useEffect } from 'react';
import './homePage.scss';
import { Container } from 'react-bootstrap';
import { scrollToSection } from '../../utils/scrollToSection';

const HomePage = ({ myRef }) => {
  useEffect(() => {
    scrollToSection(myRef);
  }, [myRef]);

  return (
    <div className="homepage">
      <Container><h1>HomePage</h1></Container>
    </div>
  );
};

export default HomePage;
