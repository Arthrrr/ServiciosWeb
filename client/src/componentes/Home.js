import '../App.css';
import '../componentes/css/styles.css';




function Home() {
  return (
    <div>
      <title>Home</title>


      <h1 className="titulo1">Bienvenid@ a Il Fiore</h1>

      <p className="p1">
      Il fiore es una empresa familiar, ubicada en chirraca de acosta.
      Como empresa nos enfocamos en brindar el mejor servicio en la venta de orquídeas de la variedad phalaenopsis.<br/>
      Trabajamos con plantas de la más alta calidad, en nuestro vivero tenemos phalaenopsis de diferentes tamaños, diseños y colores.
      Además, vendemos al detalle y al por mayor.<br/>
      Estamos para servirles...!!!<br/> <br/>
      </p>


        <div >
          <h1 className="titulo1"> Nuestros servicios </h1>
          <p className="p">
            <li>Servicios de poda, abono y fumigación.</li>
            <li>Decoraciones para eventos especiales.</li>
            <li>Servicio express.</li>               
          </p>
        </div> 
      

    </div>
  );
}


export default Home;