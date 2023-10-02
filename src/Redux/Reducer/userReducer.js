import { Add_data, Edit_data, Remove_data, Set_data } from "../ActionTypes"

const initialState = {
    user: [],
    setId: ''
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case Add_data:
            return {
                ...state,
                user: [...state.user, action.payload]
            }
        case Set_data:
            return {
                ...state,
                setId: action.payload
            }
        case Remove_data:
            const updateData = state.user.filter((elem) => {
                return action.payload !== elem.id;
            })
            return {
                ...state,
                user: updateData
            }
        case Edit_data:
            const setUpdateData = state.user.map((elem) => {
                if (elem.id === state.setId) {
                    return { ...elem, name: action.payload.name, school: action.payload.school, email: action.payload.email, number: action.payload.number }
                }
                return elem
            })
            return {
                ...state,
                user: setUpdateData,
            }
        default: return state
    }
}