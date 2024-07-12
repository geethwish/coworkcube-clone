"use client"
import { useState, ChangeEvent, FormEvent, FC } from 'react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '../ui/sheet';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

interface ContactProps {
    isOpen: boolean
    onClose: () => void
}

const formSchema = z.object({
    email: z.string().email({ message: 'Please enter valid email.' }),
    message: z.string().min(1, {
        message: 'Message filed can not be empty'
    }),
    fullName: z.string().min(1, { message: 'Name field can not be empty' })
})

const Contact: FC<ContactProps> = ({ isOpen, onClose }) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            message: '',
            fullName: ''
        },
    })
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <>
            <Sheet open={isOpen} onOpenChange={onClose}>

                <SheetContent>
                    <SheetHeader>
                        <SheetTitle> <h1 className="text-2xl font-bold mb-4">Contact Us</h1></SheetTitle>
                        <SheetDescription>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <FormField
                                        control={form.control}
                                        name="fullName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="John Doe" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="John Doe" {...field} type='email' />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Message</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="Enter your message here" {...field} rows={4} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit">Submit</Button>
                                </form>
                            </Form>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet >


        </>
    );
};

export default Contact;