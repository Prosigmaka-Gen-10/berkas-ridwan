import store from "./store"
import { useSelector } from "react-redux"

export default function MerkLaptop() {
	const laptopBrand = useSelector(state => state.laptop.merk)
	let count = 0

	function handleChangeMerkLaptop() {
		count = count + 1
		if (count % 2 !== 0) {
			store.dispatch({
				type: 'changeMerkLaptop',
				value: 'LENOVO'
			})
		} else {
			store.dispatch({
				type: 'changeMerkLaptop',
				value: 'THINKPAD'
			})
		}
		
	}

	return <>
		This page is Merk Laptop page<br />
		and the brand of this laptop is {laptopBrand}
		<br />
		<br />
		<button onClick={handleChangeMerkLaptop}>Change Merk</button>
	</>
}