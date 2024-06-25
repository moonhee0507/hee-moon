'use client';

import Image from 'next/image';
import profile from '@/public/profile.jpg';
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import StyledTitle from '@/components/StyledTitle';
import StyledListItem from '@/components/StyledListItem';

const skills = [
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        content: 'JavaScript (ES6+)',
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
        content: 'TypeScript',
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
        content: 'React',
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
        content: 'Node.js',
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg',
        content: 'MongoDB',
    },
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
        content: 'AWS S3',
    },
];

export default function Home() {
    return (
        <main className="flex flex-col gap-48">
            <section className="py-44">
                <h2 className="sr-only">간단 소개</h2>
                <div className="">
                    <p className="flex flex-col gap-4">
                        <span className="text-2xl">안녕하세요, 제 이름은</span>
                        <em className="text-5xl font-bold not-italic">문희</em>
                        <em className="text-5xl font-bold not-italic text-foreground/50">
                            입니다. 저는 웹 프론트엔드 개발자입니다.
                        </em>
                        <span className="text-2xl">
                            저는 Form 컨트롤에 특화된 프론트엔드 엔지니어입니다.
                            현재는 B-square Lab에서 자격증 및 수료증을 NFT로
                            저장하는 'NFT 인증서' 서비스의 웹 & 웹뷰를 담당하고
                            있습니다.
                        </span>
                    </p>
                </div>
            </section>
            <section>
                <div className="flex flex-col gap-12">
                    <StyledTitle id="about" title="01. About Me" />
                    <div className="flex gap-8">
                        <div className="space-y-4 break-keep text-xl leading-8">
                            <p>
                                안녕하세요. 제 이름은 문희이고, 저는 살아 있는
                                화면을 만드는 작업을 좋아합니다. 웹 개발에 대한
                                관심은 지난 2022년부터 시작되었습니다. 막연하게
                                IT 기업 입사를 꿈꾸며 수강한 프론트엔드 수업에서
                                HTML & CSS로 직접 화면을 구현하고 JavaScript로
                                UI 로직을 만드는 일에 흥미를 가지게 되었습니다.
                            </p>
                            <p>
                                ReactJS를 중점으로 한 프론트엔드 교육 수료 후,
                                OAuth를 이용한 소셜 로그인 기능을 직접 만들고
                                싶어{' '}
                                <em className="bg-primary not-italic text-primary-foreground">
                                    Express로 서버 API를 만들고 MongoDB와 AWS
                                    S3를 사용한 채식 지도 애플리케이션을
                                    배포하기도 했습니다. DB & Storage & 컨테이너
                                    기반 PaaS 서비스를 사용한 Backend 배포를
                                    통해 백엔드 - 프론트엔드 통신에 대해
                                    전반적으로 이해
                                </em>
                                할 수 있게 되었습니다!
                            </p>
                            <p>
                                2023년 7월부터 한 블록체인 회사의 프론트엔드
                                개발자로 일을 시작했습니다. 요즘 저의 관심사는{' '}
                                <em>테이블 UI의 편의성 개선</em>입니다. 테이블
                                헤더에서 필터링과 정렬 기능을 사용자가 편리하게
                                사용할 수 있도록 고민하고 있습니다.
                            </p>
                            <p>
                                최근에 제가 사용해본 몇 가지 기술은 다음과
                                같습니다:
                            </p>
                            <div>
                                <ul className="grid grid-cols-3 gap-4">
                                    {skills.map((skill, index) => (
                                        <StyledListItem
                                            key={index}
                                            src={skill.src}
                                            content={skill.content}
                                        />
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="shrink-0 basis-80">
                            <Image src={profile} alt="Moon Hee" width={500} />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <StyledTitle
                        id="experience"
                        title="02. Where I've Worked"
                    />
                    <div>
                        <Tabs aria-label="Options">
                            <Tab key="bSquareLab" title="B-square Lab">
                                <Card>
                                    <CardBody>
                                        <div>
                                            <dl>
                                                <dt className="sr-only">
                                                    직무
                                                </dt>
                                                <dd>
                                                    <p>Frontend Engineer</p>
                                                </dd>
                                                <dt className="sr-only">
                                                    재직 기간
                                                </dt>
                                                <dd>2023.07 - 현재</dd>
                                                <dt className="sr-only">
                                                    업무 내용
                                                </dt>
                                                <dd>
                                                    <ol>
                                                        <li>
                                                            <div>
                                                                <dl>
                                                                    <dt>
                                                                        서비스명
                                                                    </dt>
                                                                    <dd>
                                                                        NFT인증서
                                                                    </dd>
                                                                    <dt>
                                                                        간단
                                                                        소개
                                                                    </dt>
                                                                    <dd>
                                                                        종이
                                                                        인증서를
                                                                        NFT로
                                                                        발행하고
                                                                        인증서를
                                                                        증명하는
                                                                        서비스
                                                                    </dd>
                                                                    <dt>
                                                                        담당
                                                                        업무
                                                                    </dt>
                                                                    <dd>
                                                                        웹
                                                                        프론트엔드
                                                                    </dd>
                                                                    <dt>
                                                                        담당
                                                                        역할
                                                                    </dt>
                                                                    <dd>
                                                                        <ol>
                                                                            <li>
                                                                                <em>
                                                                                    인증서
                                                                                    발급처
                                                                                    -
                                                                                    인증서의
                                                                                    양식을
                                                                                    만드는
                                                                                    폼
                                                                                    생성
                                                                                    기능
                                                                                </em>
                                                                                <ul>
                                                                                    <li>
                                                                                        react-hook-form와
                                                                                        zod을
                                                                                        활용한
                                                                                        Dynamic
                                                                                        Form
                                                                                        구현
                                                                                        (e.g
                                                                                        이름
                                                                                        항목
                                                                                        추가,
                                                                                        성별
                                                                                        항목
                                                                                        삭제,
                                                                                        증명
                                                                                        사진
                                                                                        항목
                                                                                        추가
                                                                                        등)
                                                                                    </li>
                                                                                    <li>
                                                                                        tanstack/table의
                                                                                        Editable
                                                                                        table을
                                                                                        사용하여
                                                                                        row의
                                                                                        순서를
                                                                                        DnD로
                                                                                        제어
                                                                                    </li>
                                                                                    <li>
                                                                                        valueType을
                                                                                        VARCHAR/DATE/SELECT
                                                                                        등으로
                                                                                        구분하고
                                                                                        각
                                                                                        valueType에
                                                                                        최소
                                                                                        길이와
                                                                                        같은
                                                                                        제약
                                                                                        사항을
                                                                                        추가
                                                                                    </li>
                                                                                    <li>
                                                                                        인증서
                                                                                        신청자가
                                                                                        해당
                                                                                        제약
                                                                                        사항에
                                                                                        따라
                                                                                        입력했는지
                                                                                        유효성
                                                                                        검증
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li>
                                                                                <em>
                                                                                    인증서
                                                                                    증명
                                                                                    기능
                                                                                </em>
                                                                                <ul>
                                                                                    <li>
                                                                                        Verification
                                                                                        center
                                                                                        기능과
                                                                                        유사한
                                                                                        증명
                                                                                        기능
                                                                                    </li>
                                                                                    <li>
                                                                                        승인된
                                                                                        인증서는
                                                                                        ENS가
                                                                                        발급되는데,{' '}
                                                                                        <code>
                                                                                            BASE_URL/ens/ensName
                                                                                        </code>

                                                                                        로
                                                                                        생성된
                                                                                        QR을
                                                                                        스캔하고
                                                                                        verify
                                                                                        API를
                                                                                        통해
                                                                                        증명
                                                                                        결과를
                                                                                        화면에
                                                                                        표시
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li>
                                                                                <em>
                                                                                    인증서
                                                                                    프린트
                                                                                    기능
                                                                                </em>
                                                                                <ul>
                                                                                    <li>
                                                                                        승인된
                                                                                        인증서의
                                                                                        신청자
                                                                                        이름
                                                                                        및
                                                                                        발급
                                                                                        일자
                                                                                        등을
                                                                                        조합하여
                                                                                        이미지
                                                                                        프린트
                                                                                        미리보기
                                                                                        및
                                                                                        프린트
                                                                                        기능
                                                                                        구현
                                                                                    </li>
                                                                                    <li>
                                                                                        팝업창을
                                                                                        사용하고
                                                                                        at-rule
                                                                                        print로
                                                                                        팝업창
                                                                                        element에
                                                                                        CSS를
                                                                                        입혀
                                                                                        구현
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li>
                                                                                <em>
                                                                                    기타
                                                                                </em>
                                                                                <ul>
                                                                                    <li>
                                                                                        TailwindCSS의
                                                                                        유틸리티
                                                                                        class를
                                                                                        통한
                                                                                        다크모드
                                                                                        구현
                                                                                        /
                                                                                        nextui와
                                                                                        통합
                                                                                    </li>
                                                                                    <li>
                                                                                        TailwindCSS를
                                                                                        사용하여
                                                                                        Mobile
                                                                                        first의
                                                                                        반응형
                                                                                        레이아웃
                                                                                        구현
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                        </ol>
                                                                    </dd>
                                                                    <dt>
                                                                        사용한
                                                                        기술
                                                                    </dt>
                                                                    <dd>
                                                                        React,
                                                                        TypeScript,
                                                                        Tanstack/query,
                                                                        TailwindCSS,
                                                                        Shadcn/ui,
                                                                        nextui,
                                                                        vite
                                                                    </dd>
                                                                    <dt>
                                                                        업무
                                                                        기간
                                                                    </dt>
                                                                    <dd>
                                                                        2024.01
                                                                        - 현재
                                                                    </dd>
                                                                    <dt>
                                                                        개발
                                                                        인원
                                                                    </dt>
                                                                    <dd>5명</dd>
                                                                </dl>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <dl>
                                                                    <dt>
                                                                        서비스명
                                                                    </dt>
                                                                    <dd>
                                                                        NFT카메라
                                                                    </dd>
                                                                    <dt>
                                                                        간단
                                                                        소개
                                                                    </dt>
                                                                    <dd>
                                                                        직접
                                                                        촬영한
                                                                        사진을
                                                                        NFT로
                                                                        발행하고
                                                                        사진의
                                                                        원본
                                                                        여부를
                                                                        증명하는
                                                                        서비스
                                                                    </dd>
                                                                    <dt>
                                                                        담당
                                                                        업무
                                                                    </dt>
                                                                    <dd>
                                                                        웹
                                                                        프론트엔드
                                                                    </dd>
                                                                    <dt>
                                                                        담당
                                                                        역할
                                                                    </dt>
                                                                    <dd>
                                                                        <ol>
                                                                            <li>
                                                                                <em>
                                                                                    Verification
                                                                                    Center
                                                                                    기능
                                                                                    담당
                                                                                </em>
                                                                                <ul>
                                                                                    <li>
                                                                                        임의의
                                                                                        사진이
                                                                                        NFT카메라로
                                                                                        촬영한
                                                                                        원본인지
                                                                                        여부를
                                                                                        증명하는
                                                                                        서비스
                                                                                    </li>
                                                                                    <li>
                                                                                        QR
                                                                                        코드
                                                                                        및
                                                                                        사진
                                                                                        파일을
                                                                                        사용자로부터
                                                                                        입력받고
                                                                                        블록체인
                                                                                        API
                                                                                        및
                                                                                        백엔드
                                                                                        API를
                                                                                        통해
                                                                                        증명
                                                                                        결과
                                                                                        표시
                                                                                    </li>
                                                                                    <li>
                                                                                        앱의
                                                                                        언어
                                                                                        정보를
                                                                                        전달하기
                                                                                        위해
                                                                                        window.postMessage
                                                                                        등
                                                                                        Window
                                                                                        객체와
                                                                                        'message'
                                                                                        이벤트를
                                                                                        통한
                                                                                        RN
                                                                                        -
                                                                                        React.js
                                                                                        통신
                                                                                    </li>
                                                                                    <li>
                                                                                        i18n을
                                                                                        통한
                                                                                        다국어
                                                                                        처리(en,
                                                                                        ko)
                                                                                    </li>
                                                                                    <li>
                                                                                        TailwindCSS를
                                                                                        사용하여
                                                                                        Mobile
                                                                                        first의
                                                                                        반응형
                                                                                        레이아웃
                                                                                        구현
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li>
                                                                                <em>
                                                                                    공지사항
                                                                                    페이지
                                                                                    담당
                                                                                </em>
                                                                                <ul>
                                                                                    <li>
                                                                                        NFT카메라
                                                                                        앱내
                                                                                        웹뷰
                                                                                        페이지
                                                                                        중
                                                                                        하나인
                                                                                        공지사항
                                                                                        페이지
                                                                                        담당
                                                                                    </li>
                                                                                    <li>
                                                                                        앱
                                                                                        PUSH
                                                                                        및
                                                                                        언어
                                                                                        정보와
                                                                                        연동
                                                                                    </li>
                                                                                    <li>
                                                                                        데스크탑에서는
                                                                                        Pagination
                                                                                        ui로,
                                                                                        모바일에서는
                                                                                        스크롤로
                                                                                        페이지네이팅
                                                                                        구현
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                        </ol>
                                                                    </dd>
                                                                    <dt>
                                                                        사용한
                                                                        기술
                                                                    </dt>
                                                                    <dd>
                                                                        React,
                                                                        TypeScript,
                                                                        TailwindCSS,
                                                                        Shadcn/ui,
                                                                        vite
                                                                    </dd>
                                                                    <dt>
                                                                        업무
                                                                        기간
                                                                    </dt>
                                                                    <dd>
                                                                        2023.07
                                                                        - 현재
                                                                    </dd>
                                                                    <dt>
                                                                        개발
                                                                        인원
                                                                    </dt>
                                                                    <dd>5명</dd>
                                                                </dl>
                                                            </div>
                                                        </li>
                                                    </ol>
                                                </dd>
                                            </dl>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <StyledTitle id="work" title="03. Some Things I've Built" />
                    <div>
                        <ul>
                            <li>
                                <div>
                                    <div>
                                        <p>개인 프로젝트</p>
                                        <em>Green Maps</em>
                                    </div>
                                    <div>
                                        채식 식당을 검색하고 북마크하는 지도
                                        서비스
                                        <ul>
                                            <li>
                                                서울시 인증업소 데이터와 웹
                                                스크래핑으로 모은 데이터 기반
                                            </li>
                                            <li>
                                                현재 위치를 기준으로 하는 반경
                                                탐색과 원하는 지역을 기준으로
                                                검색하는 지역 탐색 기능이
                                                있습니다.
                                            </li>
                                            <li>
                                                지도 기능: 현재 위치 기준의 반경
                                                탐색, 시도/시군구 선택을 통한
                                                탐색
                                            </li>
                                            <li>
                                                북마크, 좋아요 기능: 북마크 그룹
                                                관리, 좋아요
                                            </li>
                                            <li>
                                                게시판: 기본적인 게시판 기능,
                                                공지사항, 간단한 텍스트 에디터
                                            </li>
                                            <li>
                                                마이페이지: 비밀번호 변경,
                                                닉네임 변경, 프로필 사진 변경
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        React, nodejs, scss, vite, vercel,
                                        mongodb
                                    </div>
                                    <div>
                                        <Link
                                            href="https://github.com/moonhee0507/green-maps"
                                            target="_blank"
                                        >
                                            깃허브
                                        </Link>
                                        <Link
                                            href="https://www.green-maps.site/"
                                            target="_blank"
                                        >
                                            서비스
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <StyledTitle id="contact" title="04. What's Next?" />
                    <div>
                        <p>Get In Touch</p>
                        <p>
                            현재는 새로운 기회를 찾고 있지 않지만 받은 편지함은
                            항상 열려 있습니다. 질문이 있으시거나 그냥 인사하고
                            싶으신가요? 최선을 다해 답변해 드리겠습니다!
                        </p>
                    </div>
                    <Button type="button">Say Hello</Button>
                </div>
            </section>
        </main>
    );
}
