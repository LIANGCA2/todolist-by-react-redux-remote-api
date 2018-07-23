import {connect} from 'react-redux'
import FilterList from "../component/filterList";

import TodoApi from "../api/TodoApi"


const mapStateToProps = (state, ownProps) => {

    return {

        status: state.status
    }
}

    const mapDispatchToProps = (dispatch,ownProps)=>{

        return {
            changeTab:(status) => {
               TodoApi.changeStatus(status,dispatch);
                // dispatch(changeTab(status))
            },
        }

    }



export default connect(mapStateToProps,mapDispatchToProps)(FilterList)