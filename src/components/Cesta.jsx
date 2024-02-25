export default function Cesta({articulosCesta,setArticulosCesta}){

    return(
        <>
            <h1>Cesta</h1>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Unidades</th>
                    </tr>
                </thead>

                <tbody>
                    {articulosCesta.map((articulo)=>{
                        <tr key={articulo.id}>
                            <td>{articulo.nombre}</td>
                            <td>{articulo.precio}</td>
                            <td>{articulo.unidades}</td>
                        </tr>
                    })}
                </tbody>
        </>
    )
}