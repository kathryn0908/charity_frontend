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
const loginUrl = 'http://localhost:3000/login'

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
      this.getDonation()
  }

  

  login = (username, password) => {
      fetch(loginUrl, {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
        .then(response => response.json())
        .then(response => console.log(response))
  }

  getCharities(){
    fetch(charitiesUrl)
      .then(response => response.json())
      .then(charities => this.setState({charities}) ) 
  }

  getFavorites = () => {
    fetch(favoritesUrl)
      .then(response => response.json())
      .then(favorites => this.setState({favorites}))
  }

  getDonation = () => {
    fetch(donationUrl)
      .then(response => response.json())
      .then(donations => this.setState({donations}) )
  }
  
  

  addFavorite = (charity_id, user_id) => {
    const newFavorite = {charity_id, user_id}

    let foundFavorite = this.state.favorites.find(favorite => charity_id === favorite.charity.id)

    if(!foundFavorite){
      this.setState({favorites: [...this.state.favorites, newFavorite]})
      fetch(favoritesUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFavorite)
      })
    }
    
   
    
  }

  
  removeFavorite = (id) => {
    
    let newFavorites = this.state.favorites.filter(favorite => favorite.id !== id)
    this.setState({favorites: newFavorites})
    
      
      fetch(`${favoritesUrl}/${id}`, {
      method: "DELETE"
      });
  }


  addDonation = (charity_id, amount, user_id) => {
    const donation = {charity_id, amount, user_id}

    this.setState({donations: [...this.state.donations, donation]})
    
    fetch(donationUrl, {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(donation)
    })
  }

  
  
  
  
  render(){
      return (
        <div className="app">
          <Router>
          <AppMenuBar />    
              <div className="routes">
              
                <Route exact path='/'>
                  <CharitiesPage charities={this.state.charities} clickAction={this.addFavorite} />
                </Route>
  
                <Route path='/favorites'>
                  <FavoritesPage favorites={this.state.favorites} charities={this.state.charities} addDonation={this.addDonation} donations={this.state.donations} clickAction={this.removeFavorite} /> 
                </Route>
  
                <Route path='/login' render={(routerProps) => <Login {...routerProps} login={this.login}/>}/>
                
              </div>
            </Router>  
        </div>
    )
  }
}

export default App;








  



