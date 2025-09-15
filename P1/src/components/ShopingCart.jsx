
import { useState } from 'react'
const ShopingCart = () => {
    const [items , setItems] = useState([])
    const [name , setName] = useState('')
    const [quantity , setQuantity] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!name || !quantity) return;

        const newItem = {
            name , 
            quantity : parseInt(quantity)
        }
        setItems((previus) => [...previus , newItem])
        setName('')
        setQuantity('')
    }
  return (
    <div>

        <form onSubmit={handleSubmit}>
        <input 
        type="text"  
        value={name} 
        placeholder='Name'
        onChange={(e)=> setName(e.target.value)}/>

        <input 
        type="text" 
        value={quantity}
        placeholder='quantity'
        onChange={(e)=> setQuantity(e.target.value)}
         />

         <button type='submit'>add</button>
        </form>

        <ul>
            {items.map((product , i)=>(
                <li key={i}>{product.name} quantity : {product.quantity}</li>
            ))}
        </ul>
    </div>
  )
}

export default ShopingCart