import axios from 'axios';

export const fetchAllPeople = () => {
    return axios.get('http://localhost:3000/people')
}

export const createPerson = (person) => {
    return axios.post('http://localhost:3000/people', person)
}

export const deletePerson = (personId) => {
    return axios.delete('http://localhost:3000/people/' + personId)
}

export const editPerson = (person) => {
    return axios.patch('http://localhost:3000/people/' + person.id, person)
}