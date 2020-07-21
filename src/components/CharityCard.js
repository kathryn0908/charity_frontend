import React, { Component } from 'react'

    const initialState = {
        checkbox: false,
        amount: "",
        mostRecentDonation: ""
    }

export default class CharityCard extends Component {

  state = initialState

  componentDidMount(){
      const {amount, checkbox, user_id} = this.props
      
      this.setState({amount,checkbox, user_id})
    }  

  handleSubmit = (event) => {
      event.preventDefault();
      this.props.addDonation(this.props.charity.id, this.state.amount)
      this.donations()
    }

  handleChange = (event) => {
    let {name, value, checked} = event.target
    value = name === "donated" ? checked : value
    this.toggleOn()
    this.donations()

    this.setState({[name]: value})
  }

  donations = () => {
    let mostRecentDonation = this.props.charity.donations.slice(-1);
    let newD = mostRecentDonation[0]["amount"]
    this.setState({mostRecentDonation: newD})
  }

  

  toggleOn = () => this.setState({checkbox: true})

  toggleOff = () => this.setState({checkbox: false})


   handleClick = () => {
       console.log(this.props.charity)
       const user_id = 3
       this.props.clickAction(this.props.charity.id, user_id, this.props.charity);
   }

   removeClick = () => {
     console.log(this.props.favorite)
     this.props.removeFavorite(this.props.favorite)
   }

   render(){
    let {category, charity_name, city, state, donation_url, id} = this.props
    const {favorited} = this.props
    
    return (
        <div>
           {favorited 
           ? <div className="charity-card">
               <h1>{this.props.favorite.charity.charity_name}</h1>
                <p>{this.props.favorite.charity.category}</p>
                <p>{this.props.favorite.charity.city}, {this.props.favorite.charity.state}</p>
                <p>{this.props.favorite.charity.donation_url}</p>
                <p>${this.state.mostRecentDonation}.00</p>
                <p>{this.state.checkbox ? '$'+this.state.amount : null }</p> 
                <button key={this.props.charity.id} className='button' onClick={this.removeClick}>Remove Favorite</button> 
                <form onSubmit={this.handleSubmit}>
                <label>I Donated!</label>
                <input type="checkbox" value={this.state.checkbox} checked={this.state.checkbox} name="donated" onChange={this.handleChange} />
                <input className='amount' placeholder="amount" value={this.state.amount} name="amount" onChange={this.handleChange} />
                <input className='button' type="submit" />
                </form>
              </div>
           : <div className="charity-card">
               <h1>{charity_name}</h1>
                <p>{category}</p>
                <p>{city}, {state}</p>
                <p>{donation_url}</p>
                <button key={id} className='button' onClick={this.handleClick}>Add Favorite</button> 
            </div>
           }
          
        </div>
        
    )

   }

}