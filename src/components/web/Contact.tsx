/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
'use client'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface ContactProps {
}

const Contact: React.FC<ContactProps> = ({ }) => {

    const [isSpamming, setIsSpamming] = useState(false)

    const SPAM_TIMEOUT = 10 * 60 * 1000; // 5 minutes in milliseconds

    const locale = useLocale()

    useEffect(() => {

        const contactTimeout = localStorage.getItem('contactTimeout');

        if (contactTimeout) {

            const elapsedTime = Date.now() - parseInt(contactTimeout);

            if (elapsedTime < SPAM_TIMEOUT) {

                setIsSpamming(true);

                // Start a timer to reset isSpamming after 10 minutes
                const timer = setTimeout(() => {
                    setIsSpamming(false);
                }, SPAM_TIMEOUT - elapsedTime);

                return () => {
                    clearTimeout(timer);
                };
            }
        }

    }, []);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })

    const handleForm = (e: any) => {

        const { name, value } = e.target

        setFormData(prevData => ({
            ...prevData, [name]: value
        }))
    }


    const sendMessage = async (e: any) => {

        e.preventDefault()

        const { name, phone, email, message } = formData

        if (!name || name.length < 3) return alert('Name field should not be empty or less than 3 characters')
        if (!phone || phone.length < 5) return alert('Phone field should not be empty or less than 5 characters')
        if (!email || email.length < 3) return alert('Email field should not be empty or less than 3 characters')
        if (!message || message.length < 3) return alert('Message field should not be empty or less than 3 characters')

        try {

            const { data } = await axios.post('/api/email', {
                name, phone, email, message
            })

            if (data.status) {
                localStorage.setItem('contactTimeout', Date.now().toString());

                if (locale === 'en') {
                    alert(`Thank you ${name} for leaving a message.`);
                } else if (locale === 'ja') {
                    alert(`${name}さん、メッセージを残していただきありがとうございます。`);
                } else if (locale === 'kr') {
                    alert(`${name}님, 메시지를 남겨주셔서 감사합니다.`);
                } else if (locale === 'vi') {
                    alert(`Cảm ơn ${name} đã để lại lời nhắn.`);
                } else if (locale === 'zh') {
                    alert(`谢谢您留言，${name}。`);
                }

                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    message: ''
                })

                setIsSpamming(true)

            } else {

                if (locale === 'en') {
                    alert('Something went wrong, please try again.');
                } else if (locale === 'ja') {
                    alert('何かがうまくいきませんでした。もう一度お試しください。');
                } else if (locale === 'kr') {
                    alert('문제가 발생했습니다. 다시 시도해주세요.');
                } else if (locale === 'vi') {
                    alert('Có lỗi xảy ra, vui lòng thử lại.');
                } else if (locale === 'zh') {
                    alert('出了些问题，请重试。');
                } else {
                    alert('Something went wrong, please try again.');
                }

                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    message: ''
                })

            }
        } catch (error) {

            console.log(error);

        }
    }

    const formatTime = (time: number, locale: string) => {

        const minutes = Math.floor(time / 60000);
        const seconds = ((time % 60000) / 1000).toFixed(0);

        if (locale === 'en') {
            return `${minutes} minutes and ${seconds} seconds`;
        } else if (locale === 'ja') {
            return `${minutes}分${seconds}秒`;
        } else if (locale === 'kr') {
            return `${minutes}분 ${seconds}초`;
        } else if (locale === 'vi') {
            return `${minutes} phút và ${seconds} giây`;
        } else if (locale === 'zh') {
            return `${minutes} 分钟 ${seconds} 秒`;
        }

        return `${minutes} minutes and ${seconds} seconds`;
    };


    const spamm = async (e: any) => {

        e.preventDefault();

        const { name, phone, email, message } = formData

        if (!name || name.length < 3) return alert('Name field should not be empty or less than 3 characters')
        if (!phone || phone.length < 5) return alert('Phone field should not be empty or less than 5 characters')
        if (!email || email.length < 3) return alert('Email field should not be empty or less than 3 characters')
        if (!message || message.length < 3) return alert('Message field should not be empty or less than 3 characters')

        const contactTimeout = localStorage.getItem('contactTimeout');

        if (contactTimeout) {
            const elapsedTime = Date.now() - parseInt(contactTimeout);
            const remainingTime = SPAM_TIMEOUT - elapsedTime;

            if (remainingTime > 0) {

                const formattedTime = formatTime(remainingTime, locale);

                if (locale === 'en') {
                    alert(`You already submitted a message. Please try again in ${formattedTime}`);
                } else if (locale === 'ja') {
                    alert(`すでにメッセージを送信しています。${formattedTime}後にもう一度お試しください。`);
                } else if (locale === 'kr') {
                    alert(`이미 메시지를 제출하셨습니다. ${formattedTime} 후에 다시 시도해주세요.`);
                } else if (locale === 'vi') {
                    alert(`Bạn đã gửi một tin nhắn rồi. Vui lòng thử lại sau ${formattedTime}.`);
                } else if (locale === 'zh') {
                    alert(`您已经提交了一条消息。请在${formattedTime}后再试。`);
                } else {
                    alert(`You already submitted a message. Please try again in ${formattedTime}`);
                }

            } else {

                await sendMessage(e)

            }

        }
    };

    const t = useTranslations('contact')

    return (
        <section id='contact' className='bg-[url(/web/contact/contact.svg)] bg-center bg-no-repeat bg-cover w-screen flex items-center justify-center py-10 lg:py-20 flex-col px-5 sm:px-10 md:px-16 lg:px-24 xl:px-36 2xl:px-44 gap-10 md:gap-16 lg:gap-24'>

            <header className='flex flex-col items-center text-center gap-3 sm:gap-4'>
                <h1 className='text-white text-3xl md:text-4xl lg:text-5xl font-light lg:font-extralight' >{t('h1')}</h1>
                <p className='text-white text-sm sm:text-base'>{t('p')}</p>
            </header>

            <div className='flex flex-col w-full gap-5 sm:items-center md:flex-row md:justify-between lg:justify-evenly'>

                <aside className='flex flex-col gap-3 md:gap-5 items-center'>
                    <Image src={'/web/contact/contact-img.webp'} alt='Contact us' className='w-72 h-auto sm:w-80' width={320} height={320} />
                    {/* <img src="/web/contact/contact-img.png" alt="Contact Us" className='lg:h-64 sm:h-52' /> */}
                    <h1 className='text-white text-2xl md:text-3xl lg:text-gray-800 md:border-gray-300 2xl:text-white lg:mt-4 font-light md:font-extralight w-full pb-4 border-b border-white'>{t('getintouch')}</h1>
                    <div className='flex w-full flex-col gap-5'>
                        <div className='flex gap-4'>
                            <FontAwesomeIcon icon={faPhoneVolume} className='w-5 h-5 p-2 border border-blue-600 bg-white rounded-full text-blue-600' />
                            <ul className='text-white md:text-gray-700 flex flex-col gap-3'>
                                <li>China: +86 133 8613 7953</li>
                                <li>Philipines: +63 9979 1572 44</li>
                                <li>HongKong +852 5518 0295</li>
                                <li>United States +1 503 209 9138</li>
                            </ul>
                        </div>
                        <div className='flex items-center gap-4'>
                            <FontAwesomeIcon icon={faEnvelope} className='w-5 h-5 p-2 border border-blue-600 bg-white rounded-full text-blue-600' />
                            <div className='text-white md:text-gray-700'>support@verbalace.com</div>
                        </div>
                    </div>
                </aside>

                <form onSubmit={isSpamming ? spamm : sendMessage} className='flex flex-col p-7 border bg-white shadow-2xl rounded-3xl gap-3 w-full sm:w-96'>
                    <input type="text" className='px-3 py-2 border-b border-gray-300 text-gray-600 outline-none' name='name' onChange={handleForm} value={formData.name} placeholder={t('form.name')} />
                    <input type="text" className='px-3 py-2 border-b border-gray-300 text-gray-600 outline-none' name='phone' onChange={handleForm} value={formData.phone} placeholder={t('form.phone')} />
                    <input type="text" className='px-3 py-2 border-b border-gray-300 text-gray-600 outline-none' name='email' onChange={handleForm} value={formData.email} placeholder={t('form.email')} />
                    <textarea className='px-3 py-2 h-44 md:h-56 resize-none border-b border-gray-300 text-gray-600 outline-none' name='message' onChange={handleForm} value={formData.message} placeholder={t('form.message')} />
                    <button className='bg-blue-600 text-white py-3 mt-3 text-lg rounded-3xl hover:bg-gradient-to-b from-blue-700 via-blue-500 to-cyan-400'>{t('form.button')}</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
