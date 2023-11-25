
function CuerpoMediano(props){
    const rutaImagen = `http://localhost:5000/imagen/${props.foto}`;
    const etiquetaTipo = {
        Regular: "regular",
        Coleccion: "de colección",
    }

    const tituloAMostrar = `Orquídea phalaenopsis ${etiquetaTipo[props.tipo]} mediana`;
    return (
        <div>            
            <h2 className="titulo1">{tituloAMostrar}</h2>  <br/> <br/>
            <div>
                <img src={rutaImagen} alt="start" height="100%" width="600"/> <br/> <br/>

                La orquídea Phalaenopsis mediana, tiene un tamaño intermedio entre la mini y la grande.  <br/> <br/>
                
                <h3 className="titulo1"> Características:</h3>  

                <ol className="texto">
                <li> Su altura minima es de aproximadamente 30 cm.</li> 
                <li> Puede tener de 1 a 2 espigas florales</li>
                <li> Tiene una cantidad de flores igual o mayor a 10.</li>
                <li> Vasijas incluidas:</li>
                    <ol className="texto">
                        <li> Vasija donde viene sembrada la orquidea: Vasija de plástico
                            transparente de aproximadamente 9 cm de diámetro</li>
                        <li> Vasija decorativa: Vasija de plástico (colores según inventario).</li>
                    </ol>
                </ol> 
            </div> <br/> <br/> <hr/> <br/> <br/>
        </div>
    )
}

export default CuerpoMediano;