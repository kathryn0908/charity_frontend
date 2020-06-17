import React, { Component } from 'react';
import CharitiesPage from './CharitiesPage';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import AppMenuBar from './styles/AppBar'
import FavoritesPage from './FavoritesPage'



const charitiesUrl = 'http://localhost:3000/charities'
const favoritesUrl='http://localhost:3000/favorites'
const donationUrl='http://localhost:3000/donations'
const userUrl='http://localhost:3000/users'

class App extends Component{

    state= {
      charities: [],
      favorites: [],
      donations: [],
      user: {}
  }

  componentDidMount(){
      this.getCharities()
      this.getFavorites()
  }

  getCharities(){
      fetch(charitiesUrl)
      .then(response => response.json())
      .then(charities => this.setState({charities}) ) 
  }

  getFavorites(){
      fetch(favoritesUrl)
      .then(response => response.json())
      .then(favorites => {
          let newFavorites = favorites.map(favorite => {
              let foundFavorite = this.state.charities.find(charity => charity.id === favorite.charity_id)
              return foundFavorite ? foundFavorite : null
          })
          this.setState({
              favorites: newFavorites
          })
      })
  }

  addFavorite = (charity, charity_id, user_id) => {
      const favorite = {charity_id, user_id}
      
      if(!this.state.favorites.find(favorite => favorite === charity))
      this.setState({favorites: [...this.state.favorites, charity]})

      let newFavorites = {
        ...favorite,
        charity_id: charity.id,
        user_id: 1
      }

      fetch(favoritesUrl, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({favorites: newFavorites})
      })
  }

  removeFavorite = (charity) => {
      let newFavorites = this.state.favorites.filter(favorite => favorite !== charity)
      this.setState({favorites: newFavorites})
      fetch(favoritesUrl, {
      method: "DELETE"
      })
  }

  addDonation = (charity_id, charity, amount, user_id) => {
    const donation = {charity_id, amount, user_id}
    this.setState({donations: [...this.state.donations, donation]})

    let newDonation = {
      ...donation,
      charity_id: charity.id,
      amount: amount,
      user_id: 1
    }
    
    fetch(donationUrl, {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        donation: newDonation
      })
    })
  }
  
  
  
  render(){
    return (
      <div className="app">
        <AppMenuBar />    
          <Router>
            <div className="routes">
              <Route exact path='/'>
                <CharitiesPage charities={this.state.charities} clickAction={this.addFavorite}/>
              </Route>

              <Route path='/favorites'>
                <FavoritesPage favorites={this.state.favorites} addDonation={this.addDonation} clickAction={this.removeFavorite} /> 
              </Route>
              
              <Route path='/login'>
                <Login />
              </Route>
             
              </div>
          </Router>  
      </div>
  
    )

  }

}

export default App;








  



