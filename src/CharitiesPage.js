import React, { Component } from "react";
import CharityContainer from './containers/CharityContainer';
import SearchBar from './styles/SearchBar';



class CharitiesPage extends Component {
    
    render(){
        return(
            <div>
                <div className="info">
                    <h1 className="welcome">Welcome!</h1>
                </div>
                <SearchBar charities={this.props.charities} addFavorite={this.props.clickAction}/>
                <CharityContainer charities={this.props.charities} clickAction={this.props.clickAction}/>
            </div>

        )
    }

}

export default CharitiesPage;
