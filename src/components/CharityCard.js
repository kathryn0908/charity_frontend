import React, { Component } from 'react'

export default class CharityCard extends Component {


  componentDidMount(){
      const {amount, checkbox, user_id} = this.props
      
      this.setState({amount,checkbox, user_id})
  }  

   handleClick = () => {
       const user_id = 3
       this.props.clickAction(this.props.charity.id, user_id, this.props.charity);
   }

   render(){
    let {category, charity_name, city, state, donation_url, id} = this.props
    
    
    return (
      <div className="charity-card">
          <h1 className='card-title'>{charity_name}</h1>
          <p>{category}</p>
          <p>{city}, {state}</p>
          <a className='donate-link' href={donation_url}>Donate Here!</a>
          <button key={id} className='button' onClick={this.handleClick}>Add Favorite</button> 
      </div>
    )

   }

}