import React from 'react'
//import { Link } from 'react-router-dom'
import { NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const navigate=useNavigate()


    return (
        <>
        <div className='navbar'>
            <div className='logo'>
            <img  src="https://www.expensetracker.site/logo.jpg" alt="" />
            <h1 >ExpenseTracker</h1>
            </div>
            
            <ul >
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/tracker'><li>Tracker</li></NavLink>
                <NavLink to='/percent'><li>Percent</li></NavLink>
            </ul>
            <button onClick={()=>navigate('/tracker')}>Start Now</button>
        </div>
        </>
    )
}