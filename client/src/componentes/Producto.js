import '../App.css';
import '../componentes/css/styles.css';
import tamanos from './imagenes/tamanos.png';
import CuerpoMini from './partesProducto/cuerpoMini';
import CuerpoMediano from './partesProducto/cuerpoMediano';
import CuerpoGrande from './partesProducto/cuerpoGrande';
import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import ListaProductos from './ListaProductos';
import TarjetaProducto from './TarjetaProducto';
let initialLoad = true;






function ConseguirCuerpoAMostrar(producto){
    if (!producto){
        const cargando = () => { return(<div>Cargando</div>)}
        return cargando;
    }

    const listaCuerpos = {
        Mini: () => {return (<CuerpoMini foto={producto.foto} tipo={producto.tipo}/>)},
        Mediano: () => {return (<CuerpoMediano foto={producto.foto} tipo={producto.tipo}/>)},
        Grande: () => {return (<CuerpoGrande foto={producto.foto} tipo={producto.tipo}/>)}
    }

    const cuerpoProducto = listaCuerpos[producto.tamano];
    return cuerpoProducto;
}

function Producto() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  if (initialLoad){
      let promesa = fetch(`http://localhost:5000/buscarProducto/${id}`);
      promesa.then((response)=>response.json())
      .then((responseJson)=>{
          setProducto(responseJson);
      });
      initialLoad = false;
  }

  const CuerpoAMostrar = ConseguirCuerpoAMostrar(producto);

  async function ComprarAsync(){
    
    const valorCedula = parseInt(document.getElementById('inputCedula').value) || 0;
    const valorProducto =  producto._id
    const compra = {
      identificadorUsuario: valorCedula,
      identificadorProducto: valorProducto
      
    }
    
    console.log(JSON.stringify(compra));
    const promesa = fetch('http://localhost:5000/agregarcompra',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(compra),
      
    });
    console.log(valorCedula)
    console.log(valorProducto)
    promesa.then((response)=>response.json())
    .then((responseJson)=>{
      if (responseJson){
        console.log(responseJson)
        alert('Por favor comunicarse con nosotros para efectuar la compra');
        document.getElementById('inputCedula').value = '';
        
        return;
      }
  
      alert('No se puede proceder con la compra. Por favor inicie sesion/registrese');
    });
  }
  

  return (
    <div>
        <br/> <br/>
        <h1 className="titulo1">Orquídeas Il Fiore</h1> <br/>
        
        <input type="_id" className="form-cedula" id="inputCedula" placeholder="Ingrese Cédula"></input>
        <button type="buttoncompra" className="btnCompra" onClick={ComprarAsync} >Comprar</button>

        <CuerpoAMostrar />        
    
    </div>

  );
  }

export default Producto;