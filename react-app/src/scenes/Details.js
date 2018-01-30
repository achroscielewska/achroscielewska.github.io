import React, {Component} from 'react';
import { connect } from 'react-redux';

import {Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Details = (props) => {
    const {id, title, description, img} = props;


    return (
    <Row className="show-grid">
        <Col xs={12} >
            <h2>
                <Link to={"/"}>
                    <p className='close-btn'>x</p>
                </Link>
            </h2>

            <Row>
                <Col xs={12} sm={12} md={12}>
                    <div className='details-container'>
                        <img className='details-img' src={`${img}/300/600?image=${Math.floor((Math.random() * 70) + 1)}`}>

                        </img>
                        <div className='details'>
                            <div className='details-title'>
                                <b>{title}</b>
                            </div>
                        </div>
                        <div className='details-content'>
                            <div className='details-details'>
                                <i>{description}</i>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

        </Col>
    </Row>
)
};

const mapStateToProps = (state) => {
    return {
        id: state.details.id,
        title: state.details.title,
        description: state.details.description,
        img: state.details.img
    }
}


const connectedLiczniki = connect(mapStateToProps)(Details);

export {connectedLiczniki as Details};
