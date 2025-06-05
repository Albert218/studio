
// src/components/layout/footer.tsx
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between space-y-4 px-4 py-8 sm:flex-row sm:space-y-0 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Essilfie Albert. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <Link href="https://github.com/Albert218" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="mailto:essilfiealbert71@gmail.com" aria-label="Email">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Mail className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
