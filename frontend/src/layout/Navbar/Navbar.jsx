import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='w-[300px] h-[150vh] bg-[#874CCC] shadow-[rgba(60,64,67,0.3)_0px_1px_2px_0px,rgba(60,64,67,0.15)_0px_2px_6px_2px]'>
                <div className="flex-col flex items-center justify-center">
                    <Link to={"/"} className='mt-[50px] flex items-center gap-[10px]'>
                        <img className='w-[50px] h-[50px]' src="https://www.butagrup.com.tr/assets/images/favicon-194x194.png" alt="" />
                        <p className='font-poppins text-[32px] font-semibold text-white'>Buta Group</p>
                    </Link>
                    <div className="flex flex-col mt-[50px]">
                        <NavLink className="font-poppins font-[500] cursor-pointer flex items-center justify-center text-white text-[22px] w-[300px] h-[50px] border-t-[white border-t border-solid hover:bg-[#86469C] hover:text-[white] last:border-b-[black] last:border-b last:border-solid" to={""}><i className="fa-solid fa-user mr-2.5"></i>  Members</NavLink>
                        <NavLink className="font-poppins font-[500] text-white cursor-pointer flex items-center justify-center text-[22px] w-[300px] h-[50px] border-t-[white] border-t border-solid hover:bg-[#86469C]  hover:text-[white] last:border-b-[white] last:border-b last:border-solid" to={"/events"}><i className="fa-solid fa-calendar-days mr-2.5"></i> Events</NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar