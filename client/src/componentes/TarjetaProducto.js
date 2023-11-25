import React, { useState, useEffect } from 'react';
const { useNavigate } = require('react-router-dom');

function TarjetaProducto(props) {
    const navigate = useNavigate();
    const [idPagina, setIdPagina] = useState('');
    const clickButton = function(){
        setIdPagina(props.id);
    }
    useEffect(() =>
    {
        if (idPagina){
            navigate(`/producto/${idPagina}`);
        }
    });
    const descripcion = `${props.tamano} - ₡${props.precio}`;
    const fotoProducto = `http://localhost:5000/imagen/${props.foto}`;
    const titulos = {
        Regular: "Regular",
        Coleccion: "de Colección",
    }
    return (
        <div className="col">
            <div className="card shadow-sm">
                <div className="card-image-container text-center">
                    <div>
                        <img title='Titulo' alt='Foto' src={fotoProducto} height="300" width="300" className="card-image lazyload " fill="#55595c"/>
                    </div>
                </div>
                <div className="card-body">
                    <h3>Orquidea {titulos[props.tipo]}</h3>
                    <p className="card-text">{descripcion}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <button type="button" className="btn btn-primary" onClick={clickButton}>
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TarjetaProducto;