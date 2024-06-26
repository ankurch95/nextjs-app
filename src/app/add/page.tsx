"use client"
import Button from "@/component/button";
import Card from "@/component/card";
import InputWithLabel from "@/component/inputWithLabel";
import TopNavbar from "@/component/navbar";
import axios from "axios";
import { useState } from "react";

export default function Add() {
    const [notificationTitle, setNotificationTitle] = useState('');
    const [notificationDescription, setNotificationDescription] = useState('');


    const handleSubmit = (e: { preventDefault: () => void; target: { value: any; }[]; }) => {
        e.preventDefault();
        const name = e.target[0].value;
        const message = e.target[1].value;

        axios.post("http://localhost:4000/api", { name, message })
            .then((res) => {
                console.log(res)
            })

        console.log("submitted", name, message)
    }


    return (
        <div className="min-h-screen justify-center items-center">
            <div>
                <TopNavbar userEmail={""} />
            </div>

            <div className="min-h-screen flex justify-center items-center bg-slate-100">
                <Card>
                    <h1 className="text-2xl font-bold text-center">Send Notification</h1>
                    <form
                        className="flex flex-col gap-6 w-full sm:w-80"
                        onSubmit={handleSubmit}>
                        <div className="space-y-1">
                            <InputWithLabel
                                label='Notification Title'
                                placeholder='Enter Title'
                                value={notificationTitle}
                                type='text'
                                id='name'
                                onChange={(e) => setNotificationTitle(e.target.value)}
                            />
                        </div>

                        <div className="space-y-1">
                            <InputWithLabel
                                label='Notification Description'
                                placeholder='Enter Description'
                                value={notificationDescription}
                                type='text'
                                id='name'
                                onChange={(e) => setNotificationDescription(e.target.value)}
                            />
                        </div>
                        <Button title='Send Notification' />
                    </form>
                </Card>
            </div>

        </div>
    );
}
