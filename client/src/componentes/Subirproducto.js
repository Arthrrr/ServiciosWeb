function Subirproducto(){
    return (
        <div className="App">
          <form action="http://localhost:5000/agregarProducto" method="POST" encType="multipart/form-data">
            <select name="tipo">
              <option defaultValue>Regular</option>
              <option>Coleccion</option>
            </select>
            <select name="tamano">
              <option defaultValue>Mini</option>
              <option>Mediano</option>
              <option>Grande</option>
            </select>
            <input type="number" name="precio"/>
            <input type="text" name="estilo"/>
            <input type="file" name="image" />
            <button type="submit">Upload</button>
          </form>
        </div>
    );
};

export default Subirproducto;