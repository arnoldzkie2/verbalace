/* eslint-disable @next/next/no-img-element */
import NewsHeader from '@/components/web/news/NewsHeader';
import axios from 'axios';
import React from 'react';
import NewsFooter from '@/components/web/news/NewsFooter';
import 'react-quill/dist/quill.snow.css'
import { notFound } from 'next/navigation';
import ReadMore from '@/components/web/news/ReadMore';
import SingleNews from '@/components/web/news/SingleNews';
import LatestNews from '@/components/web/news/LatestNews';
import { getAllNews, getSingleNews } from '@/lib/api/news';

interface PageProps {
    params: {
        id: string
        locale: string
    }
}

export const revalidate = 43200

export const generateStaticParams = async () => {

    try {

        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/news`, {
            params: {
                departmentID: process.env.NEXT_PUBLIC_DEPARTMENT
            }
        })

        return data.data.map((news: NewsType) => ({
            id: news.id
        }))

    } catch (error) {
    }

}

const generateDescription = (news: NewsType, locale: string) => {
    switch (locale) {
        case 'zh':
            return `新闻标题: ${news.title} | 作者: ${news.author} | 日期: ${news.created_at}（中文翻译）`;
        case 'ja':
            return `ニュースタイトル: ${news.title} | 作者: ${news.author} | 日付: ${news.created_at}（日本語訳）`;
        case 'kr':
            return `뉴스 제목: ${news.title} | 작성자: ${news.author} | 날짜: ${news.created_at}（한국어 번역）`;
        case 'vi':
            return `Tiêu đề tin: ${news.title} | Tác giả: ${news.author} | Ngày: ${news.created_at}（Tiếng Việt dịch）`;
        default:
            return `News Title: ${news.title} | Author: ${news.author} | Date: ${news.created_at}`;
    }
}

export const generateMetadata = async ({ params }: PageProps) => {

    const news: NewsType = await getSingleNews(params.id);
    const description = generateDescription(news, params.locale);
    const keywords = news.keywords.join(', ')
    return {
        title: news.title,
        description,
        keywords
    };
}


interface NewsType {
    id: string
    author: string
    title: string
    keywords: string[]
    created_at: string
    updated_at: string
}

interface SingelNewsType {
    id: string
    author: string
    title: string
    content: string
    keywords: string[]
    created_at: string
    updated_at: string
}

const Page: React.FC<PageProps> = async ({ params }) => {

    const allNews: NewsType[] = await getAllNews()
    const singleNews: SingelNewsType = await getSingleNews(params.id)

    if (!singleNews) return notFound()

    return (
        <div className='overflow-x-hidden bg-slate-200 flex flex-col items-center'>
            <NewsHeader />
            <SingleNews news={singleNews} />
            <LatestNews news={allNews} />
            <ReadMore news={allNews} />
            <NewsFooter />
        </div >
    );
};

export default Page;
