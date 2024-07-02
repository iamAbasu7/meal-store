import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Menu from './components/Menu';
import Meal from './components/Meal';
import Favourites from './components/Favourites';
import RandomMeal from './components/RandomMeal';
import About from './components/About';
import styled from 'styled-components';

const Content = styled.div`
  margin-left: 0; /* No margin left since the sidebar is hidden */
  padding: 20px;
  transition: margin-left 0.3s ease;
  ${props => props.isOpen && 'margin-left: 250px;'}
`;

const App = () => {
  const [favourites, setFavourites] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const storedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavourites(storedFavourites);
  }, []);

  const addToFavourites = (meal) => {
    const updatedFavourites = [...favourites, meal];
    setFavourites(updatedFavourites);
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
  };

  const removeFromFavourites = (mealId) => {
    const updatedFavourites = favourites.filter(meal => meal.idMeal !== mealId);
    setFavourites(updatedFavourites);
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Content isOpen={isSidebarOpen}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:category" element={<Meal favourites={favourites} addToFavourites={addToFavourites} removeFromFavourites={removeFromFavourites} />} />
          <Route path="/favourites" element={<Favourites favourites={favourites} removeFromFavourites={removeFromFavourites} />} />
          <Route path="/random-meal" element={<RandomMeal favourites={favourites} addToFavourites={addToFavourites} removeFromFavourites={removeFromFavourites} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Content>
    </Router>
  );
};

export default App;
