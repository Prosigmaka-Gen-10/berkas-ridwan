import { createSlice } from "@reduxjs/toolkit"

const hewanSlice = createSlice({
	name: 'hewan',
	initialState: {
		nama: 'paus',
		jenis: 'mamalia'
	},
	reducers: {
		ubahNama (state, action) {
			state.nama = action.payload
		},
		ubahJenis (state, action) {
			state.jenis = action.payload
		},
		ubahKeduanya (state, action) {
			state.nama = action.payload.namaBaru,
			state.jenis = action.payload.jenisBaru
		}
	}
})

// export const ubahNama = hewaanSlice.actions.ubahNama
// export const ubahJenis = hewanSlice.actions.ubahJenis
export const { ubahNama, ubahJenis, ubahKeduanya } = hewanSlice.actions

export default hewanSlice.reducer