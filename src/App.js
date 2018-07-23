import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Title from "./component/title";
import AddItemInput from "./container/containerAddItemInput";
import Todolist from "./container/containerTodolist"
import FilterList from "./container/containerFilter";
import {BrowserRouter, Route} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="container">
                <Title/>
                <AddItemInput/>
                <br/>
                <BrowserRouter>
                    <div>
                        <Route path = "/:status" component = {Todolist}/>
                        <Route exact path = "" component = {Todolist}/>
                        <FilterList/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
