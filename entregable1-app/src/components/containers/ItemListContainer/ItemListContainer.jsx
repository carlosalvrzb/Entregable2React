import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../../helpers/gFetch'
import ItemList from '../../ItemList/ItemList'

// acciones  api -> resultado (asincrónico)

const ItemListContainer = ( { saludo = 'saludo por defecto' } ) => { 
    const [ products, setProduct ] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    console.log(id)
    
    useEffect(()=>{
        if (id) {
            gFetch()// consulta a un api pero solo simulación 
            // .then( respuesta => respuesta )
            .then(data => setProduct(data.filter(prod => prod.categoria === id)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }else{
            gFetch()// consulta a un api pero solo simulación 
            // .then( respuesta => respuesta )
            .then(data => setProduct(data))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
        
    }, [id])
    
    // console.log(products)
    return (
        <section >
        
            {   loading ? 
                    <h2>loading...</h2> 
                :
                    <ItemList products={products}/>
            }            
        
        </section>
    )
}

export default ItemListContainer
