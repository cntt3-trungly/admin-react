import React, { Component } from 'react';
import UserHeader from '../components/User/UserHeader';
import UserTable from '../components/User/UserTable';

class User extends Component {
    render() {
        return (
        <main className="app-content">
            <UserHeader/>
            <UserTable/>
        </main>
        );
    }
}

export default User;