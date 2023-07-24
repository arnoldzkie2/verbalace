/* eslint-disable @next/next/no-img-element */
'use client'
import { useTranslations } from 'next-intl';
import React from 'react';

const About: React.FC = ({ }) => {

    const t = useTranslations('about')

    return (
        <section className='px-5 sm:px-10 md:px-16 lg:px-24 xl:px-36 2xl:px-44 flex items-center gap-10 md:gap-16 text-gray-700 py-16 flex-col' id='about'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-light lg:font-extralight 2xl:hidden'>{t('h1')}</h1>
            <div className='flex flex-col gap-5 sm:gap-10 md:gap-16 xl:gap-20 items-center 2xl:flex-row lg:justify-between'>
                <video className='w-full 2xl:w-2/3 outline-none rounded-md' controls loop>
                    <source src='/about.mp4' type='video/mp4' />
                </video>
                <aside className='flex flex-col items-center md:items-start gap-5 lg:gap-7 text-gray-600'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-light lg:font-extralight mb-5 pb-5 border-b hidden 2xl:block'>{t('h1')}</h1>
                    <p className='sm:leading-6 md:leading-7 text-sm xl:text-base'>{t('description.1')}</p>
                    <p className='sm:leading-6 md:leading-7 text-sm xl:text-base'>{t('description.2')}</p>
                    <p className='sm:leading-6 md:leading-7 text-sm xl:text-base'>{t('description.3')}</p>
                    <p className='sm:leading-6 md:leading-7 text-sm xl:text-base'>{t('description.4')}</p>
                </aside>
            </div>
        </section>
    );
};

export default About;
