import { Container, Nav, Navbar } from "react-bootstrap"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogOutOutline } from "react-icons/io5";

type Props = {
    userEmail: string,
    handleShow?: () => void,
    onLogout?    : () => void
}
export default function TopNavbar({ userEmail, handleShow,onLogout }: Props) {
    return (
        <Navbar  bg="light" data-bs-theme="light" className="bg-white shadow-lg justify-between px-20 py-3">
            <Container >
                {/* <Navbar.Brand onClick={handleShow} href="#home" className="ms-12">{<RxHamburgerMenu />}</Navbar.Brand> */}
                <Nav className="me-auto">
                    <Nav.Link href="/profile" className=" text-lg">Paytm</Nav.Link>
                     <Nav.Link href="/cars24" className=" text-lg">Cars 24</Nav.Link>
                   <Nav.Link href="/payment" className="text-lg">Payment</Nav.Link>
                </Nav>
            </Container>

            <Nav.Link href={`/profile/${userEmail}`} className="me-2">{userEmail}</Nav.Link>

            <Nav.Link  onClick={onLogout} className="me-5">
                <IoLogOutOutline/>
            </Nav.Link>
        </Navbar>
    )
}