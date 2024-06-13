import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
const path = request.nextUrl.pathname
const isPublicPath = path==='/login' || path==='/signup'
const token = request.cookies.get('token')?.value
// return (request.cookies.get('token')?.value && isPublicPath) ? NextResponse.redirect(new URL('/profile', request.nextUrl)) : NextResponse.redirect(new URL('/signup', request.nextUrl))

if (token && isPublicPath) {
    return NextResponse.redirect(new URL('/profile', request.nextUrl))
}

if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
}

}
 
export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/signup',
  ],
}