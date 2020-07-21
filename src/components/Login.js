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
        this.props.login(this.state)
    }    


    render() {
        const { username, password } = this.state
    
        return(
            <div>
            <form onSubmit={this.handleSubmit} className='login'>
            <h1 className='login-header'>Login</h1>
            <div>
                <input className='login-input' type="text" name="username" value={username} placeholder="Username" onChange={this.handleChange} />
            </div>
            <div>
                <input className='login-input'  type="password" name="password" value={password} placeholder="Password" onChange={this.handleChange} />
            </div>
            <input type="submit" className='login-submit'/>
            </form>
            </div>
        );

    }

}

