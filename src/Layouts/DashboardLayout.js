import React from 'react'
import { AppHeader, AppSidebar } from '../components'
// import {  } from '../components/AppHeader'

const DashboardLayout = ({ children, name, icon }) => {
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