import { Metadata } from "next"
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Cars24',
    description: 'Cars24 Page',
}

export default function Cars24Layout({ children }: { children: React.ReactNode }) {
    return children
}