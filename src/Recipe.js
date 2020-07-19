import React from 'react'
import './recipe.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className='recipe'>
            <h1>
                {title}
            </h1>
            <ol>
                {
                    ingredients.map((ingredient, index) => (
                        <li key={index + ingredient.text}>{ingredient.text}</li>
                    ))
                }
            </ol>
            <p>calories {calories.toFixed(2)}</p>
            <img src={image} alt={title} />
        </div>
    )
}

export default Recipe;