import React from "react";
import {Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";


const Details = () => (
    <Row className="show-grid">
        <Col xs={12} >
            <h2>
                <Link to={"/"}>
                    Home
                </Link>

                <span>&rarr; details</span>
            </h2>

            <hr />

            <p>
                Details
            </p>

        </Col>
    </Row>
);

export default Details;