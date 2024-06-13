import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken =async (request: NextRequest) => {
    try {
       const token = request.cookies.get('token')?.value || ''
        const decodedToken:any = jwt.verify(token, 'mytokensecret');
        return await decodedToken.id;
    } catch (error) {
        throw new Error('Invalid token');
    }
}