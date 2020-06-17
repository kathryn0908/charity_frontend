import React, { Component } from "react";
import CharityContainer from './containers/CharityContainer';



class CharitiesPage extends Component {
    
    render(){
        return(
            <div>
                <div className="info">
                    <h1 className="welcome">Welcome!</h1>
                    <p className="intro"> Charity Organizer is an app that allows you to browse local, Denver Charities and 
                        choose which ones you would like to donate to.
                        Once you have an account with us, you can keep track of which charities you would like 
                        to donate to and how much you have donated to each one! </p>
                </div>
                <CharityContainer charities={this.props.charities} clickAction={this.props.clickAction}/>
            </div>

        )
    }

}

export default CharitiesPage;
