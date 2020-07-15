import React from "react";
import {Link} from 'react-router-dom';
import axiosWithAuth from './axiosWithAuth';
import axios from 'axios';
import styled from 'styled-components';

class Login extends React.Component{
    state={
        credentials: {
            email: '',
            password: ''
        }
    };
    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        axios
            .post('https://wugfme.herokuapp.com/auth/login', this.state.credentials)
            .then( res => {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userID', res.data.user);
                this.props.history.push('/Dashboard');
            })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>What U Got For Me Eatz</h1>
                    <p>
                        Login Here!
                    </p>
                    <input 
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.credentials.name}
                        onChange={this.handleChange}/>
                    <input
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        placeholder="Password"/>
                    <button>Login</button>
                    <h5>By logging on you are acknowleging and agreeing to our Terms of Service and Privacy Policy that you probably didn't even read.</h5>
                    <p> Don't have an account?&nbsp;&nbsp;&nbsp;
                        <span>
                            <Link to="/Register">Register</Link>
                        </span>
                    </p>
                </form>
            </div>
        )
    }
}

export default Login;