'use client'
/* eslint-disable @next/next/no-img-element */
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import React from 'react';

interface FooterProps {

}

const NewsFooter: React.FC<FooterProps> = ({ }) => {

    const footer = useTranslations('footer')

    return (
        <footer className='px-5 sm:px-10 md:px-16 lg:px-24 xl:px-36 pt-16 gap-5 flex w-screen flex-col items-center text-gray-600 bg-slate-50'>

            <nav className='flex md:justify-between flex-col gap-7 lg:gap-0 md:flex-row py-10 w-full'>
                <div className='flex flex-col gap-4 md:w-1/3 lg:w-1/4'>
                    <h1 className='text-blue-600 font-black text-xl md:text-2xl'>VERBAL-ACE</h1>
                    <p className='text-sm leading-6'>{footer('description')}</p>
                    <Link href={'/about'} className='font-medium text-blue-600 cursor-pointer' >{footer('team')}</Link>
                </div>

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
                        <p className='text-sm lg:text-base'>support@verbalace.com</p>
                    </li>
                </ul>

                <ul className='flex items-center gap-4 md:gap-3 md:flex-col md:items-start'>
                    <li className='text-lg font-medium text-blue-600 md:mb-2'>{footer('company')}</li>
                    <li>
                        <Link href={'/about'} className='text-sm lg:text-base hover:text-blue-600' >{footer('about')}</Link>
                    </li>
                    <li>
                        <Link href={'/contact'} className='text-sm lg:text-base hover:text-blue-600' >{footer('contact')}</Link>
                    </li>
                    <li>
                        <Link href={'/faq'} className='text-sm lg:text-base hover:text-blue-600' >{footer('faq')}</Link>
                    </li>
                    <li>
                        <Link href={'/news'} className='text-sm lg:text-base hover:text-blue-600' >{footer('news')}</Link>
                    </li>
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
                    <li className='font-medium text-gray-600'>{footer('join')}</li>
                    <li>
                        <a href="https://www.facebook.com/"><img className='w-4 h-4' src="/web/social/facebook.svg" alt="Facebook" /></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/"><img className='w-4 h-4' src="/web/social/instagram.svg" alt="Instagram" /></a>
                    </li>
                    <li>
                        <a href="https://www.google.com/"><img className='w-4 h-4' src="/web/social/google.svg" alt="Google" /></a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com/"><img className='w-4 h-4' src="/web/social/twitter.svg" alt="Twitter" /></a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default NewsFooter;
