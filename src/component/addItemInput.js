import React,{Component} from 'react'
import TodoApi from "../api/TodoApi"


class AddItemInput extends Component{


    constructor(props) {
        super(props);
        this.inputText = React.createRef();
    }



    addItem = (event)=>{

        var content = this.inputText.current.value;
        this.props.addItem(content);
        this.inputText.current.value = "";
    }


    render(){
        return (<div>
            <input className="input-text" type="text" name="ListItem" ref={this.inputText}

            />
            <div id="button" onClick= {(event)=>this.addItem(event)}>Add</div>
        </div>)
    }
}
export default AddItemInput;