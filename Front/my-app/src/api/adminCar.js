import { API_URL } from "../Constants";
import axios from "axios";

export const addCar = async (newCar) => {
    const form = new FormData();
    form.append("car_brand",newCar.car_brand);
    form.append("car_model",newCar.car_model);
    form.append("number_doors",newCar.number_doors);
    form.append("number_bags",newCar.number_bags);
    form.append("scale",newCar.scale);
    form.append("rental_value",newCar.rental_value);
    form.append("image", newCar.image);
    form.append("file", newCar.file);
    //const body = {...newCar,}
    const endpoint = `/cars/create`;
    const response = await axios.post(`${API_URL}${endpoint}`,form);
    if (response) {
        console.log(response.data)
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

export const updateCar = async (idCar,updatedCar)=>{
    const endpoint =`/cars/update/${idCar}`;
    const response = await axios.put(`${API_URL}${endpoint}`,updatedCar);
    if (response) {
        return response.data;
    }else{
        console.log(response);
    }

}