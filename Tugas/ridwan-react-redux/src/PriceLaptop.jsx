import store from "./store"
import { useSelector } from 'react-redux'

export default function PriceLaptop() {
	const myPriceLaptop = useSelector(state => state.laptop.price)
	let count = 0

	function handleChangePriceLaptop() {
		count = count + 1
		if(count % 2 !== 0){
			store.dispatch({
				type: 'changePriceLaptop',
				value: "10.000.000"
			})
		}else{
			store.dispatch({
				type: 'changePriceLaptop',
				value: "7.000.000"
			})
		}
	}

	return <>
		This page is Laptop Price Page <br />
		The price of this laptop is Rp. {myPriceLaptop},-
		<br />
		<br />
		<button onClick={handleChangePriceLaptop}>Change Price</button>
	</>
}