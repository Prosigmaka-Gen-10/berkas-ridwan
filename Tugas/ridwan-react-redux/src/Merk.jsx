import store from "./store"
import { useSelector } from "react-redux"

export default function Merk() {
	const brand = useSelector(state => state.phone.merk)
	let count = 0

	function handleChangeMerk() {
		count = count + 1
		if (count % 2 !== 0) {
			store.dispatch({
				type: 'changeMerk',
				value: 'OPPO'
			})
		} else {
			store.dispatch({
				type: 'changeMerk',
				value: 'SAMSUNG'
			})
		}
		
	}

	return <>
		This page is Merk's page<br />
		and the brand of this smartphone is {brand}
		<br />
		<br />
		<button onClick={handleChangeMerk}>Change Merk</button>
	</>
}