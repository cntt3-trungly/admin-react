import React, { Component } from 'react';
import Category from '../scenes/Category';
import Product from '../scenes/Product';
import Index from '../scenes/Index';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Supplier from '../scenes/Supplier';


class RouterURL extends Component {
    render() {
        return (
            <div>
                <Route path="/admin/category" exact component={Category} />
                <Route path="/admin/product" exact component={Product} />
                <Route path="/admin/index" exact component={Index} />
                <Route path="/admin/supplier" exact component={Supplier} />
            </div>
        );
    }
}

export default RouterURL;