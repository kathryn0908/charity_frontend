import React, { Component } from 'react';


export default class Login extends Component{

    state= {
        username: "",
        password: ""
    }

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({ [name]: value})
    }

    handleSubmit(event){
        event.preventDefault()
    }    


    render() {
        const { username, password} = this.state
        return(
            <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit} className='login'>
            <div>
                <input type="text" name="username" value={username} placeholder="Username" onChange={this.handleChange} />
                <label htmlFor="username">Username</label>
            </div>
            <div>
                <input type="password" name="password" value={password} placeholder="Password" onChange={this.handleChange} />
                <label htmlFor="password">Password</label>
            </div>
            <input type="submit" />
            </form>
            </div>
        );

    }

}

