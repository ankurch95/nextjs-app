"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"
import toast from "react-hot-toast"

export default function SignUp() {
    const router = useRouter()
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        email: '',
        password: '',
        username: '',
        passwordVisibility: false
    })


    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user.email])


    const onSignUp = async () => {
        try {
            setLoading(true)
            const res = await axios.post('/api/users/signup', user)
            toast.success('User created successfully', { duration: 2000, position: 'bottom-right' })
            router.replace('/login')
        } catch (error) {
            toast.error('Invalid credentials', { duration: 2000, position: 'bottom-right' })
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className=" min-h-screen items-center justify-center flex-col flex">
            <div className="border border-white bg-white p-10 px-15 rounded-lg shadow-lg flex-col flex">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <br />
                <label htmlFor="username" className="font-semibold">Username</label>
                <input
                    className="border border-gray-300 p-2 rounded-lg mt-1"
                    id="username"
                    value={user.username}
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUser({ ...user, username: e.target.value })} />
                <br />

                <label htmlFor="email" className="font-semibold">Email</label>
                <input
                    className="border border-gray-300 p-2 rounded-lg mt-1"
                    id="email"
                    value={user.email}
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setUser({ ...user, email: e.target.value })} />
                <br />

                <label htmlFor="password" className="font-semibold">Password</label>
                <input
                    className="border border-gray-300 p-2 rounded-lg mt-1"
                    id="password"
                    value={user.password}
                    type={user.passwordVisibility ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e) => setUser({ ...user, password: e.target.value })} />

                <div className="flex items-center content-center mt-2">
                    <input
                        type="checkbox"
                        checked={user.passwordVisibility}
                        className="size-5"
                        id="passwordVisibility"
                        onChange={(e) => setUser({ ...user, passwordVisibility: e.target.checked })} >

                    </input>
                    <div className="ml-2 font-normal text-sm">Show Password</div>
                </div>
                <br />
                <button
                    onClick={onSignUp}
                    className=" rounded-lg bg-blue-500 p-2 text-white flex  items-center justify-center">
                    {buttonDisabled ? 'Sign Up' : 'Loading...'}
                </button>
                <br />
                <div>Already have an account?<Link href="/login"> Sign In</Link></div>
            </div>
        </div>
    )
}