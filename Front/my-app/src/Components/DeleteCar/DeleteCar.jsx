import React from 'react'
import { Button, Modal } from "react-bootstrap";
import { deleteCar } from '../../api/adminCar';
import "./DeleteCar.scss";



const DeleteCar = ({ show, setShow, setCars }) => {
    const handleClose = () => setShow([false,""]);

    const handleDeleteCar = async (event) => {
        event.preventDefault();
        const idCar = show[1];
        const deletedCar = await deleteCar(idCar);
        console.log(deletedCar);
    
        setCars((prevState) => {
            const newElements = [...prevState];
            newElements.splice(deleteCar, 1);
            return newElements;
          });
        
        handleClose();
    };

    

    return (
        <>
            <Modal show={show[0]} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar Carro</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <p>Esta Seguro que desea eliminar el carro ID {show[1]}?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleDeleteCar}>Eliminar</Button>
                </Modal.Footer>

            </Modal>
        </>
    )
}

export default DeleteCar;
