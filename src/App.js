import React, { useEffect, useState } from 'react';

import Recipe from './Recipe'
import './App.css';

const App = () => {

  const APP_ID = '058f745a'
  const APP_KEY = '7d962edeb5408a1b52fe58207c62dcda'

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
    console.log('lets say we are fetching data')
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }

  return (
    <div className='App'>
      <form onSubmit={getSearch} className='searchForm'>
        <input className='searchBar' type='text' value={search} onChange={updateSearch} />
        <button className='searchButton' type='submit'>
          Search
        </button>
      </form>
      <div className='recipes'>
        {
          recipes.map((recipe, index) => (
            <Recipe 
              key={index + recipe.recipe.label} 
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients} />  
          ))
        }
      </div>
    </div>
  );
}

export default App;
