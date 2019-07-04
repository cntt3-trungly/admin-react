import React, { Component } from 'react';
import HeaderNofitication from '../components/Header/HeaderNofitication/HeaderNofitication';
import HeaderUser from '../components/Header/HeaderUser/HeaderUser';
import '../css/main.css'

class Header extends Component {
    render() {
        return (
            <header className="app-header"><a className="app-header__logo" href="index.html">Vali</a>
                {/* Sidebar toggle button*/}<a className="app-sidebar__toggle" href="#" data-toggle="sidebar"
                    aria-label="Hide Sidebar" />
                <ul className="app-nav">
                    <li className="app-search">
                        <input className="app-search__input" type="search" placeholder="Search" />
                        <button className="app-search__button"><i className="fa fa-search" /></button>
                    </li>
                    <HeaderNofitication/>
                    <HeaderUser/>
                </ul>

            </header>
        );
    }
}

export default Header;