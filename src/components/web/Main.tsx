/* eslint-disable @next/next/no-img-element */
'use client'
import { useTranslations } from 'next-intl';
import React from 'react';
import { Link } from 'react-scroll';

interface MainProps {
}

const Main: React.FC<MainProps> = ({ }) => {

    const main = useTranslations('main')

    return (
        <main className="bg-[url(/web/home.svg)] z-10 bg-center bg-no-repeat bg-cover flex-col md:flex-row gap-10 px-5 pt-24 md:pt-0 sm:px-10 md:px-16 lg:px-24 w-screen sm:h-screen flex items-center" id='home'>
            <div className='flex flex-col gap-4 w-full lg:w-2/3 md:gap-5 text-center md:text-left px-3 md:px-0 items-center md:items-start'>
                <h1 className='text-white text-3xl lg:text-5xl md:text-4xl font-light lg:font-extralight'>{main('h1')}</h1>
                <h2 className='text-slate-50 leading-6 md:leading-8 text-sm'>{main('h2')}</h2>
                <Link to='contact' smooth={true} duration={2000} href='#services'
                    className='bg-white cursor-pointer lg:px-5 text-blue-600 hover:bg-gradient-to-b from-blue-700 via-blue-500 to-cyan-400 border border-white hover:text-white  py-2 px-3 text-sm rounded-3xl shadow-sm'>
                    {main('button')}</Link>
            </div>
            <div className='flex justify-center items-center gap-5'>
                <img src="/web/hero.png" alt="Teacher" className='w-64 sm:w-72 md:w-2/3 bg-white shadow-xl rounded-full' />
            </div>
        </main>
    );
};

export default Main;
