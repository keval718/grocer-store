import React, { Fragment, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import '../App.css'

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
      .post('https://grocer-server.herokuapp.com/api/providers/Providerlogin', data)
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
        // <div>
            
        //     <p>Login In</p>
        //     <form onSubmit={this.onSubmit}>
              
        //       <div>
        //         <input
        //           type='email'
        //           placeholder='Email Address'
        //           name='email'
        //           value={this.state.email}
        //           onChange={this.onChangeEmail}
        //         />
        //       </div>
        //       <div>
        //         <input
        //           type='password'
        //           placeholder='Password'
        //           name='password'
              
        //           value={this.state.password}
        //           onChange={this.onChangePassword}
        //         />
        //       </div>
          
            
        //       <input type='submit' value='Register' />
        //     </form>
           
        //     </div>
        
        <div class="form-style-10">
              
        <h1>Log In</h1>
<form  onSubmit={this.onSubmit}>
      <div class="section"></div>
    <div class="inner-wrap">
        <label>Email Address <input type="email" name="field1" value={this.state.email}
          onChange={this.onChangeEmail}/></label>
        <label>Password <input type="password" name="field2" value={this.state.password}
          onChange={this.onChangePassword}/></label>
          <p >Not Register Yet?</p><Link to="/register">  Click Here</Link>
  </div>


<div class="button-section">
<input type="submit" name="Log In" value="LogIn" />
</div>
</form>
</div>
        );
        }
}