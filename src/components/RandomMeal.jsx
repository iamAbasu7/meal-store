import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import FavouriteButton from './FavouriteButton';

const RandomMealContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const GenerateButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const MealCard = styled.div`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f8f9fa;
  display: inline-block;
  text-align: center;
`;

const RandomMeal = ({ favourites, addToFavourites, removeFromFavourites }) => {
  const [meal, setMeal] = useState(null);

  const generateRandomMeal = () => {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => setMeal(response.data.meals[0]));
  };

  return (
    <RandomMealContainer>
      <h1>Random Meal Generator</h1>
      {meal && (
        <MealCard>
          <img src={meal.strMealThumb} alt={meal.strMeal} width="200" />
          <p>{meal.strMeal}</p>
          <FavouriteButton
            meal={meal}
            favourites={favourites}
            addToFavourites={addToFavourites}
            removeFromFavourites={removeFromFavourites}
          />
        </MealCard>
      )}
      <br />
      <br />
      <GenerateButton onClick={generateRandomMeal}>Generate Meal</GenerateButton>
    </RandomMealContainer>
  );
};

export default RandomMeal;
