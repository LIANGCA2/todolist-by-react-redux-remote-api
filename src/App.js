import React, {Component} from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css'
import './App.css';
import './index.css';
import Title from "./component/title";
import AddItemInput from "./container/containerAddItemInput";
import Todolist from "./container/containerTodolist"
import FilterList from "./container/containerFilter";
import {BrowserRouter, Route} from "react-router-dom";

import {Col, Row} from "antd";


class App extends Component {
    render() {
        return (

            <div className="container">
                < Row>
                    < Col offset={8} span={6}> <Title/></Col>
                </Row>
                < Row>
                    < Col offset={8} span={5}>
                        <AddItemInput/></Col>
                </Row>
                <br/>
                <BrowserRouter>
                    <div>  < Row>
                        < Col offset={8} span={5}>
                            <Route path="/:status" component={Todolist}/></Col></Row>
                        < Row>
                            < Col offset={8} span={5}>
                                <Route exact path="" component={Todolist}/></Col></Row>
                        < Row>

                            <FilterList/>
                            </Row>
                    </div>
                </BrowserRouter>
            </div>

        );
    }
}

export default App;
