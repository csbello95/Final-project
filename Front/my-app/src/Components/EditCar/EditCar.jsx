import React from 'react'
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { updateCar } from "../../api/adminCar";

const EditCar = ({ editModal, setEditModal, setCars, car }) => {
    const { showModal, carId, pos } = editModal;

    const handleClose = () => {
        setEditModal({
            showModal: false,
            carId: undefined,
            pos: undefined,
        });
    }

    const handleEditCar = async (event) => {
        event.preventDefault();
        const updatedCar = {
            car_brand: event.target[0].value,
            car_model: event.target[1].value,
            number_doors: parseInt(event.target[2].value),
            number_bags: parseInt(event.target[3].value),
            image: event.target[4].value,
            scale: event.target[5].value,
            rental_value: parseInt(event.target[6].value),
        };
        const finalCar = await updateCar(carId, updatedCar);
        finalCar._id = carId;
        setCars((prevState) => {
            const newCarList = [...prevState];
            newCarList[pos] = finalCar;
            return newCarList;
        });
        handleClose();
    };

    return (
        <>
            <Modal show={showModal} onHide={handleClose} size='lg' centered>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Carro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleEditCar}>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={6} size="lg">Marca</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" defaultValue={car?.car_brand} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                            <Form.Label column sm={6}>Modelo</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" defaultValue={car?.car_model} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                            <Form.Label column sm={6}>Número Puertas</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="number" defaultValue={car?.number_doors} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                            <Form.Label column sm={6} >Número Maletas</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="number" defaultValue={car?.number_bags} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                            <Form.Label column sm={6}>Imagen</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" defaultValue={car?.image} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                            <Form.Label column sm={6}>Gama</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="text" defaultValue={car?.scale} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                            <Form.Label column sm={6}>Valor alquiler</Form.Label>
                            <Col sm={6}>
                                <Form.Control type="number" defaultValue={car?.rental_value} />
                            </Col>
                        </Form.Group>

                        <Modal.Footer>
                            <Button type="submit">
                                Editar
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default EditCar;
