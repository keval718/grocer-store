import React, { Fragment, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';

export default class Login extends Component{

    constructor()
    {
        super();
        this.onChangeEmail=this.onChangeEmail.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            email:"",
            password:""
        }
    }

    onChangeEmail(e)
    {
        this.setState({
            email:e.target.value
        })
    }
    
    onChangePassword(e)
    {
        this.setState({
            password:e.target.value
        })
    }
    onSubmit(e)
    {
        e.preventDefault();
        let config = {
            headers: {
              'Content-Type': 'application/json'
            }
          };
      
        const data={
            email:this.state.email,
            password:this.state.password
        }

        axios
      .post('http://grocer-server.herokuapp.com/api/providers/Providerlogin', data)
      .then(response => {
        let decodeddata = decode(response.data.token);
        console.log(response.data.token);
        sessionStorage.setItem('token', response.data.token);
      })
      .catch(error => {
        console.log('error ', error);
      });
    }

    render(){
        return (
        <div>
            
            <p>Login In</p>
            <form onSubmit={this.onSubmit}>
              
              <div>
                <input
                  type='email'
                  placeholder='Email Address'
                  name='email'
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
              </div>
              <div>
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
              
                  value={this.state.password}
                  onChange={this.onChangePassword}
                />
              </div>
          
            
              <input type='submit' value='Register' />
            </form>
           
            </div>
        );
        }
}