import { createSlice } from "@reduxjs/toolkit"

const makananSlice = createSlice({
	name: 'makanans',
	initialState: {
		kelompok: 'karnivora',
		makanans: 'daging'
	},
	reducers: {
		ubahKelompok (state, action) {
			state.kelompok = action.payload
		},
		ubahMakanan (state, action) {
			state.makanans = action.payload
		},
		ubahKeduanyas (state, action) {
			state.kelompok = action.payload.kelompokBaru,
			state.makanans = action.payload.makanansBaru
		}
	}
})

// export const ubahKelompok = makananSlice.actions.ubahKelompok
// export const ubahMakanan = makananSlice.actions.ubahMakanan
export const { ubahKelompok, ubahMakanan, ubahKeduanyas } = makananSlice.actions

export default makananSlice.reducer