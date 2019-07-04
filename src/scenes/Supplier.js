import React, { Component } from 'react';
import SupplierHeader from '../components/Supplier/SupplierHeader';
import SupplierTable from '../components/Supplier/SupplierTable';


class Supplier extends Component {
    render() {
        return (
            <main className="app-content">
                <SupplierHeader/>
                <SupplierTable/>
            </main>
        );
    }
}

export default Supplier;