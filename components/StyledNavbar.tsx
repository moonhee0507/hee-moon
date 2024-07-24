'use client';

import { useScroll } from '@/contexts/scrollContext';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useHash, useMedia } from 'react-use';
import { Drawer } from 'vaul';

import HeeLogo from './HeeLogo';
import { Button } from './ui/button';

const menus = [
    { name: 'About', href: { hash: '#about' } },
    { name: 'Experience', href: { hash: '#experience' } },
    { name: 'Work', href: { hash: '#work' } },
    { name: 'Contact', href: { hash: '#contact' } },
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
        <header ref={navbarRef} className="px-10 py-4 font-mono fixed top-0 transition-[top_0.3s] w-full bg-primary/90 text-primary-foreground z-20">
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
        return <NavigationMenu direction="row" />;
    }

    return (
        <Drawer.Root direction="right" open={sidebarOpen} onOpenChange={setSidebarOpen} aria-describedby="클릭 시 해당 섹션으로 이동합니다.">
            <Drawer.Trigger asChild>
                <Button type="button" variant="ghost" className="h-8 border-none p-0">
                    <Menu size={20} />
                </Button>
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content className="flex flex-col rounded-t-[10px] h-full w-[300px] mt-24 fixed bottom-0 right-0 z-30">
                    <Drawer.Title className="sr-only">섹션 이동 메뉴</Drawer.Title>
                    <Drawer.Close asChild>
                        <div className="p-4 bg-secondary text-secondary-foreground flex-1 h-full">
                            <div className="max-w-md mx-auto">
                                <NavigationMenu direction="col" setSidebarOpen={setSidebarOpen} />
                            </div>
                        </div>
                    </Drawer.Close>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
};

const NavigationMenu = ({ direction, setSidebarOpen }: { direction: 'row' | 'col'; setSidebarOpen?: (args: boolean) => void }) => {
    const scroll = useScroll();

    const handleClick = (hashFromList: string) => {
        scroll?.setHash(hashFromList);
        setSidebarOpen && setSidebarOpen(false);
    };

    return (
        <nav>
            <ol className={cn('flex gap-6 text-sm', `flex-${direction}`)}>
                {menus.map((menu, i) => {
                    const num = String(i + 1).padStart(2, '0');

                    const { name, href } = menu;
                    return (
                        <li key={name}>
                            <Link href={href.hash} onClick={() => handleClick(href.hash)} scroll={false}>
                                <span className="mr-2 text-primary-foreground/50">{`${num}.`}</span>
                                <span className="hover:underline">{name}</span>
                            </Link>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};
