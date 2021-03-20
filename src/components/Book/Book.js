// import { Button } from 'bootstrap';
import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import GoogleMap from '../GoogleMap/GoogleMap';
import './Book.css';
// import GoogleMapReact from '../components/G';

const Book = ({ride}) => {
    const { imgUrl } = useParams();
    const { rideType } = useParams();
    const history = useHistory();
    const handleCheckOut = (ride) => {
        history.push(`/checkout/${rideType}`);
    }
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-3 ">
                        <form action="" className="book-destination">

                            <p>By {rideType} </p>
                            <p>Pick From:</p>
                            <p ><input className="text-center" type="text" placeholder="Stockholm central" /></p>
                            <p>Pick To: {imgUrl}</p>
                            <p><input className="text-center" type="text" placeholder="Flemingsberg" /></p>
                            <button onClick={handleCheckOut} className="d-grid col-8 mx-auto btn btn-primary">Search</button>
                        </form>
                    </div>
                    <div className="col-9">
                        <GoogleMap></GoogleMap>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;