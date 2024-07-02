import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Content = styled.p`
  max-width: 600px;
  text-align: center;
  line-height: 1.6;
`;

const About = () => (
  <AboutContainer>
    <Title>About Me</Title>
    <Content>
      Hi this is Antar Basu <br/>
      Welcome to my meal website! This project showcases a variety of delicious meals fetched from a public API. You can browse through different meal categories, generate a random meal, and save your favourites. Feel free to explore and enjoy the tasty journey!
    </Content>
  </AboutContainer>
);

export default About;
