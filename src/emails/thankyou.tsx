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
    Tailwind,
    Text,
} from '@react-email/components';
import * as React from 'react';

interface ThankyouEmailProps {
    name: string
}

export const ThankyouEmail = ({ name }: ThankyouEmailProps) => {

    return (
        <Html>
            <Head />
            <Preview>Hey {name} we received your message to us.</Preview>
            <Tailwind>
                <Body className="grid place-items-center bg-slate-100 font-sans">
                    <Container className="border bg-white border-solid border-[#eaeaea] text-gray-600 rounded-3xl shadow-2xl my-[60px] mx-auto px-10 w-[1000px]">
                        <Heading className="font-normal">
                            <Img src='https://www.verbalace.com/logo.png' className='w-40 h-auto mx-auto' />
                            <Text className='text-lg'>Greetings from VerbalAce Thank you <strong className='text-blue-600'>{name}</strong>  for taking the time to reach out to us through our contact form. We truly appreciate your interest in our online English learning platform.</Text>
                        </Heading>
                        <Text className="text-[14px] leading-[24px]">
                            Your message has been received, and we want you to know that your inquiry is essential to us. Our team is currently reviewing your message to better understand your needs and provide you with the best possible support.                        </Text>
                        <Text className="text-[14px] leading-[24px]">
                            At VerbalAce, we are committed to delivering a seamless and effective learning experience that empowers you to master the English language with confidence. We take pride in offering engaging courses, interactive practice sessions, and a supportive community to make your language-learning journey enjoyable and rewarding.
                        </Text>
                        <Text>Rest assured that we will respond to your inquiry promptly. Our dedicated team is here to assist you every step of the way and answer any questions you may have.</Text>
                        <Text>If you have any additional information to provide or need further assistance, please don't hesitate to reach out to us directly at support@verbalace.com. We're more than happy to help.</Text>
                        <Text className='font-medium'>Best regards,</Text>
                        <Text><strong className='text-gray-700'>VerbalAce Support Team</strong></Text>
                        <Link href='https://www.verbalace.com' className='text-blue-600 underline'>verbalace.com</Link>
                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default ThankyouEmail;