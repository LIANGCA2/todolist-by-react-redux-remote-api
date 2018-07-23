import * as types from '../constants/ActionTypes'
import TodoApi from '../api/TodoApi'
import {combineReducers} from "redux";


export default (state = {
    todoList: [], status: "all"
}, action) => {

    switch (action.type) {
        case types.InitState: {
            return {
                todoList: action.todos,
                status: "all"
            }
        }
        case types.add: {

            return {
                todoList: [...state.todoList, action.todo],
                status: state.status

            }

        }
        case types.changeCheckStatus: {


            var todoList = [...state.todoList];

            const todoLists = todoList.map((item) => {
                return item.id === action.id ? {
                    ...item,
                    status: item.status == "active" ? "completed" : "active"
                } : item
            })

            const newState = {
                todoList: todoLists.concat(), status: state.status
            }
            console.log(newState)
            return newState;


        }
        case types.changeTab: {
            const newState = {
                todoList: action.todos, status: action.status
            }

            return newState;
        }
        case types.changeContent: {

            var todoList = [...state.todoList];
            todoList.find((item) => item.id == action.id).content = action.content;
            const newState = {
                todoList: todoList, status: state.status
            }

            return newState;
        }
        default:
            return state;

    }


}




