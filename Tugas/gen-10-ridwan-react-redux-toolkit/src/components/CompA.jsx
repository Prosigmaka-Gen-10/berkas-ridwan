import { useSelector } from "react-redux"

export default function CompA () {
	// const nama = useSelector(state => state.hewan.nama)
	// const jenis = useSelector(state => state.hewan.jenis)
	const { nama, jenis } = useSelector(state => state.hewan)

	return <>
		I'm CompA <br />
		nama: {nama} <br />
		jenis: {jenis} <br />
	</>
}

const hewan = {
	nama: 'paus',
	jenis: 'mamalia'
}

// const nama = hewan.nama
// const jenis = hewan.jenis

// const { nama, jenis } = hewan