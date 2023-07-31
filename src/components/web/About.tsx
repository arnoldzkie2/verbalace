/* eslint-disable @next/next/no-img-element */
'use client'
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

const About: React.FC = ({ }) => {

    const t = useTranslations('about')

    const [videoSize, setVideoSize] = useState({
        width: 0,
        height: 0
    })

    const updateVideoSize = () => {
        const width = window.innerWidth;
        if (width > 300 && width < 400) {
            setVideoSize({
                width: 290,
                height: 280
            })
        } else if (width > 400 && width < 500) {
            setVideoSize({
                width: 390,
                height: 300
            });
        } else if (width > 500 && width < 600) {
            setVideoSize({
                width: 490,
                height: 330
            });
        } else if (width > 600 && width < 700) {
            setVideoSize({
                width: 585,
                height: 360
            })
        } else if (width > 700 && width < 800) {
            setVideoSize({
                width: 685,
                height: 400
            })
        } else if (width > 800 && width < 900) {
            setVideoSize({
                width: 775,
                height: 430
            })
        } else if (width > 900 && width < 1000) {
            setVideoSize({
                width: 875,
                height: 450
            })
        } else if (width > 1000 && width < 1100) {
            setVideoSize({
                width: 975,
                height: 500
            })
        } else if (width > 1100 && width < 1200) {
            setVideoSize({
                width: 1075,
                height: 550
            })
        } else if (width > 1200 && width < 1300) {
            setVideoSize({
                width: 1175,
                height: 550
            })
        } else if (width > 1300) {
            setVideoSize({
                width: 1275,
                height: 560
            })
        }
        // You can add more conditions for different viewport widths if needed
    };

    useEffect(() => {
        // Set the initial video size
        updateVideoSize();

        // Add an event listener to track viewport width changes
        window.addEventListener('resize', updateVideoSize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', updateVideoSize);
        };
    }, []);

    return (
        <section className='py-10 lg:py-20 px-5 sm:px-10 md:px-16 lg:px-24 xl:px-36 2xl:px-44 flex items-center gap-10 md:gap-16 text-gray-700 flex-col' id='about'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light lg:font-extralight 2xl:hidden'>{t('h1')}</h1>
            <div className='flex flex-col gap-5 sm:gap-10 md:gap-16 xl:gap-20 items-center xl:items-end 2xl:flex-row lg:justify-between'>
                <video controls className='w-auto h-auto 2xl:w-2/3 2xl:h-2/3 rounded-md' poster='/web/about/thumbnail.webp'>
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
