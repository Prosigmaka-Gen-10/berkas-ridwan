import { useSelector } from "react-redux"

export default function CompA () {
	// const nama = useSelector(state => state.hewan.nama)
	// const kelas = useSelector(state => state.hewan.class)
	const { nama, kelas } = useSelector(state => state.hewan)

	return <>
		I'm CompA <br />
		nama: {nama} <br />
		class: {kelas} <br />
	</>
}

const hewan = {
	nama: 'paus',
	kelas: 'mamalia'
}

// const nama = hewan.nama
// const kelas = hewan.kelas

// const { nama, kelas } = hewan