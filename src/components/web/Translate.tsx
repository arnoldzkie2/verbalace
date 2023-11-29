'use client'

import { useRouter } from 'next/navigation';
import { usePathname } from 'next-intl/client';
import React from 'react';

interface TranslateProps {
    locale: string
    scroll: boolean
    isOpen: boolean
}


const Translate: React.FC<TranslateProps> = ({ locale, scroll, isOpen }) => {

    const router = useRouter()

    const currentPathname = usePathname()

    const handleTranslation = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLocale = event.target.value;
        const newPath = `/${selectedLocale}${currentPathname}`
        router.push(newPath)
    }

    return (
        <select className={`py-2 px-1 text-center text-sm bg-transparent border-0 cursor-pointer border-b ${scroll || isOpen ? 'border-blue-600 text-gray-700' : 'border-gray-200 text-white focus:bg-blue-500'} appearance-none focus:outline-none focus:ring-0 focus:border-gray-200 outline-none`} value={locale} onChange={handleTranslation}>
            <option value="en">English</option>
            <option value="zh">中文</option>
            <option value="ja">日本語</option>
            <option value="kr">한국어</option>
            <option value="vi">Tiếng Việt</option>
        </select>
    );
};

export default Translate;
