import React, { Component } from 'react';

class ShipperRow extends Component {
    deleteDataClick = (id) => {
        this.props.deleteButtonClick(id);
    }
    render() {
        return (
            < tr >
                <td>{this.props.id}</td>
                <td>{this.props.shipperName}</td>
                <td>{this.props.phone}</td>
                <td>
                    <a className="text-primary" >
                        <i className="fa fa-edit" ></i>
                    </a>
                    <a className="text-danger" >
                        <i className="fa fa-trash" onClick={(id) => this.deleteDataClick(this.props.id)}></i>
                    </a>
                </td>

            </tr >
        );
    }
}

export default ShipperRow;