import { URL_SERVER } from "../constantes"

export default function ArticulosDisponibles({articulosDisponibles,setActualizarArticulos, setArticulosCesta}){

    const agregarAlCarrito = (articulo)=>{
        fetch(URL_SERVER+`articulos/${articulo.id}`)
        .then((response)=>{
            if(response.ok){
                return response.json()
            }
        })
        .then((data)=>{
            if(data.unidades>0){
                setArticulosCesta((articulosCesta)=>{
                    const articuloEnCesta = articulosCesta.find((art)=>{art.id === articulo.id})
                    if(articuloEnCesta){
                        return articulosCesta.map((art)=>{
                            if(art.id === articulo.id){
                                return {...art, unidades: art.unidades + 1}
                            }
                            return art;
                        })
                    }

                    return [...articulosCesta,{...articulo, unidades: 1}]
                    
                })

                fetch(URL_SERVER+`articulos/${articulo.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({unidades: data.unidades -1})
                })
                .then((response)=>{
                    if(response.ok){
                        setActualizarArticulos(true)
                    }
                })
            }else{
                alert("No hay articulos disponibles ")
            }
        })
    }


    return(
        <>
            <h1>Articulos Disponibles</h1>
            <table>

                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Stock</th>
                    </tr>
                </thead>

                <tbody>
                    {articulosDisponibles.map(articulo =>(
                         <tr key={articulo.id}>
                         <td>{articulo.nombre}</td>
                         <td>{articulo.precio}</td>
                         <td>{articulo.unidades}</td>
                         <td><button onClick={()=> agregarAlCarrito(articulo)}>Añadir al carrito</button></td>
                     </tr>
                    ))}
                </tbody>

            </table>
        </>
    )
}