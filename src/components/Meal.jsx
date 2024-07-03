import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import FavouriteButton from './FavouriteButton';

const MealList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MealItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f8f9fa;
  width: 100%;
  
  @media (min-width: 768px) {
    width: 30%;
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loader1 = styled.div`
  border: 8px solid rgba(0, 0, 0, 0.3);
  border-top: 8px solid #007bff;
  border-radius: 50%;
  width: 260px;
  height: 260px;
  animation: spin 1s linear infinite;
  margin-bottom: 200px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Loader = () => (
  <LoaderContainer>
    {/* Your loader component/style here */}
    <div className="loader"><Loader1 /></div>
  </LoaderContainer>
);

const Meal = ({ favourites, addToFavourites, removeFromFavourites }) => {
  const { category } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    setLoading(true); // Set loading to true when fetching data
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then(response => {
        setMeals(response.data.meals);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch(error => {
        console.error('Error fetching meals:', error);
        setLoading(false); // Ensure loading state is updated on error
      });
  }, [category]);

  if (loading) {
    return <Loader />; // Show the loader component while fetching data
  }

  return (
    <div style={{ marginLeft: "100px" }}>
      <h1>{category} Meals</h1>
      <MealList>
        {meals.map(meal => (
          <MealItem key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} width="100" style={{ marginRight: "20px" }} />
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
