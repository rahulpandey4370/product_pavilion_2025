
'use client';

import Link from 'next/link';
import Image from 'next/image'; // Import next/image
import { Sparkles, Linkedin as LinkedinIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Explore Booths', href: '/#booths' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 w-full items-center justify-between px-4">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl text-foreground">Product Pavilion</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  (pathname === item.href || (item.href.includes('#') && pathname === '/'))
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-2">
          <Button variant="ghost" size="icon" asChild className={cn(
            "h-9 w-9 sm:h-10 sm:w-10",
            "hover:bg-primary hover:text-primary-foreground"
          )}>
            <a href="https://www.epicor.com/en/" target="_blank" rel="noopener noreferrer" aria-label="Epicor Website">
              {/* Use Next/Image component */}
              <Image
                src="/logo.jpg" 
                alt="Epicor Logo"
                width={20} // Intrinsic width of your image or desired display width
                height={20} // Intrinsic height of your image or desired display height
                className="h-4 w-4 sm:h-5 sm:w-5" // Tailwind classes for responsive sizing
              />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className={cn(
            "h-9 w-9 sm:h-10 sm:w-10",
            "hover:bg-primary hover:text-primary-foreground"
          )}>
            <a href="https://www.linkedin.com/company/epicor/" target="_blank" rel="noopener noreferrer" aria-label="Epicor LinkedIn">
              <LinkedinIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
