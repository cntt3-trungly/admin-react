import React, { Component } from 'react'
import UserDataService from '../../service/UserDataService'

class UserTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            message: ''
        }
        this.refreshUsers = this.refreshUsers.bind(this)
    }

    componentDidMount() {
        this.refreshUsers();
    }

    refreshUsers = () => {
        UserDataService.retrieveAllUsers()//HARDCODED
            .then(
                response => {
                    this.setState({ users: response.data })
                }
            )
    }




    render() {
        console.log(this.state.users);
        
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
                                        <th>User Name</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Image</th>
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
        );
    }
}

export default UserTable;