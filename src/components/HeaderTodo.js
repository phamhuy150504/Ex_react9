import React from 'react'
import {memo} from 'react'

function Header_Todo() {
    const padding_input = {
        paddingTop: '3px',
        paddingBottom: '5px'
    }

  return (
    <div className='bg-white  w-full text-black'>
        <div className="container mx-auto">
            <div className="flex flex-row w-full w-100 items-stretch py-3">
                <div className=' basis-1/5 text-3xl duration-300 text-slate-800 font-bold hover:text-slate-600 cursor-pointer'><h1>TODO</h1></div>
                <div className="basis-4/5 text-right ">
                    <input style={padding_input} type="text" className='border-black border-y-2 border-l-2  px-4' placeholder='Find Job ... ' />
                    <i className="fa fa-search border-black px-2 py-2 border-y-2 border-r-2 duration-300  mr-5 hover:bg-slate-500 hover:text-white"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default memo(Header_Todo)