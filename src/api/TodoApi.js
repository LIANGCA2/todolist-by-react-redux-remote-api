import TODO from "../model/TODO"
import axios from "axios/index"
import {addItem,changeTab,changeContent} from "../actions/index";

const TodoApi = {
    todos: [],
    status: "all",
    apiUrl: 'https://5b52a452d9b92700141c9943.mockapi.io/api/v1',


    InitData(response){
        response.data.forEach(item=>{
            this.todos.push(new TODO(item.id,item.content,item.complete))
        })


    },
    getInitData(){
        return {
            todoList:this.todos,
            status:this.status
        }
    },
    filterByStatus(){
        console.log(this.status)
        return this.todos.filter((item)=>this.status==TODO.ALL?true:this.status==TODO.ACTIVE?!item.complete:item.complete)

    },
    changeStatus(status,dispatch) {
        console.log("ddddd");
        console.log(status);
        this.status = status;
        dispatch(changeTab(status))
       // axios.get(`${this.apiUrl}/todo?search=`+status==='complete'?true:status==='active'?false).then()
    },
    changeContent(id, content,dispatch) {


        let todo = this.todos.find(item => item.id === id);
        if (todo !== undefined) {
            todo.changeContent(content);
        }
        axios.put(`${this.apiUrl}/todo/`+id,{
            content:content
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
    changeCheckStatus(id,successCallBack) {


        let todo = this.todos.find(item => item.id === id);
        if (todo !== undefined) {

            todo.toggleActive();
        }
        axios.put(`${this.apiUrl}/todo/`+id,{
            complete: !todo.complete
        }).then(response=>{
            successCallBack()
        })
    },
    addItem(content,dispatch) {

        axios
                .post(`${this.apiUrl}/todo`, {
                    //id: todo.id,
                    content: content,
                    complete: false
                })
                .then((response)=> {



                       let todo =  new TODO(
                            response.data.id,
                            response.data.content,
                            response.data.complete
                        );
                    this.todos.push(todo)
                    dispatch(addItem(todo))

                }).catch(function(error) {

        });

    },
    generateUUID() {
        /*jshint bitwise:false */
        var i,
            random;
        var uuid = '';

        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12
                ? 4
                : (i === 16
                    ? (random & 3 | 8)
                    : random)).toString(16);
        }
        return uuid;
    }


}
export default TodoApi