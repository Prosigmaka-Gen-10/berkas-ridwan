import { combineReducers, createStore } from "redux"

import phoneReducer from "./phoneReducer"

const rootReducer = combineReducers({
	phone: phoneReducer
})

const store = createStore(rootReducer)

export default store