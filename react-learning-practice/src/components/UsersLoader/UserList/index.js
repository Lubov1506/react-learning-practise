import React, { Component } from 'react';
import UserCard from '../UserCard';


class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    
    render() {
        const {users} = this.state
        const userList = users.map(user => (
            <UserCard user={user} key={user.login.uuid} />
          ));
        return (
            <div>
                
            </div>
        );
    }
}

export default UserList;
