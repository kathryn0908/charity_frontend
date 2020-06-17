import React, { Component } from 'react';
import CharityCard from '../components/CharityCard'

export default class Favorites extends Component{

   createFavoriteCards = () => {

       return this.props.favorites.map(charity=> {
           
            return <CharityCard key={charity.id} charity={charity}  clickAction={this.props.clickAction} addDonation={this.props.addDonation} favorited={true}/>
        })
    }

    render(){
        return (
            <div>
            <h1 className="favorites">Your Charities</h1>
            <p className="fav-info">Below you can keep track of all the charities you would like to donate to. Once you have donated, update the charity card with the amount donated to keep track of your donations.</p>
            <ul>
            {this.createFavoriteCards()}
            </ul>
            </div>
        )

    }

}