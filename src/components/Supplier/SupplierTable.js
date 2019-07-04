import React, { Component } from 'react';
import SupplierRow from './SupplierRow';
import SupplierDataService from '../../service/SupplierDataService'

class SupplierTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            suppliers: [],
            message: null
        }
        this.refreshSuppliers = this.refreshSuppliers.bind(this)
    }

    componentDidMount() {
        this.refreshSuppliers();
    }

    refreshSuppliers = () => {
        SupplierDataService.retrieveAllSuppliers()//HARDCODED
            .then(
                response => {
                    this.setState({ suppliers: response.data })
                }
            )
    }

    deleteSupplierClicked = (id) => {
        SupplierDataService.deleteSupplier(id)
            .then(
                response => {
                    this.setState({ message: `Delete of supplier ${id} Successful` })
                    this.refreshSuppliers()
                }
            )
    }

    showSupplier = () =>
        this.state.suppliers.map((value, key) => (
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
                deleteButtonClick={(id) => this.deleteSupplierClicked(id)}
            />

        ))


    render() {       
        return (
            <div className="row">
                <button className="btn btn-success float-right" >Add</button>
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