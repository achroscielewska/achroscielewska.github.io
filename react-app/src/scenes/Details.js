import React, {Component} from "react";
import {Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

import DetailsContent from "../components/DetailsContent";


const Details = () => (
    <Row className="show-grid">
        <Col xs={12} >
            <h2>
                <Link to={"/"}>
                    Home
                </Link>

                <span> details</span>
            </h2>
            <hr />

            {/*{cartItem.title}*/}

            <DetailsContent title={'abc'}/>

        </Col>
    </Row>
);

export default Details;
