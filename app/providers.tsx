'use client';

import { ThemeProvider } from '@/components/theme-provider';
import { NextUIProvider } from '@nextui-org/react';
import { useEffect, useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
    const [isMount, setIsMount] = useState(false);

    useEffect(() => {
        setIsMount(true);
    }, []);

    if (!isMount) {
        return null;
    }

    return (
        <NextUIProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                {children}
            </ThemeProvider>
        </NextUIProvider>
    );
}
