'use client';

import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';

import StyledTitle from '../StyledTitle';

const Experience = () => {
    return (
        <section>
            <div className="flex flex-col gap-12">
                <StyledTitle id="experience" title="02. Where I've Worked" />
                <div>
                    <Tabs aria-label="Where I've worked" size="lg" color="primary" variant="light" placement="top" disabledKeys={['thereIsNotASecondCompany']}>
                        <Tab key="bSquareLab" title="B-square Lab">
                            <Card className="p-4" isBlurred>
                                <CardBody>
                                    <div>
                                        <dl className="space-y-5">
                                            <div>
                                                <dt className="sr-only">직무</dt>
                                                <dd>
                                                    <p className="text-xl">Frontend Engineer</p>
                                                </dd>
                                                <dt className="sr-only">재직 기간</dt>
                                                <dd>2023.07 - 현재</dd>
                                            </div>
                                            <dt className="sr-only">업무 내용</dt>
                                            <dd>
                                                <ol className="list-decimal space-y-5 pl-4">
                                                    <li>
                                                        <div>
                                                            <dl className="flex flex-col gap-4">
                                                                <div className="space-y-1">
                                                                    <dt>서비스명</dt>
                                                                    <dd className="text-lg font-bold">NFT 인증서</dd>
                                                                </div>
                                                                <div className="space-y-1">
                                                                    <dt>간단 소개</dt>
                                                                    <dd className="text-lg font-bold">
                                                                        인증서 세부사항을 NFT로 발행하고 해당 인증서의 원본 여부를 증명하는 서비스
                                                                    </dd>
                                                                </div>
                                                                <div className="space-y-1">
                                                                    <dt>담당 업무</dt>
                                                                    <dd className="text-lg font-bold">웹 프론트엔드 / 앱 개발</dd>
                                                                </div>
                                                                <div className="space-y-1">
                                                                    <dt>담당 역할</dt>
                                                                    <dd className="text-lg">
                                                                        <ol className="upper-al list-[upper-alpha] space-y-3 pl-5">
                                                                            <li>
                                                                                <em className="text-lg font-bold not-italic">발급처 회원 - 인증서의 양식을 만드는 폼 생성 기능</em>
                                                                                <ul className="list-disc pl-5 text-base">
                                                                                    <li>
                                                                                        React-hook-form와 Zod을 활용한 Dynamic Form 구현 (e.g 이름 항목 추가, 성별 항목 삭제, 증명
                                                                                        사진 항목 추가 등)
                                                                                    </li>
                                                                                    <li>Tanstack/table의 Editable table을 사용하여 row의 순서를 DnD로 제어</li>
                                                                                    <li>
                                                                                        <code>valueType</code>을 VARCHAR/DATE/SELECT 등으로 구분하고 각 <code>valueType</code>에
                                                                                        최소 길이와 같은 제약 사항을 추가
                                                                                    </li>
                                                                                    <li>양식의 버전을 관리할 수 있는 기능</li>
                                                                                </ul>
                                                                            </li>
                                                                            <li>
                                                                                <em className="text-lg font-bold not-italic">수요처 회원 - 새 인증서 신청 기능</em>
                                                                                <ul className="list-disc pl-5 text-base">
                                                                                    <li>발급처 회원이 등록한 양식으로 수요처 회원이 폼 작성 후 제출</li>
                                                                                    <li>APP - WebView 간 통신으로 모바일 환경에서 신청하는 경우 생체 인식을 통한 전자 서명</li>
                                                                                    <li>
                                                                                        신청한 인증서의 진행 상황을 <code>status</code>로 구분하여 표시
                                                                                    </li>
                                                                                    <li>인증서 신청자가 해당 제약 사항에 따라 입력했는지 유효성 검증</li>
                                                                                </ul>
                                                                            </li>
                                                                            <li>
                                                                                <em className="text-lg font-bold not-italic">발급처 회원 - 인증서 심사 결과 등록 기능</em>
                                                                                <ul className="list-disc pl-5 text-base">
                                                                                    <li>
                                                                                        수요처 회원이 신청한 인증서를 &apos;심사 시작&apos; 처리 후 &apos;승인&apos; 또는
                                                                                        &apos;거절&apos;
                                                                                    </li>
                                                                                    <li>&apos;심사 시작&apos; 처리를 하지 않은 경우 심사 결과를 입력할 수 없도록 처리</li>
                                                                                    <li>
                                                                                        &apos;승인&apos;의 경우 심사 내용을 입력하지 않아도 되고 발급처 회원이 입력해야 하는 필드를
                                                                                        입력해야 결과 등록 가능(e.g. 발급일)
                                                                                    </li>
                                                                                    <li>
                                                                                        &apos;거절&apos;의 경우 심사 내용을 입력해야 하고 발급처 회원의 필드를 입력하지 않아도 등록
                                                                                        가능
                                                                                    </li>
                                                                                    <li>모바일에서 해당 기능을 사용할 수 없도록 PC 웹 사이트로 이동하도록 안내</li>
                                                                                </ul>
                                                                            </li>
                                                                            <li>
                                                                                <em className="text-lg font-bold not-italic">수요처 회원 - 거절된 인증서 재신청 기능</em>
                                                                                <ul className="list-disc pl-5 text-base">
                                                                                    <li>거절된 인증서를 다시 재작성 후 신청할 수 있도록 처리</li>
                                                                                    <li>
                                                                                        거절된 인증서를 재작성하는 경우 <code>status</code>가 REJECT에서 TEMP로 변경되는데, TEMP인
                                                                                        경우 최초 작성과 재작성을 구분
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li>
                                                                                <em className="text-lg font-bold not-italic">인증서 증명 기능</em>
                                                                                <ul className="list-disc pl-5 text-base">
                                                                                    <li>
                                                                                        QR 스캔을 통한 증명: <code>BASE_URL/ens/ensName</code>로 생성된 QR을 스캔하고 verify API를
                                                                                        통해 증명 결과를 화면에 표시
                                                                                    </li>
                                                                                    <li>
                                                                                        ENS 검색을 통한 증명: <code>apple.banana.carrot</code> 등 ENS 검색 후 verify API를 통해 증명
                                                                                        결과를 화면에 표시
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li>
                                                                                <em className="text-lg font-bold not-italic">인증서 프린트 기능</em>
                                                                                <ul className="list-disc pl-5 text-base">
                                                                                    <li>
                                                                                        승인된 인증서의 신청자 이름 및 발급 일자 등을 조합하여 이미지 프린트 미리보기 및 프린트 기능
                                                                                        구현
                                                                                    </li>
                                                                                    <li>팝업을 통한 미리보기 및 at-rule(@) print로 팝업창 element에 CSS를 입혀 구현</li>
                                                                                </ul>
                                                                            </li>
                                                                            <li>
                                                                                <em className="text-lg font-bold not-italic">기타</em>
                                                                                <ul className="list-disc pl-5 text-base">
                                                                                    <li>TailwindCSS의 유틸리티 class를 통한 다크모드 구현 / nextui와 통합</li>
                                                                                    <li>TailwindCSS를 사용하여 Mobile first의 반응형 레이아웃 구현</li>
                                                                                    <li>i18n-react를 사용하여 한국어-영어 사용 전환 처리 및 Accept-Language 값 전환 처리</li>
                                                                                </ul>
                                                                            </li>
                                                                        </ol>
                                                                    </dd>
                                                                </div>
                                                                <div className="space-y-1">
                                                                    <dt>사용한 기술</dt>
                                                                    <dd className="text-lg font-bold">
                                                                        React, TypeScript, Tanstack/query, TailwindCSS, Shadcn/ui, nextui, Zustand, React-hook-form, i18n-react,
                                                                        vite
                                                                    </dd>
                                                                </div>
                                                                <div className="space-y-1">
                                                                    <dt>업무 기간</dt>
                                                                    <dd className="text-lg font-bold">2024.01 - 현재</dd>
                                                                </div>
                                                                <div className="space-y-1">
                                                                    <dt>개발 인원</dt>
                                                                    <dd className="text-lg font-bold">5명</dd>
                                                                </div>
                                                            </dl>
                                                        </div>
                                                    </li>
                                                    <li className="">
                                                        <div>
                                                            <dl className="flex flex-col gap-4">
                                                                <div className="space-y-1">
                                                                    <dt>서비스명</dt>
                                                                    <dd className="text-lg font-bold">NFT카메라</dd>
                                                                </div>
                                                                <div className="space-y-1">
                                                                    <dt>간단 소개</dt>
                                                                    <dd className="text-lg font-bold">직접 촬영한 사진을 NFT로 발행하고 사진의 원본 여부를 증명하는 서비스</dd>
                                                                </div>
                                                                <div className="space-y-1">
                                                                    <dt>담당 업무</dt>
                                                                    <dd className="text-lg font-bold">웹 프론트엔드</dd>
                                                                </div>
                                                                <div className="space-y-1">
                                                                    <dt>담당 역할</dt>
                                                                    <dd className="text-lg">
                                                                        <ol className="upper-al list-[upper-alpha] space-y-3 pl-5">
                                                                            <li>
                                                                                <em className="text-lg font-bold not-italic">Verification Center 기능 담당</em>
                                                                                <ul className="list-disc pl-5 text-base">
                                                                                    <li>임의의 사진이 NFT카메라로 촬영한 원본인지 여부를 증명하는 서비스</li>
                                                                                    <li>
                                                                                        QR 코드 및 사진 파일을 사용자로부터 입력받고 블록체인 API 및 백엔드 API를 통해 증명 결과
                                                                                        표시
                                                                                    </li>
                                                                                    <li>
                                                                                        앱의 언어 정보를 전달하기 위해 window.postMessage 등 Window 객체와 &apos;message&apos;
                                                                                        이벤트를 통한 RN - React.js 통신
                                                                                    </li>
                                                                                    <li>i18n을 통한 다국어 처리(en, ko)</li>
                                                                                    <li>TailwindCSS를 사용하여 Mobile first의 반응형 레이아웃 구현</li>
                                                                                </ul>
                                                                            </li>
                                                                            <li>
                                                                                <em className="text-lg font-bold not-italic">공지사항 페이지 담당</em>
                                                                                <ul className="list-disc pl-5 text-base">
                                                                                    <li>NFT카메라 앱내 웹뷰 페이지 중 하나인 공지사항 페이지 담당</li>
                                                                                    <li>앱 PUSH 및 언어 정보와 연동</li>
                                                                                    <li>데스크탑에서는 Pagination ui로, 모바일에서는 스크롤로 페이지네이팅 구현</li>
                                                                                </ul>
                                                                            </li>
                                                                        </ol>
                                                                    </dd>
                                                                </div>
                                                                <div className="space-y-1">
                                                                    <dt>사용한 기술</dt>
                                                                    <dd className="text-lg font-bold">React, TypeScript, TailwindCSS, Shadcn/ui, vite</dd>
                                                                </div>
                                                                <div className="space-y-1">
                                                                    <dt>업무 기간</dt>
                                                                    <dd className="text-lg font-bold">2023.07 - 현재</dd>
                                                                </div>
                                                                <div className="space-y-1">
                                                                    <dt>개발 인원</dt>
                                                                    <dd className="text-lg font-bold">5명</dd>
                                                                </div>
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
    );
};

export default Experience;
