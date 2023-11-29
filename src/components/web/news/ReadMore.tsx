'use client'
import { useLocale, useTranslations } from 'next-intl';
import React, { useState } from 'react';
import Link from 'next-intl/link'

interface ReadMoreProps {
    news: {
        id: string
        author: string
        title: string
        keywords: string[]
        content: string
        updated_at: string
        created_at: string
    }[]
}

const formatTimeAgo = (date: any, locale: string) => {
    const now: any = new Date();
    const seconds = Math.floor((now - date) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    const localize = (value: number, unit: string) => {
        if (locale === 'cn') {
            // Chinese localization
            const translations: any = {
                year: '年',
                month: '个月',
                day: '天',
                hour: '小时',
                minute: '分钟',
                second: '秒',
            };
            return `${value}${translations[unit] || unit}前`;
        } else if (locale === 'kr') {
            // Korean localization
            const translations: any = {
                year: '년',
                month: '개월',
                day: '일',
                hour: '시간',
                minute: '분',
                second: '초',
            };
            return `${value}${translations[unit] || unit} 전`;
        } else if (locale === 'jp') {
            // Japanese localization
            const translations: any = {
                year: '年',
                month: 'ヶ月',
                day: '日',
                hour: '時間',
                minute: '分',
                second: '秒',
            };
            return `${value}${translations[unit] || unit}前`;
        } else if (locale === 'vn') {
            // Vietnamese localization
            const translations: any = {
                year: 'năm',
                month: 'tháng',
                day: 'ngày',
                hour: 'giờ',
                minute: 'phút',
                second: 'giây',
            };
            return `${value} ${translations[unit] || unit} trước`;
        } else {
            // English localization (default)
            return `${value} ${unit}${value > 1 ? 's' : ''} ago`;
        }
    };

    if (years > 0) {
        return localize(years, 'year');
    } else if (months > 0) {
        return localize(months, 'month');
    } else if (days > 0) {
        return localize(days, 'day');
    } else if (hours > 0) {
        return localize(hours, 'hour');
    } else if (minutes > 0) {
        return localize(minutes, 'minute');
    } else {
        return localize(seconds, 'second');
    }
};

const ReadMore: React.FC<ReadMoreProps> = ({ news }) => {

    const locale = useLocale();

    const [maxVisibleItems, setMaxVisibleItems] = useState(6)

    const displayedNews = news.slice(0, maxVisibleItems);

    const t = useTranslations('news')

    return (
        <div className='flex flex-col items-center px-5 sm:px-10 md:px-16 lg:px-24 gap-5 md:gap-10 py-10'>
            <h1 className='font-light lg:font-extralight text-3xl md:text-4xl lg:text-5xl'>{t('more')}</h1>
            <div className='flex flex-wrap justify-center py-5 md:py-10 items-center gap-5 md:gap-6 lg:gap-7 xl:gap-9 xl:w-2/3'>
                {displayedNews &&
                    displayedNews.length > 0 &&
                    displayedNews.map((newsItem) => {

                        const timeAgo = formatTimeAgo(new Date(newsItem.created_at), locale);

                        return (
                            <Link
                                key={newsItem.id}
                                href={`/news/${newsItem.id}`}
                                className='sm:w-2/5 rounded-lg border-t-2 bg-white border-blue-600 p-5 shadow-md hover:scale-105 duration-150 flex flex-col gap-5 md:gap-8'
                            >
                                <h1 className='text-base md:text-lg lg:text-xl font-medium text-gray-900'>{newsItem.title && newsItem.title}</h1>
                                <div className='w-full flex justify-between'>
                                    <div className='font-bold text-sm md:text-base'>{newsItem.author && newsItem.author}</div>
                                    <div className='text-gray-600 text-sm md:text-base'>{timeAgo}</div>
                                </div>
                            </Link>
                        );
                    })}
            </div>
            {news.length > maxVisibleItems && (
                <button
                    onClick={() => setMaxVisibleItems((prevState) => prevState + 6)}
                    className='text-blue-500 hover:text-blue-700 cursor-pointer lg:text-lg'
                >
                    {t('show')}
                </button>
            )}
        </div>
    );
};

export default ReadMore;

