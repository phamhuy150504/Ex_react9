import React from 'react'
import { useSelector } from 'react-redux'
import RenderDone from './Done/RenderDone'
import HeaderTodo from './HeaderTodo'
import RenderInprogress from './Inprogress/RenderInprogress'
import RenderTodo from './Todo/RenderTodo'

export default function ExTodo() {
  
  const arr_todos = useSelector(state => state.Todo_Reducer.arr_todos)

  const list_todo = []
  const list_inprogress = []
  const list_done = []

  ;(()=> {arr_todos.map(item => {
      if (item.check === 'todo') {
        return list_todo.push(item)
      } 
       if( item.check === 'inprogress'){
        return list_inprogress.push(item)
      } 
       if (item.check === 'done') {
        return list_done.push(item)
      }
  })})()

  return (
    <div className='bg-sky-800 h-screen w-full'>
      <HeaderTodo />
      <div className="container mx-auto text-white mt-5">
        <div className="create_todo flex mb-3">
          <h1 className='text-3xl font-semibold'>Your Calendar</h1>
        </div>
        <hr />
        <div className="content_todo grid grid-cols-3 gap-12 w-full mt-5 text-black">
          <RenderTodo list_todo={list_todo} />
          <RenderInprogress list_inprogress={list_inprogress} />
          <RenderDone list_done={list_done} />
        </div>
      </div>
    </div>
  )
}
