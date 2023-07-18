/* eslint-disable @next/next/no-img-element */
'use client'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll'
import React from 'react';
import { useTranslations } from 'next-intl';

interface FooterProps {
}

const Footer: React.FC<FooterProps> = ({ }) => {

    const footer = useTranslations('footer')

    return (
        <footer className='px-5 sm:px-10 md:px-16 lg:px-24 pt-16 gap-5 flex w-screen flex-col items-center text-gray-600 bg-slate-50'>

            <nav className='flex md:justify-between flex-col gap-7 lg:gap-0 md:flex-row py-10 w-full'>
                <ul className='flex flex-col gap-4 md:w-1/3 lg:w-1/4'>
                    <li className='text-blue-600 font-black text-xl md:text-2xl'>VERBAL-ACE</li>
                    <li className='text-sm leading-6'>{footer('description')}</li>
                    <ScrollLink to='about' duration={1000} smooth={true} href='#about' className='font-medium text-blue-600 cursor-pointer'>{footer('team')}</ScrollLink>
                </ul>

                <ul className='flex flex-col gap-4'>
                    <li className='text-lg font-medium md:mb-2 text-blue-600 uppercase'>{footer('contact')}</li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faLocationDot} className='w-4' />
                        <p className='text-sm lg:text-base'>Via Rossani 10, 10136 Test Location</p>
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faPhone} className='w-4' />
                        <p className='text-sm lg:text-base'>+1 234-567-8900</p>
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faEnvelope} className='w-4' />
                        <p className='text-sm lg:text-base'>verbalace@gmail.com</p>
                    </li>
                </ul>

                <ul className='flex items-center gap-4 md:gap-3 md:flex-col md:items-start'>
                    <li className='text-lg font-medium text-blue-600 md:mb-2'>{footer('company')}</li>
                    <ScrollLink to='about' duration={1000} smooth={true} href='#about' className='text-sm lg:text-base hover:text-blue-600 cursor-pointer' >About</ScrollLink>
                    <ScrollLink to='contact' duration={1000} smooth={true} href='#contact' className='text-sm lg:text-base hover:text-blue-600 cursor-pointer' >Contact</ScrollLink>
                    <Link href={'/faq'} className='text-sm lg:text-base hover:text-blue-600' >{footer('faq')}</Link>
                    <Link href={'/news'} className='text-sm lg:text-base hover:text-blue-600' >{footer('news')}</Link>
                </ul>

            </nav>
            <div className='py-10 w-full border-t flex flex-col gap-5 md:flex-row md:justify-between'>
                <div className='flex gap-4 items-center order-2 md:order-1 text-sm md:text-base'>
                    © 2023, verbalace
                    <Link href='/license'>{footer('license')}</Link>
                    <Link href='/terms'>{footer('terms')}</Link>
                    <Link href='/privacy'>{footer('privacy')}</Link>
                </div>
                <ul className='flex gap-5 items-center order-1 md:order-2'>
                    <li className='font-medium text-gray-400'>{footer('join')}</li>
                    <a href="/"><img className='w-4 h-4' src="/web/social/facebook.svg" alt="Facebook" /></a>
                    <a href="/"><img className='w-4 h-4' src="/web/social/instagram.svg" alt="Instagram" /></a>
                    <a href="/"><img className='w-4 h-4' src="/web/social/google.svg" alt="Google" /></a>
                    <a href="/"><img className='w-4 h-4' src="/web/social/twitter.svg" alt="Twitter" /></a>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
