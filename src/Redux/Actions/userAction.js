import { Add_data, Edit_data, Remove_data, Set_data } from "../ActionTypes"


export const addData = (val) => {
    return (dispatch) => {
        dispatch({
            type: Add_data,
            payload: val
        })
    }
}

export const delData = (val) => {
    return (dispatch) => {
        dispatch({
            type: Remove_data,
            payload: val
        })
    }
}

export const setData = (val) => {
    return (dispatch) => {
        dispatch({
            type: Set_data,
            payload: val
        })
    }
}


export const editData = (val) => {
    return (dispatch) => {
        dispatch({
            type: Edit_data,
            payload: val
        })
    }
}

