'use client'
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

export default function Profile() {
    const router = useRouter()
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true)
    const [userEmail, setUserEmail] = useState<string>('')

    useEffect(() => {        
        getUserData()
    },[])
   

     const  getUserData =async()=> {
        try {
            const response = await axios.get('/api/users/user')
            if (response.data) {
                setUserEmail(response.data.data.email)
            }
        } catch (error) {
            toast.error('Something went wrong.', { duration: 2000, position: 'bottom-right' })
        }
    }
   

    const onLogout = async () => {
        try {
            setButtonDisabled(!buttonDisabled)
            const response = await axios.get('/api/users/logout')
            setButtonDisabled(!buttonDisabled)
            console.log(response)
            toast.success('User logged out successfully', { duration: 2000, position: 'bottom-right' })

            router.replace('/login')
        } catch (error) {
            toast.error('Something went wrong.', { duration: 2000, position: 'bottom-right' })
            setButtonDisabled(!buttonDisabled)
        }

    }

    return (
        <div className=" min-h-screen items-center justify-center flex-col flex">
            <div>Logged in as: <Link href={`/profile/${userEmail}`}>{userEmail}</Link></div>
            <button
                onClick={onLogout}
                className=" rounded-lg bg-blue-500 p-2 text-white flex  items-center justify-center">
                {buttonDisabled ? 'Logout' : 'Loading...'}
            </button>
        </div>
    )
}