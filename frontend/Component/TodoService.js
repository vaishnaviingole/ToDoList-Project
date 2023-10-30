import axios from'axios';

const TODO_VIEW_BASE_URL='http://localhost:8080/api/viewToDoList';
const TODO_ADD_BASE_URL='http://localhost:8080/api/addToDoItem';
const TODO_UPDATE_BASE_URL='http://localhost:8080/api/updateTODoItem/{id}';
const TODO_DELETE_BASE_URL='http://localhost:8080/api/DELETEToDoItem';

class TodoService{
    getToDo(){
        return axios.get(TODO_VIEW_BASE_URL);
    }

    addToDo(){
        return axios.get(TODO_ADD_BASE_URLL);
    }
    updateToDo(){
        return axios.get(TODO_UPDATE_BASE_URLL);
    }
    deleteToDo(){
        return axios.get(TODO_DELETE_BASE_URLL);
    }

}
export default new TodoService();