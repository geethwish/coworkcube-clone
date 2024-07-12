import Image from 'next/image'
import React, { FC } from 'react'
import { Button } from '../ui/button'
import { WorkSpaceType } from '@/constant/support'

interface PackageCardProps {
    data: WorkSpaceType

}
const PackageCard: FC<PackageCardProps> = ({ data }) => {
    return (
        <div className='border-2 border-gray-50 text-primary'>
            <Image src={"/images/os1.webp"} width={100} height={100} alt='Office Space' layout='responsive' objectFit='cover' className='max-h-64'></Image>
            <div className='p-4'>
                <h6 className='text-xl font-semibold'>
                    {data.title ?? ""}
                </h6>
                <p className='font-semibold'>
                    {data.subtitle}
                </p>
                <p className='mt-5'>
                    {data.sectionDescription}
                </p>
                <ul className='p-4 list-disc text-sm flex flex-col gap-4'>

                    {
                        data.list.length > 0 && data.list.map((item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        ))
                    }
                </ul>
                <p className='font-semibold mb-2'>
                    City Pass  –   {data.price1}
                </p>
                <p className='font-semibold'>
                    City Pass  –   {data.price2}
                </p>
            </div>
            <div className='flex items-center justify-center p-4'>
                <Button className='uppercase bg-secondary'>Subscribe Now</Button>
            </div>

        </div>
    )
}

export default PackageCard