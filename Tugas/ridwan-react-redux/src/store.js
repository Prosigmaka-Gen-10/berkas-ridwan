import { combineReducers, createStore } from "redux"

import phoneReducer from "./phoneReducer"
import laptopReducer from "./laptopReducer"

const rootReducer = combineReducers({
	phone: phoneReducer
	,laptop: laptopReducer
})

const store = createStore(rootReducer)

export default store