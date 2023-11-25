import '../App.css';
import '../componentes/css/styleFooter.css'; 
import footerImage from './imagenes/footerImage.png';

function Footer() {

    return (
      <div>
        <footer>
        <img className="footerImage"  alt="logo" src={footerImage} width="200"/>
        <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="company">
            <i className="fas fa-gem me-3 text-secondary"></i>Il Fiore
          </h6>
          <p>
          Somos una empresa Acosteña dedicada a brindar una excelente experiencia en la compra de orquideas.
          </p>
        </div>

        
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="contacto">Contacto</h6>
          <p><i className="fas fa-home me-3 text-secondary"></i> Acosta, Costa Rica</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            ilfiorecostarica@gmail.com
          </p>
          <p><i className="fas fa-phone me-3 text-secondary"></i> +506 8628 8850</p>
        </div>
      </div>
    </div>
  </section>

  <div className="text-center p-4" >
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="http://localhost:3000/"> Grupo 2 Ulacit</a>
  </div>
        </footer>
      </div>
    );
  }
  
  export default Footer;
