import React from 'react';
import { Button, Modal, Form, Row,Col } from "react-bootstrap";
import { addCar } from '../../api/adminCar';
import './NewCar.scss'

const NewCar = ({show, setShow, setCars}) => {
    const handleClose = () => setShow(false);

    const handleAddCar = async (event) => {
        event.preventDefault();
        const newCar = {
            car_brand: event.target[0].value,
            car_model: event.target[1].value,
            number_doors: parseInt(event.target[2].value),
            number_bags: parseInt(event.target[3].value),
            image: event.target[4].value,
            scale: event.target[5].value,
            rental_value: parseInt(event.target[6].value),
        }
        const car = await addCar(newCar);
        setCars(prevState =>[...prevState,car]);
        handleClose();
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} size='xl' centered>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo Carro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleAddCar}>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={6} size="lg">Marca</Form.Label>
                            <Col sm={6}> 
                            <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                            <Form.Label column sm={6}>Modelo</Form.Label>
                            <Col sm={6}>
                            <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                            <Form.Label column sm={6}>Número Puertas</Form.Label>
                            <Col sm={6}>
                            <Form.Control type="number" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                            <Form.Label column sm={6} >Número Maletas</Form.Label>
                            <Col sm={6}>
                            <Form.Control type="number" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                            <Form.Label column sm={6}>Imagen</Form.Label>
                            <Col sm={6}>
                            <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                            <Form.Label column sm={6}>Gama</Form.Label>
                            <Col sm={6}>
                            <Form.Control type="text" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                            <Form.Label column sm={6}>Valor alquiler</Form.Label>
                            <Col sm={6}>
                            <Form.Control type="number" />
                            </Col>
                        </Form.Group>

                        <Modal.Footer>
                    <Button variant="primary" type="submit">
                        Save Changes
                    </Button>
                </Modal.Footer>
                </Form>
                </Modal.Body>
                
            </Modal>
        </>
    )
}

export default NewCar;

