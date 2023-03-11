import { ADD_TODO, CHANGE_SELECT_TODO } from "../contants/Contants_Todo"
const initialState = {
  arr_todos: [],
}

const Todo_Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      let clone_arrTodos = [...state.arr_todos]
      let index = clone_arrTodos.findIndex(item => item.id === payload.id)

      if(index !== -1) {
        clone_arrTodos[index] = {...payload, check: 'todo'}
        console.log(clone_arrTodos);
      } else {
        clone_arrTodos =  payload.todo.trim() === '' ? {...state} 
        : [...state.arr_todos, {...payload, check: 'todo'}]
      }

      return {...state, arr_todos: clone_arrTodos}
    }case CHANGE_SELECT_TODO: {
      let clone_arrTodos = [...state.arr_todos]
      let index = clone_arrTodos.findIndex(item => item.id === payload.payload.id)
      
      if (payload.option === 'todo') {  
        clone_arrTodos[index].check = 'todo'
      } 
      if (payload.option === 'inprogress') {
        clone_arrTodos[index].check = 'inprogress'
      } 
      if (payload.option === 'done') {
        clone_arrTodos[index].check = 'done'
      }
      if (payload.option === 'delete') {
        clone_arrTodos.splice(index, 1)
      } 
      
      return {...state, arr_todos: clone_arrTodos}
    }
  default:
    return state
  }
}

export default Todo_Reducer