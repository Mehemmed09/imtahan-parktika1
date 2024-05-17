
import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import Basket from './../../../pages/site/BasketPage/Basket';
const Header = () => {
return (
<>
<nav>
    <div className="logo">
    <Link to={'/Home'} style={{textDecoration:"none",color:"black"}} >Tasty</Link>
    </div>
    <div className="pages">
    <ul style={{listStyle:"none"}}>    
    <li><Link to={'/Home'} style={{textDecoration:"none", color:"black"}} >HOME</Link></li>
      <li><Link to={'/Menu'} style={{textDecoration:"none",color:"black"}}>Menu</Link></li>
    <li><Link to={'/Basket'} style={{textDecoration:"none",color:"black"}}>Basket</Link></li>
    </ul> 
    </div>
</nav>
</>
)
}

export default Header
                            