import axios from 'axios';

export const fetchAllPeople = () => {
    return axios.get('http://localhost:3000/people')
}

// export const updatePerson = (person) => {

// }