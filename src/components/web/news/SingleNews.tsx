'use client'
import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';
import React from 'react';

interface SingleNewsProps {
    news: {
        id: string
        author: string
        title: string
        keywords: string[]
        content: string
        created_at: string
        updated_at: string
    }
}

const SingleNews: React.FC<SingleNewsProps> = ({ news }) => {

    const t = useTranslations('news')

    return (
        <section className='mt-24 flex flex-col py-5 px-3 sm:px-4 md:px-5 items-center border bg-white shadow-2xl w-full md:w-3/4 lg:w-2/3 xl:w-1/2 lg:px-6 xl:px-8'>
            <header className='gap-5 flex flex-col md:gap-8'>
                <h1 className='text-gray-900 text-2xl md:text-3xl xl:text-4xl font-bold text-left'>{news.title && news.title}</h1>
                <div className='flex flex-col gap-3'>
                    <small className='font-bold md:text-base lg:text-lg text-blue-600'>{news.author && news.author}</small>
                    <div className='text-gray-700 font-medium'>{t('published')} {new Date(news.created_at).toLocaleString()}</div>
                </div>
                <div className='font-medium'>{t('key')}</div>
                <div className='relative py-6 border-y-2 border-blue-600'>
                    <div className='flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full flex-wrap'>
                        {news && news.keywords.length > 0 && news.keywords.map((item, index) => (
                            <Link href={`/news/keyword/${item}`} key={index} className='text-sm bg-slate-50 hover:text-blue-600 px-2 py-1 lg:px-3 lg:py-2 rounded-sm'>
                                {item}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
            <main className='pb-5 sm:pb-10 md:pb-16 lg:pb-24 flex justify-center'>
                <article dangerouslySetInnerHTML={{ __html: news.content && news.content }}></article>
            </main>
        </section>
    );
};

export default SingleNews;
