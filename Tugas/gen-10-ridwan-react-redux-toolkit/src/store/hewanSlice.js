import { createSlice } from "@reduxjs/toolkit"

const hewanSlice = createSlice({
	name: 'hewan',
	initialState: {
		nama: 'paus',
		kelas: 'mamalia'
	},
	reducers: {
		ubahNama (state, action) {
			state.nama = action.payload
		},
		ubahKelas (state, action) {
			state.kelas = action.payload
		},
		ubahKeduanya (state, action) {
			state.nama = action.payload.namaBaru,
			state.kelas = action.payload.kelasBaru
		}
	}
})

// export const ubahNama = hewaanSlice.actions.ubahNama
// export const ubahKelas = hewanSlice.actions.ubahKelas
export const { ubahNama, ubahKelas, ubahKeduanya } = hewanSlice.actions

export default hewanSlice.reducer