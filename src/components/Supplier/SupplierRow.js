import React, { Component } from 'react';

class SupplierRow extends Component {


    deleteDataClick = (id) => {
        this.props.deleteButtonClick(id);
    }
    
    render() {
        return (
            < tr >
                <td>{this.props.id}</td>
                <td>{this.props.supplierName}</td>
                <td>{this.props.contactName}</td>
                <td>{this.props.address}</td>
                <td>{this.props.city}</td>
                <td>{this.props.postalCode}</td>
                <td>{this.props.country}</td>
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

export default SupplierRow;