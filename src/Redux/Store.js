import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import { dataReducer } from "./Reducer/userReducer";
import thunk from 'redux-thunk';

const rootReducer = {
    data: dataReducer
}
const store = createStore(combineReducers(rootReducer), applyMiddleware(thunk))

export default store