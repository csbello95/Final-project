import { API_URL } from "../Constants";
import axios from "axios";

export const addCar = async (newCar) => {
    const endpoint = `/cars/create`;
    const response = await axios.post(`${API_URL}${endpoint}`,newCar);
    if (response) {
        return response.data;
    }else{
        console.log(response);
    }
}

export const deleteCar = async (idCar) => {
    const endpoint = `/cars/delete/${idCar}`;
    const response = await axios.delete(`${API_URL}${endpoint}`);
    if (response) {
        return response.data;
    }else{
        console.log(response);
    }
}