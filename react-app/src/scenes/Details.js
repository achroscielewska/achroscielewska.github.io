import React, {Component} from 'react';
import { connect } from 'react-redux';

import {Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Img from "../img/champagne-146885_640_1.png"


const Details = (props) => {
    const {id, title, description, img} = props;

    console.log({id, title, description, img})

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
                        <img className='details-img' src={Img}>

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
