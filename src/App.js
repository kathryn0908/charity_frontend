import React, { Component } from 'react';
import CharitiesPage from './CharitiesPage';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Favorites from './containers/Favorites';
import Login from './components/Login';
import AppMenuBar from './styles/AppBar'


class App extends Component{

  state= {
    favorites: []
  }

  addFavorite = (charity) => {
    if(!this.state.favorites.find(favorite => favorite === charity))
    this.setState({favorites: [...this.state.favorites, charity]})

    // fetch(, {
    // method: "POST",
    // headers: {
    //     'Content-Type': 'application/json'
    // },
    // body: JSON.stringify({charity})
    // })
}

removeFavorite = (charity) => {
    let newFavorites = this.state.favorites.filter(favorite => favorite !== charity)
    this.setState({favorites: newFavorites})
    // fetch(, {
    // method: "DELETE"
    // })
}

  render(){
    return (
      <div className="app">
        <AppMenuBar />    
          <Router>
            <div className="routes">
              <Route exact path='/'>
                <CharitiesPage clickAction={this.addFavorite}/>
              </Route>

              <Route path='/favorites' render={(props) => <Favorites {...props} favorites={this.state.favorites} clickAction={this.removeFavorite} />} />
              
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








  



