import React, { Component } from 'react'

    const initialState = {
        checkbox: false,
        amount: ""
    }

export default class FavoriteCard extends Component {

  state = initialState

  componentDidMount(){
      const {amount, checkbox, user_id} = this.props
      
      this.setState({amount,checkbox, user_id})
  }  

  handleSubmit = () => {
      const user_id = 3
      this.props.addDonation(this.props.favorite.charity.id, this.state.amount, user_id)
  }

  handleChange = (event) => {
    let {name, value, checked} = event.target
    value = name === "donated" ? checked : value
    this.toggleOn()
    this.setState({[name]: value})
  }

  toggleOn = () => this.setState({checkbox: true})

  toggleOff = () => this.setState({checkbox: false})


   removeClick = () => {
     this.props.removeFavorite(this.props.favorite.id)
   }

   render(){
    
    return (
        <div className="favorite-card">
            <h1 className='fav-title'>{this.props.favorite.charity.charity_name}</h1>
            <p>{this.props.favorite.charity.category}</p>
            <p>{this.props.favorite.charity.city}, {this.props.favorite.charity.state}</p>
            <a className='donate-link' href={this.props.favorite.charity.donation_url}>Donate Here!</a> 
            <form onSubmit={this.handleSubmit}>
                <p>I Donated!<input type="checkbox" value={this.state.checkbox} checked={this.state.checkbox} name="donated" onChange={this.handleChange} /></p>
                <input className='amount' placeholder="amount" value={this.state.amount} name="amount" onChange={this.handleChange} />
                <input className='button' type="submit"  />
            </form>
            <button key={this.props.favorite.charity.id} className='button' onClick={this.removeClick}>Remove Favorite</button> 
        </div> 
    )

   }

}