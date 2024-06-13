import { connect } from '@/app/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

connect()

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email, password } = body;
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }
        // return NextResponse.json({
        //     message: 'User logged in successfully',
        //     success: true,
        //     data: user
        // }, { status: 200 });

        const  tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        const token = await jwt.sign(tokenData, 'mytokensecret', { expiresIn: '1d' });
        const nextRes = NextResponse.json({ 
            message: 'User logged in successfully',
            success: true
         });

         nextRes.cookies.set('token', token,{
            httpOnly: true
        });
         return nextRes;

    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }    
}

