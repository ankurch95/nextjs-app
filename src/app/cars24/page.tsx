"use client"
import BootstrapCarousel from "@/component/bootstrapCarousel";
import SyncfusionChart from "@/component/charts/chart";
import SpineChart from "@/component/charts/spineChart";
import CustomDropdown from "@/component/customNavDropdown";
import TopNavbar from "@/component/navbar";
import { buyMenu } from "@/helpers/jsonData";
import Image from "next/image";
import { useState } from "react";
import { Button, Card, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";

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

            <div className="min-h-96 flex bg-black flex-col">

                <BootstrapCarousel />

                <div className="absolute bottom-72 left-28 text-xl flex flex-row">

                    <Card>
                        <Image src="https://fastly-production.24c.in/cars24/brand/maruti-suzuki.png"
                            alt="External Image"
                            unoptimized
                            width={70}
                            height={70}
                            className="py-3 px-2"
                        />
                    </Card>


                    <Card className="ml-5">
                        <Image src="https://fastly-production.24c.in/cars24/brand/hyundai.png"
                            alt="External Image"
                            unoptimized
                            width={70}
                            height={70}
                            className="py-3 px-2"
                        />
                    </Card>

                    <Card className="ml-5">
                        <Image src="https://fastly-production.24c.in/cars24/brand/honda.png"
                            alt="External Image"
                            unoptimized
                            width={70}
                            height={70}
                            className="py-3 px-2"
                        />
                    </Card>


                    <Card className="ml-5">
                        <Image src="https://fastly-production.24c.in/cars24/brand/renault.png"
                            alt="External Image"
                            unoptimized
                            width={70}
                            height={70}
                            className="py-3 px-2"
                        />
                    </Card>


                    <Card className="ml-5">
                        <Image src="https://fastly-production.24c.in/cars24/brand/tata.png"
                            alt="External Image"
                            unoptimized
                            width={70}
                            height={70}
                            className="py-3 px-2"
                        />
                    </Card>

                    <Card className="ml-5">
                        <Image src="https://fastly-production.24c.in/cars24/brand/mahindra.png"
                            alt="External Image"
                            unoptimized
                            width={70}
                            height={70}
                            className="py-3 px-2"
                        />
                    </Card>

                    <Card className="ml-5">
                        <Image src="https://fastly-production.24c.in/cars24/brand/ford.png"
                            alt="External Image"
                            unoptimized
                            width={70}
                            height={70}
                            className="py-3 px-2"
                        />
                    </Card>

                    <Card className="ml-5">
                        <Image src="https://fastly-production.24c.in/cars24/brand/kia_1660106259.png"
                            alt="External Image"
                            unoptimized
                            width={70}
                            height={70}
                            className="py-3 px-2"
                        />
                    </Card>


                    <Button
                        variant="primary"
                        className="text-sm font-semibold hover:shadow-lg text-white text-center items-center justify-center content-center py-2 px-3 rounded-2xl ml-5 bg-orange-600">
                        View All Cars
                    </Button>
                </div>

            </div>

            <div className="bg-white flex-col">
                <div>
                    <SyncfusionChart />
                </div>
                {/* <div>
                    <SpineChart />
                </div>
                 */}
            </div>
        </div>
    )
}