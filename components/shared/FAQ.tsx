import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { fqaList } from '@/constant/support'

const FAQ = () => {
    return (
        <Accordion type="single" collapsible className="w-full flex flex-col gap-4 ">
            {
                fqaList.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} className='bg-white pl-4 pr-4 rounded-tl-3xl font-semibold' key={index}>
                        <AccordionTrigger className='bg-white'>{faq.title}</AccordionTrigger>
                        <AccordionContent className='text-primary font-normal'>
                            {faq.description}
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>
    )
}

export default FAQ