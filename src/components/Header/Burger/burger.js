import React from "react";
import { bubble as Menu } from 'react-burger-menu'

class Burger extends React.Component {
    showSettings(event) {
        event.preventDefault();
    }

    render() {
        return (
            <Menu
                right
                className="header__burger" width={'40%'}>
                <li className="header__gnavItem menu-item"><a href="/">ABOUT</a></li>
                <li className="header__gnavItem menu-item"><a href="/web">WORK</a></li>
            </Menu>
        );
    }
}


export default Burger;