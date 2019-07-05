import React, { Component } from 'react';
import UserHeader from '../components/User/UserHeader';

class User extends Component {
    render() {
        return (
        <main className="app-content">
            <UserHeader/>
        </main>
        );
    }
}

export default User;