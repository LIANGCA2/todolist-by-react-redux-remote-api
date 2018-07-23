import * as types from '../constants/ActionTypes'

export const addItem = (todo) => ({ type: types.add,todo:todo})
export const changeCheckStatus = (id) => ({ type: types.changeCheckStatus,id:id})
export const changeTab = (todos,status) => ({ type: types.changeTab,todos:todos,status:status})
export const changeContent = (id, content) => ({ type: types.changeContent,id:id,content:content})
export const InitState =(todos)=>({type:types.InitState,todos:todos})
