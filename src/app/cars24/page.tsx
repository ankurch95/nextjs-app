"use client"
import CustomDropdown from "@/component/customNavDropdown";
import TopNavbar from "@/component/navbar";
import { buyMenu } from "@/helpers/jsonData";
import { useState } from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function Cars24() {
    const [userEmail, setUserEmail] = useState<string>('')

    return (
        <div className="min-h-screen bg-white">




            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">Cars 24</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">


                        <CustomDropdown />



                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>




        </div>
    )
}