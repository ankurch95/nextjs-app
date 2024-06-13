'use client'
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

export default function Login() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [user, setUser] = useState({
        email: '',
        password: '',
        username: '',
        passwordVisibility: false
    })

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user.email])

    const onSignIn = async () => {
        
        try {
            setLoading(true)
            const res = await axios.post('/api/users/login', user)
            console.log(res);
            toast.success('User logged in successfully', { duration: 2000,position: 'bottom-right' })
            router.replace('/profile')
        } catch (error) {
            toast.error('Invalid credentials', { duration: 2000,position: 'bottom-right' })
            setLoading(false)
        } finally {
            setLoading(false)
        } 
    
    }

    return (
        <div className=" min-h-screen items-center justify-center flex-col flex">
            <div className="border border-white bg-white p-10 px-15 rounded-lg shadow-lg flex-col flex">
                <h1 className="text-2xl font-bold text-center">Sign In</h1>
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
                    onClick={onSignIn}
                    className=" rounded-lg bg-blue-500 p-2 text-white flex  items-center justify-center">
                   {buttonDisabled ? "Sign In" : "Loading..."}
                </button>
                <br />
                <div>Not having an account?<Link href="/signup"> Sign Up</Link></div>
            </div>
        </div>
    )
}