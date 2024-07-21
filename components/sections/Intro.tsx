'use client';

import useCareer from '@/hooks/useCareer';
import { CalendarClockIcon } from 'lucide-react';

const Intro = () => {
    const { careerTime } = useCareer();
    return (
        <section className="h-svh">
            <h2 className="sr-only">자기 소개</h2>
            <div className="w-full h-full flex flex-col gap-4 text-2xl justify-center">
                <div>
                    <p className="mb-4">안녕하세요,</p>
                    <p className="flex gap-2">
                        <CalendarClockIcon size={'2rem'} className="text-destructive" />
                        {careerTime} 차
                    </p>
                    <p className="text-4xl">
                        프론트엔드 엔지니어 <span className="text-5xl font-bold inline-block md:inline">문희</span>
                        <span className="inline-block md:inline">입니다.</span>
                    </p>
                </div>
                <div>현재 B-square Lab에서 자격증 정보를 NFT로 관리하는 &apos;NFT 인증서&apos; 서비스를 담당하고 있습니다.</div>
            </div>
        </section>
    );
};

export default Intro;
