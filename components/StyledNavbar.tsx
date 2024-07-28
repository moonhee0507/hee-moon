'use client';

import { ScrollContext } from '@/contexts/scrollContext';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useContext, useEffect, useRef, useState } from 'react';
import { useMedia } from 'react-use';
import { Drawer } from 'vaul';

import HeeLogo from './HeeLogo';
import Github from './icons/Github';
import Linkedin from './icons/Linkedin';
import X from './icons/X';
import { Button } from './ui/button';

const menus = [
    { name: 'About', href: { hash: '#about' } },
    { name: 'Experience', href: { hash: '#experience' } },
    { name: 'Work', href: { hash: '#work' } },
    { name: 'Contact', href: { hash: '#contact' } },
];

export default function StyledNavbar() {
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
        <header ref={navbarRef} className="px-10 py-4 font-mono fixed top-0 transition-[top_0.3s] w-full bg-background text-foreground shadow-lg z-20">
            <div className="flex items-center justify-between max-w-[1000px] mx-auto my-0">
                <HeeLogo />
                <NavigationView />
            </div>
        </header>
    );
}

const NavigationView = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const isMedium = useMedia('(min-width: 768px)', true);

    if (isMedium) {
        return <NavigationMenu />;
    }

    return (
        <Drawer.Root direction="right" open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <Drawer.Trigger asChild>
                <Button type="button" variant="ghost" className="h-8 border-none p-0">
                    <Menu size={20} />
                </Button>
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40 z-30" />
                <Drawer.Content className="flex flex-col rounded-t-[10px] h-full w-[300px] mt-24 fixed bottom-0 right-0 z-30">
                    <Drawer.Title className="sr-only">섹션 이동 메뉴</Drawer.Title>
                    <Drawer.Description className="sr-only">클릭 시 해당 섹션으로 이동합니다.</Drawer.Description>
                    <div className="p-4 bg-background text-foreground flex-1 h-full flex flex-col justify-center gap-10">
                        <div className="max-w-md mx-auto">
                            <NavigationMenu setSidebarOpen={setSidebarOpen} />
                        </div>
                        <div>
                            <ul className="flex justify-center gap-4 items-center">
                                <li>
                                    <Link href="https://github.com/moonhee0507" target="_blank">
                                        <Github size={{ width: 45, height: 45 }} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.linkedin.com/in/hee-moon" target="_blank">
                                        <Linkedin size={{ width: 40, height: 40 }} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://x.com/moon0507hee" target="_blank">
                                        <X size={{ width: 40, height: 40 }} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
};

const NavigationMenu = ({ setSidebarOpen }: { setSidebarOpen?: (args: boolean) => void }) => {
    const isMedium = useMedia('(min-width: 768px)', true);
    const scrollContext = useContext(ScrollContext);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, hashFromList: string) => {
        scrollContext?.setHash(hashFromList);
        setSidebarOpen && setSidebarOpen(false);
    };

    if (isMedium) {
        return (
            <nav>
                <ol className="flex gap-6 text-sm">
                    {menus.map((menu, i) => {
                        const num = String(i + 1).padStart(2, '0');

                        const { name, href } = menu;
                        return (
                            <li key={name}>
                                <span className="mr-2 text-slate-500">{`${num}.`}</span>
                                <Link href={href.hash} onClick={(e) => handleClick(e, href.hash)} scroll={false} className="">
                                    <span className="hover:underline">{name}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ol>
            </nav>
        );
    }

    return (
        <nav>
            <ol className="flex gap-6 text-lg flex-col">
                {menus.map((menu, i) => {
                    const num = String(i + 1).padStart(2, '0');

                    const { name, href } = menu;
                    return (
                        <li key={name} className="flex flex-col items-center">
                            <span className="text-slate-500">{`${num}.`}</span>
                            <Drawer.Close asChild>
                                <Link href={href.hash} onClick={(e) => handleClick(e, href.hash)} scroll={false} className="">
                                    <span className="hover:underline">{name}</span>
                                </Link>
                            </Drawer.Close>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};
