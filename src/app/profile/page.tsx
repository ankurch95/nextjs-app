'use client'
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import Sidebar from "@/component/sidebar"
import TopNavbar from "@/component/navbar"
import Image from "next/image"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MenuCard from "@/component/menuCard"
import { buyMenu, rechargeMenu } from "@/helpers/jsonData"



export default function Profile() {
    const router = useRouter()
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true)
    const [userEmail, setUserEmail] = useState<string>('')
    const [showTopBarIcon, setShowTopBarIcon] = useState<boolean>(true)
    const [show, setShow] = useState<boolean>(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        getUserData()
    }, [])


    const getUserData = async () => {
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
        <div className="min-h-screen bg-white">

            <div>
                <TopNavbar
                    userEmail={userEmail}
                    handleShow={handleShow}
                    onLogout={onLogout} />
            </div>

            <Sidebar
                show={show}
                handleClose={handleClose} />

            <div className="min-h-screen grid grid-cols-2 divide-x">


                <div className="min-h-screen bg-slate-100 flex justify-center items-center px-32" >
                    <div>
                        <Image src=
                            "https://assetscdn1.paytm.com/images/catalog/view/310944/1697527183231.png"
                            alt="External Image"
                            unoptimized
                            width={100}
                            height={100}
                            className="rounded-2xl mb-10"
                        />
                        <div className="text-5xl font-semibold font-sans mb-3">India's Most-loved {'\n'} Payments App</div>
                        <div className="text-xl font-sans">Recharge & pay bills, book flights & movie tickets, open a savings account, invest in stocks & mutual funds, and do a lot more.</div>

                        <button className="bg-blue-500 hover:bg-blue-700 text-white  hover:text-blue-900 font-bold py-2 px-4 rounded-full mt-5">
                            Download Paytm App
                        </button>
                    </div>
                </div>

                <div className="min-h-screen bg-white flex justify-center items-center px-32"  >
                    <Image src=
                        "https://assetscdn1.paytm.com/images/catalog/view_item/850762/1715933362922.png"
                        alt="External Image"
                        unoptimized
                        width={600}
                        height={100}
                        className="mb-10"
                    />
                </div>
            </div>


            <div className=" bg-sky-400 pt-10 pb-10">
                <div className="text-5xl font-semibold font-sans mb-3 px-32  text-white">
                    Recharge & Pay Bills on Paytm.
                </div>
                <Container>
                    <Row className="justify-center flex items-center content-center">
                        <MenuCard data={rechargeMenu} />
                    </Row>
                </Container>
            </div>


            <div className=" bg-blue-900 pt-10 pb-10">
                <div className="text-5xl font-semibold font-sans mb-3 px-32  text-white">
                    Book & Buy on Paytm.
                </div>
                <Container>
                    <Row className="justify-center flex items-center content-center">
                        <MenuCard data={buyMenu} />
                    </Row>
                </Container>
            </div>
        </div>
    )
}