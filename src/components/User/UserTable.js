import React, { Component } from 'react'
import UserDataService from '../../service/UserDataService'
import UserRow from './UserRow';

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

    showUserTable =()=>
        this.state.users.map((value,key)=>(
            <UserRow
            key={key}
            id={value.id}
            username={value.username}
            firstName={value.firstName}
            lastName={value.lastName}
            email={value.email}
            imageUrl1={value.imageUrl1}
            />
        ))    




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
                                        this.showUserTable()
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