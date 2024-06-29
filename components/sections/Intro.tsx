const Intro = () => {
    return (
        <section className="py-44">
            <h2 className="sr-only">간단 소개</h2>
            <div className="">
                <p className="flex flex-col gap-4">
                    <span className="text-2xl">안녕하세요, 제 이름은</span>
                    <em className="text-5xl font-bold not-italic">문희</em>
                    <em className="text-5xl font-bold not-italic text-foreground/50">입니다. 저는 웹 프론트엔드 개발자입니다.</em>
                    <span className="text-2xl">
                        저는 Form 컨트롤에 특화된 프론트엔드 엔지니어입니다. 현재는 B-square Lab에서 자격증 및 수료증을 NFT로 저장하는 'NFT 인증서' 서비스의 웹 & 웹뷰를 담당하고
                        있습니다.
                    </span>
                </p>
            </div>
        </section>
    );
};

export default Intro;
