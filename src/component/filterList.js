import React,{Component} from "react"
import {BrowserRouter, Link} from "react-router-dom";


class FilterList extends Component{
    constructor(props){
        super(props);
    }
    changeTab = (event,status)=>{
        this.props.changeTab(status)
    }
    render(){
        return (<div>




            <ul id="filters">
                <li>
                    <Link to="/all"  data-filter="all" className={this.props.status=="all"?"selected":""}  onClick = {(event,status)=>this.changeTab(event,"all")}>ALL</Link>
                </li>
                <li>
                    <Link to="/active" data-filter="active"  className={this.props.status=="active"?"selected":""} onClick = {(event,status)=>this.changeTab(event,"active")}>Active</Link>
                </li>
                <li>
                    <Link to ="/completed"  data-filter="complete"  className={this.props.status=="completed"?"selected":""} onClick = {(event,status)=>this.changeTab(event,"completed")}>Complete</Link>
                </li>
            </ul>

        </div>)
    }
}
export default FilterList