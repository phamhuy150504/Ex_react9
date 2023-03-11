import {  ADD_TODO, CHANGE_SELECT_TODO } from "../contants/Contants_Todo";

export const add_todo = (payload) => ({
  type: ADD_TODO,
  payload
})

export const change_select_todo = (option, payload) => ({
  type: CHANGE_SELECT_TODO,
  payload: {
    option, 
    payload
  }
})


