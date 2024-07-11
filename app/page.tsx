'use client';

import AboutMe from '@/components/sections/AboutMe';
import Contact from '@/components/sections/Contact';
import Experience from '@/components/sections/Experience';
import Intro from '@/components/sections/Intro';
import Work from '@/components/sections/Work';
import { motion, useScroll } from 'framer-motion';

export default function Home() {
    const { scrollYProgress } = useScroll();

    return (
        <>
            <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
            <main className="flex flex-col gap-48 max-w-[1000px] px-8">
                <Intro />
                <AboutMe />
                <Experience />
                <Work />
                <Contact />
            </main>
        </>
    );
}
