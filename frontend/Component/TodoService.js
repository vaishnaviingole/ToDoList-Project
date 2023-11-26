import axios from'axios';

const TODO_VIEW_BASE_URL='http://localhost:8080/api/viewToDoList';
const TODO_ADD_BASE_URL='http://localhost:8080/api/addToDoItem';
const TODO_UPDATE_BASE_URL='http://localhost:8080/api/updateTODoItem/{id}';
const TODO_DELETE_BASE_URL='http://localhost:8080/api/DELETEToDoItem';
const TODO_COMPLETE_BASE_URL='http://localhost:8080/api/completeTODoItem'
class TodoService{
    getToDo() {
        return axios.get(TODO_VIEW_BASE_URL);
      }
    
      createTodoItem(title) {
        return axios.post(TODO_ADD_BASE_URL, null, {
          params: {
            title: title
          }
        }); // Use post for adding
      }
    
      updateToDo(taskId,newTitle) {
        return axios.put(`${TODO_UPDATE_BASE_URL}/${taskId}`, { title: newTitle }); // Use put for updating
      }
    
      deleteToDo(taskId) {
        return axios.delete(`http://localhost:8080/api/updateTODoItem/${taskId}`); // Use delete for deleting
      }
    
    completeToDo(taskId){
        return axios.put(`/api/completeTODoItem/${taskId}`,{},{
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
export default new TodoService();