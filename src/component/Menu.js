import React, {Component} from 'react';
import FoodLogo from '../images/FoodLogo.png';
import ordernow from '../images/ordernow.jpg'
import '../App.css';

class Menu extends Component {
  render(){
    return(
      <header role= 'banner'>
        <a href="index.html"><img className='header-logo'src={FoodLogo} alt="logo"/></a>
        <nav className= 'drawer' id='nav'>
          <ul className= 'nav-menu'>
            <li className= 'nav-item'><a href='#'>Menu</a></li>
            <li className= 'nav-item'><a href="#">Parties</a></li>
            <li className= 'nav-item'><a href="#">Gallery</a></li>
            <li className= 'nav-item'><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className='btn-order'><img src={ordernow}/></div>
        <div id='toggle'>
          <div className='span' id='bar1'></div>
          <div className='span' id='bar2'></div>
          <div className='span' id='bar3'></div>
        </div>
    </header>
    );
  }
}

export default Menu;
