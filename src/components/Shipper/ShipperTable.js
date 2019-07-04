import React, { Component } from 'react'
import ShipperRow from './ShipperRow';
import SupplierDataService from '../../service/SupplierDataService'

export default class ShipperTable extends Component {
    constructor(props) {
        super(props);
        
    }
    
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
                                    <th>Shipper Name</th>
                                    <th>phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.showShipper()
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
