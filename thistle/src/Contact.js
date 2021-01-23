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
        <h2><a href="mailto:thistlecreekhoneycompany@gmail.com">Reach out to us via email</a></h2>
        </div>
        <div className='TipText'>
        <p>We don’t sell our products online, but you can contact us at the link above or find out products at one of the local retailers we’ve
        partnered with:</p>
        </div>
        <div className="partners">
            <div className="partnerLink1">
                <a href="https://www.unwinedcandles.com">
                    <img src="unwined.png" alt="Unwined Candles"></img>
                </a>
            </div>
            <div className="partnerLink2">
                <a href="https://www.facebook.com/Its-Neighbor-Made-104643704440968/">
                    <img src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p320x320/100514833_154888336083171_9462517327724544_n.jpg?_nc_cat=100&ccb=2&_nc_sid=dbb9e7&_nc_ohc=oOaP1TpsexUAX9iG0qH&_nc_ht=scontent-iad3-1.xx&tp=6&oh=c0ce2121b0cf1bd7331263b3b11741ce&oe=602E616C" alt="It's Neighbor Made"></img>
                </a>
            </div>
        </div>
    </div>
    )
};

export default Contact;