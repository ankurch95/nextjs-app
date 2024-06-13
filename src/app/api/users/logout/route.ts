import { NextResponse } from "next/server";

export async function GET() {
    try {
        const response = NextResponse.json({
            message: 'User logged out successfully',
            success: true
        },{ status: 200 });

        response.cookies.delete('token');
        // response.cookies.set('token', '', { 
        //     httpOnly: true,
        //     expires: new Date(0)
        //  });
        return response; 

    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
}