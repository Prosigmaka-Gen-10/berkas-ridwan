import store from "./store"
import { useSelector } from "react-redux"

export default function Merk() {
	const brand = useSelector(state => state.phone.merk)

	function handleChangeMerk() {
		store.dispatch({
			type: 'changeMerk',
			value: 'OPPO'
		})
	}

	return <>
		This page is Merk's page<br />
		and the brand of this smartphone is {brand}
		<br />
		<br />
		<button onClick={handleChangeMerk}>Change Merk</button>
	</>
}