'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
    const pathname = usePathname()
    return (
        <nav>
            <Link href="/" className={ "mr-4 " + (pathname === "/" ? "font-bold" : "text-blue-500")}>
            Home
            </Link>
            <Link href="/about" className={ "mr-4 " + (pathname === "/about" ? "font-bold" : "text-blue-500")}>
            About
            </Link>
            <Link href="/products/1" className={ "mr-4 " + (pathname === "/products/1" ? "font-bold" : "text-blue-500")}>
            Product 1
            </Link>
        </nav>
    )
}