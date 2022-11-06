import axios from 'axios';
import UserList from '../components/Navbar/UserList';

const USER_URL = "http//:localhost:8082/api/users"

class UserService {

    getUsers() {
        return axios.get(USER_URL);
    }
}

export default new UserService();