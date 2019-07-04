import React, { Component } from 'react';

class HeaderNofitication extends Component {
    render() {
        return (
            <li className="dropdown"><a className="app-nav__item" href="#" data-toggle="dropdown" aria-label="Show notifications"><i className="fa fa-bell-o fa-lg" /></a>
                <ul className="app-notification dropdown-menu dropdown-menu-right">
                    <li className="app-notification__title">You have 4 new notifications.</li>
                    <div className="app-notification__content">
                        <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-primary" /><i className="fa fa-envelope fa-stack-1x fa-inverse" /></span></span>
                            <div>
                                <p className="app-notification__message">Lisa sent you a mail</p>
                                <p className="app-notification__meta">2 min ago</p>
                            </div></a></li>
                        <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-danger" /><i className="fa fa-hdd-o fa-stack-1x fa-inverse" /></span></span>
                            <div>
                                <p className="app-notification__message">Mail server not working</p>
                                <p className="app-notification__meta">5 min ago</p>
                            </div></a></li>
                        <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-success" /><i className="fa fa-money fa-stack-1x fa-inverse" /></span></span>
                            <div>
                                <p className="app-notification__message">Transaction complete</p>
                                <p className="app-notification__meta">2 days ago</p>
                            </div></a></li>
                        <div className="app-notification__content">
                            <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-primary" /><i className="fa fa-envelope fa-stack-1x fa-inverse" /></span></span>
                                <div>
                                    <p className="app-notification__message">Lisa sent you a mail</p>
                                    <p className="app-notification__meta">2 min ago</p>
                                </div></a></li>
                            <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-danger" /><i className="fa fa-hdd-o fa-stack-1x fa-inverse" /></span></span>
                                <div>
                                    <p className="app-notification__message">Mail server not working</p>
                                    <p className="app-notification__meta">5 min ago</p>
                                </div></a></li>
                            <li><a className="app-notification__item" href="javascript:;"><span className="app-notification__icon"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-success" /><i className="fa fa-money fa-stack-1x fa-inverse" /></span></span>
                                <div>
                                    <p className="app-notification__message">Transaction complete</p>
                                    <p className="app-notification__meta">2 days ago</p>
                                </div></a></li>
                        </div>
                    </div>
                    <li className="app-notification__footer"><a href="#">See all notifications.</a></li>
                </ul>
            </li>

        );
    }
}

export default HeaderNofitication;