import React, { Component } from 'react';
import ProductHeader from '../components/Product/ProductHeader';
import ProductTable from '../components/Product/ProductTable'


class Product extends Component {
    render() {
        return (
            <main className="app-content">
                <ProductHeader />
                <ProductTable/>
            </main>
        );
    }
}

export default Product;