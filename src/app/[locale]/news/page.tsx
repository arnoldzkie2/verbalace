import LatestNews from '@/components/web/news/LatestNews';
import NewsFooter from '@/components/web/news/NewsFooter';
import NewsHeader from '@/components/web/news/NewsHeader';
import NewsMain from '@/components/web/news/NewsMain';
import ReadMore from '@/components/web/news/ReadMore';
import axios from 'axios';
import React from 'react';

interface PageProps {

}

export async function generateMetadata({ params }: { params: { locale: string } }) {

    const translateDescription = () => {
        if (params.locale === 'en' || params.locale === '') {
            return `Discover the power of online learning with VerbalAce! Our platform revolutionizes education, offering expert-led courses designed to unlock your potential. Explore our innovative virtual classrooms, personalized learning experiences, and stay ahead of the curve. Join our community of lifelong learners and embrace a world of limitless possibilities. Get ready to shape your future with VerbalAce!`;
        } else if (params.locale === 'jp') {
            return `VerbalAceとともにオンライン学習の力を発見しましょう！私たちのプラットフォームは教育を革新し、あなたの潜在能力を引き出すために設計された専門家主導のコースを提供しています。革新的なバーチャル教室、個別の学習体験を探索し、常に最先端を行くことができます。生涯学習者のコミュニティに参加し、無限の可能性の世界を受け入れましょう。VerbalAceと共に未来を形作る準備をしましょう！`;
        } else if (params.locale === 'cn') {
            return `与VerbalAce一起发掘在线学习的力量！我们的平台革新了教育，提供由专家主导、旨在开发您潜力的课程。探索我们创新的虚拟课堂、个性化学习体验，保持领先。加入我们的终身学习者社区，拥抱无限可能的世界。准备好与VerbalAce一起塑造您的未来！`;
        } else if (params.locale === 'vn') {
            return `Khám phá sức mạnh của học trực tuyến cùng VerbalAce! Nền tảng của chúng tôi cách mạng hóa giáo dục, cung cấp các khóa học do các chuyên gia dẫn dắt, nhằm mở khóa tiềm năng của bạn. Khám phá các lớp học ảo sáng tạo của chúng tôi, trải nghiệm học tập cá nhân hóa và luôn tiên phong. Tham gia cộng đồng học viên suốt đời của chúng tôi và om sát thế giới vô hạn. Hãy sẵn sàng khắc họa tương lai của bạn cùng VerbalAce!`;
        } else if (params.locale === 'kr') {
            return `VerbalAce와 함께 온라인 학습의 힘을 발견하세요! 저희 플랫폼은 교육을 혁신하여 잠재력을 발휘할 수 있는 전문가 주도의 강좌를 제공합니다. 혁신적인 가상 교실과 맞춤형 학습 경험을 탐색하고 항상 최전선에 머무를 수 있습니다. 평생 학습자 커뮤니티에 참여하고 무한한 가능성의 세계를 받아들이세요. VerbalAce와 함께 미래를 형성할 준비를 하세요!`;
        }
    }

    const descip = translateDescription()

    return {
        title: 'VerbalAce News',
        description: descip
    }
}

const getAllNews = async () => {

    try {

        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/news?department=${process.env.NEXT_PUBLIC_DEPARTMENT}`)

        if (data.success) return data.data

    } catch (error) {

        console.log(error);

    }

}

export const revalidate = 43200

const Page: React.FC<PageProps> = async ({ }) => {

    const news = await getAllNews()

    return (
        <div className='overflow-x-hidden bg-slate-50'>

            <NewsHeader />

            <NewsMain />

            <LatestNews news={news} />

            <ReadMore news={news} />

            <NewsFooter />
            
        </div>
    );
};

export default Page;
