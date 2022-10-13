import { configureStore } from "@reduxjs/toolkit"

import hewanReducer from "./hewanSlice"
/** index => tempat redux utama */
const store = configureStore({
	reducer: {
		hewan: hewanReducer
	}
})

export default store