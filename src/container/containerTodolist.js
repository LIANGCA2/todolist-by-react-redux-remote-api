import {connect} from 'react-redux'
import TodoList from "../component/todoList";
import {changeCheckStatus,changeContent} from "../actions/index";
import TodoApi from "../api/TodoApi"


const mapStateToProps = (state, ownProps) =>{
    console.log("iiii")
  return{
      todoList:TodoApi.filterByStatus()
  }
    }

const mapDispatchToProps = (dispatch,ownProps)=> {
    return {
        changeCheckStatus: (id) => {


            TodoApi.changeCheckStatus(id,()=>{
                dispatch(changeCheckStatus(id))
            });

        },
        changeContent:(id, content) =>{
            TodoApi.changeContent(id,content,dispatch);
            //dispatch(changeContent(id, content))
        }
    }

}


export default connect(mapStateToProps,mapDispatchToProps)(TodoList)