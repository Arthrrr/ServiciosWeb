import '../App.css';
import TarjetaProducto from './TarjetaProducto';
import React, { useState } from 'react';
let initialLoad = true;

function ListaProductos() {
    const [productos, setProductos] = useState([]);
    if (initialLoad){
        const promesa = fetch('http://localhost:5000/conseguirProductos');
        promesa.then((response)=>response.json())
        .then((responseJson)=>{
            setProductos(JSON.parse(responseJson));
        });
        initialLoad = false;
    }

    return (
        <div>
            <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">Productos actuales</h1>
                        </div>
                    </div>
                </section>
                <div className="album py-5 bg-light">
                    <div className="container">           
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {productos.map((producto, i) => {  
                                return (<TarjetaProducto key={i} tipo={producto.tipo} tamano={producto.tamano} precio={producto.precio} foto={producto.foto} id={producto._id}/>) 
                                })}
                        </div>
                    </div>
                </div>
        </div>
    );     
}

export default ListaProductos;