import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import FavouriteButton from './FavouriteButton';

const MealList = styled.ul`
  
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
`;

const MealItem = styled.li`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f8f9fa;
  width: 200px;
  text-align: center;
`;

const Meal = ({ favourites, addToFavourites, removeFromFavourites }) => {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(response => setMeals(response.data.meals));
  }, [category]);

  return (
    <div style={{marginLeft: "100px"}}>
      <h1>{category} Meals</h1>
      <MealList>
        {meals.map(meal => (
          <MealItem key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} width="100" />
            <p>{meal.strMeal}</p>
            <FavouriteButton
              meal={meal}
              favourites={favourites}
              addToFavourites={addToFavourites}
              removeFromFavourites={removeFromFavourites}
            />
          </MealItem>
        ))}
      </MealList>
    </div>
  );
};

export default Meal;
