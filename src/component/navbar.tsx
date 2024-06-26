import { Container, Nav, Navbar } from "react-bootstrap"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogOutOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import router from "next/router";

type Props = {
    handleShow?: () => void,
}
export default function TopNavbar({  handleShow }: Props) {
    const [userEmail, setUserEmail] = useState<string>('')
    const [buttonDisabled, setButtonDisabled] = useState<boolean>(true)
    
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
        <Navbar  bg="light" data-bs-theme="light" className="bg-white shadow-lg justify-between px-20 py-3">
            <Container >
                {/* <Navbar.Brand onClick={handleShow} href="#home" className="ms-12">{<RxHamburgerMenu />}</Navbar.Brand> */}
                <Nav className="me-auto">
                    <Nav.Link href="/profile" className=" text-lg">Paytm</Nav.Link>
                     <Nav.Link href="/cars24" className=" text-lg">Cars 24</Nav.Link>
                   <Nav.Link href="/payment" className="text-lg">Payment</Nav.Link>
                   <Nav.Link href="/add" className="text-lg">Notification</Nav.Link>
                </Nav>
            </Container>

            <Nav.Link href={`/profile/${userEmail}`} className="me-2">{userEmail}</Nav.Link>

            <Nav.Link  onClick={onLogout} className="me-5">
                <IoLogOutOutline/>
            </Nav.Link>
        </Navbar>
    )
}