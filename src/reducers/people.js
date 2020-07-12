import { GET_PEOPLE_SUCCESS } from '../actions/people' 

const initialState = {
    peopleList : []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PEOPLE_SUCCESS:
            return {
                ...state,
                peopleList: action.payload.data
            }
        default:
            return state
    }
}
