import React from 'react';
// import { Col, Container, Nav, Row } from 'react-bootstrap';
// import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div className="header">

            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <div class="navbar-brand bg-danger fs-4">Ride to Destination</div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
                            <li class="nav-item">
                                <Link to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/destination">Destination</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/login">Login</Link>
                            </li>
                            {/* <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li> */}

                        </ul>

                    </div>
                </div>
            </nav>


        </div>


    );
};

export default Header;