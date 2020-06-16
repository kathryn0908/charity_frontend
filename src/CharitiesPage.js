import React, { Component } from "react";
import CharityContainer from './containers/CharityContainer';




const charitiesUrl = 'http://localhost:3000/charities'

class CharitiesPage extends Component {

    state= {
        charities: []
    }

    componentDidMount(){
        fetch(charitiesUrl)
        .then(response => response.json())
        .then(charities => this.setState({charities}) ) 
    }
    
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
                <CharityContainer charities={this.state.charities} clickAction={this.props.clickAction}/>
            </div>

        )
    }

}

export default CharitiesPage;
