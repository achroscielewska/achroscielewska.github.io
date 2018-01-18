import React from "react";
import {Button, Col, Label} from "react-bootstrap";


const DetailsContent = () => {

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
                    content detalis
                </div>
            </div>
        </Col>
    )
};

export default DetailsContent;