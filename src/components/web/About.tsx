/* eslint-disable @next/next/no-img-element */
'use client'
import { useTranslations } from 'next-intl';
import React from 'react';

const About: React.FC = ({ }) => {

    const t = useTranslations('about')

    return (
        <section className='px-5 sm:px-10 md:px-16 lg:px-24 xl:px-36 2xl:px-44 flex items-center gap-10 md:gap-16 text-gray-700 py-16 flex-col' id='about'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-light lg:font-extralight'>{t('h1')}</h1>
            <div className='flex flex-col gap-5 md:gap-10 xl:gap-20 items-center lg:flex-row lg:justify-between'>
                <aside className='flex flex-col items-center md:items-start'>
                    <p className='sm:leading-6 md:leading-7 lg:leading-8 text-sm lg:text-base'>{t('description')}</p>
                </aside>
                <img src="/web/about/about.gif" alt="About us" className='sm:w-4/5 md:w-3/4 lg:w-1/2 xl:w-2/5' />
            </div>
        </section>
    );
};

export default About;
