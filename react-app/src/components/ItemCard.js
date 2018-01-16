import React from "react";
import {Panel, Button, Col, Label} from "react-bootstrap";
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
                    <div className='description-detalis'>
                        <b> title </b>
                    </div>
                    <div>
                        <Label>New</Label>
                        <Label>New</Label>
                        <Label>New</Label>
                    </div>
                    <div>
                        <Button >Szczegóły</Button>
                    </div>

                </div>
            </div>
        </Col>
    )
};

export default ItemCard;