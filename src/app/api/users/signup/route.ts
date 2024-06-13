import { connect } from '@/app/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';

connect()

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { username, email, password } = body;
        const userCheck = await User.findOne({ email })
        if (userCheck) {
            return NextResponse.json({ error: 'User already exists' }, { status: 409 });
        }
        const hashedPassword = await bcryptjs.hash(password, 10);
        const user = new User({
            username,
            email,
            password: hashedPassword
        });
        await user.save();
        return NextResponse.json({
            message: 'User created successfully',
            success: true,
            data: user
        }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}