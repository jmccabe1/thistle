import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Contact = () => {
    return (
    <div>
    <div className='TipTitle'>
        </div>
        <div className='TipText'>
        <p>We don’t sell our products online, but you can <a href="mailto:thistlecreekhoneycompany@gmail.com"> contact us</a> directly
        via email or find out products at one of the local retailers we’ve partnered with:</p>
        </div>
        <div className="partners">
            <div className="partnerLink">
                <a href="https://www.unwinedcandles.com" target="_blank">
                    <img src="unwined.png" alt="Unwined Candles"></img>
                </a>
            </div>
            <div className="partnerLink">
                <a href="https://www.facebook.com/Its-Neighbor-Made-104643704440968/" target="_blank">
                    <img src="neighbor.jpg" alt="It's Neighbor Made"></img>
                </a>
            </div>
        </div>
    </div>
    )
};

export default Contact;