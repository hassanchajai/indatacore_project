import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { login_obj } from '../../features/auth/reducer'
import { routeNames, URL } from '../../helpers'
import InputField from '../InputField'
import { useNavigate } from 'react-router-dom'

const SignIn = ({ user, login }) => {
    const navigate = useNavigate();
    const handleOnSubmit = (e) => {
        e.preventDefault()
        axios.post(`${URL}/users/signin`, { email: e.target.email.value, password: e.target.password.value }).then(res => {
            Swal.fire({
                title: 'Success',
                text: 'Login Successful',
                type: 'success',
                confirmButtonText: 'OK'
            })
            localStorage.setItem('token', res.data.token)
            login(res.data.user)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            navigate(routeNames.dashboard)
        }).catch(err => {
            Swal.fire({
                title: 'Error',
                text: err.response.data.message,
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        });
    }
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
                            <form onSubmit={handleOnSubmit}>
                                <InputField name={"email"} type={"email"} placeholder="write something ..." onChange={e => { }} >
                                    Email Address
                                </InputField>
                                <InputField name={"password"} type={"password"} placeholder="write something ..." onChange={e => { }} >
                                    Password
                                </InputField>
                                <div className="my-3">
                                    <Link to={routeNames.forget} className="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 ">Forgot password?</Link>
                                </div>

                                <div className="mb-6">
                                    <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none">Sign in</button>
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
const mapStateToProps = (state) => {
    return {
        user: state.auth.user
    }
}
const mapdispatchtoprops = (dispatch) => ({
    login: (user) => dispatch(login_obj(user))
})
export default connect(mapStateToProps, mapdispatchtoprops)(SignIn)