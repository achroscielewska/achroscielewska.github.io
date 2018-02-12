import React from "react";
import {Button, Col, Label, Row} from "react-bootstrap";


const DetailsContent = () => {

    return (
        <Row>
            <Col xs={12} sm={12} md={12}>
                <div className='details-container'>
                    <img className='details-img' src={Img}>

                    </img>
                    <div className='details'>
                        header detalis
                    </div>
                    <div className='details-content'>
                        content detalis
                    </div>
                </div>
            </Col>
        </Row>

    )
};

export default DetailsContent;