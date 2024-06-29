import Link from 'next/link';

import StyledTitle from '../StyledTitle';

const Contact = () => {
    return (
        <section>
            <div className="flex flex-col gap-12">
                <StyledTitle id="contact" title="04. What's Next?" />
                <div className="flex flex-col items-center gap-5">
                    <div className="text-center">
                        <p className="mb-3 text-3xl">Get In Touch</p>
                        <p>지금 새로운 기회를 찾고 있어 메일함은 항상 열려 있습니다.</p>
                        <p>질문이 있으시거나 그냥 인사하고 싶으신가요? 최선을 다해 답변해 드리겠습니다!</p>
                    </div>
                    <div className="mb-12 w-[150px] animate-pulse text-center">
                        <Link href="mailto:eehnoom@gmail.com" className="block bg-primary p-4 text-primary-foreground">
                            Say Hello
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
