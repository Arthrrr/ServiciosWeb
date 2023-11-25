import '../App.css';

import React, { useState } from 'react';
import TarjetaArticulo from './TarjetaArticulo';
let initialLoad = true;

function ListaArticulos() {
    const [articulos, setArticulos] = useState([]);
    if (initialLoad){
        const promesa = fetch('http://localhost:5000/conseguirArticulos');
        promesa.then((response)=>response.json())
        .then((responseJson)=>{
            setArticulos(JSON.parse(responseJson));
        });
        initialLoad = false;
    }

    return (
        <div>
            <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">Articulos actuales</h1>
                        </div>
                    </div>
                </section>
                <div className="album py-5 bg-light">
                    <div className="container">           
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {articulos.map((articulo, i) => {  
                                return (<TarjetaArticulo key={i} articulo={articulo} />) 
                                })}
                        </div>
                    </div>
                </div>
        </div>
    );     
}

export default ListaArticulos;