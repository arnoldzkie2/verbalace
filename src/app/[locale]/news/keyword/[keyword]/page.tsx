import LatestNews from '@/components/web/news/LatestNews';
import NewsFooter from '@/components/web/news/NewsFooter';
import NewsHeader from '@/components/web/news/NewsHeader';
import NewsMain from '@/components/web/news/NewsMain';
import ReadMore from '@/components/web/news/ReadMore';
import RelatedNews from '@/components/web/news/RelatedNews';
import { getAllNews, getRelatedNews } from '@/lib/news/news';
import axios from 'axios';
import React from 'react';

interface PageProps {
    params: {
        keyword: string
        locale: string
    }
}

interface NewsType {
    id: string
    author: string
    title: string
    content: string
    keywords: string[]
    date: string
}

export const revalidate = 43200

export const generateStaticParams = async () => {

    try {

        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/news/${process.env.NEXT_PUBLIC_DEPARTMENT}/keyword`)

        return data.data.map((item: any) => ({
            keyword: item
        }))

    } catch (error) {

        console.log(error);

    }
}

export const generateMetadata = async ({ params }: PageProps) => {

    const decodedKeyword = decodeURIComponent(params.keyword);

    const translateDescription = () => {
        let description = '';

        switch (params.locale) {
            case 'en':
            case '':
                description = `All news related to ${decodedKeyword} keyword.`;
                break;
            case 'jp':
                description = `「${decodedKeyword}」キーワードに関連するすべてのニュースです。`;
                break;
            case 'cn':
                description = `所有与关键词「${decodedKeyword}」相关的新闻。`;
                break;
            case 'vn':
                description = `Tất cả tin tức liên quan đến từ khóa "${decodedKeyword}".`;
                break;
            case 'kr':
                description = `"${decodedKeyword}" 키워드와 관련된 모든 뉴스입니다.`;
                break;
            default:
                description = `All news related to ${decodedKeyword} keyword.`;
        }

        return description;
    }

    const descip = translateDescription()


    return {
        title: decodedKeyword,
        description: descip
    }
}

const Page: React.FC<PageProps> = async ({ params }) => {

    const relatedNews: NewsType[] = await getRelatedNews(params.keyword)

    const allNews: NewsType[] = await getAllNews()

    return (
        <div className='overflow-x-hidden'>

            <NewsHeader />

            <NewsMain />

            <RelatedNews news={relatedNews} />

            <LatestNews news={allNews} />

            <ReadMore news={allNews} />

            <NewsFooter />

        </div>
    );
};

export default Page;
