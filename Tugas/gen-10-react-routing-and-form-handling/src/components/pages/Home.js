import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
	const navigate = useNavigate();
	return (
		<div>
			<h1>
				TAMPILAN UTAMA
			</h1>
			<br/>
			<button onClick={() => navigate("Pilih")}>
				TAMBAH BARANG
			</button>
		</div>
	);
};

export default Home;