import store from "./store"
import { useSelector } from 'react-redux'

export default function Price() {
	const myPrice = useSelector(state => state.phone.price)
	let count = 0

	function handleChangePrice() {
		count = count + 1
		if(count % 2 !== 0){
			store.dispatch({
				type: 'changePrice',
				value: "700.000"
			})
		}else{
			store.dispatch({
				type: 'changePrice',
				value: "1.000.000"
			})
		}
	}

	return <>
		This page is Price's Page <br />
		The price of this phone is Rp. {myPrice},-
		<br />
		<br />
		<button onClick={handleChangePrice}>Change Price</button>
	</>
}