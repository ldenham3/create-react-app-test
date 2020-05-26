// https://www.npmjs.com/package/react-responsive-carousel
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ImageCycle.css";
var Carousel = require('react-responsive-carousel').Carousel;

export default class ImageCycle extends Component {  
    render() {
        return(
            <Carousel 
                showArrows={false} 
                showStatus={true}
                showThumbs={false}
                showArrows={true} 
                showIndicators={false}
            >
                <div><img src={require('../images/1-homeScreen.png')} /></div>
                <div><img src={require('../images/2-editBills.png')} /></div>
                <div><img src={require('../images/3-editBillsExpandedSettings.png')} /></div>
                <div><img src={require('../images/4-editBills.png')} /></div>
                <div><img src={require('../images/5-editBillsExpandedLevels.png')} /></div>
                <div><img src={require('../images/6-homeScreen.png')} /></div>
                <div><img src={require('../images/7-editParts.png')} /></div>
                <div><img src={require('../images/8-homeScreen.png')} /></div>
                <div><img src={require('../images/9-bommerTree.png')} /></div>
                <div><img src={require('../images/10-settingsScreen.png')} /></div>
                <div><img src={require('../images/11-bommerTree.png')} /></div>
                <div><img src={require('../images/12-exportScreen.png')} /></div>
                <div><img src={require('../images/13-bommerTree.png')} /></div>

            </Carousel>
        )
    }
}