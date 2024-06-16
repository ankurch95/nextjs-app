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
import { Card } from "react-bootstrap"



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

                        <button className="bg-blue-500 hover:bg-blue-700 text-white  hover:text-blue-900 font-bold py-3 px-4 rounded-full mt-5 w-6/12">
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

            <div className="min-h-screen bg-slate-100 pb-20">
                <div className="text-5xl font-semibold font-sans px-32 pt-16">Paytm Payment Instruments</div>
                <Card className="flex flex-row mx-32 shadow-lg mt-20 p-10 rounded-3xl">
                    <div className=" justify-center flex flex-col">
                        <div className="flex flex-row items-center mb-10">
                            <Image src="https://assetscdn1.paytm.com/images/catalog/view/307186/1615957674521.png"
                                alt="External Image"
                                unoptimized
                                width={100}
                                height={100}
                                className="rounded-2xl "
                            />

                            <div className="ml-5 text-2xl font-semibold">UPI Money <br /> Transfer</div>
                        </div>
                        <div className="text-5xl font-semibold font-sans mb-3">India's Most-loved {'\n'} Payments App</div>
                        <div className="text-xl font-sans">Recharge & pay bills, book flights & movie tickets, open a savings account, invest in stocks & mutual funds, and do a lot more.</div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white  hover:text-blue-900 font-bold py-3 px-4 rounded-full mt-5 w-6/12">
                            Download Paytm App
                        </button>
                    </div>

                    <Image src="https://assetscdn1.paytm.com/images/catalog/view_item/728702/1626342071104.png"
                        alt="External Image"
                        unoptimized
                        width={600}
                        height={100}
                        className="mb-10"
                    />
                </Card>
            </div>





            <div className="min-h-screen bg-white pb-20">
                <div className="text-5xl font-semibold font-sans px-32 pt-16">Paytm Payment Instruments</div>
                <Card className="flex flex-row mx-32 shadow-lg mt-20 p-10 rounded-3xl bg-slate-100">
                    <div className=" justify-center flex flex-col">
                        <div className="flex flex-row items-center mb-10">
                            <Image src="https://assetscdn1.paytm.com/images/catalog/view/307191/1715933037673.png"
                                alt="External Image"
                                unoptimized
                                width={250}
                                height={100}
                            />

                            {/* <div className="ml-5 text-2xl font-semibold">UPI Money <br /> Transfer</div> */}
                        </div>
                        <div className="text-5xl font-semibold font-sans mb-3">Want it?{<br />}
                            No more waiting for it.</div>
                        <div className="text-xl font-sans">With Postpaid Loan, your wishlist doesn't have to be on the waitlist. Shop for the things you want today and pay for them next month.</div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white  hover:text-blue-900 font-bold py-3 px-4 rounded-full mt-5 w-6/12">
                            Download Paytm App
                        </button>
                    </div>

                    <Image src="https://assetscdn1.paytm.com/images/catalog/view_item/850764/1715933416006.png"
                        alt="External Image"
                        unoptimized
                        width={600}
                        height={100}
                        className="mb-10"
                    />
                </Card>
            </div>







            <div className="min-h-screen bg-slate-100 pb-20 flex flex-row">
                <Card className="flex ml-32 mr-2 hover:shadow-2xl  mt-20 px-10 pt-20 rounded-3xl bg-white">
                    <div className=" justify-center flex flex-col">
                        <div className="flex flex-row items-center mb-10">
                            <Image src="https://assetscdn1.paytm.com/images/catalog/view_item/853975/1640242865113.png"
                                alt="External Image"
                                unoptimized
                                width={200}
                                height={100}
                            />
                        </div>
                        <div className="text-5xl font-semibold font-sans mb-3">Unlimited Cashback <br /> Every time</div>
                        <div className="text-xl font-sans">Paytm HDFC Bank Select Credit Card. A card with assured Cashback and incredible offers.</div>
                    </div>

                    <Image src="https://assetscdn1.paytm.com/images/catalog/view_item/853975/1640241561388.png"
                        alt="External Image"
                        unoptimized
                        width={500}
                        height={100}
                        className="mt-10"
                    />
                </Card>



                <Card className="flex ml-5 mr-32 hover:shadow-2xl  mt-20 px-10 pt-32 rounded-3xl bg-white">
                    <div className=" justify-center flex flex-col">
                        <div className="flex flex-row items-center mb-10">
                            <Image src="https://assetscdn1.paytm.com/images/catalog/view_item/853976/1640242163727.png"
                                alt="External Image"
                                unoptimized
                                width={200}
                                height={100}
                            />
                        </div>
                        <div className="text-5xl font-semibold font-sans mb-3">India’s Most <br />Sincere Credit Card</div>
                        <div className="text-xl font-sans">Paytm SBI Card SELECT - With Intelligent Features & Great Rewards that Never Expire</div>
                    </div>

                    <Image src="https://assetscdn1.paytm.com/images/catalog/view_item/853976/1626079147084.png"
                        alt="External Image"
                        unoptimized
                        width={500}
                        height={100}
                        className="mt-10"
                    />
                </Card>
            </div>


            <div className="min-h-screen flex flex-row ">
                <div className="min-h-screen bg-white flex justify-center items-center px-32" >
                    <div>
                        <Image
                            src="https://assetscdn1.paytm.com/images/catalog/view/308775/1653901470333.jpeg"
                            alt="External Image"
                            unoptimized
                            width={200}
                            height={100}
                           className="mb-10"
                        />
                        <div className="text-5xl font-semibold font-sans mb-3">Insurance made easy.</div>
                        <div className="text-xl font-sans">Buying insurance does not have to be tedious, time-consuming & confusing. Paytm Insurance removes the worry of getting insured by making it simple, convenient & easy-to-understand.</div>

                        <button className="bg-blue-500 hover:bg-blue-700 text-white  hover:text-blue-900 font-bold py-3 px-4 rounded-full mt-5 w-6/12">
                            Learn More
                        </button>
                    </div>
                </div>

                <div className="min-h-screen bg-white flex justify-center items-center px-32"  >
                    <Image
                        src="https://assetscdn1.paytm.com/images/catalog/view_item/788790/1653913927257.png"
                        alt="External Image"
                        unoptimized
                        width={1500}
                        height={100}
                    />
                </div>
            </div>

        </div>
    )
}