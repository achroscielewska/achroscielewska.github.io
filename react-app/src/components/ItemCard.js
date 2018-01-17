import React from "react";
import {Button, Col, Label} from "react-bootstrap";

import { Link } from "react-router-dom";

import img from "../img/champagne-146885_640.png"


const ItemCard = (props) => {

    return (
        <Col xs={12} sm={6} md={3}>
            <div className='itemCard'>

                <div className='itemCardImage'>
                    <img src={img} />
                </div>
                <div className='itemCardDescrip'>
                    <div></div>
                    <div></div>

                    <div className='itemCardDetalis'>
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
                        <Button className="itemCardBtn">
                            <Link to={"/home/details"}>
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