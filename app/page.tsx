import AboutMe from '@/components/sections/AboutMe';
import Contact from '@/components/sections/Contact';
import Experience from '@/components/sections/Experience';
import Intro from '@/components/sections/Intro';
import Work from '@/components/sections/Work';

export default function Home() {
    return (
        <main className="flex flex-col gap-48 max-w-[1000px]">
            <Intro />
            <AboutMe />
            <Experience />
            <Work />
            <Contact />
        </main>
    );
}
