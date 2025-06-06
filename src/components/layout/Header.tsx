
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Linkedin as LinkedinIcon, Menu } from 'lucide-react'; // Added Menu icon
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet'; // Added Sheet components
import type { ReactNode } from 'react';
import { useState } from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Explore Booths', href: '/#booths' },
  { name: 'Word Search', href: '/#word-search' },
  { name: 'Crossword', href: '/#crossword' },
];

// Helper component for SheetClose functionality on link click
const NavLink: React.FC<{ href: string; children: ReactNode; currentPathname: string; onClick?: () => void }> = ({ href, children, currentPathname, onClick }) => {
  const isActive = (href.startsWith('/#') && currentPathname === '/') || currentPathname === href;
  return (
    <Link
      href={href}
      className={cn(
        'block py-3 px-4 rounded-md text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
        isActive ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'text-muted-foreground'
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};


export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 w-full items-center justify-between px-4">
        <div className="flex items-center space-x-2 sm:space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg sm:text-xl text-foreground">Product Pavilion</span>
          </Link>
          {/* Desktop Navigation */}
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
              <Image
                src="/logo.jpg"
                alt="Epicor Logo"
                width={20}
                height={20}
                className="h-4 w-4 sm:h-5 sm:w-5"
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
          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 sm:h-10 sm:w-10 hover:bg-primary hover:text-primary-foreground">
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] sm:w-[320px] p-0">
                <SheetHeader className="p-4 border-b">
                  <SheetTitle className="text-left">
                     <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <Sparkles className="h-6 w-6 text-primary" />
                        <span className="font-bold text-xl text-foreground">Product Pavilion</span>
                      </Link>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-2 p-4">
                  {navItems.map((item) => (
                    <NavLink 
                      key={item.name} 
                      href={item.href} 
                      currentPathname={pathname}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
