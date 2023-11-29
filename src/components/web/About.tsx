/* eslint-disable @next/next/no-img-element */
'use client'
import { useTranslations } from 'next-intl';

const About: React.FC = () => {

    const t = useTranslations('about')

    return (
        <section className='py-10 lg:py-20 px-5 sm:px-10 md:px-16 lg:px-24 xl:px-36 2xl:px-44 flex items-center gap-10 md:gap-16 text-gray-700 flex-col' id='about'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light lg:font-extralight 2xl:hidden'>{t('h1')}</h1>
            <div className='flex flex-col gap-5 sm:gap-10 md:gap-16 xl:gap-20 items-center 2xl:items-end 2xl:flex-row 2xl:justify-between'>
                <video controls preload='true' className='w-auto h-auto outline-none 2xl:w-2/3 2xl:h-2/3 rounded-md' poster='/web/about/thumbnail.webp'>
                    <source src='/web/about/about.mp4' type='video/mp4' />
                    Your browser does not support the video.
                </video> 
                <aside className='flex flex-col 2xl:w-1/2 items-center md:items-start gap-5 lg:gap-7 text-gray-600'>
                    <h1 className='text-3xl md:text-4xl text-gray-700 lg:text-5xl xl:text-6xl font-light lg:font-extralight mb-5 pb-5 border-b hidden 2xl:block'>{t('h1')}</h1>
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
