import React, { Component } from 'react'

    const initialState = {
        checkbox: false,
        amount: ""
    }

export default class CharityCard extends Component {

    state = initialState

  handleSubmit = (event) => {
      event.preventDefault();
      this.props.addDonation(this.props.charity.id, this.props.amount)
      this.setState(initialState)
  }

  handleChange = (event) => {
    let {name, value, checked} = event.target
    value = name === "checkbox" ? checked : value

    this.setState({[name]: value})
  }


   handleClick = () => {
       console.log('clicked')
       this.props.clickAction(this.props.charity);
   }

   render(){
    const {category, charity_name, city, state, donation_url} = this.props
    const {favorited} = this.props
    return (
        <div>
           {favorited 
           ? <div className="charity-card">
               <h1>{this.props.charity.charity_name}</h1>
                <p>{this.props.charity.category}</p>
                <p>{this.props.charity.city}, {this.props.charity.state}</p>
                <p>{this.props.charity.donation_url}</p>
                <button key={this.props.charity.id} className="remove-fav" onClick={this.handleClick}>Remove Favorite</button> 
                <form onSubmit={this.handleSubmit}>
                <label>I Donated!</label>
                <input type="checkbox" value={this.state.checkbox} checked={this.state.checkbox} name="checkbox" />
                <input placeholder="amount" value={this.state.amount} name="amount" onChange={this.handleChange} />
                <input type="submit" />
                </form>
                </div>
           : <div className="charity-card">
               <h1>{charity_name}</h1>
                <p>{category}</p>
                <p>{city}, {state}</p>
                <p>{donation_url}</p>
                <button key={this.props.charity.id} className="add-fav" onClick={this.handleClick}>Add Favorite</button> 
            </div>
           }
          
        </div>
        
    )

   }

}