
import { useState } from 'react'

import './App.css'
import Products from './products'

function App() {
  let [showProduct,setShowProduct]=useState(true)
return(
  <>
    {/* <h1>All products</h1>
    <button onClick={()=>{setShowProduct(true)}}>show</button>
    <button onClick={()=>{setShowProduct(false)}}>hide</button> */}
    {
      showProduct===true?
      (
        <Products/>
      ):(
        <h1>product not available</h1>
      )
    }
    </>
  )  

}


export default App
