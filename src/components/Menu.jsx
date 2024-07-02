import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const CategoryList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const CategoryItem = styled.li`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f8f9fa;
  width: 200px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const CategoryLink = styled(Link)`
  text-decoration: none;
  color: #333;

  &:hover {
    text-decoration: underline;
  }
`;

const Menu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      setCategories(response.data.categories);
    };

    fetchCategories();
  }, []);

  return (
    <MenuContainer>
      <Title>Menu</Title>
      <CategoryList>
        {categories.map(category => (
          <CategoryItem key={category.idCategory}>
            <img src={category.strCategoryThumb} alt={category.strCategory} width="100" />
            <p>{category.strCategory}</p>
            <CategoryLink to={`/menu/${category.strCategory}`}>View Meals</CategoryLink>
          </CategoryItem>
        ))}
      </CategoryList>
    </MenuContainer>
  );
};

export default Menu;
