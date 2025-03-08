import { Component } from "react";
import './index.css'

class RecipeCart extends Component{
    render(){
        const {recipeCart} = this.props 
        const {
            id, name , chef , totalRatings , avgRating , uploadedOn , mealType, dishType , testKitchenApproved , contestWinner , featured, 
            description, imgUrl 
            } = recipeCart
        return <li className="recipe-cart">
            <img alt="image" src={imgUrl} className="image"/>
            <h1 className="name">{name}</h1>
            <p className="description">{description}</p>
        </li>
    }

}
export default RecipeCart