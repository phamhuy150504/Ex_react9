import React from 'react'
import { useDispatch } from 'react-redux'
import { change_select_todo } from '../../redux/actions/Action_Todo'
import { message } from 'antd';


export default function Render_Done({ list_done }) {
  // USE HOOK
  const dispatch = useDispatch()

  // HANDLE EVENTS
  const handleChangeSelect = (e, todo) => {
    const { value } = e.target
    dispatch(change_select_todo(value, todo))
    message.success({
      type: 'success',
      content: `Changed ${value}`,
    })
  }

  // RENDER
  const render_arrDone = () => {
    return list_done.map(item => {
      const { id, todo } = item
      return (
        <div key={id} className='main__done-todo grid grid-cols-2 text-right p-2 hover:bg-slate-300 duration-200 group/item border-b-2'>
          <p className='text-left'>{todo}</p>
          <div className='todo_select'>
            <select onChange={(e) => handleChangeSelect(e, item)} name="cars" id="cars" className='border-2 border-black group/edit invisible group-hover/item:visible'>
              <option value=''>...</option>
              <option value="inprogress">INPROGRESS</option>
              <option value="todo">TODO</option>
              <option value="delete">DELETE</option>
            </select>
          </div>
        </div>
      )
    })
  }

  return (
    <div className="todo_done h-full">
      <div className="bg-gray-200 rounded-sm pb-2">
        <div className='w-full bg-green-500 '>
          <h2 className='text-xl px-5 '>DONE</h2>
        </div>
        <div className="main_done">
          <div className="bg-white m-4 h-full">
            {render_arrDone()}
          </div>
        </div>
      </div>
    </div>
  )
}
