/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { NavLink } from 'react-router-dom'
import { routeNames } from '../../helpers'

export default () => {
    return (
        <aside
            className="flex flex-col items-center  bg-white text-gray-700 shadow min-h-full">

            <ul className='my-auto'>

                <li className="hover:bg-gray-100">
                    <NavLink
                        to="/"
                        data-tip="Dashboard"
                        className="h-16 px-6 flex flex justify-center items-center w-full
                        focus:text-orange-500">
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <polyline
                                points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                            <path
                                d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0
                                2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0
                                0-1.79 1.11z"></path>
                        </svg>

                    </NavLink>
                </li>

                <li className="hover:bg-gray-100">
                    <NavLink
                        to={routeNames.products}
                        data-tip="Products"

                        className="h-16 px-6 flex flex justify-center items-center w-full
                        focus:text-orange-500">
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <path
                                d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>

                    </NavLink>
                </li>

                <li className="hover:bg-gray-100">
                    <NavLink
                        data-tip="Upload"
                        to={routeNames.upload}
                        className="h-16 px-6 flex flex justify-center items-center w-full
                        focus:text-orange-500">

                     <i className="fas fa-upload"></i>

                    </NavLink>
                </li>

                <li className="hover:bg-gray-100">
                    <a
                        href="."
                        className="h-16 px-6 flex flex justify-center items-center w-full
                        focus:text-orange-500">
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path
                                d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0
                                2-1.61L23 6H6"></path>
                        </svg>

                    </a>
                </li>

                <li className="hover:bg-gray-100">
                    <a
                        href="."
                        className="h-16 px-6 flex flex justify-center items-center w-full
                        focus:text-orange-500">
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path
                                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1
                                0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0
                                0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2
                                2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0
                                0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1
                                0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0
                                0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65
                                0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0
                                1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0
                                1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2
                                0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0
                                1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0
                                2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0
                                0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65
                                1.65 0 0 0-1.51 1z"></path>
                        </svg>
                    </a>
                </li>

                <li className="hover:bg-gray-100">
                    <a
                        href="."
                        className="h-16 px-6 flex flex justify-center items-center w-full
                        focus:text-orange-500">
                        <svg
                            className="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                            <path
                                d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                    </a>
                </li>

            </ul>



        </aside>
    )
}
