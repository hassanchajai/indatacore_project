import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { AppHeader, AppSidebar } from '../components'
import { routeNames } from '../helpers'
// import {  } from '../components/AppHeader'

const DashboardLayout = ({ children, name, icon }) => {
    const navigate=useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem("token")) navigate(routeNames.signin)
    },[])
    return (
        <div className="h-screen w-screen flex bg-gray-200">
            <AppSidebar/>
            <main >
            <AppHeader name={name} icon={icon} />
                <div className='px-4 py-2' style={{
                    // marginTop: "-30px"
                }}>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default DashboardLayout