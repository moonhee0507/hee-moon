'use client';

import imgGreenMapsLogo from '@/public/green_maps_logo.png';
import { Card, Image } from '@nextui-org/react';
import NextImage from 'next/image';
import Link from 'next/link';

import Github from '../icons/Github';
import StyledTitle from '../StyledTitle';

const Work = () => {
    return (
        <section>
            <div className="flex flex-col gap-12">
                <StyledTitle id="work" title="03. Some Things I've Built" />
                <div>
                    <ul>
                        <li className="flex gap-4 flex-col-reverse lg:flex-row">
                            <div className="space-y-4">
                                <div>
                                    <p>개인 프로젝트</p>
                                    <em className="text-xl font-bold not-italic">Green Maps</em>
                                </div>
                                <div className="text-lg font-semibold">
                                    채식 식당을 검색하고 북마크하는 지도 서비스
                                    <ul className="ml-4 list-disc text-base font-normal">
                                        <li>서울시 인증업소 데이터와 웹 스크래핑으로 모은 데이터 기반</li>
                                        <li>현재 위치를 기준으로 하는 반경 탐색과 원하는 지역을 기준으로 검색하는 지역 탐색 기능이 있습니다.</li>
                                        <li>지도 기능: 현재 위치 기준의 반경 탐색, 시도/시군구 선택을 통한 탐색</li>
                                        <li>북마크, 좋아요 기능: 북마크 그룹 관리, 좋아요</li>
                                        <li>게시판: 기본적인 게시판 기능, 공지사항, 간단한 텍스트 에디터</li>
                                        <li>마이페이지: 비밀번호 변경, 닉네임 변경, 프로필 사진 변경</li>
                                    </ul>
                                </div>
                                <div className="text-lg font-semibold">React, nodejs, scss, vite, vercel, mongodb</div>
                                <div className="flex gap-2">
                                    <Link href="https://github.com/moonhee0507/green-maps" target="_blank">
                                        <div className="overflow-hidden rounded-full">
                                            <Github size={{ width: 50, height: 50 }} />
                                            <span className="sr-only">깃허브 링크</span>
                                        </div>
                                    </Link>
                                    <Link href="https://www.green-maps.site/" target="_blank">
                                        <div className="overflow-hidden rounded-full">
                                            <NextImage src={imgGreenMapsLogo} alt="Green maps logo" width={50} height={50} />
                                            <span className="sr-only">서비스 링크</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <Card className="h-80" isPressable onClick={() => window.open('https://github.com/moonhee0507/green-maps', '_blank')}>
                                <Image removeWrapper alt="Card background" src="/green_maps.jpg" className="z-0 h-full w-full object-cover" />
                            </Card>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Work;
