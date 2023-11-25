import "../App.css";
import '../componentes/css/styleIniciarSesion.css'; 
import florBlanca from './imagenes/florBlanca.jpg';
import florMorada from './imagenes/florMorada.jpg';

async function IniciarSesionAsync(){
  const valorCedula = parseInt(document.getElementById('inputCedula').value) || 0;
  const valorContrasena = document.getElementById('inputPassword').value;
  const usuario = {
    cedula: valorCedula,
    contrasena: valorContrasena,
  }
  console.log(JSON.stringify(usuario));
  const promesa = fetch('http://localhost:5000/login',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuario),
  });
  promesa.then((response)=>response.json())
  .then((responseJson)=>{
    if (responseJson){
      alert('Credenciales válidas, iniciando sesión...');
      document.getElementById('inputCedula').value = '';
      document.getElementById('inputPassword').value = '';
      return;
    }

    alert('Usuario y/o contraseña incorrectos.');
  });
}

function IniciarSesion() {
  return (
    <div>
      <img className="florBlanca"  alt="flor1" src={florBlanca} width="550"/>
      <img className="florMorada"  alt="flor2" src={florMorada} width="400"/>
      <h6 className="companyName">
            <i className="fas fa-gem me-3 text-secondary"></i>¡Il Fiore! 
          </h6>
          <h6 className="bienvenida">
            <i className="fas fa-gem me-3 text-secondary"></i>Ingresa para una mejor experiencia
          </h6>
    <div className="form-group">
    <input type="_id" className="form-cedula" id="inputCedula" aria-describedby="CedulaHelp" placeholder="Ingrese Cédula"></input>
   
  </div>
  <div className="form-group">
    <input type="password" className="form-contrasena" id="inputPassword" placeholder="Contrasena"></input>
  </div>
  <div>

  </div>
  <button type="ingresar" className="btnIngresar" onClick={IniciarSesionAsync} >Ingresar</button>

  </div>
  );
}

export default IniciarSesion;
