import * as CarAPI from '../util/carApiUtil'
import {getPeople} from './people'

export const CREATE_CAR_SUCCESS  = 'CREATE_CAR_SUCCESS'
export const DELETE_CAR_SUCCESS  = 'DELETE_CAR_SUCCESS'
export const EDIT_CAR_SUCCESS  = 'EDIT_CAR_SUCCESS'

export const addCar = (car) => {
    return dispatch => {
        CarAPI.createCar(car).then(res => {
            dispatch({
                type: CREATE_CAR_SUCCESS,
                payload: res
            })
        }).then(() => 
            dispatch(getPeople())
        )
    }
}

export const deleteCar = (carId) => {
    return dispatch => {
        CarAPI.deleteCar(carId).then(res => {
            dispatch({
                type: DELETE_CAR_SUCCESS,
                payload: res
            })
        }).then(() => 
            dispatch(getPeople())
        )
    }
}

export const editCar = (car) => {
    return dispatch => {
        CarAPI.editCar(car).then(res => {
            dispatch({
                type: EDIT_CAR_SUCCESS,
                payload: res
            })
        }).then(() => 
            dispatch(getPeople())
        )
    }
}