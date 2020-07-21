import React, { Component } from 'react';
import CharityCard from '../components/CharityCard'

export default class Favorites extends Component{

   createFavoriteCards = () => {

       return this.props.favorites.map(favorite => {
           
            return <CharityCard key={favorite.id} favorite={favorite} {...favorite}  clickAction={this.props.clickAction}  addDonation={this.props.addDonation} favorited={true}/>
        })
    }



    render(){
        return (
            <div>
            <div className='fav-heading-container'>
            <h1 className="favorites">Your Charities</h1>
            <p className="fav-info">Below you can keep track of all the charities you would like to donate to.</p>
            <p className='fav-info2'>Once you have donated, update the charity card with the amount donated to keep track of your donations.</p>
            </div>
            <ul>
            {this.createFavoriteCards()}
            </ul>
            </div>
        )

    }

}