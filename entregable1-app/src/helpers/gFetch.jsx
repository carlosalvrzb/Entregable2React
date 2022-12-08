let obj = [
    {id: '1', name: 'Producto 1', categoria: 'gorras', stock: '100', price: '1500', foto: 'https://img.ltwebstatic.com/images3_pi/2022/01/07/16415525639237fa228ce2c43e0a980ecf657bd8ee_thumbnail_900x.webp'},
    {id: '2', name: 'Producto 2', categoria: 'gorras', stock: '100', price: '1500', foto: 'https://img.ltwebstatic.com/images3_pi/2021/08/31/16303411089d4e3013a266790258f64456ffae143a_thumbnail_900x.webp'},
    {id: '3', name: 'Producto 3', categoria: 'gorras', stock: '100', price: '1500', foto: 'https://img.ltwebstatic.com/images3_pi/2022/03/11/164697805395f0216847f63bd83c463e9ad16d79c0.webp'},
    {id: '4', name: 'Producto 4', categoria: 'aletas', stock: '100', price: '1500', foto: 'https://cdn.shopify.com/s/files/1/0297/6573/0409/products/74689_620x.jpg?v=1601092854'},
    {id: '5', name: 'Producto 5', categoria: 'aletas', stock: '100', price: '1500', foto: 'https://cdn.shopify.com/s/files/1/0297/6573/0409/products/75523_620x.jpg?v=1601092863'}
]
export const gFetch = (id) => {
    return new Promise( (resolve, reject) =>{

        const condition = true
        if (condition){
            setTimeout(()=>{
                resolve(obj )
            }, 1000)
        } else{
            reject('olvidate de tu cash')
        }
    })
}