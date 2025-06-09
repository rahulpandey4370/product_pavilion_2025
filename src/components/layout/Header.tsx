
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Linkedin as LinkedinIcon, Menu, MessageSquareText } from 'lucide-react'; // Added Menu, MessageSquareText
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import type { ReactNode } from 'react';
import { useState, useEffect, useMemo } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const baseNavItems = [
  { name: 'Home', href: '/', icon: null },
  { name: 'Explore Booths', href: '/#booths', icon: null },
  { name: 'Word Search', href: '/#word-search', icon: null, mobileOnly: false, desktopOnly: false }, // mobileOnly, desktopOnly for clarity
  { name: 'Feedback', href: '/#feedback', icon: MessageSquareText, mobileOnly: false, desktopOnly: false },
];

// Helper component for SheetClose functionality on link click
const NavLink: React.FC<{ href: string; children: ReactNode; currentPathname: string; onClick?: () => void; icon?: React.ElementType }> = ({ href, children, currentPathname, onClick, icon: Icon }) => {
  const isActive = (href.startsWith('/#') && currentPathname === '/') || currentPathname === href;
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-2 py-3 px-4 rounded-md text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
        isActive ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'text-muted-foreground'
      )}
      onClick={onClick}
    >
      {Icon && <Icon className="h-5 w-5" />}
      {children}
    </Link>
  );
};


export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const navItems = useMemo(() => {
    if (!mounted) { // Return a default set of nav items before client-side hydration
        return baseNavItems.filter(item => item.name !== 'Word Search'); // Temporarily hide word search until mounted
    }
    return baseNavItems.filter(item => {
      if (item.name === 'Word Search') {
        return !isMobile; // Only show Word Search if not mobile
      }
      return true; // Show all other items
    });
  }, [isMobile, mounted]);


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
                  'text-sm font-medium transition-colors hover:text-primary flex items-center gap-1',
                  (pathname === item.href || (item.href.startsWith('/#') && pathname === '/'))
                    ? 'text-primary'
                    : 'text-muted-foreground'
                )}
              >
                {item.icon && <item.icon className="h-4 w-4" />}
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
                      icon={item.icon}
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
