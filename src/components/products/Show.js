import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
export default function Show() {
    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        fetch('http://localhost:3004/products/'+id)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setProduct(data)
        })
        .catch(err => console.error(err))
    })

    return <h1>{product.title}</h1>
    
}