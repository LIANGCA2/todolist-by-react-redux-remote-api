import React, {Component} from "react"

class TodoList extends Component {
    constructor(props) {
        super(props)
    }

    changeCheckStatus = (event, id) => {

        this.props.changeCheckStatus(id);
    }

    changeEditStatus = (event) => {

        event.target.setAttribute("contentEditable", true);

    }

    changeContent = (event, id)=>{
        var keycode = event.keyCode ? event.keyCode : event.which;
        var content = event.target.innerText;

        if(keycode == "13") {

            event.target.setAttribute("contentEditable", false);
            this.props.changeContent(id, content);
        }
    }

    render() {


        return (<ol>



            {

                this.props.todoList.map((item) => {
                    return (<li id={item.id} className={item.complete ? "checked" : ""}
                                onDoubleClick={(event) => this.changeEditStatus(event)}
                                onKeyDown= {(event,id)=>this.changeContent(event, item.id)} key = {item.id}
                    >
                        <input name="done-todo" type="checkbox" className="done-todo"
                               onChange={(event, id) => this.changeCheckStatus(event, item.id)}
                               checked={item.complete ? true : false}
                        /> {item.content}</li>)
                })
                //{}注意onChange函数参数的传法
            }

        </ol>)
    }
}

export default TodoList;