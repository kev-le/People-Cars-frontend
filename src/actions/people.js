import * as PeopleAPI from '../util/peopleApiUtil'

export const GET_PEOPLE_SUCCESS  = 'GET_PEOPLE_SUCCESS'
export const GET_PERSON_CREATE_SUCCESS  = 'GET_PERSON_CREATE_SUCCESS'
export const DELETE_PERSON_SUCCESS  = 'DELETE_PERSON_SUCCESS'
export const EDIT_PERSON_SUCCESS  = 'EDIT_PERSON_SUCCESS'

export const getPeople = () => {
    return dispatch => {
        PeopleAPI.fetchAllPeople().then(res => {
            dispatch({
                type: GET_PEOPLE_SUCCESS,
                payload: res
            })
        })
    }
}

export const addPerson = (person) => {
    return dispatch => {
        PeopleAPI.createPerson(person).then(res => {
            dispatch({
                type: GET_PERSON_CREATE_SUCCESS,
                payload: res
            })
        }).then(() => 
            dispatch(getPeople())
        )
    }
}

export const deletePerson = (personId) => {
    return dispatch => {
        PeopleAPI.deletePerson(personId).then(res => {
            dispatch({
                type: DELETE_PERSON_SUCCESS,
                payload: res
            })
        }).then(() => 
            dispatch(getPeople())
        )
    }
}

export const editPerson = (person) => {
    return dispatch => {
        PeopleAPI.editPerson(person).then(res => {
            dispatch({
                type: EDIT_PERSON_SUCCESS,
                payload: res
            })
        }).then(() => 
            dispatch(getPeople())
        )
    }
}