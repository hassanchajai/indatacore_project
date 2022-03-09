import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { SignIn } from '../../../components'
import { routeNames } from '../../../helpers'

const SignInPage = () => {
    const navigate=useNavigate()
    useEffect(()=>{
        if(localStorage.getItem("token")) navigate(routeNames.dashboard)
    },[])
    return (
       <SignIn />
    )
}

export default SignInPage