import TODO from "../model/TODO"
import axios from "axios/index"
import {addItem, changeTab, changeContent, InitState} from "../actions/index";
import {changeCheckStatus} from "../actions";

const TodoApi = {

    apiUrl: 'http://localhost:8080/api/todos',



    changeStatus(status, dispatch) {

        console.log(status);
        axios.get(`${this.apiUrl}/search/statusOfTodos?status=${status=="all"?"completed,active":status}`).then(response=>{
            let todos = [];
            response.data._embedded.todos.forEach(item=>{
                todos.push(new TODO(item.id,item.content,item.status))
            });
            console.log(todos)

            dispatch(changeTab(todos,status))
        })

    },
    changeContent(id, content, dispatch) {

        axios.patch(`${this.apiUrl}/${id}`, {
            content: content
        }).then(
            dispatch(changeContent(id, content))
        )

    },
    getAllItem() {

        return this.todos;
    },
    getStatus() {
        return this.staus;
    },
    changeCheckStatus(item, dispatch) {
        axios.patch(`${this.apiUrl}/${item.id}`, {
            status: item.status==="active"?"completed":"active"
        }).then(response => {
          dispatch(changeCheckStatus(item.id))
        })
    },
    addItem(content, dispatch) {

        axios
            .post(`${this.apiUrl}`, {
                //id: todo.id,
                content: content,
                status: "active"
            })
            .then((response) => {
console.log(response);

                let todo = new TODO(
                    response.data.id,
                    response.data.content,
                    response.data.status
                );
                dispatch(addItem(todo))

            }).catch(function (error) {

        });

    },



}
export default TodoApi