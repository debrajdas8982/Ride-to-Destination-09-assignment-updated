import React from 'react';
import { useHistory } from 'react-router';
import './Rider.css'

const Rider = ({ ride }) => {
    const { imgUrl, rideType} = ride;
    const history = useHistory()
    const handleBook = (ride) => {
        history.push(`/book/${rideType}`);
    }

    return (
        <div onClick={handleBook} className="ride-design">

            <p><img src={imgUrl} alt="" /></p>
            <br />
            <p><h3>{rideType}</h3></p>


        </div>
    );
};

export default Rider;