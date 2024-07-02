import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

const Card = styled.div`
  margin: 10px;
  padding: 20px;
  background-color: #007bff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }
`;

const HomeLink = styled(Link)`
  display: block;
  padding: 40px 80px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background-color: #007bff;
  }
`;

const Home = () => (
  <>
    <h1 style={{ textAlign: 'center' }}>Welcome to the Meal Store</h1>
    <HomeContainer>
      <Card>
        <HomeLink to="/menu">Menu</HomeLink>
      </Card>
      <Card>
        <HomeLink to="/favourites">Favourites</HomeLink>
      </Card>
    </HomeContainer>
    <HomeContainer>
      <Card>
          <HomeLink to="/random-meal">Random Meal</HomeLink>
      </Card>
    </HomeContainer>
  </>
);

export default Home;
