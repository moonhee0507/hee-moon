'use client';

import Link from 'next/link';
import HeeLogo from './HeeLogo';
import { useState } from 'react';

const menus = [
    { name: 'About', href: { pathname: '/', hash: 'about' } },
    { name: 'Experience', href: { pathname: '/', hash: 'experience' } },
    { name: 'Work', href: { pathname: '/', hash: 'work' } },
    { name: 'Contact', href: { pathname: '/', hash: 'contact' } },
];

export default function StyledNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="border-1 py-4 font-mono">
            <div className="flex items-baseline justify-between">
                <HeeLogo />
                <nav>
                    <ol className="flex gap-6 text-sm">
                        {menus.map((menu, i) => {
                            const num = String(i + 1).padStart(2, '0');

                            const { name, href } = menu;
                            return (
                                <li key={name}>
                                    <Link href={href} className="">
                                        <span className="mr-2 text-accent">{`${num}.`}</span>
                                        <span className="hover:underline">
                                            {name}
                                        </span>
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
