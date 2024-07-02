import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const HomeLink = styled(Link)`
  margin: 10px 0;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Home = () => (
  <HomeContainer>
    <h1>Welcome to the Meal Store</h1>
    <HomeLink to="/menu">Go to Menu</HomeLink>
    <HomeLink to="/favourites">View Favourites</HomeLink>
    <HomeLink to="/random-meal">Generate a Random Meal</HomeLink>
  </HomeContainer>
);

export default Home;
