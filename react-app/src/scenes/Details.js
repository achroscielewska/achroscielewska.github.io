import React, {Component} from "react";
import {Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";

import DetailsContent from "../components/DetailsContent";


const Details = () => (
    <Row className="show-grid">
        <Col xs={12} >
            <h2>
                <Link to={"/"}>
                    x
                </Link>
            </h2>

            {/*{cartItem.title}*/}

            <DetailsContent title={'abc'}/>

        </Col>
    </Row>
);

export default Details;
