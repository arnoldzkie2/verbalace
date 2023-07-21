'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Translate from './Translate';
import { Link as ScrollLink } from 'react-scroll'
import Link from 'next-intl/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = ({ }) => {

    const [scroll, setScroll] = useState(false)

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY > 0) {
                setScroll(true)
            } else {
                setScroll(false)
            }

        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    const locale = useLocale()

    const t = useTranslations('header')

    return (
        <header className={`z-10 px-5 sm:px-10 md:px-16 lg:px-24 xl:px-36 2xl:px-44  h-16 fixed w-screen transition duration-200 flex items-center top-0 left-0 justify-between ${scroll ? 'text-gray-700 bg-white shadow-lg' : 'text-white bg-transparent'}`}>
            <Link href={'/'} className={`lg:w-64 font-black text-2xl md:text-3xl ${scroll && 'text-blue-600'}`}>VERBAL-ACE</Link>
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className={`text-xl lg:hidden absolute cursor-pointer right-5 md:right-16 ${isOpen ? 'text-gray-600 z-10' : ''}`} onClick={() => setIsOpen(prevState => !prevState)} />
            <ul className={`w-full lg:flex lg:items-center lg:gap-5 ${isOpen ? 'gap-3 shadow-2xl flex flex-col fixed top-0 left-0 w-screen bg-white p-10 text-gray-600' : 'hidden'}`}>
                <ScrollLink to='about' duration={2000} smooth={true} href='#about' className={`lg:ml-auto px-3 lg:px-2 xl:px-4 py-1.5 rounded-2xl cursor-pointer ${scroll && 'hover:text-blue-600'}`}>{t('about')}</ScrollLink>
                <ScrollLink to='services' duration={2000} smooth={true} href='#services' className={`px-3 lg:px-2 xl:px-4 py-1.5 rounded-2xl cursor-pointer  ${scroll && 'hover:text-blue-600'}`}>{t('services')}</ScrollLink>
                <Link href='/news' className={`px-3 lg:px-2 xl:px-4 py-1.5 rounded-2xl cursor-pointer  ${scroll && 'hover:text-blue-600'}`}>{t('news')}</Link>
                <div className={`${isOpen ? 'mt-5' : ''} flex gap-5 items-center lg:gap-8  lg:ml-auto`}>
                    <ScrollLink to='contact' duration={2000} smooth={true} href='#waitlist' className={`hover:bg-gradient-to-b from-blue-700 via-blue-500 to-cyan-400 hover:text-white border px-5 lg:px-5 py-1.5 cursor-pointer flex items-center justify-center rounded-3xl ${scroll ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'}`}>{t('waitlist')}</ScrollLink>
                    <Translate locale={locale} scroll={scroll} isOpen={isOpen} />
                </div>
            </ul>
        </header>
    );
};

export default Header;
