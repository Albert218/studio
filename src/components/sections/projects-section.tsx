// src/components/sections/projects-section.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, PlayCircle } from 'lucide-react';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Project {
  title: string;
  description: string;
  image: string;
  imageHint: string;
  tags: string[];
  liveLink?: string;
  videoUrl?: string;
  githubLink?: string; // Optional GitHub link
}

const projects: Project[] = [
  {
    title: 'Farmlynco Mobile App',
    description: 'Online marketplace for farmers, featuring IoT weather station integration and an AI "Crop Doctor" for disease diagnosis. Aimed at linking local farmers to consumers directly.',
    image: '/images/Frame 1-1.png',
    imageHint: 'agricultural technology app',
    tags: ['Mobile Development', 'IoT', 'AI', 'Agriculture Tech', 'Marketplace'],
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', // Example video
  },
  {
    title: 'Driver Drowsiness & Alcohol Detection',
    description: "System using facial landmarks and an MQ3 sensor to assess driver drowsiness and alcohol levels, triggering alerts. Designed with a revenue generation model.",
    image: '/images/IoT.png',
    imageHint: 'driver safety technology',
    tags: ['Computer Vision', 'Sensors', 'AI', 'Embedded Systems', 'Safety Tech'],
    liveLink: '#', // Placeholder live link
  },
  {
    title: 'IoT Emergency Detection System',
    description: 'Real-time fire and gas leak detection using IoT, with integrated SMS/phone call alerts and a user-friendly mobile app with voice command functionality for accessibility.',
    image: '/images/ORASAVE.jpg',
    imageHint: 'iot emergency system',
    tags: ['IoT', 'Emergency System', 'Mobile App', 'Accessibility', 'Sensors'],
    // No liveLink or videoUrl for this project
  },
];

export default function ProjectsSection() {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideoUrl(null); // Clear URL when modal closes
  };

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
                    fill
                    style={{ objectFit: 'cover' }}
                    data-ai-hint={project.imageHint}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                {project.videoUrl && (
                  <Button
                    variant="default"
                    size="sm"
                    onClick={() => handleOpenModal(project.videoUrl!)}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <PlayCircle className="mr-2 h-4 w-4" /> Watch Demo
                  </Button>
                )}
                {project.liveLink && !project.videoUrl && (
                  <Button variant="default" size="sm" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                )}
                {/* You can add a GitHub button here if project.githubLink exists */}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {selectedVideoUrl && (
        <Dialog open={isModalOpen} onOpenChange={(open) => {
          if (!open) {
            handleCloseModal();
          } else {
            // This case is typically handled by the manual call to setIsModalOpen(true)
            // but it's good to be explicit if Dialog manages its open state internally
            // based on this prop for some triggers.
            setIsModalOpen(true);
          }
        }}>
          <DialogContent className="max-w-3xl w-[90vw] sm:w-full p-0 aspect-video">
            <div className="relative w-full h-full">
              <video width="100%" height="100%" controls autoPlay src={selectedVideoUrl} className="rounded-lg">
                Your browser does not support the video tag.
              </video>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
