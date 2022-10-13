import { useSelector } from "react-redux"

export default function CompC () {
	// const kelompok = useSelector(state => state.makanan.kelompok)
	// const makanans = useSelector(state => state.makanan.makanans)
	const { kelompok, makanans } = useSelector(state => state.makanan)

	return <>
		I'm CompA <br />
		kelompok: {kelompok} <br />
		makanans: {makanans} <br />
	</>
}

const makanan = {
	kelompok: 'herbivora',
	makanans: 'rumput / tumbuhan'
}

// const kelompok = makanan.kelompok
// const makanans = makanan.makanans

// const { kelompok, makanans } = makanan