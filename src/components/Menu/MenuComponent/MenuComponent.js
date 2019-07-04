import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import $ from 'jquery';




class MenuComponent extends Component {

    
  render() {
        return (
            <div>
                <div className="app-sidebar__overlay" data-toggle="sidebar" />
                <aside className="app-sidebar">
                    <div className="app-sidebar__user"><img className="app-sidebar__user-avatar" src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg" alt="User Image" />
                        <div>
                            <p className="app-sidebar__user-name">John Doe</p>
                            <p className="app-sidebar__user-designation">Frontend Developer</p>
                        </div>
                    </div>
                    <ul className="app-menu">
                    <li> <Link className="app-menu__item" to="/admin/index"><i className="app-menu__icon fa fa-pie-chart"></i><span className="app-menu__label">Dashboard</span></Link>
                           </li>
                        <li className="treeview"><a className="app-menu__item" href="#" data-toggle="treeview"><i className="app-menu__icon fa fa-laptop" /><span className="app-menu__label">UI Elements</span><i className="treeview-indicator fa fa-angle-right" /></a>
                            <ul className="treeview-menu">
                                <li><a className="treeview-item" href="bootstrap-components.html"><i className="icon fa fa-circle-o" /> Bootstrap Elements</a></li>
                                <li><a className="treeview-item" href="https://fontawesome.com/v4.7.0/icons/" target="_blank" rel="noopener"><i className="icon fa fa-circle-o" /> Font Icons</a></li>
                                <li><a className="treeview-item" href="ui-cards.html"><i className="icon fa fa-circle-o" /> Cards</a></li>
                                <li><a className="treeview-item" href="widgets.html"><i className="icon fa fa-circle-o" /> Widgets</a></li>
                            </ul>
                        </li>
                        <li><a className="app-menu__item" href="charts.html"><i className="app-menu__icon fa fa-pie-chart" /><span className="app-menu__label">Charts</span></a></li>
                        <li className="treeview"><a className="app-menu__item" href="#" data-toggle="treeview"><i className="app-menu__icon fa fa-edit" /><span className="app-menu__label">Forms</span><i className="treeview-indicator fa fa-angle-right" /></a>
                            <ul className="treeview-menu">
                                <li><a className="treeview-item" href="form-components.html"><i className="icon fa fa-circle-o" /> Form Components</a></li>
                                <li><a className="treeview-item" href="form-custom.html"><i className="icon fa fa-circle-o" /> Custom Components</a></li>
                                <li><a className="treeview-item" href="form-samples.html"><i className="icon fa fa-circle-o" /> Form Samples</a></li>
                                <li><a className="treeview-item" href="form-notifications.html"><i className="icon fa fa-circle-o" /> Form Notifications</a></li>
                            </ul>
                        </li>
                        <li className="treeview"><a className="app-menu__item" href="#" data-toggle="treeview"><i className="app-menu__icon fa fa-th-list" /><span className="app-menu__label">Tables</span><i className="treeview-indicator fa fa-angle-right" /></a>
                            <ul className="treeview-menu">
                                <li><a className="treeview-item" href="table-basic.html"><i className="icon fa fa-circle-o" /> Basic Tables</a></li>
                                <li><a className="treeview-item" href="table-data-table.html"><i className="icon fa fa-circle-o" /> Data Tables</a></li>
                            </ul>
                        </li>
                        <li> <Link className="app-menu__item" to="/admin/product"><i className="app-menu__icon fa fa-pie-chart"></i><span className="app-menu__label">Product</span></Link>
                           </li>
                           <li> <Link className="app-menu__item" to="/admin/category"><i className="app-menu__icon fa fa-pie-chart"></i><span className="app-menu__label">Category</span></Link>
                           </li>
                           <li> <Link className="app-menu__item" to="/admin/supplier"><i className="app-menu__icon fa fa-pie-chart"></i><span className="app-menu__label">Supplier</span></Link>
                           </li>
                        <li className="treeview"><a className="app-menu__item" href="#" data-toggle="treeview"><i className="app-menu__icon fa fa-file-text" /><span className="app-menu__label">Pages</span><i className="treeview-indicator fa fa-angle-right" /></a>
                            <ul className="treeview-menu">
                                <li><a className="treeview-item" href="blank-page.html"><i className="icon fa fa-circle-o" /> Blank Page</a></li>
                                <li><a className="treeview-item" href="page-login.html"><i className="icon fa fa-circle-o" /> Login Page</a></li>
                                <li><a className="treeview-item" href="page-lockscreen.html"><i className="icon fa fa-circle-o" /> Lockscreen Page</a></li>
                                <li><a className="treeview-item" href="page-user.html"><i className="icon fa fa-circle-o" /> User Page</a></li>
                                <li><a className="treeview-item" href="page-invoice.html"><i className="icon fa fa-circle-o" /> Invoice Page</a></li>
                                <li><a className="treeview-item" href="page-calendar.html"><i className="icon fa fa-circle-o" /> Calendar Page</a></li>
                                <li><a className="treeview-item" href="page-mailbox.html"><i className="icon fa fa-circle-o" /> Mailbox</a></li>
                                <li><a className="treeview-item" href="page-error.html"><i className="icon fa fa-circle-o" /> Error Page</a></li>
                            </ul>
                        </li>
                    </ul>
                </aside>
            
                </div>
        );
    }
}

export default MenuComponent;