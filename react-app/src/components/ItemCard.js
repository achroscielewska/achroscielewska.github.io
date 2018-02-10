import React from "react";
import {connect} from 'react-redux';

import {Button, Col, Label} from "react-bootstrap";

import {LinkContainer} from "react-router-bootstrap"


const ItemCard = (props) => {

    const selectItem = () => {
        props.selectItem(props.id, props.title, props.description, props.img );

    };

    const {id, img, title, date, tags} = props;


    return (
        <Col xs={12} sm={6} md={3}>
            <div className='item-card'>

                <div className='item-card-image'>
                    <img src={`${img}/100/200?image=${Math.floor((Math.random() * 70) + 1)}`}></img>
                </div>
                <div className='item-card-descrip'>
                    <div></div>
                    <div></div>

                    <div className='item-card-detalis'>
                        <p>
                            <b>{title}</b><br/>
                            {date.substr(0, 10)}
                        </p>

                    </div>
                    <div>
                        {tags.map((tag,index) => (
                            <Label key={index}>{tag}</Label>
                        ))}
                    </div>
                    <div>
                        <LinkContainer exact to={`/${id}`}>
                            <Button className="item-card-btn" onClick={selectItem}>Details</Button>
                        </LinkContainer>
                    </div>
                </div>
            </div>
        </Col>
    )
};

const mapStateToProps = (state) => {
    return {
        details: state.details
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectItem: (id, title,description,img) => dispatch({
            type: "SELECT_ITEM",
            id,
            title,
            description,
            img
        })
    }
}

const connectedCounter = connect(mapStateToProps, mapDispatchToProps)(ItemCard);

export {connectedCounter as ItemCard};