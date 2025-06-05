// src/components/sections/projects-section.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with Next.js, Stripe integration, and advanced product management.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'web application interface',
    tags: ['Next.js', 'React', 'Stripe', 'Tailwind CSS'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'AI Powered Blog Generator',
    description: 'A SaaS application that uses generative AI to create blog posts based on user prompts and keywords.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'ai tool dashboard',
    tags: ['Python', 'FastAPI', 'OpenAI API', 'React'],
    liveLink: '#',
    githubLink: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates, built using Firebase and React.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'mobile app screen',
    tags: ['React', 'Firebase', 'Material UI'],
    liveLink: '#',
    githubLink: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center text-primary mb-4">
          My Projects
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are some of the key projects I've worked on, showcasing my skills and passion for development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl smooth-transition">
              <CardHeader className="p-0">
                <div className="aspect-video relative w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={project.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="text-xl font-headline mb-2 text-foreground">{project.title}</CardTitle>
                <div className="mb-3">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="mr-1 mb-1 text-xs bg-accent/20 text-accent-foreground hover:bg-accent/30">{tag}</Badge>
                  ))}
                </div>
                <CardDescription className="text-sm text-muted-foreground">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-end space-x-3">
                {project.githubLink && (
                  <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary/10">
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                )}
                {project.liveLink && (
                  <Button variant="default" size="sm" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
