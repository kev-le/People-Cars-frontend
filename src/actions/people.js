import * as PeopleAPI from '../util/peopleApiUtil'

export const GET_PEOPLE_SUCCESS  = 'GET_PEOPLE_SUCCESS'

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