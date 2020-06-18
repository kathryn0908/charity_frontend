import React, { Component } from 'react'
import CharityCard from '../components/CharityCard'

export default class Donations extends Component{

    donations = () => {
        return this.props.donations.map(donation => {
            return <CharityCard donation={donation} favorited={true}  />
        })
    }

    render(){
        return (
            <div>
                {/* {this.donations()} */}
            </div> 
        )
    }
}
