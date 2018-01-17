import React from "react";
import {Button, Col, Label} from "react-bootstrap";

import { Link } from "react-router-dom";

import img from "../img/champagne-146885_640.png"

const DetailsContent = (props) => {

    return (
        <Col xs={12} sm={6} md={3}>
            <div className='details-container'>
                <div>
                    IMG
                </div>
                <div>
                    header detalis
                </div>
                <div>
                    content detalis {props.title}
                </div>
            </div>
        </Col>
    )
};

export default DetailsContent;