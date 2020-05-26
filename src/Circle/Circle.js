import React, { Component } from 'react';
import './Circle.css';

export default class Circle extends Component {  
    render() {
        var circleStyle = {
            borderRadius: "50%",
            width:100,
            height:100,
            border:"5px solid red",
        };
        return (
            <div style={circleStyle}></div>
        );
    }
}