import styled from 'styled-components';
import RemoveButton from './RemoveButton';

const FavouriteList = styled.ul`
  list-style-type: none;
  padding: 0;
  max-height: calc(100vh - 100px); /* Adjust as needed */
  
`;

const FavouriteItem = styled.li`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f8f9fa;
  width: 200px;
  text-align: center;
  position: relative;
`;

const MealImage = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const MealName = styled.p`
  margin: 10px 0;
`;

const RemoveButtonContainer = styled.div`
  margin-top: 10px;
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  min-height: 100vh; /* Ensure container takes full viewport height */
`;

const Favourites = ({ favourites, removeFromFavourites }) => (
  <CenteredContainer>
    <div style={{marginLeft: "100px"}}>
      <h1>Favourite Meals</h1>
      <FavouriteList>
        {favourites.map(meal => (
          <FavouriteItem key={meal.idMeal}>
            <MealImage src={meal.strMealThumb} alt={meal.strMeal} />
            <MealName>{meal.strMeal}</MealName>
            <RemoveButtonContainer>
              <RemoveButton mealId={meal.idMeal} removeFromFavourites={removeFromFavourites} />
            </RemoveButtonContainer>
          </FavouriteItem>
        ))}
      </FavouriteList>
    </div>
  </CenteredContainer>
);

export default Favourites;
