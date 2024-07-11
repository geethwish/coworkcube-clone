import Image from 'next/image'
import React, { FC } from 'react'

interface FeatureCardProps {
    title: string
    variant: 'info' | 'warning'
}

const FeatureCard: FC<FeatureCardProps> = ({ title, variant }) => {
    return (
        <div className='flex justify-center flex-col items-center bg-[#F9F7F7] w-full gap-2 p-2 text-center'>

            <Image src={variant === 'warning' ? "/images/g1.webp" : '/images/g2.webp'} alt={title} width={80} height={80} />
            <p className='text-primary font-semibold text-lg'>
                {title ?? ""}
            </p>
        </div>
    )
}

export default FeatureCard