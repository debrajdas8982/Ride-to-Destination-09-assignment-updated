import React from 'react';
import photo from './Frame.png';
import photo1 from './Frame-2.png';
import photo2 from './Frame-1.png';
import photo3 from './Group.png';
// import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import Rider from '../Rider/Rider';
const Home = () => {
    const style = {
        display: 'flex',
        margin: 'px',
        justifyContent: 'space-around',
    }
    const riders = [
        {
            title: 'Bike',
            description: 'Bike ride.',
            imgUrl: photo,
            capacity: 1,
            rideType: 'BIKE',
            avatar: 'S',
            price: 50
        },
        {
            title: 'Car',
            description: 'Car ride',
            imgUrl: photo1,
            bed: 1,
            capacity: 2,
            rideType: 'CAR',
            avatar: 'D',
            price: 149
        },
        {
            title: 'Bus',
            description: ' Bus ride',
            imgUrl: photo2,
            bed: 2,
            capacity: 4,
            rideType: 'BUS',
            avatar: 'F',
            price: 199
        },
        {
            title: 'Train',
            description: ' Train Ride',
            imgUrl: photo3,
            bed: 2,
            capacity: 4,
            rideType: 'TRAIN',
            avatar: 'F',
            price: 199
        }
    ]

    return (
        <div className="header-top">
            <p><img src="imgUrl" alt="" /></p>
            <div style={style}>
                {
                    riders.map(ride => <Rider key={ride.rideType} ride={ride}></Rider>)
                }
            </div>
           
        </div>
    );
};

export default Home;