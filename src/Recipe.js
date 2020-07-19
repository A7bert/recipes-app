import React from 'react'

const Recipe = ({title, calories, image}) => {
    return (
        <div>
            <h1>
                {title}
            </h1>
        
            <p>calories {calories.toFixed(2)}</p>
            <img src={image} alt={title} />
        </div>
    )
}

export default Recipe;