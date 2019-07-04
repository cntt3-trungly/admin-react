import React, { Component } from 'react';

class HeaderUser extends Component {
    render() {
        return (
            <li className="dropdown"><a className="app-nav__item" href="#" data-toggle="dropdown" aria-label="Open Profile Menu"><i className="fa fa-user fa-lg" /></a>
                <ul className="dropdown-menu settings-menu dropdown-menu-right">
                    <li><a className="dropdown-item" href="page-user.html"><i className="fa fa-cog fa-lg" /> Settings</a></li>
                    <li><a className="dropdown-item" href="page-user.html"><i className="fa fa-user fa-lg" /> Profile</a></li>
                    <li><a className="dropdown-item" href="page-login.html"><i className="fa fa-sign-out fa-lg" /> Logout</a></li>
                </ul>
            </li>

        );
    }
}

export default HeaderUser;