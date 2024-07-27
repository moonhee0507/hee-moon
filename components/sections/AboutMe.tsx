import profile from '@/public/profile.png';
import NextImage from 'next/image';

import StyledListItem from '../StyledListItem';
import StyledTitle from '../StyledTitle';

const skills = [
    {
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        content: 'JavaScript',
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

const AboutMe = () => {
    return (
        <section>
            <div className="flex flex-col gap-12">
                <StyledTitle id="about" title="01. About Me" />
                <div className="flex gap-8 flex-col-reverse lg:flex-row">
                    <div className="space-y-4 break-keep text-xl leading-8">
                        <p>
                            2022년 막연하게 IT 기업 입사를 꿈꾸며 수강한 Front-end 교육에서 JavaScript로 UI 로직을 만드는 일에 흥미를 느껴 JavaScript 개발자를 준비하게 되었습니다.
                        </p>
                        <p>
                            5개월간 Front-end 교육을 수료한 이후, OAuth를 활용한 소셜 로그인 기능과 필요한 API를 직접 개발하고 싶어 Back-end 영역에도 관심이 생겼습니다. 그 결과{' '}
                            <em className="bg-destructive/90 not-italic text-destructive-foreground">
                                MongoDB & Express & ReactJS & NodeJS(MERN Stack)과 AWS S3를 사용한 &apos;채식 지도 웹앱&apos;을 배포하기도 했습니다. DB & Storage & 컨테이너 기반
                                PaaS 서비스를 사용하여 Back-end 배포를 통해 Back-end - Front-end 통신에 대해 전반적으로 이해
                            </em>
                            할 수 있게 되었습니다! 이 프로젝트를 통해 배운 내용이 취업 후에도 Back-end 개발자와의 커뮤니케이션에 많은 도움이 되었습니다.
                        </p>
                        <p>
                            2023년 7월부터 한 블록체인 회사의 Front-end 엔지니어로 일을 시작했습니다. 요즘 저의 관심사는{' '}
                            <em className="bg-destructive/90 not-italic text-destructive-foreground">테이블 UI의 편의성 개선</em>입니다. 테이블 헤더에서 필터링과 정렬 기능을
                            사용자가 편리하게 사용할 수 있도록 고민하고 있습니다.
                        </p>
                        <p>최근에 제가 사용해본 몇 가지 기술은 다음과 같습니다:</p>
                        <div>
                            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {skills.map((skill, index) => (
                                    <StyledListItem key={index} src={skill.src} content={skill.content} />
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="shrink-0 basis-80 self-center grayscale-[50%]">
                        <NextImage src={profile} alt="Moon Hee" width={300} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
