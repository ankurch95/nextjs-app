'use client';
import { useState } from 'react';
import Script from 'next/script';
import Button from '@/component/button';
import InputWithLabel from '@/component/inputWithLabel';
import Card from '@/component/card';


function Payment() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('0');
    const [currency, setCurrency] = useState('INR');
    const createOrderId = async () => {
        try {
            const response = await fetch('/api/order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: parseFloat(amount) * 100 }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            return data.orderId;
        } catch (error) {
            console.error('There was a problem with your fetch operation:', error);
        }
    };
    const processPayment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const orderId: string = await createOrderId();
            const options = {
                key: 'YOUR_RAZORPAY_KEY',
                amount: parseFloat(amount) * 100,
                currency: currency,
                name: 'name',
                description: 'description',
                order_id: orderId,
                handler: async function (response: any) {
                    const data = {
                        orderCreationId: orderId,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,
                    };

                    const result = await fetch('/api/verify', {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: { 'Content-Type': 'application/json' },
                    });
                    const res = await result.json();
                    if (res.isOk) alert("payment succeed");
                    else {
                        alert(res.message);
                    }
                },
                prefill: {
                    name: name,
                    email: email,
                },
                theme: {
                    color: '#3399cc',
                },
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.on('payment.failed', function (response: any) {
                alert(response.error.description);
            });
            paymentObject.open();
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <Script
                id="razorpay-checkout-js"
                src="https://checkout.razorpay.com/v1/checkout.js"
            />

            <div className=" min-h-screen items-center justify-center flex-col flex">
                <Card>
                    <form
                        className="flex flex-col gap-6 w-full sm:w-80"
                        onSubmit={processPayment}>
                        <div className="space-y-1">
                            <InputWithLabel
                                label='Name'
                                placeholder='Enter name'
                                value={name}
                                type='text'
                                id='name'
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="space-y-1">
                            <InputWithLabel
                                label='Email'
                                placeholder='Enter email'
                                value={email}
                                type='email'
                                id='email'
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="space-y-1">
                            <InputWithLabel
                                label='Amount'
                                placeholder='Enter amount'
                                value={amount}
                                type='number'
                                id='amount'
                                onChange={(e) => setAmount(e.target.value)} />
                        </div>
                        <Button title='Pay Now' />
                    </form>
                </Card>
            </div>
        </>
    );
}

export default Payment;