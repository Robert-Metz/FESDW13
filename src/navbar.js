import React from 'react';

let e = React.createElement;

export default class Navbar extends React.Component  {
    render() {
        return(
            <div className="d-flex justify-content-center bg-success">
                <div className="m-5">
                <a href="">Home</a>
                </div>
                <div className="m-5">
                <a href="">House</a>
                </div>
                <div className="m-5">
                <a href="">Abode</a>
                </div>
        
            </div>

        )
    }
}