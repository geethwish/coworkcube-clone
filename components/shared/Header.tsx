"use client"
import Image from 'next/image';
import Link from 'next/link';
import { MdClose, MdOutlineMenu } from "react-icons/md";
import { Button } from '../ui/button';
import { useState } from 'react';
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const handleMenuOpen = () => {
        setIsOpen((prev) => !prev)
    }

    console.log(pathname);

    return (
        <div className='relative'>
            <header className="bg-white text-black px-4 flex items-center h- border-gray-200 border-b-2 h-20">
                <nav className="flex justify-between items-center w-full lg:container">
                    <div className="text-lg font-bold">
                        <Link href="/"><Image src={"/images/logo.webp"} width={222} height={29} alt={'logo'}></Image></Link>
                    </div>
                    <div className="space-x-4 max-md:hidden">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                    {
                        isOpen ? <Button variant={"link"} className='hidden max-md:block text-lightPrimary text-2xl' onClick={handleMenuOpen}> <MdClose /></Button> : <Button variant={"link"} className='hidden max-md:block text-lightPrimary text-2xl' onClick={handleMenuOpen}> <MdOutlineMenu /></Button>
                    }
                </nav>
            </header>
            {
                isOpen && <div className='w-full pd-4 bg-white flex flex-col text-sm'>
                    <Link href={"/blog"} className='p-4 bg-slate-200 text-blue-800'>Blog</Link>
                    <Link href={"/"} className='p-4'>Home</Link>
                </div>
            }
        </div>

    );
};

export default Header;