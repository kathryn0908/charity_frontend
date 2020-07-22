import React, { Component } from 'react'
import DonationCard from '../components/DonationCard'


export default class Donations extends Component{

    donations = () => {
        return this.props.favorites.map(favorite => {
            return <DonationCard favorite={favorite} key={favorite.id} />
        })
    }

    render(){
        return (
            <div className='donation-container'>
                {this.donations()}
            </div> 
        )
    }
}
