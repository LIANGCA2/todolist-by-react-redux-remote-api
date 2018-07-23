import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import reducer from './reducers'
import {Provider} from "react-redux"
import {DatePicker} from "antd";
const store = createStore(reducer)
const rootEl = document.getElementById('root')
const apiUrl ='https://5b52a452d9b92700141c9943.mockapi.io/api/v1'

    ReactDOM.render(
        <Provider store={store}>

            <App/>

        </Provider>,
        rootEl
    )

