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
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
  width: 250px;
  text-align: center;
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    transform: scale(1.05);
    background-color: #f0f0f0;
  }

  img {
    border-radius: 10px;
  }
`;

const CategoryLink = styled(Link)`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loader = styled.div`
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

const Menu = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        setCategories(response.data.categories);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <MenuContainer>
      <Title>Menu</Title>
      {loading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <CategoryList>
          {categories.map(category => (
            <CategoryItem key={category.idCategory}>
              <img src={category.strCategoryThumb} alt={category.strCategory} width="150" />
              <p>{category.strCategory}</p>
              <CategoryLink to={`/menu/${category.strCategory}`}>View Meals</CategoryLink>
            </CategoryItem>
          ))}
        </CategoryList>
      )}
    </MenuContainer>
  );
};

export default Menu;
