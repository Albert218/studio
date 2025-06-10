
// src/components/layout/navbar.tsx
"use client";

import Link from 'next/link';
import { Menu, X, Briefcase, Home, Mail, User, Palette, Github, Linkedin } from 'lucide-react'; // Removed Zap, Added Palette
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const navLinks = [
  { href: '#home', label: 'Home', icon: Home },
  { href: '#projects', label: 'Projects', icon: Briefcase },
  { href: '#resume', label: 'Resume', icon: User },
  // { href: '#pitch-ai', label: 'Pitch AI', icon: Zap }, // Removed Pitch AI
  { href: '#contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="text-2xl font-headline font-bold text-primary hover:opacity-80 smooth-transition">
          Essilfie Albert
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary smooth-transition"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center space-x-3">
            <Link href="https://github.com/Albert218" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/albert-essilfie-054237080l/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://www.behance.net/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Behance">
              <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-primary">
                <Palette className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-6">
              <div className="mb-6 flex justify-between items-center">
                 <Link href="#home" className="text-2xl font-headline font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                    Essilfie Albert
                  </Link>
                <SheetClose asChild>
                   <Button variant="ghost" size="icon">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <SheetClose key={link.label} asChild>
                    <Link
                      href={link.href}
                      className="flex items-center space-x-3 rounded-md p-2 text-lg font-medium hover:bg-accent/50 hover:text-accent-foreground smooth-transition"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <link.icon className="h-5 w-5" />
                      <span>{link.label}</span>
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-8 flex items-center space-x-4">
                <Link href="https://github.com/Albert218" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Button variant="outline" size="icon" className="text-foreground/70 hover:text-primary border-border hover:border-primary">
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/albert-essilfie-054237080l/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Button variant="outline" size="icon" className="text-foreground/70 hover:text-primary border-border hover:border-primary">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href="https://www.behance.net/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Behance">
                  <Button variant="outline" size="icon" className="text-foreground/70 hover:text-primary border-border hover:border-primary">
                    <Palette className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
