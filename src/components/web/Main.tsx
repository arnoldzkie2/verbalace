/* eslint-disable @next/next/no-img-element */
'use client'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import { Link } from 'react-scroll';

interface MainProps {
}

const Main: React.FC<MainProps> = ({ }) => {

    const main = useTranslations('main')

    return (
        <main className="bg-[url(/web/home.svg)] z-10 bg-center bg-no-repeat bg-cover flex-col md:flex-row md:justify-between gap-10 px-5 pt-24 md:pt-0 sm:px-10 md:px-16 lg:px-24 xl:px-36 2xl:px-44 w-screen sm:h-screen flex items-center" id='home'>
            <div className='flex flex-col gap-4 w-full xl:w-1/2 md:gap-5 lg:gap-6 text-center md:text-left px-3 md:px-0 items-center md:items-start'>
                <h1 className='text-white text-3xl lg:text-5xl md:text-4xl font-light lg:font-extralight'>{main('h1')}</h1>
                <h2 className='text-slate-50 leading-6 md:leading-8 text-sm'>{main('h2')}</h2>
                <div className='flex items-center gap-4'>
                    <div className='w-6 h-1.5 cursor-pointer bg-slate-300 rounded-sm'></div>
                    <div className='w-6 h-1.5 cursor-pointer bg-slate-300 rounded-sm'></div>
                    <div className='w-6 h-1.5 cursor-pointer bg-slate-300 rounded-sm'></div>
                    <div className='w-6 h-1.5 cursor-pointer bg-slate-300 rounded-sm'></div>
                    <div className='w-6 h-1.5 cursor-pointer bg-white rounded-sm'></div>
                </div>
                <Link to='contact' smooth={true} duration={2000} href='#services'
                    className='bg-white cursor-pointer mt-3 md:mt-5 lg:px-5 xl:px-7 text-blue-600 hover:bg-gradient-to-b from-blue-700 via-blue-500 to-cyan-400 border border-white hover:text-white  py-2 px-3 text-sm rounded-3xl shadow-sm'>
                    {main('button')}</Link>
            </div>
            <Image src={'/web/hero.png'} alt='Hero' width={390} height={390} className='bg-white rounded-full shadow-xl' />
            {/* <img src="/web/hero.png" alt="Teacher" className='w-64 sm:w-72 md:w-2/3 xl:w-1/2 bg-white shadow-xl rounded-full' /> */}
        </main>
    );
};

export default Main;
