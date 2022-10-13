import { useSelector, useDispatch } from "react-redux"
import { ubahKeduanya, ubahNama, ubahJenis } from "../store/hewanSlice"

export default function CompB () {
	const dispatch = useDispatch()

	const { nama, jenis } = useSelector(state => state.hewan)

	function handleUbahNama () {
		dispatch(ubahNama('kakap'))
	}

	function handleUbahJenis () {
		dispatch(ubahJenis('ikan'))
	}

	function handleUbahKeduanya () {
		dispatch(ubahKeduanya({
			namaBaru: 'merpati',
			jenisBaru: 'aves'
		}))
	}

	return <>
		I'm CompB <br />
		nama: {nama} <br />
		jenis: {jenis} <br />

		<button onClick={handleUbahNama}>
			ubah nama
		</button> |

		<button onClick={handleUbahJenis}>
			ubah jenis
		</button> | 

		<button onClick={handleUbahKeduanya}>
			ubah keduanya
		</button>
	</>
}