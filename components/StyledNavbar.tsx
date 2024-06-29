'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import HeeLogo from './HeeLogo';

const menus = [
    { name: 'About', href: { hash: 'about' } },
    { name: 'Experience', href: { hash: 'experience' } },
    { name: 'Work', href: { hash: 'work' } },
    { name: 'Contact', href: { hash: 'contact' } },
];

export default function StyledNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navbarRef = useRef<HTMLElement>(null);
    const prevScrollPosRef = useRef<number>(0);

    useEffect(() => {
        prevScrollPosRef.current = window.scrollY;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            if (navbarRef.current) {
                if (prevScrollPosRef.current > currentScrollPos) {
                    navbarRef.current.style.top = '0';
                } else {
                    navbarRef.current.style.top = `-${navbarRef.current.offsetHeight}px`;
                }

                prevScrollPosRef.current = currentScrollPos;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header ref={navbarRef} className="py-4 font-mono fixed top-0 transition-[top_0.3s] w-full bg-primary/90 text-primary-foreground z-20">
            <div className="flex items-baseline justify-between max-w-[1000px] mx-auto my-0">
                <HeeLogo />
                <nav>
                    <ol className="flex gap-6 text-sm">
                        {menus.map((menu, i) => {
                            const num = String(i + 1).padStart(2, '0');

                            const { name, href } = menu;
                            return (
                                <li key={name}>
                                    <Link href={href} className="">
                                        <span className="mr-2 text-primary-foreground/50">{`${num}.`}</span>
                                        <span className="hover:underline">{name}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ol>
                </nav>
            </div>
        </header>
    );
}
