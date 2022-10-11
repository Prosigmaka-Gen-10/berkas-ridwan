export const initialStateLaptop = {
	merk: 'THINKPAD',
	price: "7.000.000"
}

export default function laptopReducer(state = initialStateLaptop, action) {
	switch (action.type) {
		case 'changeMerkLaptop':
			return { ...state, merk: action.value }
		case 'changePriceLaptop':
			return { ...state, price: action.value }
		default:
			return state
	}

}
