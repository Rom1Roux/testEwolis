import React, { Component } from 'react'
import { pushRotate as Menu } from 'react-burger-menu';

class NavarBarBurger extends Component {
    render() {
        return (
            <Menu className='NavBarApp'>
                <a id="expertise" className="menu-item" href="#/">Notre Expertise</a>
                <a id="innovation" className="menu-item" href="#innovation">Innovation R&D</a>
                <a id="ingenierie" className="menu-item" href="#ingenierie">Ingénierie</a>
                <a id="industrialisation" className="menu-item" href="#industrialisation">Industrialisation</a>
                <a id="qualification" className="menu-item" href="#qualification">Qualification produit</a> 
            </Menu>
        );
    }
}
export default NavarBarBurger;