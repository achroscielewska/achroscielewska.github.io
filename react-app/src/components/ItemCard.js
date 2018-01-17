import React from "react";
import {Button, Col, Label} from "react-bootstrap";

import { Link } from "react-router-dom";

import img from "../img/champagne-146885_640.png"


const ItemCard = (props) => {

    const handleClick = () => {
        const selectedItem = props.selectCart({
                title: props.title,
                description :props.description
            });
    }

    return (
        <Col xs={12} sm={6} md={3}>
            <div className='item-card'>

                <div className='item-card-image'>
                    <img src={img} />
                </div>
                <div className='item-card-descrip'>
                    <div></div>
                    <div></div>

                    <div className='item-card-detalis'>
                        <p>
                            <b>{props.title}</b><br/>
                            {props.date.substr(0, 10)}
                        </p>
                    </div>
                    <div>
                        {props.tags.map((tag,index) => (
                            <Label key={index}>{tag}</Label>
                        ))}
                    </div>
                    <div>
                        <Button className="item-card-btn" onClick={handleClick}>Details</Button>
                    </div>
                </div>
            </div>
        </Col>
    )
};

export default ItemCard;