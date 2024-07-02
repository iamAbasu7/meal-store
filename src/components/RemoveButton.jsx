// src/components/RemoveButton.js
import { FaTrash } from 'react-icons/fa';
import styled from 'styled-components';

const TrashIcon = styled(FaTrash)`
  cursor: pointer;
  color: red;
  transition: color 0.3s;

  &:hover {
    color: darkred;
  }
`;

const RemoveButton = ({ mealId, removeFromFavourites }) => {
  const handleClick = () => {
    removeFromFavourites(mealId);
  };

  return <TrashIcon onClick={handleClick} size={24} />;
};

export default RemoveButton;
