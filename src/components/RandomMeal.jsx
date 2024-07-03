import { useState } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
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
  border-radius: 10px;
  background-color: #fff;
  display: inline-block;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    border-radius: 10px;
  }
`;

const PopupMessage = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s;
  opacity: ${(props) => (props.visible ? 1 : 0)};
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 2s linear infinite;
`;

const RandomMeal = ({ favourites, addToFavourites, removeFromFavourites }) => {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const generateRandomMeal = () => {
    setLoading(true);
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => {
        setMeal(response.data.meals[0]);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching the random meal:", error);
        setLoading(false);
      });
  };

  const handleAddToFavourites = (meal) => {
    addToFavourites(meal);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide the popup after 3 seconds
  };

  return (
    <RandomMealContainer>
      <h1>Random Meal</h1>
      {loading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        meal && (
          <MealCard>
            <img src={meal.strMealThumb} alt={meal.strMeal} width="200" />
            <p>{meal.strMeal}</p>
            <FavouriteButton
              meal={meal}
              favourites={favourites}
              addToFavourites={handleAddToFavourites}
              removeFromFavourites={removeFromFavourites}
            />
          </MealCard>
        )
      )}
      <br />
      <br />
      <GenerateButton onClick={generateRandomMeal}>Generate</GenerateButton>
      <PopupMessage visible={showPopup}>Added to favourite List</PopupMessage>
    </RandomMealContainer>
  );
};

export default RandomMeal;
