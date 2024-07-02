import React from 'react';
import styled from 'styled-components';
import RemoveButton from './RemoveButton';

const FavouriteList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FavouriteItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 20px; /* Increased padding for larger cards */
  border: 1px solid #ddd;
  border-radius: 10px; /* Increased border radius for rounded corners */
  background-color: #f8f9fa;
  width: 80%; /* Adjust width as needed */
`;

const MealImage = styled.img`
  width: 150px; /* Adjust size as needed */
  height: 150px; /* Maintain aspect ratio or adjust as needed */
  border-radius: 10px;
`;

const MealDetails = styled.div`
  flex: 1;
  margin-left: 20px; /* Adjust spacing between image and details */
`;

const MealName = styled.p`
  margin: 0;
  font-weight: bold;
`;

const RemoveButtonContainer = styled.div`
  margin-left: auto; /* Pushes the delete button to the right */
`;

const Favourites = ({ favourites, removeFromFavourites }) => (
  <>
  <h1 style={{ textAlign: 'left', marginBottom: '30px', marginLeft: '200px'}}>My Favourites</h1>
    <div style={{ width: '80%', marginLeft: '10%' }}>
      <FavouriteList>
        {favourites.map(meal => (
          <FavouriteItem key={meal.idMeal}>
            <MealImage src={meal.strMealThumb} alt={meal.strMeal} />
            <MealDetails>
              <MealName>{meal.strMeal}</MealName>
            </MealDetails>
            <RemoveButtonContainer>
              <RemoveButton mealId={meal.idMeal} removeFromFavourites={removeFromFavourites} />
            </RemoveButtonContainer>
          </FavouriteItem>
        ))}
      </FavouriteList>
    </div>
 
  </>
);

export default Favourites;
