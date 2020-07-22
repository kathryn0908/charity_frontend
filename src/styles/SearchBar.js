import React, { Component } from 'react';
import CharityCard from '../components/CharityCard'


export default class SearchBar extends Component{
    state={
        term: ''
    }  
    
    onInputChange(term){
      this.setState({term});
    }

    
    filterCards = () => {
      if(this.props.charities){
          
          return this.props.charities.filter(charity => {
              return (
                  charity.charity_name.toLowerCase().includes(this.state.term) 
                  || charity.category.toLowerCase().includes(this.state.term) 
              )
          })
        } 
    }
    
    searchResultsContainer = () => {
      if(this.props.charities){
          return this.filterCards().map(charity=>{
           return (
            <CharityCard key={charity.id} {...charity} charity={charity} clickAction={this.props.addFavorite}/>
              )
          })
        } 
    };
    render(){
        return(
            <>
                <div className="search-container">
                    <div className='search'>
                        <form >
                            <input  className="search-input" id="search" type="text" placeholder="Search..." value={this.state.term}
                                onChange={event=>this.onInputChange(event.target.value)} />
                        </form>
                    </div>
                </div>
                <div className="searchresults-container">
                {this.state.term 
                ? <>
                        {this.searchResultsContainer()}
                    </>
                : null}
                </div>
          </>
        );
    }
}