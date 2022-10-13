import { useSelector, useDispatch } from "react-redux"
import { ubahKeduanyas, ubahKelompok, ubahMakanans } from "../store/makananSlice"

export default function CompD () {
	const dispatch = useDispatch()

	const { kelompok, makanans } = useSelector(state => state.makanan)

	function handleUbahKelompok () {
		dispatch(ubahKelompok('omnivora'))
	}

	function handleUbahMakanans () {
		dispatch(ubahMakanans('semua jenis makanan'))
	}

	function handleUbahKeduanyas () {
		dispatch(ubahKeduanyas({
			kelompokBaru: 'tidak terdefinisi',
			makanansBaru: 'tidak terdefinisi'
		}))
	}

	return <>
		I'm CompD <br />
		kelompok: {kelompok} <br />
		makanans: {makanans} <br />

		<button onClick={handleUbahKelompok}>
			ubah kelompok
		</button> |

		<button onClick={handleUbahMakanans}>
			ubah makanan
		</button> | 

		<button onClick={handleUbahKeduanyas}>
			ubah keduanya
		</button>
	</>
}