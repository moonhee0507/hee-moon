'use client';

import { usePathname } from 'next/navigation';
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';

const ScrollContext = createContext<null | { setHash: Dispatch<SetStateAction<string | null | undefined>> }>(null);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const [hash, setHash] = useState<string | null>();

    useEffect(() => {
        const handleHashChange = () => {
            console.log('Hash changed: ', window.location.hash);

            if (window.location.hash) {
                setHash(window.location.hash);
            } else {
                setHash(null);
            }
        };

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, [pathname]);

    useEffect(() => {
        if (hash) {
            const targetId = hash.substring(1);
            setTimeout(() => {
                const target = document.getElementById(targetId);

                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                    });
                } else {
                    console.log('Target not found: ', targetId);
                }
            }, 500);
        }
    }, [hash]);

    return <ScrollContext.Provider value={{ setHash }}>{children}</ScrollContext.Provider>;
};

export const useScroll = () => useContext(ScrollContext);
