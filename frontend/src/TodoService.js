import axios from'axios';

const TODO_BASE_URL='http://localhost:8080/api/viewToDoList';

class TodoService{
    getToDo(){
        return axios.get(TODO_BASE_URL);
    }
}
export default new TodoService();