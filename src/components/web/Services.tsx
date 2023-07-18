/* eslint-disable @next/next/no-img-element */
'use client'
import { useTranslations } from 'next-intl';
import React from 'react';

interface ServicesProps {

}

const Services: React.FC<ServicesProps> = ({ }) => {

    const t = useTranslations('services')

    return (
        <section id='services' className='py-16 flex items-center flex-col gap-10 lg:gap-16 px-5 sm:px-10'>
            <h1 className='text-gray-700 text-3xl md:text-4xl lg:text-5xl font-light lg:font-extralight'>{t('offer')}</h1>

            <div className='flex items-center gap-20 justify-center flex-wrap w-full'>
                <div className='text-gray-700 hover:shadow-2xl w-96 bg-white hover:scale-105 transition border shadow-xl items-center flex flex-col pb-8 gap-3 text-center'>
                    <img src="/web/services/service1.jpg" alt="Service 1" className='h-72 w-72' />
                    <h1 className='font-medium text-lg md:text-xl mt-auto'>{t('1.h1')}</h1>
                    <p className='px-8 text-sm md:text-base'>{t('1.p')}</p>
                </div>

                <div className='text-gray-700 hover:shadow-2xl w-96 bg-white hover:scale-105 transition border shadow-xl items-center flex flex-col pb-8 gap-3 text-center'>
                    <img src="/web/services/service2.jpg" alt="Service 2" className='h-72 w-72' />
                    <h1 className='font-medium text-lg md:text-xl mt-auto'>{t('2.h1')}</h1>
                    <p className='px-8 text-sm md:text-base'>{t('2.p')}</p>
                </div>

                <div className='text-gray-700 hover:shadow-2xl w-96 bg-white hover:scale-105 transition border shadow-xl items-center flex flex-col pb-8 gap-3 text-center'>
                    <img src="/web/services/service3.jpg" alt="Service 3" className='h-72 w-72' />
                    <h1 className='font-medium text-lg md:text-xl mt-auto'>{t('3.h1')}</h1>
                    <p className='px-8 text-sm md:text-base'>{t('3.p')}</p>
                </div>

            </div>

        </section>
    );
};

export default Services;
