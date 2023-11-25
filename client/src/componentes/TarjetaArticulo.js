import React, { useState, useEffect } from 'react';
const { useNavigate } = require('react-router-dom');

function TarjetaArticulo(props) {
    const navigate = useNavigate();
    const [idPagina, setIdPagina] = useState('');
    const clickButton = function(){
        setIdPagina(props.articulo._id);
    }
    useEffect(() =>
    {
        if (idPagina){
            navigate(`/blog/${idPagina}`);
        }
    });
    const autor = props.articulo.autor;
    //const fotoArticulo = `http://localhost:5000/imagen/${props.articulo.foto}`;
   
    return (
        <div className="col">
            <div className="card shadow-sm">
              
                <div className="card-body">
                    <h3>{props.articulo.nombreArticulo}</h3>
                    <p className="card-text">{autor}</p>
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

export default TarjetaArticulo;