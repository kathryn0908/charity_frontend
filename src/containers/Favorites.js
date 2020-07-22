import React, { Component } from 'react';
import FavoriteCard from '../components/FavoriteCard'
import Donations from './Donations'

export default class Favorites extends Component{

   createFavoriteCards = () => {
      
       return this.props.favorites.map(favorite => {
           
            return <FavoriteCard key={favorite.id} favorite={favorite}  removeFavorite={this.props.clickAction}  addDonation={this.props.addDonation}/>
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
                <div className='fav-container'>
                    {this.createFavoriteCards()}
                </div>
                <h1 className="favorites">Your Donations</h1>
                 <Donations favorites={this.props.favorites}/>
            </div>
        )

    }

}