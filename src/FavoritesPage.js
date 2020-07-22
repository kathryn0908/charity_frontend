import React, { Component } from 'react'
import Favorites from './containers/Favorites'



export default class FavoritesPages extends Component{
    
    render(){
        return(
            <>
            <Favorites favorites={this.props.favorites} clickAction={this.props.clickAction} charities={this.props.charities}  donations={this.props.donations} addDonation={this.props.addDonation}/>
            </>
        )
    }
}