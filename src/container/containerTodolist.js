import {connect} from 'react-redux'
import TodoList from "../component/todoList";
import {changeCheckStatus, changeContent} from "../actions/index";
import TodoApi from "../api/TodoApi"


const mapStateToProps = (state, ownProps) => {

    return {
        todoList: state.todoList
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    let status = "all";
    if (ownProps.match.params.status != undefined) {
        status = ownProps.match.params.status;
    }
    return {
        InitState: () => {
            TodoApi.changeStatus(status, dispatch)
        },
        changeCheckStatus: (item) => {


            TodoApi.changeCheckStatus(item, dispatch)

        },
        changeContent: (id, content) => {
            TodoApi.changeContent(id, content, dispatch);
            //dispatch(changeContent(id, content))
        }
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)