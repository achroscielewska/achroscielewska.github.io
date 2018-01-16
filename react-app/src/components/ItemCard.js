import React from "react";
import {Button, Col, Label} from "react-bootstrap";

import { Link } from "react-router-dom";

import img from "../img/champagne-146885_640.png"


const ItemCard = (props) => {

    return (
        <Col xs={12} sm={6} md={3}>
            <div className='card'>

                <div className='description'>
                    <div className='image-contaner'>
                        <img className='image'  src={img} />
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div className='description-detalis'>
                        <b> {props.title} </b>

                    </div>
                        <p> {props.date.substr(0, 10)} </p>
                    <div>
                        {props.tags.map((tag,index) => (
                            <Label key={index}>{tag}</Label>
                        ))}
                    </div>
                    <div>
                        <Button className="detailsBtn">
                            <Link to={"/details"}>
                                Details
                            </Link>

                        </Button>
                    </div>
                </div>
            </div>
        </Col>
    )
};

export default ItemCard;