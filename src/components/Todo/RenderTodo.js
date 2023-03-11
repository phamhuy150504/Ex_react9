import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add_todo, change_select_todo } from '../../redux/actions/Action_Todo'
import { message } from 'antd';


export default function Render_Todo({ list_todo }) {
  // USE HOOKS 
  const [input_value, setInput_value] = useState({
    todo: '',
    id: ''
  })

  const dispatch = useDispatch()

  const ref_input = useRef()
  const [input_create, setInput_create] = useState(true)

  useEffect(() => {
    !input_create && ref_input.current.focus()
  }, [input_create])

  // HANDLE EVENTS 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input_value.id === '') {
      dispatch(add_todo({ ...input_value, id: Date.now() }))
    } else {
      dispatch(add_todo({ ...input_value }))

    }
    message.success({
      type: 'success',
      content: `Success ! `,
    })

    setInput_value({ id: '', todo: '' })
  }

  const handleChange = (e) => {
    const { value } = e.target
    setInput_value({ ...input_value, todo: value })
  }

  const handleOnclick = () => {
    setInput_create(!input_create)
  }

  const handleChangeSelect = (e, todo) => {
    const { value } = e.target
    dispatch(change_select_todo(value, todo))

    value === 'edit-name' && setInput_value({ todo: todo.todo, id: todo.id })
  }

  const handleOnclickEdit = (e, todo) => {
    const { value } = e.target
    value === 'edit-name' && setInput_value({ todo: todo.todo, id: todo.id })
  }

  // RENDER
  const render_todolist = () => {
    return list_todo.map(item => {
      const { todo, id } = item
      return (
        <div key={id} className='todo_item grid grid-cols-2  text-right p-2 hover:bg-slate-300 duration-200 group/item border-b-2'>
          <p className='text-left'>{todo}</p>
          <div className='todo_select'>
            <select onClick={(e) => handleOnclickEdit(e, item)} onChange={(e) => handleChangeSelect(e, item)} name="cars" id="cars" className='border-2 border-black group/edit invisible group-hover/item:visible'>
              <option value='' >...</option>
              <option value="inprogress" >INPROGRESS</option>
              <option value="done">DONE</option>
              <option value="delete">DELETE</option>
              <option value="edit-name">EDIT NAME</option>
            </select>
          </div>
        </div>
      )
    })
  }

  return (
    <div className="todo">
      <div className="list_todo ">
        <div className="bg-gray-200 rounded-sm h-full">
          <div className='w-full bg-orange-500 '>
            <h2 className='text-xl px-5 '>TODO</h2>
          </div>
          <div className="main_todo pb-4">
            <div className="bg-white m-4 h-full ">
              {render_todolist()}
            </div>
            <form onSubmit={handleSubmit} className='w-full border-t-2 border-b-2 hover:bg-slate-300 duration-200 border-black py-1 ml-f cursor-pointer check_create' >
              {input_create ? <p onClick={handleOnclick} className='w-full'>+ Create </p>
                : <input value={input_value.todo} ref={ref_input} type="text" onChange={handleChange} className="w-full outline-none focus:outline-none pl-2" />}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
