import React, { Component } from 'react';

const userUrl='http://localhost:3000/users'

export default class Login extends Component{

    state = {
        users: []
    }

    componentDidMount(){
        fetch(userUrl)
            .then(response => response.json())
            .then(users => this.setState({users}))
    }



    // createUser(){

    // }

    handleSubmit(event){
        event.preventDefault()
        // createUser()
        event.reset()
    }    


    render() {
        return(
            <div>
            <form>
            <div>
                <input type="text" name="username" placeholder="Username" />
                <label htmlFor="username">Username</label>
            </div>
            <div>
                <input type="password" name="password" placeholder="Password" />
                <label htmlFor="password">Password</label>
            </div>
            <input type="submit" value="Login" onSubmit={this.handleSubmit}/>
            </form>
            </div>
        );

    }

}

