'use client';

import { useState } from 'react'
import { Divide, Menu, X } from "react-feather"
import { usePathname } from "next/navigation"
import Link from "next/link"
import LoginButton from './LoginButton';

const Header = () => {

    const path = usePathname()

    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="bg-gray-950 text-white py-5 shadow-lg fixed w-full top-0 z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
                {/* Logo */}
                <Link href="/" className='flex flex-row space-x-1'>
                    <Divide />
                    <div>
                        Copy Trading Agent
                    </div>
                </Link>


                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-[40px]   ">
                    <Link href="/" className={`  ${path === "/" ? "text-purple-400" : "hover:text-purple-400"} `}>
                        Home
                    </Link>
                    <Link href="/hackathons" className={`  ${path === "/hackathons" ? "text-purple-400" : "hover:text-purple-400"} `}>
                        Hackathons
                    </Link>
                    <Link href="https://github.com/pisuthd/copy-trading-agent" target="_blank" className={`  hover:text-purple-400 `}>
                        Github
                    </Link>
                </nav>

                {/* Connect Wallet Button */}
                <div className='hidden md:flex'>
                    <LoginButton />
                </div>


                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gray-900 text-white py-4">
                    <nav className="flex flex-col items-center space-y-4">
                        <Link href="/" className="hover:text-purple-400 transition">
                            Home
                        </Link>
                        <Link href="/hackathons" className="hover:text-purple-400 transition">
                            Hackathons
                        </Link>
                        <Link href="https://github.com/pisuthd/copy-trading-agent" target="_blank" className="hover:text-purple-400 transition">
                            Github
                        </Link>
                        <LoginButton />
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Header