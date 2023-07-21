/* eslint-disable @next/next/no-img-element */
'use client'
import { useTranslations } from 'next-intl';
import React from 'react';

interface ServicesProps {

}

const Services: React.FC<ServicesProps> = ({ }) => {

    const t = useTranslations('services')

    return (
        <section id='services' className='py-16 flex items-center flex-col gap-10 lg:gap-16 px-5 sm:px-10 md:px-16 lg:px-24 xl:px-36 2xl:px-44 bg-slate-50'>
            <h1 className='text-gray-700 text-3xl md:text-4xl lg:text-5xl font-light lg:font-extralight'>{t('offer')}</h1>
            <div className='flex gap-10 items-start md:gap-16 justify-center flex-wrap w-full'>
                <div className='text-gray-700 pt-5 pb-8 text-center rounded-xl w-96 bg-white transition shadow-2xl flex flex-col items-center gap-5'>
                    <img src="/web/services/service1.jpg" alt="Service 1" className='h-4/5 w-4/5' />
                    <h1 className='px-8 font-medium text-xl text-black lg:text-2xl mt-auto'>{t('1.h1')}</h1>
                    <p className='px-8 text-sm md:text-base'>{t('1.p')}</p>
                </div>

                <div className='text-gray-700 pt-5 pb-8 text-center rounded-xl w-96 bg-white transition shadow-2xl flex flex-col items-center gap-5'>
                    <img src="/web/services/service2.jpg" alt="Service 2" className='h-4/5 w-4/5' />
                    <h1 className='px-8 font-medium text-xl text-black lg:text-2xl mt-auto'>{t('2.h1')}</h1>
                    <p className='px-8 text-sm md:text-base'>{t('2.p')}</p>
                </div>

                <div className='text-gray-700 pt-5 pb-8 text-center rounded-xl w-96 bg-white transition shadow-2xl flex flex-col items-center gap-5'>
                    <img src="/web/services/service3.jpg" alt="Service 3" className='h-4/5 w-4/5' />
                    <h1 className='px-8 font-medium text-xl text-black lg:text-2xl mt-auto'>{t('3.h1')}</h1>
                    <p className='px-8 text-sm md:text-base'>{t('3.p')}</p>
                </div>

            </div>

        </section>
    );
};

export default Services;
