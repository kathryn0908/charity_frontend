import React, { Component } from 'react'
import Favorites from './containers/Favorites'
import Donations from './containers/Donations'


export default class FavoritesPages extends Component{
    
    render(){
        return(
            <>
            <Favorites favorites={this.props.favorites} clickAction={this.props.clickAction} charities={this.props.charities}  addDonation={this.props.addDonation}/>
            {/* <Donations donations={this.props.donations} /> */}
            </>
        )
    }
}