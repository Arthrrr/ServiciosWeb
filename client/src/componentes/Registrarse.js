import '../App.css';
import '../componentes/css/styleRegistrarse.css'; 

async function CrearUsuario(){
  const valorCedula = parseInt(document.getElementById('InputCedula').value) || 0;
  const valorContrasena = document.getElementById('InputContrasena').value;
  const valorNombre = document.getElementById('InputNombre').value;
  const valorEmail = document.getElementById('InputEmail').value;
  const valorTelefono = parseInt(document.getElementById('InputTelefono').value || 0);
  const usuario = {
    cedula: valorCedula,
    contrasena: valorContrasena,
    nombre: valorNombre,
    email: valorEmail,
    telefono: valorTelefono,
  }
  console.log(JSON.stringify(usuario));
  const promesa = fetch('http://localhost:5000/registrar',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuario),
  });
  promesa.then(async function (response){
    const responseJson = await response.json();
    if (responseJson === "Campo(s) faltantes"){
      alert('Error al crear al usuario. Digite la informacion correctamente.');
      return;
    }
    
    if (responseJson === "Usuario creado"){
      alert('Cuenta creada.');
      document.getElementById('InputCedula').value = '';
      document.getElementById('InputContrasena').value = '';
      document.getElementById('InputNombre').value = '';
      document.getElementById('InputEmail').value = '';
      document.getElementById('InputTelefono').value = '';
      return;
    }

    alert('Usuario ya existente.');
  });
}

function Registrarse() {

    return (
      <div>
        <h6 className="bienvenidas">
            <i className="fas fa-gem me-3 text-secondary"></i>Te invitamos a registrarte ahora
          </h6>
         
  <div className="col-auto">
    </div>
      <div className="form-outline">
  <div className="form-outline col-auto">
    <input type="_id" id="InputCedula" className="formCedula1" aria-describedby="textExample2" placeholder="Ingrese Cédula" />
  
  </div>
  <div className="col-auto">
    </div>
  </div>
  <div className="form-outline">
  <div className="form-outline col-auto">
    <input type="nombre" id="InputNombre" className="formNombre" aria-describedby="textExample2" placeholder="Ingrese Nombre"/>
    </div>
  <div className="col-auto">
    </div>
    
</div>
<div className="form-outline">
  <div className="form-outline col-auto">
    <input type="email" id="InputEmail" className="formEmail" aria-describedby="textExample2" placeholder="Ingrese Email"/>
  </div>
  <div className="col-auto">
    </div>
  </div>
  <div className="form-outline">
  <div className="form-outline col-auto">
    <input type="telefono" id="InputTelefono" className="formTelefono" aria-describedby="textExample2" placeholder="Ingrese Telefono"/>
  </div>
  <div className="col-auto">
    </div>
    
</div>
<div className="form-outline">
  <div className="form-outline col-auto">
    <input type="password" id="InputContrasena" className="formContrasena" aria-describedby="textExample2" placeholder="Ingrese Contraseña"/>
  </div>
  <div className="col-auto">
    <span id="textExample2" className="form-text"> Debe ser de 8-20 caracteres. </span>
    </div>
  </div>
  
  <button type="ingresar1" className="btnIngresar1" onClick={CrearUsuario} >Ingresar</button>

</div>
    );
  }
  
  export default Registrarse;