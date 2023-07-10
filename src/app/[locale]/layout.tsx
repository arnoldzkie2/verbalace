import '../../lib/styles/globals.css'

import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
interface Props {
  children: React.ReactNode
  params: {
    locale: string
  }
}
export function generateStaticParams() {

  const allTranslation = ['en', 'cn', 'jp', 'kr', 'vn']

  return allTranslation.map((lang) => ({
    locale: lang
  }))

}

export async function generateMetadata({ params }: { params: { locale: string } }) {
  let title = '';
  let description = '';
  let keywords = '';

  if (params.locale === 'en') {
    // English
    title = 'VerbalAce | Enhance Your English Speaking Skills | Expert Online Tutoring';
    description = 'VerbalAce offers expert online English tutoring aimed at improving your oral English skills. Experience personalized one-on-one teaching that empowers you to communicate confidently in English. Whether you\'re preparing for IELTS/TOEFL or need to enhance your Business English, VerbalAce is your partner in achieving your English language goals.';
    keywords = 'English Learning, English Tutoring, Online English Classes, Verbal English, Business English, Conversation English, IELTS, TOEFL, One-on-One Teaching, Personalized Learning, Oral English Improvement';
  } else if (params.locale === 'cn') {
    // Chinese
    title = 'VerbalAce | 提高您的英语口语技能 | 专业在线辅导';
    description = 'VerbalAce提供专业的在线英语辅导，旨在提高您的英语口语技能。体验一对一的个性化教学，让您能够自信地用英语交流。无论您是在准备雅思/托福考试，还是需要提高您的商务英语，VerbalAce都是您实现英语口语目标的伙伴。';
    keywords = '学习英语, 英语辅导, 在线英语课程, 英语口语, 商务英语, 日常英语, 雅思, 托福, 一对一教学, 个性化学习, 口语英语提高, 菲律宾老师, 菲教';
  } else if (params.locale === 'vn') {
    // Vietnamese
    title = 'VerbalAce | Cải thiện kỹ năng nói tiếng Anh của bạn | Hướng dẫn trực tuyến chuyên nghiệp';
    description = 'VerbalAce cung cấp hướng dẫn tiếng Anh trực tuyến chuyên nghiệp, nhằm cải thiện kỹ năng nói tiếng Anh của bạn. Trải nghiệm học tập cá nhân qua giáo dục một-đối-một, giúp bạn tự tin giao tiếp bằng tiếng Anh. Dù bạn đang chuẩn bị cho kỳ thi IELTS/TOEFL hay cần cải thiện tiếng Anh thương mại của mình, VerbalAce là đối tác giúp bạn đạt được mục tiêu tiếng Anh.';
    keywords = 'học tiếng Anh, hướng dẫn tiếng Anh, khóa học tiếng Anh trực tuyến, tiếng Anh thông thạo, tiếng Anh thương mại, tiếng Anh giao tiếp, IELTS, TOEFL, giáo dục cá nhân, học tập cá nhân, cải thiện tiếng Anh';
  } else if (params.locale === 'jp') {
    // Japanese
    title = 'VerbalAce | あなたの英会話力を向上させる | プロのオンラインチュータリング';
    description = 'VerbalAceは、あなたの英会話力を向上させることを目指すプロのオンライン英語チュータリングを提供します。ワンツーワンの個別教育を体験し、自信を持って英語でコミュニケーションを取ることができます。あなたがIELTS/TOEFL試験の準備をしているか、ビジネス英語を向上させる必要があるかにかかわらず、VerbalAceはあなたの英語の目標を達成するパートナーです。';
    keywords = '英語学習, 英語チュータリング, オンライン英語コース, スポークン英語, ビジネス英語, 会話英語, IELTS, TOEFL, ワンツーワンの教育, 個別学習, 英会話力向上';
  } else if (params.locale === 'kr') {
    // Korean
    title = 'VerbalAce | 여러분의 영어 회화 능력을 향상시키세요 | 전문 온라인 튜터링';
    description = 'VerbalAce는 여러분의 영어 회화 능력을 향상시키기 위해 전문 온라인 영어 튜터링을 제공합니다. 원대원 교육을 통한 개인화된 학습을 체험하고, 영어로 자신있게 의사소통할 수 있습니다. IELTS/TOEFL 시험 준비를 하고 있던가, 비즈니스 영어 능력을 향상시키고 싶던가에 상관없이, VerbalAce는 여러분의 영어 학습 목표 달성을 위한 파트너입니다.';
    keywords = '영어 학습, 영어 튜터링, 온라인 영어 과정, 스포큰 영어, 비즈니스 영어, 회화 영어, IELTS, TOEFL, 원대원 교육, 개인화된 학습, 영어 회화 능력 향상';
  } else {
    title = 'VerbalAce | Enhance Your English Speaking Skills | Expert Online Tutoring';
    description = 'VerbalAce offers expert online English tutoring aimed at improving your oral English skills. Experience personalized one-on-one teaching that empowers you to communicate confidently in English. Whether you\'re preparing for IELTS/TOEFL or need to enhance your Business English, VerbalAce is your partner in achieving your English language goals.';
    keywords = 'English Learning, English Tutoring, Online English Classes, Verbal English, Business English, Conversation English, IELTS, TOEFL, One-on-One Teaching, Personalized Learning, Oral English Improvement';
  }

  return {
    title,
    description,
    keywords
  };
}


export default async function LocaleLayout({ children, params: { locale } }: Props) {

  let translation;

  try {

    translation = (await import(`../../translation/${locale}.json`)).default;

  } catch (error) {

    notFound();

  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={translation}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}