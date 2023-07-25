'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Translate from '../Translate';
import Link from 'next-intl/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
interface HeaderProps {

}

const NewsHeader: React.FC<HeaderProps> = ({ }) => {

    const scroll = true

    const [isOpen, setIsOpen] = useState(false)

    const locale = useLocale()

    const t = useTranslations('header')

    return (
        <header className={`z-10 px-5 sm:px-10 md:px-16 lg:px-24 xl:px-36 h-16 lg:h-20 fixed w-screen transition duration-200 flex items-center top-0 left-0 justify-between ${scroll ? 'text-gray-700 bg-white shadow-lg' : 'text-white bg-transparent'}`}>
            <Link href={'/'} className='flex items-center'>
                <Image src={'/logo.png'} alt='Logo' width={200} height={30} className='w-36 md:w-44 xl:w-52' />
            </Link>
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className={`text-xl lg:hidden absolute cursor-pointer right-5 md:right-16 ${isOpen ? 'text-gray-600 z-10' : ''}`} onClick={() => setIsOpen(prevState => !prevState)} />
            <ul className={`w-full lg:flex lg:items-center lg:gap-5 ${isOpen ? 'gap-3 shadow-2xl flex flex-col fixed top-0 left-0 w-screen bg-white p-10 text-gray-600' : 'hidden'}`}>
                <Link href='/' className='lg:ml-auto px-3 lg:px-2 xl:px-4 py-1.5 rounded-2xl cursor-pointer hover:text-blue-600'>{t('home')}</Link>
                <Link href='/#about' className='px-3 lg:px-2 xl:px-4 py-1.5 rounded-2xl cursor-pointer hover:text-blue-600'>{t('about')}</Link>
                <Link href='/#services' className='px-3 lg:px-2 xl:px-4 py-1.5 rounded-2xl cursor-pointer hover:text-blue-600'>{t('services')}</Link>
                <Link href='/news' className='px-3 lg:px-2 xl:px-4 py-1.5 rounded-2xl cursor-pointer hover:text-blue-600'>{t('news')}</Link>
                <div className={`${isOpen ? 'mt-5' : ''} flex gap-5 items-center lg:gap-8  lg:ml-auto`}>
                    <Link href='/#contact' className={`hover:bg-gradient-to-b from-blue-700 via-blue-500 to-cyan-400 hover:text-white border border-white px-7 py-2 cursor-pointer flex items-center justify-center rounded-3xl ${scroll ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}>{t('waitlist')}</Link>
                    <Translate locale={locale} scroll={scroll} isOpen={isOpen} />
                </div>
            </ul>
        </header>
    );
};

export default NewsHeader;
