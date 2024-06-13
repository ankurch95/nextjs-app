import { getDataFromToken } from "@/helpers/dataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/app/dbConfig/dbConfig";

connect()

export async function GET(request: NextRequest) {
    try {
        const userId: any = await getDataFromToken(request);
        const user = await User.findOne({ _id: userId }).select('-password');
        // console.log('user:::::',user);
        return NextResponse.json({
            message: 'User fetched successfully',
            success: true,
            data: user
        })
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 400 });
    }
}