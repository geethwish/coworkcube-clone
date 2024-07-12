import React, { FC } from 'react'
import { Button } from '../ui/button'
import { FaCheck } from 'react-icons/fa6'
import { package2Type } from '@/constant/support'

interface PriceCardProps {
    data: package2Type
}
const PriceCard: FC<PriceCardProps> = ({ data }) => {
    return (
        <div className='bg-[#f0f5fa] p-6 price-card text-primary'>
            <h3 className='text-xl font-bold'>
                {data.title}
            </h3>
            <h2 className='text-2xl flex items-center gap-1 mt-5'>
                {data.price}/-
                <span className='text-sm font-semibold text-gray-400'>
                    Lifetime
                </span>
            </h2>
            <p className='mt-5'>
                {data.description}
            </p>
            <Button className='bg-primary w-full text-md min-h-12 mt-5 mb-5'>Get Started</Button>

            <ul className='flex flex-col gap-4'>
                {
                    data.list.length > 0 && data.list.map((item, index) => (
                        <li className='flex items-center gap-4' key={index}>
                            <FaCheck /> {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PriceCard