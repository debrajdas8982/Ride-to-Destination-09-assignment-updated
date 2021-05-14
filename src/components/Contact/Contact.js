import React from 'react';
import Facebook from './Facebook.png'
import Twitter from './Twitter.png'

const Contact = () => {
    return (
        <div className="text-center">
        <h4 className="mt-5"> Ride To Destination</h4>
        <footer className="footer mt-3 pt-3">
            <a href="https://www.facebook.com/debraj.cse"><img src={Facebook} alt="" /></a>
            <a href="https://twitter.com/DebrajD99860768"><img src={Twitter} alt="" /></a>
           
            <p>All Rights reserved by Debraj</p>
        </footer>
    </div>
    );
};

export default Contact;