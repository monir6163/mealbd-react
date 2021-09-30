import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meals = (props) => {
    const { idMeal, strMeal, strCategory, strArea, strMealThumb } = props.meal;
    const url = `/mealdetails/${idMeal}`;
    return (
        <div>
            <Col>
                <Card className="h-100">
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title>Name: {strMeal}</Card.Title>
                        <Card.Title>Category: {strCategory}</Card.Title>
                        <Card.Title>Area: {strArea}</Card.Title>
                        <Link to={url}>
                            <Button variant="success">See Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Meals;