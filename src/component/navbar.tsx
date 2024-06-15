import { Container, Nav, Navbar } from "react-bootstrap"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoLogOutOutline } from "react-icons/io5";

type Props = {
    userEmail: string,
    handleShow: () => void,
    onLogout    : () => void
}
export default function TopNavbar({ userEmail, handleShow,onLogout }: Props) {
    return (
        <Navbar  bg="light" data-bs-theme="light" className="bg-white shadow-lg justify-between px-20 py-3">
            <Container >
                {/* <Navbar.Brand onClick={handleShow} href="#home" className="ms-12">{<RxHamburgerMenu />}</Navbar.Brand> */}
                <Nav className="me-auto">
                    <Nav.Link href="#home" className="text-black text-lg">Paytm</Nav.Link>
                    {/* <Nav.Link href="#features" className="text-black text-lg">Features</Nav.Link>
                    <Nav.Link href="#pricing" className="text-black text-lg">Pricing</Nav.Link> */}
                </Nav>
            </Container>

            <Nav.Link href={`/profile/${userEmail}`} className="me-2">{userEmail}</Nav.Link>

            <Nav.Link  onClick={onLogout} className="me-5">
                <IoLogOutOutline/>
            </Nav.Link>
        </Navbar>
    )
}