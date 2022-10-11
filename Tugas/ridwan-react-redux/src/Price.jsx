import store from "./store"
import { useSelector } from 'react-redux'

export default function Price() {
	const myPrice = useSelector(state => state.phone.price)

	function handleChangePrice() {
		store.dispatch({
			type: 'changePrice',
			value: 700000
		})
	}

	return <>
		This page is Price's Page <br />
		The price of this phone is Rp. {myPrice},-
		<br />
		<br />
		<button onClick={handleChangePrice}>Change Price</button>
	</>
}