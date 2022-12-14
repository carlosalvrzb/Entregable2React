import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../../helpers/gFetch"
import ItemDetail from "../../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const { productId } = useParams()
    // console.log(productId)

    useEffect(() => {
        gFetch()
        .then(respProd => setProduct(respProd.find(prod => prod.id === productId)))
        .catch(err => console.log(err))
    })

    

    return(
        <ItemDetail product={product} />
    )

}

export default ItemDetailContainer