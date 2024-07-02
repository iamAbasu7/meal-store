// src/components/FavouriteButton.js
import { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';

const HeartIcon = styled(FaHeart)`
  cursor: pointer;
  color: ${props => (props.isFavourite ? 'red' : 'grey')};
  transition: color 0.3s;

  &:hover {
    color: red;
  }
`;

const FavouriteButton = ({ meal, favourites, addToFavourites, removeFromFavourites }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const fav = favourites.find(favMeal => favMeal.idMeal === meal.idMeal);
    setIsFavourite(fav !== undefined);
  }, [favourites, meal]);

  const handleClick = () => {
    if (isFavourite) {
      removeFromFavourites(meal.idMeal);
    } else {
      addToFavourites(meal);
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <HeartIcon
      isFavourite={isFavourite}
      onClick={handleClick}
      size={24}
    />
  );
};

export default FavouriteButton;
