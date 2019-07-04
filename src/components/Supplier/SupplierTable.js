import React, { Component } from 'react';
import SupplierData from './SupplierData';
import SupplierRow from './SupplierRow';

class SupplierTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: SupplierData
        }
    }

    showSupplier = () =>
        this.state.data.map((value, key) => (
            <SupplierRow
                key={key}
                id={value.id}
                supplierName={value.supplierName}
                contactName={value.contactName}
                address={value.address}
                city={value.city}
                postalCode={value.postalCode}
                country={value.country}
                phone={value.phone}
            />

        ))


    render() {

        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="tile">
                        <div className="tile-body">
                            <table className="table table-hover table-bordered" id="sampleTable">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Supplier Name</th>
                                        <th>Contact Name</th>
                                        <th>Address</th>
                                        <th>City</th>
                                        <th>Postal Code</th>
                                        <th>Country</th>
                                        <th>Phone</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.showSupplier()
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SupplierTable;