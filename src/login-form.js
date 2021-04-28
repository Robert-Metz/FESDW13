import React from 'react';
import SubmitButton from './submit-button';
import Navbar from './navbar';

let e = React.createElement;

export default class LoginForm extends React.Component  {
    render() {
        return(
        <div>
            <Navbar></Navbar>
        
        <form className="container mt-5 border">
            <h3 className="d-flex justify-content-center pb-3">Log In!</h3>
            <input type="username" className="form-control"  placeholder="Username"></input>
            <input type="password" className="form-control"  placeholder="Password"></input>
            <SubmitButton></SubmitButton>
        </form>
        </div>
        );
    }
}