import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../redux/api/authApi'
import { useDispatch } from 'react-redux'
import { useForm } from '@mantine/form'
import { Loader, PasswordInput, TextInput } from '@mantine/core'

const Login = () => {
    const [unAuthorized, setUnAuthorized] = useState(false)

    const navigate = useNavigate()

    const [login, { isLoading }] = useLoginMutation()

    const dispatch = useDispatch()

    const form = useForm({
        initialValues: {
            username: '', // mod
            password: '', // 1234567
        },

        validate: {
            username: (value) => value.length < 3 ? "Username must have at least 3 letters" : null,
            password: (value) => value.length < 6 ? "Password must have at least 6 letters" : null,
        },
    });

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            {unAuthorized && (
                <div className="bg-red-500 px-5 py-3 rounded mb-10">
                    <h1 className="text-2xl font-semibold">Wrong Username or Password!</h1>
                </div>
            )}
            <form onSubmit={form.onSubmit(async (values) => {
                try {
                    const data = await login(values) // returns promise, we need to use object destructuring
                    console.log(data)
                    //console.log(data?.error.data.error)
                    //console.log(values)

                    if (data?.error.data.error === 'Unauthorized') {
                        setUnAuthorized(true)
                    }
                } catch (error) {
                    console.log(error)
                }
            })} className='flex flex-col w-[500px] gap-10 p-5 shadow-lg'>

                <h2 className="text-gray-900 text-2xl font-semibold">Login</h2>

                <TextInput
                    name='username'
                    label='User Name'
                    {...form.getInputProps('username')}
                    placeholder='Enter your username' />

                <PasswordInput
                    name='password'
                    label='Password'
                    {...form.getInputProps('password')}
                    placeholder='Enter your password' />

                <div className="flex gap-7">
                    <p className='select-none text-zinc-800'>Are you a new user?</p>
                    <Link to={'/register'}>
                        <p className="cursor-pointer hover:underline select-none text-cyan-900">Register</p>
                    </Link>
                </div>

                <button type="submit"
                    disabled={isLoading && true}
                    className='px-5 py-2 bg-stone-700 text-white rounded'>
                    {isLoading ? (<Loader className='mx-auto block' />) : "Login"}
                </button>

            </form>
        </div>
    )
}

export default Login
