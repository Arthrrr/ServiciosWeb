import "../componentes/css/styleBlog.css";
import blog1 from "./imagenes/blog1.jpg";
import blog2 from "./imagenes/blog2.jpg";

function Home() {
  return (
    <div>
      <title>Blog</title>

      <div>

        <img className="img1" alt="ImgBlog2" src={blog1} width="60%" />
        <h1 className="txt1"> El origen de las orquídeas</h1>

      </div>
      
      <div>
        <h1 className="txt3">Primera persona en hablar de orquídeas</h1>
        <p className="p1">
        El filósofo griego Theophrastus (300 años a.C.) es reconocido por muchos como el primer botánico por su manuscrito "Indagaciones sobre las Plantas",
        en el que describe algunas orquídeas del Mediterráneo y les da el nombre genérico de Orchis (en griego) que significa testículo.
        </p>
      </div>

        <div className="cont">

          <div >
            <img className="img2" alt="imgBlog2" src={blog2}  />
          </div>

          <div >
            <p className="p2">
              <h1 className="txt3"> Datos interesantes...</h1>
              El nombre procede del griego phalaina, “mariposa” y opsis, “parecido”, debido a que 
              recuerdan a mariposas en vuelo. Por ello se las llama “orquídeas mariposa”.
              Este género se encuentra entre las orquídeas más populares para su cultivo doméstico 
              debido a su facilidad de propagación y floración. Son plantas cuya floración es lateral,
              por lo general vistosa y de larga duración.

           </p>
          </div>
        </div>
        
        <h3 className="txt3">Cuidados a tomar en cuenta:</h3> <br/>

        <ol className="texto">
          <li>Iluminación: Debe estar ubicada en un lugar con luz indirecta. Nunca se debe de colocar en un 
            ambiente sin techo o cerca de una ventana ya que el sol directo podría quemar las hojas.</li> <br/>
          <li>Ventilación: Debe estar ubicada en un ambiente ventilado pero sin corrientes fuertes de aire, ya que podría
            favorecer la aparición de hongos y otras enfermedades en la planta.</li><br/>
          <li>Riego: Se puede utlizar la técnica de riego "por inmersón".</li>
              <ol className="texto">
                <li>Verano: Se aconseja regar 1 vez a la semana.</li>
                <li>Inviero: Se aconseja regar 1 vez cada dos semanas.</li>
              </ol><br/>
          <li>Drenaje: Después del riego, se aconseja dejar la planta drenando hasta que elimine todo el exceso de agua. Este paso es 
              muy importante para evitar que las raíces se pudran y la planta muera. Es fundamental no dejar charcos de agua en el porta maceta decorativo.</li><br/>
          <li>Abono: Se aconseja abonar una ves al mes con fertilizante especial para orquídeas.</li>
        </ol> <br/> <br/>
        
      
    </div>
  );
}

export default Home;
