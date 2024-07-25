'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useHash } from 'react-use';

export const ScrollContext = createContext<null | { setHash: (newHash: string) => void }>(null);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
    const [hash, setHash] = useHash();

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
