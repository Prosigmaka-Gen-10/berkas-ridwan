import { configureStore } from "@reduxjs/toolkit"

import hewanReducer from "./hewanSlice"
import makananReducer from "./makananSlice"

/** index => tempat redux utama */
const store = configureStore({
	reducer: {
		hewan: hewanReducer,
		makanan : makananReducer
	}
})

export default store