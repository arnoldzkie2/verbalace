'use client'
/* eslint-disable @next/next/no-img-element */
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import React from 'react';
import Image from 'next/image';
interface FooterProps {

}

const NewsFooter: React.FC<FooterProps> = ({ }) => {

    const footer = useTranslations('footer')

    return (

        <footer className='px-5 sm:px-10 md:px-16 lg:px-24 xl:px-36 pt-16 gap-5 flex w-screen flex-col items-center text-gray-600 bg-slate-50'>

            <nav className='flex md:justify-between flex-col gap-7 lg:gap-0 md:flex-row py-10 w-full'>
                <div className='flex flex-col gap-4 md:w-1/3 lg:w-1/4'>
                <Image src={'/logo.png'} alt='Logo' width={112} height={10} className='w-28' />
                    <p className='text-sm leading-6'>{footer('description')}</p>
                    <Link href={'/#about'} className='font-medium text-blue-600 cursor-pointer' >{footer('team')}</Link>
                </div>

                <ul className='flex flex-col gap-4'>
                    <li className='text-lg font-medium md:mb-2 text-blue-600 uppercase'>{footer('contact')}</li>
                    <li className='flex gap-4'>
                        <FontAwesomeIcon icon={faPhone} className='w-4' />
                        <p className='text-sm lg:text-base'>+86 133 8613 7953</p>
                    </li>
                    <li className='flex items-center gap-4'>
                        <FontAwesomeIcon icon={faEnvelope} className='w-4' />
                        <p className='text-sm lg:text-base'>support@verbalace.com</p>
                    </li>
                </ul>

                <ul className='flex items-center gap-4 md:gap-3 md:flex-col md:items-start'>
                    <li className='text-lg font-medium text-blue-600 md:mb-2'>{footer('company')}</li>
                    <li>
                        <Link href={'/#about'} className='text-sm lg:text-base hover:text-blue-600' >{footer('about')}</Link>
                    </li>
                    <li>
                        <Link href={'/#contact'} className='text-sm lg:text-base hover:text-blue-600' >{footer('contact')}</Link>
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
                        <a href="https://facebook.com/JoinVerbalAce"><img className='w-4 h-4' src="/web/social/facebook.svg" alt="Facebook" /></a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@VerbalAce/"><img className='w-4 h-4' src="/web/social/youtube.svg" alt="Youtube" /></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/VerbalAce_CEO"><img className='w-4 h-4' src="/web/social/twitter.svg" alt="Twitter" /></a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default NewsFooter;
