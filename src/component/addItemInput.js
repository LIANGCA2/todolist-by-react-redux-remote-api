import React, {Component} from 'react'
import TodoApi from "../api/TodoApi"
import {Button, Input} from "antd";


class AddItemInput extends Component {


    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        }

    }


    addItem = (value, event) => {

        this.props.addItem(value);
        this.setState({
            inputValue: ""
        })
    }

    changeInputValue = (e) => {
        let inputValue = e.target.value;
        this.setState({
            inputValue
        })

    }

    render() {
        return (<div>
            <Input.Search value={this.state.inputValue} onChange={(e) => this.changeInputValue(e)}
                          onSearch={(value, event) => this.addItem(value, event)} className="input-text" type="text"
                          name="ListItem" enterButton="Add"></Input.Search>
        </div>)
    }
}

export default AddItemInput;