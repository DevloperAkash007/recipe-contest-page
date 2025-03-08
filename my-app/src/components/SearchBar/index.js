import { Component } from "react";
import RecipeCart from "../RecipeCart";
import './index.css';
 

class SearchBar extends Component{

    state={
        searchInput: '',
        filteredRecipeList: this.props.recipelist
    }

     
    onChangeSearchInput = (event) => {
      this.setState({searchInput: event.target.value.trim()})
    }

     onClickSearchBtn = (event) => {
       const {searchInput} = this.state
       const {recipelist} = this.props
       if(searchInput !== ''){
        const filteredRecipeList = recipelist.filter(each => {
            if(each.name.includes(searchInput)|| each.chef.includes(searchInput)|| each.description.includes(searchInput)){
                return true
            }
        return false 
        })
        this.setState({
            filteredRecipeList
        })
      }else{
        this.setState({
            filteredRecipeList: recipelist
        })
      }

    }

    render(){
        const {filteredRecipeList,searchInput} = this.state
        return (<div>
            <input className="search" type="search" value={searchInput} onChange={this.onChangeSearchInput}/>
            <button type='button' onClick={this.onClickSearchBtn}>Search</button>
            <ul className="recipe-list">
                {
                filteredRecipeList.map(eachRecipe => <RecipeCart key={eachRecipe.id} recipeCart={eachRecipe}/>)
                }
            </ul>
            </div>)
    }

}
export default SearchBar