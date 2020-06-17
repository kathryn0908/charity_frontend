import React, { Component } from 'react';
import CharitiesPage from './CharitiesPage';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import AppMenuBar from './styles/AppBar'
import FavoritesPage from './FavoritesPage'



const charitiesUrl = 'http://localhost:3000/charities'
const favoritesUrl='http://localhost:3000/favorites'

class App extends Component{

    state= {
      charities: [],
      favorites: []
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

  addFavorite = (charity) => {
      if(!this.state.favorites.find(favorite => favorite === charity))
      this.setState({favorites: [...this.state.favorites, charity]})

      fetch(favoritesUrl, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({charity})
      })
  }

  removeFavorite = (charity) => {
      let newFavorites = this.state.favorites.filter(favorite => favorite !== charity)
      this.setState({favorites: newFavorites})
      fetch(favoritesUrl, {
      method: "DELETE"
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
                <FavoritesPage favorites={this.state.favorites} clickAction={this.removeFavorite} /> 
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








  



