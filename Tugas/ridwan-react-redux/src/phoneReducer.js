export const initialState = {
	merk: 'SAMSUNG',
	price: "1.000.000"
}

export default function phoneReducer(state = initialState, action) {
	switch (action.type) {
		case 'changeMerk':
			return { ...state, merk: action.value }
		case 'changePrice':
			return { ...state, price: action.value }
		default:
			return state
	}

}
