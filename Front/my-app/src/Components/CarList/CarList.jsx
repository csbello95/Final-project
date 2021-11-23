import axios from "axios";
import React,{ useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../../Constants";
import NewCar from "../NewCar";
import DeleteCar from "../DeleteCar";
import "./Carlist.scss";



const CarList = ({authorized, user }) => {
    const [cars, setCars] = useState([]);
    const [showAdd, setShowAdd] = useState(false);
    const [showDelete, setShowDelete] = useState([false,""]);
    const navigate = useNavigate();
    
      useEffect(() => {
            if (!authorized) {
                navigate("/");
            }else{
                const loadCars = async () => {
                //const data = await(await fetch(`${API_URL}/cars`)).json();
                const cars = (await axios.get(`${API_URL}/cars`));  
                setCars(cars.data);
            }
            loadCars();
          };
          
      }, [authorized,navigate]);

      const handleModalAdd = () => {
        setShowAdd(true);
      }

    const handleModalDelete = (event) => {
        const idCar = event.target.value;
        setShowDelete([true, idCar]);
    }

    
    return (
        <div className="card-list-container">
            <header className="car-list-header">
                <h1>BUGGY & BUMPER, INC </h1>
                <span>Usuario:{user}</span>
            </header>
            <div className="list-car-title">
                <span className="list-new">Lista de carros</span>
                <button onClick={handleModalAdd}>Nuevo</button>
            </div>
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Marca</th>
                            <th>Puertas</th>
                            <th>Maletas</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars?.map((item, i) => (

                            <tr key={i}>
                                <td>{item._id}</td>
                                <td>{item.car_brand}</td>
                                <td>{item.number_doors}</td>
                                <td>{item.number_bags}</td>
                                <td>
                                    <button value={item._id}>Editar</button>
                                    <button value={item._id} onClick={handleModalDelete}>Eliminar</button>
                                </td>
                            </tr>
                        ))}
                        {/* <tr>
                        <td>xxxxxx</td>
                        <td>xxxxxx</td>
                        <td>xxxxxx</td>
                        <td>xxxxxx</td>
                        <td>
                       <button>Editar</button>
                       <button>Eliminar</button> 
                        </td>
                    </tr>
                    <tr>
                        <td>xxxxxx</td>
                        <td>xxxxxx</td>
                        <td>xxxxxx</td>
                        <td>xxxxxx</td>
                        <td>
                       <button>Editar</button>
                       <button>Eliminar</button> 
                        </td>
                    </tr> */}
                    </tbody>
                </table>
            </section>
            <NewCar show={showAdd} setShow={setShowAdd} setCars={setCars}/>
            <DeleteCar show={showDelete} setShow={setShowDelete} setCars={setCars} />
            </div>
    )
}

export default CarList;