import React from 'react';

let e = React.createElement;

export default class SubmitButton extends React.Component  {
    render() {
        return e('button', {class: 'btn btn-primary'}, 'Submit');
    }
}