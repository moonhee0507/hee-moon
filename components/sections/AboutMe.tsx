import profile from '@/public/profile.jpg';
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
                            안녕하세요. 제 이름은 문희이고, 저는 살아 있는 화면을 만드는 작업을 좋아합니다. 웹 개발에 대한 관심은 지난 2022년부터 시작되었습니다. 막연하게 IT 기업
                            입사를 꿈꾸며 수강한 프론트엔드 수업에서 HTML & CSS로 직접 화면을 구현하고 JavaScript로 UI 로직을 만드는 일에 흥미를 가지게 되었습니다.
                        </p>
                        <p>
                            ReactJS를 중점으로 한 프론트엔드 교육 수료 후, OAuth를 이용한 소셜 로그인 기능을 직접 만들고 싶어{' '}
                            <em className="bg-primary not-italic text-primary-foreground">
                                Express로 서버 API를 만들고 MongoDB와 AWS S3를 사용한 채식 지도 애플리케이션을 배포하기도 했습니다. DB & Storage & 컨테이너 기반 PaaS 서비스를
                                사용한 Backend 배포를 통해 백엔드 - 프론트엔드 통신에 대해 전반적으로 이해
                            </em>
                            할 수 있게 되었습니다!
                        </p>
                        <p>
                            2023년 7월부터 한 블록체인 회사의 프론트엔드 개발자로 일을 시작했습니다. 요즘 저의 관심사는 <em>테이블 UI의 편의성 개선</em>입니다. 테이블 헤더에서
                            필터링과 정렬 기능을 사용자가 편리하게 사용할 수 있도록 고민하고 있습니다.
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
                    <div className="shrink-0 basis-80 self-center">
                        <NextImage src={profile} alt="Moon Hee" width={500} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
