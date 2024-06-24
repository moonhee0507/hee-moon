import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Providers } from './providers';
import StyledNavbar from '@/components/StyledNavbar';
import StyledFooter from '@/components/StyledFooter';
import localFont from 'next/font/local';

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
            <body
                className={`${pretendard.className} ${GeistSans.variable} ${GeistMono.variable}`}
            >
                <Providers>
                    <div className="mx-auto my-0 max-w-[1000px]">
                        <StyledNavbar />
                        {children}
                        <StyledFooter />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
