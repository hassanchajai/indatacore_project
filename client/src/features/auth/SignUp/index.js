import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { SignUp } from '../../../components'
import { routeNames } from '../../../helpers'

const SignUpPage = () => {
    const navigate=useNavigate()
    useEffect(()=>{
        if(localStorage.getItem("token")) navigate(routeNames.dashboard)
    },[])
    return (
        <SignUp />
    )
}

export default SignUpPage