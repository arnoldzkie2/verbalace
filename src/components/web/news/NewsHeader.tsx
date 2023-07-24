'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Translate from '../Translate';
import { Link as ScrollLink } from 'react-scroll'
import Link from 'next-intl/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {

}

const NewsHeader: React.FC<HeaderProps> = ({ }) => {

    const scroll = true

    const [isOpen, setIsOpen] = useState(false)

    const locale = useLocale()

    const t = useTranslations('header')

    return (
        <header className={`z-10 px-5 sm:px-10 md:px-16 lg:px-24 xl:px-36 h-16 fixed w-screen transition duration-200 flex items-center top-0 left-0 justify-between ${scroll ? 'text-gray-700 bg-white shadow-lg' : 'text-white bg-transparent'}`}>
            <Link href={'/'} className={`lg:w-64 font-black text-2xl md:text-3xl ${scroll && 'text-blue-600'}`}>VERBAL-ACE</Link>
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className={`text-xl lg:hidden absolute cursor-pointer right-5 md:right-16 ${isOpen ? 'text-gray-600 z-10' : ''}`} onClick={() => setIsOpen(prevState => !prevState)} />
            <ul className={`w-full lg:flex lg:items-center lg:gap-5 ${isOpen ? 'gap-3 shadow-2xl flex flex-col fixed top-0 left-0 w-screen bg-white p-10 text-gray-600' : 'hidden'}`}>
                <Link href='/' className='lg:ml-auto px-3 lg:px-2 xl:px-4 py-1.5 rounded-2xl cursor-pointer hover:text-blue-600'>{t('home')}</Link>
                <Link href='/news' className='px-3 lg:px-2 xl:px-4 py-1.5 rounded-2xl cursor-pointer hover:text-blue-600'>{t('news')}</Link>
                <div className={`${isOpen ? 'mt-5' : ''} flex gap-5 items-center lg:gap-8  lg:ml-auto`}>
                    <Translate locale={locale} scroll={scroll} isOpen={isOpen} />
                </div>
            </ul>
        </header>
    );
};

export default NewsHeader;
