import React, { useEffect, useState, useRef } from 'react'
import circle from "../../assets/circle.png"
import { Card, Button, Form, Col, Row } from "react-bootstrap";
import axios from "axios";


import './Home.scss'
import { API_URL } from '../../Constants';
//import { Cars } from '../../../../../Back/models';
const Home = () => {
    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(cars[0]);
    const scrollRef = useRef(null);
    const handleSelect = (i) => {
        setSelectedCar(cars[i]);
        scrollRef.current.scrollIntoView();
    }

    useEffect(() => {
        const loadCars = async () => {
            const cars = await axios.get(`${API_URL}/cars`);
            setCars(cars.data);
            setSelectedCar(cars.data[0]);
        };
        loadCars();
    }, [])


    return (
        <>
            <div className="login-container">
                <section className="login-titles">
                    <h1>
                        BUGGY &<br /> BUMPER,INC
                    </h1>
                    <h2>LA MEJOR RED DE ALQUILER DE AUTOS</h2>
                </section>
                <img src={circle} alt="BuggyBumper" ></img>
            </div>
            <div className="cars">
                <h1>Alquila facilmente nuestros autos</h1>
                <section className="cars-container">
                    {cars.map(({ car_brand, car_model, number_doors, number_bags, image, scale, rental_value }, i) => (
                        <Card style={{ width: '22rem' }}>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>{`${car_brand} ${car_model}`}</Card.Title>
                                <ul className="list">
                                    <li>N° Puertas: {number_doors}</li>
                                    <li>N° Maletas: {number_bags}</li>
                                    <li>Gama: {scale}</li>
                                </ul>
                                <h5>${rental_value}</h5>
                                <Button onClick={() => { handleSelect(i) }}>Alquilar</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </section>
                <section className="commercial-info">
                    <p>Mejor Agencia de alquiler y
                        renta de carros y autos en
                        Medellín y Antioquia,
                        en todas las gamas que van desde
                        autos Económicos, Gama Baja,
                        Gama Alta, Sedan, Alquiler de
                        Camionetas, Blindados y Vans</p>
                    <img src={circle} alt="BuggyBumper" ></img>
                    <div className='redshadow'>
                    </div>
                </section>
                <section className="rent-car">
                    <h1 ref={scrollRef}>Alquilar un auto</h1>
                    <p> {`${selectedCar?.car_brand} ${selectedCar?.car_model},${selectedCar?.number_doors} Puertas,${selectedCar?.number_bags} maletas`}</p>
                    <div className="selected-car">
                        <Card style={{ width: '22rem' }}  >
                            <Card.Img variant="top" src={selectedCar?.image} />
                            <Card.Body>
                                <Card.Title>{`${selectedCar?.car_brand} ${selectedCar?.car_model}`}</Card.Title>
                                <ul className="list">
                                    <li>N° Puertas:{selectedCar?.number_doors}</li>
                                    <li>N° Maletas:{selectedCar?.number_bags} </li>
                                    <li>Gama:{selectedCar?.scale}</li>
                                </ul>
                                <h5>${selectedCar?.rental_value}</h5>
                                <Button>Alquilar</Button>
                            </Card.Body>
                        </Card>
                        <Form>
                            <Form.Group as={Row} className="mb-5">
                                <Form.Label column sm={2} size="lg">Email</Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-5" controlId="formBasicPassword">
                                <Form.Label column sm={3}>Nombre</Form.Label>
                                <Col sm={9}>
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-5" controlId="formBasicPassword">
                                <Form.Label column sm={3}>Teléfono</Form.Label>
                                <Col sm={9}>
                                    <Form.Control type="tel" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-5" controlId="formBasicPassword">
                                <Form.Label column sm={2}>Desde:</Form.Label>
                                <Col sm={4}>
                                    <Form.Control type="Date" />
                                </Col>
                                <Form.Label column sm={2}>Hasta:</Form.Label>
                                <Col sm={4}>
                                    <Form.Control type="Date" />
                                </Col>
                            </Form.Group>
                            <h5 className='total-rental'>TOTAL: $000.000</h5>

                            <div className="rent-button">
                                <Button type="submit">
                                    PAGAR
                                </Button>
                            </div>

                        </Form>
                    </div>

                </section>
            </div>
        </>
    )
}

export default Home;
