import store from "./store"

import Merk from "./Merk"
import Price from "./Price"
import MerkLaptop from "./MerkLaptop"
import PriceLaptop from "./PriceLaptop"

export default function App() {
  function showStore() {
    console.log(store.getState())
  }

  return <>
    <h1>Ridwan's React-Redux</h1>
    <button onClick={showStore}>Show My Store</button> 

    <br /><hr /><br />

    <Merk />

    <br /><hr /><br />

    <Price />

    <br /><hr /><br />

    <MerkLaptop />
    
    <br /><hr /><br />

    <PriceLaptop />

  </>
}