import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GiPlagueDoctorProfile } from 'react-icons/gi'
import { BsFillPeopleFill } from 'react-icons/bs'

const Navbar = () => {
    const navigate = useNavigate()

    const loginHandler = () => {
        navigate('/login')
    }

    const logoutHandler = () => {
        navigate('')
    }

    const signUpHandler = () => {
        navigate('/signup')
    }

    return (
        <div className='flex justify-between pt-5 pb-5 p-20 shadow-xl items-center bg-neutral-800'>
            <Link to={'/'}>
                <h1 className="text-2xl font-semibold text-cyan-300 hover:text-cyan-100">Spring React JWT</h1>
            </Link>

            <div className="flex gap-10 justify-center items-center">
                <div className="flex gap-7 items-center">
                    <div className="flex gap-3 items-center">
                        <GiPlagueDoctorProfile className='text-white' />
                        <p className='text-cyan-300 hover:text-cyan-100 '>User Name</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <BsFillPeopleFill className='text-white' />
                        <p className='text-cyan-300 hover:text-cyan-100'>Role</p>
                    </div>
                </div>

                <div className="flex gap-5 items-center">
                    <button onClick={loginHandler} className='px-4 py-1 bg-green-700 hover:bg-green-500 text-white rounded'>Login</button>
                    <button onClick={signUpHandler} className='px-4 py-1 bg-green-700 hover:bg-green-500 text-white rounded'>Sign Up</button>
                    <button onClick={logoutHandler} className='px-4 py-1 bg-red-700 hover:bg-red-500 text-white rounded'>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
