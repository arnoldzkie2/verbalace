/* eslint-disable @next/next/no-img-element */
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from 'next-intl';
import React from 'react';

interface ContactProps {
}

const Contact: React.FC<ContactProps> = ({ }) => {

    const t = useTranslations('contact')

    return (
        <section id='contact' className='bg-[url(/web/contact/contact.svg)] bg-center bg-no-repeat md:h-screen bg-cover w-screen flex items-center justify-center py-10 flex-col px-5 sm:px-10 md:px-16 lg:px-24 gap-10 md:gap-16 lg:gap-24'>

            <header className='flex flex-col items-center text-center gap-3 sm:gap-4'>
                <h1 className='text-white text-3xl md:text-4xl lg:text-5xl font-light lg:font-extralight' >{t('h1')}</h1>
                <p className='text-white text-sm sm:text-base'>{t('p')}</p>
            </header>

            <div className='flex flex-col w-full gap-5 sm:items-center md:flex-row md:justify-between lg:justify-evenly'>

                <aside className='flex flex-col gap-3 md:gap-5'>
                    <img src="/web/contact/contact-img.png" alt="Contact Us" className='lg:h-72 sm:h-52' />
                    <h1 className='text-white text-2xl md:text-3xl md:text-gray-700 md:border-gray-300 lg:mt-4 font-extralight w-full pb-4 border-b border-white'>{t('getintouch')}</h1>
                    <div className='flex w-full flex-col gap-3'>
                        <div className='flex items-center gap-4'>
                            <FontAwesomeIcon icon={faPhoneVolume} className='w-5 h-5 p-2 border border-blue-600 bg-white rounded-full text-blue-600' />
                            <div className='text-white md:text-gray-700'>+1-234-567-8900</div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <FontAwesomeIcon icon={faEnvelope} className='w-5 h-5 p-2 border border-blue-600 bg-white rounded-full text-blue-600' />
                            <div className='text-white md:text-gray-700'>verbaleace@gmail.com</div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <FontAwesomeIcon icon={faLocationDot} className='w-5 h-5 p-2 border border-blue-600 bg-white rounded-full text-blue-600' />
                            <div className='text-white md:text-gray-700'>931 Abia Martin Drive, PA TestLocation-191420</div>
                        </div>
                    </div>
                </aside>

                <form onSubmit={(e: any) => {
                    e.preventDefault()
                    alert('Thankyou for leaving a message.')
                }} className='flex flex-col p-7 border bg-white shadow-2xl rounded-3xl gap-3 w-full sm:w-96'>
                    <input type="text" className='px-3 py-2 border-b border-gray-300 text-gray-600 outline-none' placeholder={t('form.name')} />
                    <input type="text" className='px-3 py-2 border-b border-gray-300 text-gray-600 outline-none' placeholder={t('form.phone')} />
                    <input type="text" className='px-3 py-2 border-b border-gray-300 text-gray-600 outline-none' placeholder={t('form.email')} />
                    <textarea className='px-3 py-2 h-44 md:h-56 resize-none border-b border-gray-300 text-gray-600 outline-none' placeholder={t('form.message')} />
                    <button className='bg-blue-600 text-white py-3 mt-3 text-lg rounded-3xl hover:bg-gradient-to-b from-blue-700 via-blue-500 to-cyan-400'>{t('form.button')}</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
