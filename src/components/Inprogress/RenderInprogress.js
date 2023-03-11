import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change_select_todo } from '../../redux/actions/Action_Todo'
import { message } from 'antd';

export default function Render_Inprogress({ list_inprogress }) {
  // USE HOOKS
  const dispatch = useDispatch()

  // HANDLE EVENTS
  const handleOnchange = (e, todo) => {
    const { value } = e.target
    dispatch(change_select_todo(value, todo))
    message.success({
      type: 'success',
      content: `Changed ${value}`,
    })
  }

  // RENDER
  const render_arrInprogress = () => {
    return list_inprogress.map(item => {
      const { todo, id } = item

      return (
        <div key={id} className='main__inprogress-todo grid grid-cols-2  text-right p-2 hover:bg-slate-300 duration-200 group/item border-b-2'>
          <p className='text-left'>{todo}</p>
          <div className='todo_select'>
            <select onChange={(e) => handleOnchange(e, item)} name="cars" id="cars" className='border-2 border-black group/edit invisible group-hover/item:visible'>
              <option value=''>...</option>
              <option value="done">DONE</option>
              <option value="todo">TODO</option>
              <option value="delete">DELETE</option>
            </select>
          </div>
        </div>
      )
    })
  }

  return (
    <div className="todo_inprogress h-full">
      <div className="bg-gray-200 rounded-sm pb-2">
        <div className='w-full bg-blue-500 '>
          <h2 className='text-xl px-5 '>INPROGRESS</h2>
        </div>
        <div className="main_inprogress">
          <div className="bg-white m-4 h-full">
            {render_arrInprogress()}
          </div>
        </div>
      </div>
    </div>
  )
}
