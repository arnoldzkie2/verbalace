/* eslint-disable @next/next/no-img-element */
'use client'

import { useTranslations } from 'next-intl';

import React from 'react';

interface MainProps {

}

const NewsMain: React.FC<MainProps> = ({ }) => {

    const t = useTranslations('news')

    return (
        <main className="z-10 bg-center bg-no-repeat bg-cover flex flex-col gap-5 sm:gap-7 md:gap-8 lg:gap-10 px-5 pt-24 sm:px-10 md:px-16 lg:px-24 xl:px-36 w-screen items-center" id='home'>
            <h1 className='text-gray-800 text-3xl lg:text-5xl md:text-4xl xl:w-2/3 flex w-full justify-center xl:px-20 font-light lg:font-extralight'>{t('h1')}</h1>
            <img src="/web/news/news.jpg" alt="News" className='w-auto h-auto' />
        </main>
    );
};

export default NewsMain;
