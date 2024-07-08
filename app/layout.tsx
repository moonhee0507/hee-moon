import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';

import './globals.css';

import RootButtonGroup from '@/components/RootButtonGroup';
import StyledFooter from '@/components/StyledFooter';
import StyledNavbar from '@/components/StyledNavbar';
import localFont from 'next/font/local';

import { Providers } from './providers';

export const metadata: Metadata = {
    title: 'Moon Hee',
    description: 'Hi, my name is Moon Hee',
};

const pretendard = localFont({
    src: '../public/fonts/PretendardStdVariable.woff2',
    display: 'swap',
    weight: '45 920',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${pretendard.className} ${GeistSans.variable} ${GeistMono.variable}`}>
                <Providers>
                    <div className="flex flex-col justify-center w-full items-center">
                        <StyledNavbar />
                        {children}
                        <StyledFooter />
                        <RootButtonGroup />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
