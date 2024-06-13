"use client"
import React, { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"

export default function SignUp() {
    const router = useRouter()
    const [user, setUser] = useState({
        email: '',
        password: '',
        username: ''
    })

    const onSignUp = async () => {
        router.replace('/profile')
        // try {
        //     const res = await axios.post('http://localhost:3000/api/signup', user)
        //     console.log(res)
        // } catch (error) {
        //     console.log(error)
        // }
    }
    return (
        <div className=" min-h-screen items-center justify-center flex-col flex">
            <div className="border border-white bg-white p-10 px-15 rounded-lg shadow-lg flex-col flex">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <br />
                <label htmlFor="username" className="font-semibold">Username</label>
                <input
                    className="border border-gray-300 p-2 rounded-lg"
                    id="username"
                    value={user.username}
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUser({ ...user, username: e.target.value })} />
                <br />

                <label htmlFor="email" className="font-semibold">Email</label>
                <input
                    className="border border-gray-300 p-2 rounded-lg"
                    id="email"
                    value={user.email}
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setUser({ ...user, email: e.target.value })} />
                <br />

                <label htmlFor="password" className="font-semibold">Password</label>
                <input
                    className="border border-gray-300 p-2 rounded-lg"
                    id="password"
                    value={user.password}
                    type="text"
                    placeholder="Password"
                    onChange={(e) => setUser({ ...user, password: e.target.value })} />
                <br />
                <button
                    onClick={onSignUp}
                    className=" rounded-lg bg-blue-500 p-2 text-white flex  items-center justify-center">
                    Sign Up
                </button>
                <br />
                <div>Already have an account?<Link href="/login"> Sign In</Link></div>
            </div>
        </div>
    )
}