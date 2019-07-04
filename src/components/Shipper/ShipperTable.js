import React, { Component } from 'react'
import ShipperRow from './ShipperRow';
import ShipperDataService from '../../service/ShipperDataService'

export default class ShipperTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shippers: [],
            message: null
        }
        this.refreshShippers = this.refreshShippers.bind(this)
    }
    
    componentDidMount() {
        this.refreshShippers();
    }

    refreshShippers = () => {
        ShipperDataService.retrieveAllShippers()//HARDCODED
            .then(
                response => {
                    this.setState({ shippers: response.data })
                }
            )
    }

    deleteShipperClicked = (id) => {
        ShipperDataService.deleteShipper(id)
            .then(
                response => {
                    this.setState({ message: `Delete of shipper ${id} Successful` })
                    this.refreshShippers()
                }
            )
    }

    showShipper = () =>
    this.state.shippers.map((value, key) => (
        <ShipperRow
            key={key}
            id={value.id}
            shipperName={value.shipperName}
            phone={value.phone}
            deleteButtonClick={(id) => this.deleteShipperClicked(id)}
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
