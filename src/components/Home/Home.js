import React, { useEffect, useState } from 'react';

// import { Link } from 'react-router-dom';

import './Home.css';

import Vehicle from '../Vehicle/Vehicle';
import vehicles from '../../Data/Data.json'

const Home = () => {

    const [ride, setRide] = useState([]);
    useEffect(() =>{
        setRide(vehicles)

    }, [])

    return (

        <div className = "custom-bg py-5 home">
                   <div className='container'>
             
            <div className='row'>
                {ride.map((vehicle) => (
                    <Vehicle key={vehicle.id} vehicle={vehicle}></Vehicle>
                ))}
            </div>
        </div>
     </div>
       
    );
};

export default Home;