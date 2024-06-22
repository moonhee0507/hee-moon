export default function Home() {
    return (
        <main>
            <section className="py-20">
                <h2 className="sr-only">introduce</h2>
                <div>
                    <p className="flex flex-col">
                        <span className="font-mono">Hi, my name is</span>
                        <em className="text-5xl font-bold not-italic">
                            Moon Hee.
                        </em>
                        <em className="text-5xl font-bold not-italic text-foreground/50">
                            I build things for the web.
                        </em>
                        <span className="">
                            I’m a software engineer specializing in building
                            (and occasionally designing) exceptional digital
                            experiences. Currently, I’m focused on building
                            accessible, human-centered products at Upstatement.
                        </span>
                    </p>
                </div>
            </section>
            <section>
                <div>
                    <h2 className="" id="about">
                        01. About Me
                    </h2>
                    <p>
                        안녕하세요. 제 이름은 문희이고, 저는 살아 있는 화면을
                        만드는 작업을 좋아합니다. 웹 개발에 대한 관심은 지난
                        2022년부터 시작되었습니다 - 막연하게 IT 기업 입사를
                        꿈꾸며 수강한 Frontend 수업에서 직접 화면을 제작하고
                        JavaScript로 유저 인터랙션에 따른 로직을 만드는 일에
                        흥미를 가지게 되었습니다.
                    </p>
                    <p>
                        ReactJS를 중점으로 한 Frontend 교육 수료 후, OAuth를
                        이용한 소셜 로그인 기능을 만들어 보고 싶어 Express로
                        서버를 구현하고 MongoDB와 AWS S3를 사용한 채식 지도
                        애플리케이션을 배포하기도 했습니다. DB & Storage &
                        컨테이너 기반 PasS 서비스를 사용한 Backend API 배포를
                        통해 백엔드와 프론트엔드 간의 통신에 대해 전반적으로
                        이해할 수 있게 되었습니다!
                    </p>
                    <p>
                        2023년 7월부터 한 블록체인 회사의 프론트엔드 개발자로
                        일을 시작했습니다. 요즘 저의 관심사는 테이블 UI의
                        편의성입니다. 테이블 헤더에서 필터링과 정렬 기능을
                        사용자가 편리하게 사용할 수 있도록 고민하고 있습니다.
                    </p>
                </div>
                <div></div>
            </section>
        </main>
    );
}
