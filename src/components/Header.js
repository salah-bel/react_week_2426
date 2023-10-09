import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
        
      <Link to="/">Page d'accueil</Link>
        <br/>
      <Link to="/contact">Contact</Link>
        <br/>
      <Link to="/new-product">Nouveau produit</Link>
        <br/>
      <Link to="/products">Liste des produits</Link>
        <br/>
     
  
    </nav>
  );
}

export default Header;