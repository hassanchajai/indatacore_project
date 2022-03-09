/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { routeNames } from '../../helpers'
import Avatar from '../Avatar'

export default ({ name, icon }) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const navigate = useNavigate()
    const menuRef = React.useRef(null);
    const handleClickOutside = (e) => {
        if (
            menuRef.current &&
            !menuRef.current.contains(e.target) 
        ) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside, true);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside, true);
        };
    }, []);
    const handleonSignOut = () => {
        localStorage.removeItem('token')
        navigate(routeNames.signin)
    }
    return (
        <header className="flex items-center justify-between bg-white text-gray-700 shadow p-4" style={{
            minWidth: "calc( 100vw - 69px )",
            height: "60px"
        }}>
            <h2 className='font-bold text-lg text-blue-700'>
                <i className={"mr-2 " + icon}></i> {name}
            </h2>
            <div className="py-5">

                <div className="relative my-32">
                    <div className='z-100 relative ' onClick={() => setIsOpen(prev => !prev)}>
                        <Avatar ></Avatar>
                        {/* <i className='fa fa-chevron-down text-gray ml-2 text-sm mt-4'></i> */}
                    </div>
                    {
                        isOpen && (<>  <div class="fixed inset-0 h-full w-full z-10"></div>
                            <div ref={menuRef} className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20" onClick={() => setIsOpen(prev => !prev)}>
                                <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                                    your profile
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                                    Your projects
                                </a>

                                <a href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                                    Settings
                                </a>
                                <a onClick={handleonSignOut} href="#" className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white">
                                    Sign Out
                                </a>
                            </div>
                        </>
                        )
                    }
                </div>
            </div>
        </header>
    )
}
