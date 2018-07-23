import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import Title from "./component/title";
import AddItemInput from "./container/containerAddItemInput";
import Todolist from "./container/containerTodolist"
import FilterList from "./container/containerFilter";

class App extends Component {
  render() {
    return (
        <div className="container">
            <Title/>
            <AddItemInput/>
            <br/>
            <Todolist/>
            <FilterList/>
        </div>
    );
  }
}

export default App;
