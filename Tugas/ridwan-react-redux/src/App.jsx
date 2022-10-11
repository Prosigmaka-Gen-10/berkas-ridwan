import store from "./store"

import Merk from "./Merk"
import Price from "./Price"

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

  </>
}