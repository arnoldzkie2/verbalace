/* eslint-disable react/no-unescaped-entities */
import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Tailwind,
    Text,
} from '@react-email/components';
import * as React from 'react';

interface ContactProps {
    name: string
    email: string
    phone: string
    message: string
}

export const Contact = ({ name, email, phone, message }: ContactProps) => {
    
    return (
        <Html>
            <Head />
            <Preview>New Message from {name} comes from www.verbalace.com#contact</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-10 w-[1000px]">
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            <Img src='https://www.verbalace.com/logo.png' className='w-40 h-auto mx-auto' />
                        </Heading>
                        <Text><strong>Name: </strong>{name}</Text>
                        <Text><strong>Email: </strong>{email}</Text>
                        <Text><strong>Phone: </strong>{phone}</Text>
                        <Text>{message}</Text>
                        <Text><strong className='text-gray-700'>VerbalAce Support Team</strong></Text>
                        <Link href='https://www.verbalace.com' className='text-blue-600 underline'>verbalace.com</Link>
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default Contact;