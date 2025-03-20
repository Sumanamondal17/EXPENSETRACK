import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete_icon.png'

export const Expenses = ({text,id,isComplete,deleteExpense,toggle}) => {
    return (
        <div onClick={()=>{toggle(id)}} className='expensecover'>
            <div className='flex flex-1 items-center gap-5 bg-slate-400 cursor-pointer  h-17 rounded-full'>
                <img src={isComplete  ? tick : not_tick} alt="" className='image' />
                <p className={`ml-4 text-[25px] font-semibold text-slate-700 decoration-amber-700 ${isComplete?"line-through " :""}`}>{text}</p>
            </div>
            <img onClick={()=>{deleteExpense(id)}} src={delete_icon} alt="" className='deleteimage'  />
        </div>
    )
}