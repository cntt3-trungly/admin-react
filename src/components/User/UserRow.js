import React, { Component } from 'react';

class UserRow extends Component {
    deleteButtonData=(id)=>{
        this.props.deteleUserClicked(id);
    }
    render() {
    
        return (
            < tr >
                <td>{this.props.id}</td>
                <td>{this.props.username}</td>
                <td>{this.props.firstName}</td>
                <td>{this.props.lastName}</td>
                <td>{this.props.email}</td>
                <td><img className="img-profile rounded-circle" style={{width: '2rem', height: '2rem'}} src={this.props.imageUrl1} /></td>

                <td>
                    <a className="text-primary" >
                        <i className="fa fa-edit" ></i>
                    </a>
                    <a className="text-danger" >
                        <i className="fa fa-trash" onClick={(id)=>this.deleteButtonData(this.props.id)}></i>
                    </a>
                </td>

            </tr >
        );
    }
}

export default UserRow;