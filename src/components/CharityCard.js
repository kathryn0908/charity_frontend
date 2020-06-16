import React, { Component } from 'react'

const intialState = {
    amount: '',
    donated: false
}

export default class CharityCard extends Component {

    state = initialState
    

    handleChange = (event) => {
        let {name, value, checked} = event.target
        value = name === "urgent" ? checked : value
        this.setState({
            [name]: value
        })
    }

    componentDidMount(){
       {amount, donated, user_id, charity_id} = this.props
        if(this.props.user_id){
            this.setState({
                amount,
                charity_id,
                donated,
                user_id
            })
        }
    }


    handleSubmit = (event) => {
        event.preventDefault()
        this.props.todoAction(this.state)
        this.setState(initialState)
    }


   handleClick = () => {
       console.log('clicked')
        clickAction(charity);
   }

    return (
        {category, charity_name, city, state, donation_url} = this.props.charity
        {clickAction, charity, favorite} = this.props
        <div className="charity-card">
            <h1>{charity_name}</h1>
            <p>{category}</p>
            <p>{city}, {state}</p>
            <p>{donation_url}</p>
           {favorite 
           ? <button key={props.charity.id} className="remove-fav" onClick={handleClick}>Remove Favorite</button> 
           : <button key={props.charity.id} className="add-fav" onClick={handleClick}>Add Favorite</button> 
           }
          
           {favorite  
           ? <form>
               <label>I Donated!</label>
              <input type="checkbox" value="checkbox" name="checkbox" />
              <input placeholder="amount" value="amount" name="amount" />
              <input type="submit"/>
             </form>
           : null}
        
        </div>
        
    )
}