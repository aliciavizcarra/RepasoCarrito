import { useEffect, useState } from "react";
import ArticulosDisponibles from "./components/ArticulosDisponibles";
import { URL_SERVER } from "./constantes";
import Cesta from "./components/Cesta";
import BarraBusaqueda from "./components/BarraBusqueda";

function App() {
  
  const [articulosCesta, setArticulosCesta] = useState([]);
  const [filterText, setFilterText]= useState("");
  const [articulosDisponibles, setArticulosDisponibles]= useState([]);
  const [actualizarArticulos,setActualizarArticulos] = useState(true)

  useEffect(()=>{
    fetch(URL_SERVER+`articulos?nombre_like=${filterText}&unidades_gt=0&_sort=nombre&_order=asc`)
    .then((response)=>{
      if(response.ok){
        return response.json()
      }
    })
    .then((data)=>{
      setArticulosDisponibles(data)
    })
    .catch((error)=>{
      console.log(error)
      setActualizarArticulos(false)
    })
  },[filterText,articulosCesta,actualizarArticulos])

  

  return (
    <>
      <BarraBusaqueda filterText={filterText} setFilterText={setFilterText}/>
      <Cesta articulosCesta={articulosCesta} setArticulosCesta={setArticulosCesta}/>
      <ArticulosDisponibles articulosDisponibles={articulosDisponibles} setActualizarArticulos={setActualizarArticulos} setArticulosCesta={setArticulosCesta}/>
    </>
  )
}

export default App
