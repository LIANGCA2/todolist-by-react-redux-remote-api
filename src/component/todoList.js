import React, {Component} from "react"
import {Route} from "react-router-dom";
import {Checkbox, List} from "antd";

class TodoList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.InitState();
    }


    changeCheckStatus = (event, item) => {

        this.props.changeCheckStatus(item);
    }

    changeEditStatus = (event) => {

        event.target.setAttribute("contentEditable", true);

    }

    changeContent = (event, id) => {
        var keycode = event.keyCode ? event.keyCode : event.which;
        var content = event.target.innerText;

        if (keycode == "13") {

            event.target.setAttribute("contentEditable", false);
            this.props.changeContent(id, content);
        }
    }

    render() {


        return (<List split="true" bordered="true">


            {

                this.props.todoList.map((item) => {
                    return (<List.Item id={item.id} className={item.status === "completed" ? "checked" : ""}
                                onDoubleClick={(event) => this.changeEditStatus(event)}
                                onKeyDown={(event, id) => this.changeContent(event, item.id)} key={item.id}
                    >
                        <Checkbox   name="done-todo" type="checkbox" className="done-todo"
                               onChange={(event, id) => this.changeCheckStatus(event, item)}
                               checked={item.status === "completed" ? true : false}
                        /> {item.content}</List.Item>)
                })
                //{}注意onChange函数参数的传法
            }

        </List>)
    }
}

export default TodoList;