import React from "react";
import {Panel, Button, Col, Label} from "react-bootstrap";
import img from "../img/champagne-146885_640.png"

const ItemCard = (props) => {
    console.log(props.tags);
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
                        <b> {props.title} </b>
                    </div>
                    <div>
                        {props.tags.map(tag => (
                            <Label>{tag}</Label>
                        ))}

                    </div>
                    <div>
                        <Button >Szczegóły</Button>
                    </div>
                </div>
            </div>
        </Col>
    )
    console.log('this.props')
};

export default ItemCard;