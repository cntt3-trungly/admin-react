import React, { Component } from 'react';

class CategoryRow extends Component {

    deleteDataClick = (id) => {
        this.props.deleteButtonClick(id);
    }
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
                        <i className="fa fa-trash"  onClick={(id) => this.deleteDataClick(this.props.id)}></i>
                    </a>
                </td>

            </tr>
        );
    }
}

export default CategoryRow;