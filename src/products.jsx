import { useEffect, useState } from "react"

function products(){
    let[products,setProducts]=useState([])
    
    useEffect(()=>{

        fetch('https://fakestoreapi.com/products')
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);
           setProducts(data);
        })
        .catch((err)=>{
            console.log(err);
        })

    })
    
    
    return(
        <div className="products">
       {
        products.map((product)=>{
            return(
                <div className="product" key={product.id}>
                     <div className="image-wrapper">
                        <img className="p-image" src={product.image} alt="img" />
                    </div> 
                    <h1 className="p-title">{product.title}</h1>
                    <h3>Rs.{product.price*81}</h3>
                </div>
            )
        })
       }
        </div>
    )
}
export default products;