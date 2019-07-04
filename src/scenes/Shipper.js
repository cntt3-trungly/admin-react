import React, { Component } from 'react';
import ShipperTable from '../components/Shipper/ShipperTable';
import ShipperHeader from '../components/Shipper/ShipperHeader';


class Shipper extends Component {
    render() {
        return (
            <main className="app-content">
            <ShipperHeader/>
            <ShipperTable/>            
        </main>
        );
    }
}

export default Shipper;