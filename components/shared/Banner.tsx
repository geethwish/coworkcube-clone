import Image from 'next/image';
import React from 'react'

interface ResponsiveImageProps {
    src: string;
    alt: string;
    layout?: 'fixed' | 'intrinsic' | 'responsive' | 'fill';
    type: 'img' | 'background'
}


const Banner = ({ src, alt, layout = 'responsive', type = "img" }: ResponsiveImageProps) => {
    return (
        <div className="w-full">
            {
                type === "img" ? <Image
                    src={src}
                    alt={alt}
                    layout={layout}
                    className='banner-image'
                    width={100}
                    height={100}
                /> : <div className='bg-img'></div>
            }

        </div>
    )
}

export default Banner