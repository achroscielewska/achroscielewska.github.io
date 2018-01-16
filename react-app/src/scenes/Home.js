import React from "react";
import {Row, Col } from "react-bootstrap";

import ItemCard from "../components/ItemCard";

import dataset from "../dataset"

const Home = () => (
    <Row className="show-grid">
        <Col xs={12} >
            <h2>Home</h2>
            <hr />

            {dataset
                .filter(item =>item.isActive == true)
                .map(item => (
                <ItemCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    img={item.img}
                    date={item.date}
                    tags={item.tags}
                    isActive={item.isActive}
                />
            ))}

        </Col>
    </Row>
);

export default Home;