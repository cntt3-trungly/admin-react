import React, { Component } from 'react';

class ProductRow extends Component {

    deleteDataClick = (id)=>{
        this.props.deleteButtonClick(id);
    }
    render() {
        return (


            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.productName}</td>
                <td>{this.props.supplierName}</td>
                <td>{this.props.categoryName}</td>
                <td>{this.props.price}$</td>
                <td>{this.props.description}</td>
                <td><img src={this.props.urlImage} style={{ maxWidth: '50px', maxHeight: '200px' }} />
                </td>
                <td>{this.props.unit}</td>


                <td>
                    <a className="text-primary" >
                        <i className="fa fa-edit"></i>
                    </a>
                    <a className="text-danger" >
                        <i className="fa fa-trash" onClick={(id)=>this.deleteDataClick(this.props.id)}></i>
                    </a>
                </td>

            </tr>
        );
    }
}

export default ProductRow;