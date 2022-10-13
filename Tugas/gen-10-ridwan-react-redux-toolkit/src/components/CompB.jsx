import { useSelector, useDispatch } from "react-redux"
import { ubahKeduanya, ubahNama, ubahKelas } from "../store/hewanSlice"

export default function CompB () {
	const dispatch = useDispatch()

	const { nama, kelas } = useSelector(state => state.hewan)

	function handleUbahNama () {
		dispatch(ubahNama('kakap'))
	}

	function handleUbahKelas () {
		dispatch(ubahKelas('ikan'))
	}

	function handleUbahKeduanya () {
		dispatch(ubahKeduanya({
			namaBaru: 'merpati',
			kelasBaru: 'aves'
		}))
	}

	return <>
		I'm CompB <br />
		nama: {nama} <br />
		kelas: {kelas} <br />

		<button onClick={handleUbahNama}>
			ubah nama
		</button> |

		<button onClick={handleUbahKelas}>
			ubah kelas
		</button> | 

		<button onClick={handleUbahKeduanya}>
			ubah keduanya
		</button>
	</>
}