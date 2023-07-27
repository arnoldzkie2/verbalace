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

export const Contact = ({ name, email, phone, message ='Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem' }: ContactProps) => {

    return (
        <Html>
            <Head />
            <Preview>New Message from {name} comes from www.verbalace.com#contact</Preview>
            <Tailwind>
                <Body className="grid place-items-center bg-[url(https://www.verbalace.com/web/contact/contact.svg)] bg-center bg-no-repeat bg-cover font-sans">
                    <Container className="border bg-white border-solid border-[#eaeaea] text-gray-600 rounded-3xl shadow-2xl mt-[150px] mx-auto px-10 w-[1000px]">
                        <Heading className="text-black text-[24px] font-normal text-center">
                            <Img src='https://www.verbalace.com/logo.png' className='w-40 h-auto mx-auto' />
                        </Heading>
                        <Text><strong>Name: </strong>{name}</Text>
                        <Text><strong>Email: </strong>{email}</Text>
                        <Text><strong>Phone: </strong>{phone}</Text>
                        <Text><strong>Message: </strong> {message}</Text>
                        <Link href='https://www.verbalace.com' className='text-blue-600 underline'>verbalace.com</Link>
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default Contact;