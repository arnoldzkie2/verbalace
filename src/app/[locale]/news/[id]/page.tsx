/* eslint-disable @next/next/no-img-element */
import NewsHeader from '@/components/web/news/NewsHeader';
import axios from 'axios';
import React from 'react';
import Link from 'next/link'
import NewsFooter from '@/components/web/news/NewsFooter';
import 'react-quill/dist/quill.snow.css'
import { notFound } from 'next/navigation';
import ReadMore from '@/components/web/news/ReadMore';
import SingleNews from '@/components/web/news/SingleNews';
import LatestNews from '@/components/web/news/LatestNews';

interface PageProps {
    params: {
        id: string
        locale: string
    }
}

export const revalidate = 43200

export async function generateStaticParams() {

    try {

        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/news/${process.env.NEXT_PUBLIC_DEPARTMENT}`)

        return data.data

    } catch (error) {

        console.log(error);

    }

}

const generateDescription = (news: NewsType, locale: string) => {
    switch (locale) {
        case 'cn':
            return `新闻标题: ${news.title} | 作者: ${news.author} | 日期: ${news.date}（中文翻译）`;
        case 'jp':
            return `ニュースタイトル: ${news.title} | 作者: ${news.author} | 日付: ${news.date}（日本語訳）`;
        case 'kr':
            return `뉴스 제목: ${news.title} | 작성자: ${news.author} | 날짜: ${news.date}（한국어 번역）`;
        case 'vn':
            return `Tiêu đề tin: ${news.title} | Tác giả: ${news.author} | Ngày: ${news.date}（Tiếng Việt dịch）`;
        default:
            return `News Title: ${news.title} | Author: ${news.author} | Date: ${news.date}`;
    }
}

export async function generateMetadata({ params }: PageProps) {

    const news: NewsType = await getSingleNews(params.id);

    const description = generateDescription(news, params.locale);

    const keywords = news.keywords.join(', ')

    return {
        title: news.title,
        description,
        keywords
    };
}



const getSingleNews = async (id: string) => {

    try {

        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/news?id=${id}`)

        if (data.success) return data.data

    } catch (error) {

        console.log(error);

    }

}

interface NewsType {
    id: string
    author: string
    title: string
    keywords: string[]
    content: string
    date: string
}

const getAllNews = async () => {

    try {

        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/news?department=${process.env.NEXT_PUBLIC_DEPARTMENT}`)

        if (data.success) return data.data

    } catch (error) {

        console.log(error);

    }

}

const Page: React.FC<PageProps> = async ({ params }) => {

    const allNews: NewsType[] = await getAllNews()

    const news: NewsType = await getSingleNews(params.id)

    if (!news) return notFound()

    return (
        <div className='overflow-x-hidden bg-slate-200 flex flex-col items-center'>
            <NewsHeader />
            <SingleNews news={news} />
            <LatestNews news={allNews}/>
            <ReadMore news={allNews} />
            <NewsFooter />
        </div >
    );
};

export default Page;
