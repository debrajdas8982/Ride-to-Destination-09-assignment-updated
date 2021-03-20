import React from 'react';
import { useParams } from 'react-router';
import GoogleMap from '../GoogleMap/GoogleMap';
import './CheckOut.css'

const CheckOut = () => {
    const { rideType } = useParams();
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-3 check-out">
                        <h3>
                            Welcome to your destination!!!  
                            <p> JOURNEY BY:{rideType}</p>
                              
                        </h3>
                        <h3>Have a nice trip!</h3>
                        
                    </div>
                    <div className="col-9">
                        <GoogleMap></GoogleMap>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;