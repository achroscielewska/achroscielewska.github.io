import React from "react";
import {Row, Col } from "react-bootstrap";

import ItemCard from "../components/ItemCard";

const Home = () => (
    <Row className="show-grid">
        <Col xs={12} >
            <h2>Home</h2>
            <hr />

            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>
            <ItemCard/>

        </Col>
    </Row>
);

export default Home;