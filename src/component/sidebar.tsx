import { Offcanvas } from "react-bootstrap";


type SidebarProps = {
    show: boolean
    handleClose: () => void
}
export default function Sidebar({ show, handleClose }: SidebarProps) {
    return (
        <div>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>My Next App</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}