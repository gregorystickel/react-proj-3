 import React from "react";
 import { useNavigate } from "react-router-dom";

 const RecipeCard = ({recipe}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/recipe/${recipe.recipe_id}`)
    }
    console.log(recipe.image_url);

    return (
        <div class="card" key={recipe.recipe_id}>
            <img id="recipe_image" src={recipe.image_url} alt="recipe" />
            <h1 class="card-h1">{recipe.recipe_name}</h1>
            <button class="card-btn" onClick={handleClick}>See More</button>
        </div>
    )
 };

export default RecipeCard;