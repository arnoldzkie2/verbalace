/* eslint-disable @next/next/no-img-element */
'use client'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

interface ServicesProps {

}

const Services: React.FC<ServicesProps> = ({ }) => {

    const t = useTranslations('services')

    return (
        <section id='services' className='py-20 flex items-center flex-col gap-10 lg:gap-16 px-5 sm:px-10 md:px-16 lg:px-24 xl:px-36 2xl:px-44'>
            <h1 className='text-gray-700 text-3xl md:text-4xl lg:text-5xl font-light lg:font-extralight pb-8 mb-8 border-b 2xl:hidden'>{t('offer')}</h1>
            <div className='flex flex-col 2xl:flex-row 2xl:justify-around items-center xl:gap-20 w-full'>
                <Image src={'/web/services/service.png'} alt='Our Services' width={730} height={730} />
                {/* <img src="/web/services/service.png" alt="Our Services" className='w-full xl:pb-0 xl:mb-0 xl:border-none sm:pb-8 sm:mb-8 sm:w-5/6 md:w-2/3 xl:w-7/12 pb-5 mb-5 border-b' /> */}
                <div className='flex gap-10 flex-col items-center justify-center 2xl:items-start 2xl:w-2/5'>
                    <h1 className='text-gray-700 text-3xl md:text-4xl lg:text-5xl hidden 2xl:block font-light lg:font-extralight pb-8 border-b'>{t('offer')}</h1>
                   
                    <div className='flex items-center flex-col sm:flex-row lg:w-5/6 2xl:w-full gap-4 p-4 border'>
                        <Image src={'/web/services/service1.jpg'} alt='Service 1' width={144} height={144} />
                        <div className='text-gray-700 sm:text-left text-center 2xl:items-start flex gap-3 flex-col w-5/6 md:w-2/3 2xl:w-5/6'>
                            <h1 className='font-medium text-xl text-black lg:text-2xl mt-auto'>{t('1.h1')}</h1>
                            <p className='text-sm md:text-base'>{t('1.p')}</p>
                        </div>
                    </div>

                    <div className='flex items-center flex-col sm:flex-row lg:w-5/6 2xl:w-full gap-4 p-4 border'>
                        <Image src={'/web/services/service2.jpg'} alt='Service 2' width={144} height={144} />
                        <div className='text-gray-700 sm:text-left text-center 2xl:items-start flex gap-3 flex-col w-5/6 md:w-2/3 2xl:w-5/6'>
                            <h1 className='font-medium text-xl text-black lg:text-2xl mt-auto'>{t('2.h1')}</h1>
                            <p className='text-sm md:text-base'>{t('2.p')}</p>
                        </div>
                    </div>

                    <div className='flex items-center flex-col sm:flex-row lg:w-5/6 2xl:w-full gap-4 p-4 border'>
                        <Image src={'/web/services/service3.jpg'} alt='Service 3' width={144} height={144} />
                        <div className='text-gray-700 sm:text-left text-center 2xl:items-start flex gap-3 flex-col w-5/6 md:w-2/3 2xl:w-5/6'>
                            <h1 className='font-medium text-xl text-black lg:text-2xl mt-auto'>{t('3.h1')}</h1>
                            <p className='text-sm md:text-base'>{t('3.p')}</p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Services;
