const Intro = () => {
    return (
        <section className="h-svh">
            <h2 className="sr-only">자기 소개</h2>
            <div className="w-full h-full flex items-center">
                <p className="flex flex-col gap-4">
                    <span className="text-2xl">
                        안녕하세요, 제 이름은
                        <br />
                        <em className="text-5xl font-bold not-italic">문희</em>
                        <span className="text-2xl">
                            입니다. <br />
                            저는 <em className="text-4xl font-bold not-italic">프론트엔드 개발자</em>입니다.
                        </span>
                    </span>
                    <span className="text-2xl">
                        저는 Form 컨트롤에 특화된 프론트엔드 엔지니어입니다. 현재는 B-square Lab에서 자격증 및 수료증을 NFT로 저장하는 &apos;NFT 인증서&apos; 서비스의 웹 & 웹뷰를
                        담당하고 있습니다.
                    </span>
                </p>
            </div>
        </section>
    );
};

export default Intro;
