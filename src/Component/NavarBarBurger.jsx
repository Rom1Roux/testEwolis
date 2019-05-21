import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'
import { bubble as Menu } from 'react-burger-menu';

class NavarBarBurger extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [
                { key: 1, text: 'Child 1', value: 1, href: "#/" },
                { key: 2, text: 'Child 2', value: 2, href: "#/" },
                { key: 3, text: 'Child 3', value: 3, href: "#/" },
            ],
            activeItem: 'notreExpertise'
        }
    }
    onClickMenu = (page) => {
        this.setState({ activeItem: page })
    }
    render() {
        const { options, activeItem } = this.state;
        return (
            <div >
                <Menu className='NavBarApp' pageWrapId={"page-wrap"}>
                    <a
                        id="notreExpertise"
                        onClick={() => this.onClickMenu('notreExpertise')}
                        className={`${activeItem === 'notreExpertise' ? 'menu-item navbar-Selected' : 'menu-item'}`}
                        href="#/">Notre Expertise
                    </a>
                    <a
                        id="innovation"
                        onClick={() => this.onClickMenu('innovation')}
                        className={`${activeItem === 'innovation' ? 'menu-item navbar-Selected' : 'menu-item'}`}
                        href="#innovation">Innovation R&D
                    </a>
                    <a
                        id="ingénierie"
                        onClick={() => this.onClickMenu('ingénierie')}
                        className={`${activeItem === 'ingénierie' ? 'menu-item navbar-Selected' : 'menu-item'}`}
                        href="#ingenierie">Ingénierie
                    </a>
                    <a
                        id="industrialisation"
                        onClick={() => this.onClickMenu('industrialisation')}
                        className={`${activeItem === 'industrialisation' ? 'menu-item navbar-Selected' : 'menu-item'}`}
                        href="#industrialisation">Industrialisation
                    </a>
                    <a
                        id="qualification"
                        onClick={() => this.onClickMenu('qualification')}
                        className={`${activeItem === 'qualification' ? 'menu-item navbar-Selected' : 'menu-item'}`}
                        href="#qualification">Qualification produit
                    </a>
                    <Dropdown className='NavBarDropdown' href="#/" text='Parent' options={options} simple item />
                </Menu>
            </div>
        );
    }
}
export default NavarBarBurger;