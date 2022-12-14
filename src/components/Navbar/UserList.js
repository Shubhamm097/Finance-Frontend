import React, { Component } from 'react';
import UserService from '../../service/UserService';

class UserList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        UserService.getUsers().then((res) => {
            this.setState({users: res.data});
        });
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Users List</h2>
                <div className='row'>
                    <table>
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                    <tr key= {user.id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                         
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        )
              
    }
} 

export default UserList