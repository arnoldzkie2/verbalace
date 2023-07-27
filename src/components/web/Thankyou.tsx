/* eslint-disable react/no-unescaped-entities */
'use client'
import { useTranslations } from 'next-intl'
import React from 'react'

const Thankyou = () => {

    const t = useTranslations('thankyou')
    return (
        <section className='text-center py-10 lg:py-20 px-5 sm:px-10 md:px-16 lg:px-24 xl:px-36 2xl:px-44 flex flex-col items-center text-gray-700 gap-10'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light lg:font-extralight mb-5 pb-5 border-b'>{t('h1')}</h1>
            <p className='text-sm md:text-base'>{t('h2')}</p>
            <div className='flex items-center gap-5'>
                <span className='w-9 h-1.5 bg-blue-500 rounded-lg hidden md:block'></span>
                <span className='w-9 h-1.5 bg-blue-500 rounded-lg hidden md:block'></span>
                <span className='w-9 h-1.5 bg-blue-500 rounded-lg'></span>
                <span className='w-9 h-1.5 bg-blue-500 rounded-lg'></span>
                <span className='w-9 h-1.5 bg-blue-500 rounded-lg'></span>
                <span className='w-9 h-1.5 bg-blue-500 rounded-lg'></span>
                <span className='w-9 h-1.5 bg-blue-500 rounded-lg'></span>
            </div>
        </section>
    )
}

export default Thankyou