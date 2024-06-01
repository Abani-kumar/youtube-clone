import React, { useState } from 'react'
import { AiOutlineSearch} from 'react-icons/ai';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../assests/ytlogo.png"

const Navbar = () => {

    const [value,setValue]=useState('');
    const navigate=useNavigate();

    function changeHandler(event){
        setValue(event.target.value);
    }
    
    
    function submitHandler(event){
        event.preventDefault();
        setValue("");
        navigate(`/search/${value}`);
    }
    
    
  return (
    <div className='lg:pl-5 lg:pr-5 pl-0 pr-0 grid grid-cols-2 lg:flex justify-between items-center bg-black  text-white text-2xl'>
        <div>
            <NavLink to="/"><img src={logo} className='h-[25px]'/></NavLink>
        </div>
        <div className='flex gap-1 bg-richblack-700 px-3 rounded-md'>
            <form onSubmit={submitHandler}>
               <input type='text' className='border-2 border-slate-500 text-white w-[30vw] h-8 px-5 py-3 bg-transparent rounded-lg text-sm outline-none' placeholder="Search..."  onChange={changeHandler} value={value} />
                <button className='relative top-1'><AiOutlineSearch/></button>
            </form>
        </div>
    </div>
  )
}

export default Navbar