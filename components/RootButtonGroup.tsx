import Link from 'next/link';

import ColorModeButton from './buttons/ColorModeButton';
import TopButton from './buttons/TopButton';
import Github from './icons/Github';
import Linkedin from './icons/Linkedin';
import Velog from './icons/Velog';
import X from './icons/X';

const RootButtonGroup = () => {
    return (
        <>
            <div className="fixed bottom-4 left-4 flex flex-col gap-4 items-center z-20">
                <Link href="https://github.com/moonhee0507" target="_blank">
                    <Github size={{ width: 45, height: 45 }} />
                </Link>
                <Link href="https://velog.io/@sjmh0507" target="_blank">
                    <Velog size={{ width: 40, height: 40 }} />
                </Link>
                <Link href="https://www.linkedin.com/in/hee-moon" target="_blank">
                    <Linkedin size={{ width: 40, height: 40 }} />
                </Link>
                <Link href="https://x.com/moon0507hee" target="_blank">
                    <X size={{ width: 40, height: 40 }} />
                </Link>
            </div>
            <div className="fixed bottom-4 right-4 flex flex-col gap-1">
                <ColorModeButton />
                <TopButton />
            </div>
        </>
    );
};

export default RootButtonGroup;
