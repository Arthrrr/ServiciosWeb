



import '../componentes/css/styleHeader.css'; 
import ILFIORE from './imagenes/ILFIORE.png';
import face from './imagenes/face.png';
import insta from './imagenes/insta.png'


function Header() {
    return(
        <div>

<header>
        <img className="logo"  alt="logo" src={ILFIORE} width="200"/>
        <nav>
            <ul className="links">
                <li><a href="/">Home</a></li>
                <li><a href="/productos">Tienda</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="/iniciarsesion">Iniciar Sesión</a></li>
                <li><a href="/registrar">Registrarse</a></li>
            </ul>
            
        </nav>
        <nav>
        <a className="face" href="https://www.facebook.com/profile.php?id=100083739921651"><img src={face} alt="facebook "  width="100"  /></a>
        <a className="insta" href="https://www.instagram.com/ilfiorecostarica/?igshid=YmMyMTA2M2Y%3D"><img src={insta} alt="insta "  width="40"  /></a>
        </nav>
        
    </header>
    
</div>

);
}

export default Header;