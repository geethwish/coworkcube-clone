"use client"
import React from 'react'
import { Button } from '../ui/button'
import { IoIosArrowUp } from 'react-icons/io'

const FloatingButton = () => {
    const handleScroll = () => {
        window.scrollTo(0, 0)
    }
    return (
        <Button className='bg-blue-700 fixed bottom-10 right-10' onClick={handleScroll}><IoIosArrowUp size={20} /></Button>
    )
}

export default FloatingButton