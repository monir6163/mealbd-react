import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Mealdetails.css';

const Mealdetails = () => {
    const { mealID } = useParams();
    const [meal, setMeal] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [mealID])
    console.log(meal)
    const history = useHistory();
    const handleMeals = () => {
        history.push("/resturent")
    }
    const url = `/resturent`;
    return (
        <div>
            <Col>
                <Card className="h-100">
                    <Card.Img variant="top" className="img-card" src={meal.strMealThumb} />
                    <Card.Body>
                        <Card.Title>Name: {meal.strMeal}</Card.Title>
                        <Card.Title>Category: {meal.strCategory}</Card.Title>
                        <Card.Title>Area: {meal.strArea}</Card.Title>
                        <Card.Text>
                            <span className="text-card">Instructions: {meal.strInstructions}</span>
                        </Card.Text>
                        <Link to={url}>
                            <Button onClick={handleMeals} variant="success">See All Meals</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default Mealdetails;