import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Profile',
    description: 'My Profile Page | Next.js'
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return children
}