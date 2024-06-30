'use client';

import { Button } from '@/components/ui/button';
import { ArrowUpToLine } from 'lucide-react';

const TopButton = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <Button type="button" size="icon" onClick={scrollToTop} className="rounded-full shadow-lg">
            <ArrowUpToLine size={22} />
        </Button>
    );
};

export default TopButton;
