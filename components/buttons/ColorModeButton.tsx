'use client';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '../ui/button';

const ColorModeButton = () => {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="icon" className="rounded-full shadow-lg">
                    <Sun size={22} className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon size={22} className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>라이트</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>다크</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>시스템</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ColorModeButton;
