import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const MainLayout = () => {
    return (
        <>
            <section className='flex'>
                <Navbar />
                <Outlet />
            </section>
        </>
    )
}

export default MainLayout