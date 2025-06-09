// src/components/sections/hero-section.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const skills = [
    'Software Eng.',
    'UI/UX (Figma)',
    'AI/ML',
    'Robotics',
    'Flutter Dev',
    'Python',
    'Java',
    'C++',
    'Graphic Design (Photoshop)',
    'IoT',
    'Assistive Tech',
  ];

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-4rem)] flex items-center bg-secondary/30 py-16 md:py-24 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-primary">
            <Image
              src="/images/Albert_Pic.jpg"
              alt="Essilfie Albert"
              fill
              sizes="(max-width: 768px) 8rem, 10rem"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-headline font-bold text-primary mb-4">
            Essilfie Albert
          </h1>
          <p className="text-xl md:text-2xl font-headline text-foreground/80 mb-6">
            BSc. Comp Sci & Eng. Student | UI/UX | AI & Robotics
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I am deeply passionate about leveraging systems engineering,
            robotics, and Internet of Things (IoT) technologies to develop
            innovative, low-cost assistive solutions that empower persons with
            disabilities. My research focuses on creating user-centered,
            adaptive systems that improve accessibility and enhance the quality
            of life, especially within under-resourced communities. I am
            particularly interested in the design of smart assistive devices,
            such as robotic feeding systems and navigation aids, that integrate
            machine learning, embedded systems, and real-time feedback.
            Additionally, I am drawn to the application of IoT and data-driven
            systems in agriculture and healthcare to solve practical societal
            challenges. My long-term goal is to design scalable technologies
            that create lasting social impact across Africa and beyond.
          </p>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Key Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-sm px-3 py-1 bg-primary/10 text-primary hover:bg-primary/20"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-4 mb-10">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <Link
              href="https://github.com/Albert218"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Github className="h-7 w-7 text-muted-foreground hover:text-primary smooth-transition" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-7 w-7 text-muted-foreground hover:text-primary smooth-transition" />
            </Link>
            <Link
              href="mailto:essilfiealbert71@gmail.com"
              aria-label="Email Essilfie Albert"
            >
              <Mail className="h-7 w-7 text-muted-foreground hover:text-primary smooth-transition" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Link href="#projects" aria-label="Scroll to projects">
          <ArrowDown className="h-8 w-8 text-primary/50 animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
