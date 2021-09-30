import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Meals from '../Meals/Meals';

const Home = () => {
    const [searchText, setSearchText] = useState("");
    const [meals, setMeals] = useState([])
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])
    const handleSearchField = (e) => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue)
    }
    return (
        <>
            <div className="container mt-5 mb-5">
                <input onChange={handleSearchField} type="text" className="form-control" placeholder="Search your Food" />
            </div>
            <div className="container mt-5 mb-5">
                <Row xs={1} md={3} lg={4} className="g-4">
                    {
                        meals ? meals.map(meal => <Meals key={meal.idMeal} meal={meal}></Meals>) : <div className="my text-center text-danger fs-4 fw-bold">Not Found</div>
                    }
                </Row>
            </div>
        </>
    );
};

export default Home;