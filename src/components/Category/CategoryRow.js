import React, { Component } from 'react';

class CategoryRow extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.categoryName}</td>
                <td>{this.props.description}</td>
                <td>
                    <a className="text-primary" >
                        <i className="fa fa-edit" ></i>
                    </a>
                    <a className="text-danger" >
                        <i className="fa fa-trash" ></i>
                    </a>
                </td>

            </tr>
        );
    }
}

export default CategoryRow;