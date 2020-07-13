import axios from 'axios';

export const createCar = (car) => {
    return axios.post('http://localhost:3000/cars', car)
}

export const deleteCar = (carId) => {
    return axios.delete('http://localhost:3000/cars/' + carId)
}

export const editCar = (car) => {
    return axios.patch('http://localhost:3000/cars/' + car.id, car)
}