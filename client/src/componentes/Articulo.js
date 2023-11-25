import '../App.css';
import '../componentes/css/styles.css';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
let initialLoad = true;

function Articulo() {
  const { id } = useParams();
  const [articulo, setArticulo] = useState(null);
  if (initialLoad){
      let promesa = fetch(`http://localhost:5000/buscarArticulo/${id}`);
      promesa.then((response)=>response.json())
      .then((responseJson)=>{
          setArticulo(responseJson);
      });
      initialLoad = false;
  }


  if (!articulo){
    const cargando = () => { return(<div>Cargando</div>)}
    return cargando;
  }

  return (
    <div>
        <br/> <br/>
        <h1 className="titulo1">{articulo.nombreArticulo}</h1> <br/>
        <p  className='contenido'>{articulo.contenido}</p>
        
        
    </div>
  );
}


/*_id: request.body._id,
        nombreArticulo: request.body.nombreArticulo,
        contenido:request.body.contenido,
        foto:[request.body.foto],
        autor:request.body.autor,
        referencias:request.body.referencias*/

export default Articulo;