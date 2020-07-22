import React, { Component } from 'react'

    const initialState = {
        checkbox: false,
        amount: ""
    }

export default class CharityCard extends Component {

  state = initialState

  componentDidMount(){
      const {amount, checkbox, user_id} = this.props
      
      this.setState({amount,checkbox, user_id})
  }  

  handleSubmit = (event) => {
      event.preventDefault();
      const user_id = 3
      this.props.addDonation(this.props.charity.id, this.state.amount, user_id)
  }

  handleChange = (event) => {
    let {name, value, checked} = event.target
    value = name === "donated" ? checked : value
    this.toggleOn()
    this.setState({[name]: value})
  }

  toggleOn = () => this.setState({checkbox: true})

  toggleOff = () => this.setState({checkbox: false})


   handleClick = () => {
       const user_id = 3
       this.props.clickAction(this.props.charity.id, user_id, this.props.charity);
   }

   removeClick = () => {
     this.props.removeFavorite(this.props.favorite)
   }

   render(){
    let {category, charity_name, city, state, donation_url, id} = this.props
    const {favorited} = this.props
    
    return (
        <div>
           {favorited 
           ? <div className="favorite-card">
               <h1 className='fav-title'>{this.props.favorite.charity.charity_name}</h1>
                <p>{this.props.favorite.charity.category}</p>
                <p>{this.props.favorite.charity.city}, {this.props.favorite.charity.state}</p>
                <a className='donate-link' href={this.props.favorite.charity.donation_url}>Donate Here!</a> 
                <form onSubmit={this.handleSubmit}>
                  <p>I Donated!<input type="checkbox" value={this.state.checkbox} checked={this.state.checkbox} name="donated" onChange={this.handleChange} /></p>
                  <input className='amount' placeholder="amount" value={this.state.amount} name="amount" onChange={this.handleChange} />
                  <input className='button' type="submit" />
                </form>
                <button key={this.props.charity.id} className='button' onClick={this.removeClick}>Remove Favorite</button> 
              </div>
           : <div className="charity-card">
               <h1 className='card-title'>{charity_name}</h1>
                <p>{category}</p>
                <p>{city}, {state}</p>
                <a className='donate-link' href={donation_url}>Donate Here!</a>
                <button key={id} className='button' onClick={this.handleClick}>Add Favorite</button> 
            </div>
           }
          
        </div>
        
    )

   }

}