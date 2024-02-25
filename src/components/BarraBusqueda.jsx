export default function BarraBusaqueda({filterText, setFilterText}){

    return(
        <input type="text" placeholder="Buscar Articulo" value={filterText} onChange={(e)=> setFilterText(e.target.value)}></input>
    )

}