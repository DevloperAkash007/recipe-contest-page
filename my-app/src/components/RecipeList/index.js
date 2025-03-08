import { Component } from "react";
import SearchBar from "../SearchBar";
import './index.css';
 

class RecipeList extends Component{

    render(){
        const {recipelist} = this.props
        return <>
            {
                <SearchBar recipelist={recipelist}/>
             
            }
            </>
    }

}
export default RecipeList