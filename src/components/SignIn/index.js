import React from 'react'
import { Link } from 'react-router-dom'
import { routeNames } from '../../helpers'
import InputField from '../InputField'

const SignIn = () => {
    return (
        <>
            <div className="flex items-center min-h-screen bg-white  ">
                <div className="container mx-auto">
                    <div className="max-w-md mx-auto my-10">
                        <div className="text-center">
                            <h1 className="my-3 text-3xl font-semibold text-gray-700 ">Sign In</h1>
                            {/* <p className="text-gray-500 ">Welcome in new adventure</p> */}
                        </div>
                        <div className="m-7">
                            <form action="">
                                <InputField name={"email"} type={"email"} placeholder="write something ..." value={"test"} onChange={e => console.log(e)} >
                                    Email Address
                                </InputField>
                                <InputField name={"password"} type={"password"} placeholder="write something ..." value={"password"} onChange={e => console.log(e)} >
                                    Password
                                </InputField>
                                <div className="my-3">
                                    <Link to={routeNames.forget} className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 ">Forgot password?</Link>
                                </div>

                                <div className="mb-6">
                                    <button type="button" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Sign in</button>
                                </div>
                                <p className="text-sm text-center text-gray-400">  Already have an account?  <Link to={routeNames.signup} className="text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800">Sign In</Link>.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default SignIn