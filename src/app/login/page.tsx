'use client'
import Link from "next/link"
import { useState } from "react"

export default function Login() {
    const [user, setUser] = useState({
        email: '',
        password: '',
        username: ''
    })

    const onSignIn = async () => {
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
            <h1 className="text-2xl font-bold text-center">Sign In</h1>
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
            onClick={onSignIn}
                className=" rounded-lg bg-blue-500 p-2 text-white flex  items-center justify-center">
                Sign In
            </button>
            <br />
           <div>Not having an account?<Link href="/signup"> Sign Up</Link></div> 
            </div>
        </div>
    )
}