
// src/components/sections/resume-section.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'; // Removed CarouselPrevious, CarouselNext
import Autoplay from "embla-carousel-autoplay"; // Added Autoplay plugin
import { Download, Briefcase, GraduationCap, Star, FileBadge2, HeartHandshake, Users, Award, BookOpen, Activity, Palette, ExternalLink } from 'lucide-react';

const workExperience = [
  {
    role: 'UI/UX Designer Intern',
    company: 'Project A.N.D',
    period: 'June 2022 - August 2022',
    description: [
      'Conducted user research, created personas, and designed user flows to optimize digital product experiences.',
      'Developed visually appealing layouts, color schemes, and prototypes for responsive and accessible UIs.',
      'Conducted usability tests, ensured accessibility compliance, and iteratively improved designs based on user feedback.',
    ],
  },
  {
    role: 'Graphics Designer Intern',
    company: 'Inclusive Tech Group (ITG)',
    period: 'Oct 2021 - Dec 2021',
    description: [
      'Developed and maintained the visual identity and branding of ITG, including creating logos, color schemes, and design guidelines.',
      'Designed graphics for promotional materials, social media posts, website banners, flyers, and brochures.',
    ],
  },
  {
    role: 'Networking Intern',
    company: 'University Environment (Hands-on)',
    period: 'Undisclosed Period',
    description: [
      'Gained hands-on experience in network administration and maintenance.',
      'Assisted in troubleshooting and resolving network issues, contributing to improved network reliability.',
      'Collaborated with IT teams on network infrastructure projects, enhancing system efficiency.',
      'Demonstrated dedication and eagerness to learn in a dynamic university environment.',
    ],
  },
];

const education = [
  {
    degree: 'BSc. Computer Science and Engineering (First Class Honours)',
    institution: 'University of Mines and Technology, Ghana',
    period: '2020 - Nov. 2024 (Expected)',
    description: 'Undergraduate Capstone Project: Smart Navigation Device for the visually impaired. Relevant coursework: Data Structures & Algorithms, Software Engineering, AI, HCI, Embedded Systems, Database Management.',
  },
];

const honorsAndAwards = [
  { title: 'Participated in the Africa to Silicon Valley AI for Impact Hackathon', date: 'August 2024' },
  { title: 'Participated in IndabaX Data Science Summit at KNUST', date: 'July 2024' },
  { title: 'First runner-up Delta Innovation Camp', date: 'May 2023' },
  { title: 'Participated in Google Global Challenge', date: 'Jan 2023' },
  { title: 'University of Mines Innovation Fair, Winner', date: 'July 2022' },
  { title: 'Participated at the Tech in Ghana Conference by representing UMaT', date: 'May 2022' },
  { title: 'First runner-up Disability Inclusive Hackathon', date: 'Dec 2021' },
];

const certifications = [
  { name: 'Huawei IoT', issuingOrganization: 'Huawei', date: 'Jan 2024' },
  { name: 'Huawei Certified Network Associate – Routing and Switching', issuingOrganization: 'Huawei', date: 'Aug 2023' },
];

const volunteeringExperience = [
   {
    organization: 'Firm Health Ghana Foundation',
    role: 'Graphic Designer & Data Collector',
    period: 'September 2024',
    description: [
      'Served as a graphic designer and designed all the flyers for the blood donation exercise.',
      'Collected personal data of the people during the blood donation exercise.',
    ],
  },
  {
    organization: 'Agri-IoT Project',
    role: 'Contributor/Volunteer',
    period: 'Ongoing',
    description: [
      'Contributed to the Agri-IoT project by implementing Arduino concepts, promoting innovation in agricultural technology as a volunteer.',
    ],
  },
  {
    organization: 'Aaenics - UMaT',
    role: 'Robotics and Coding Trainer',
    period: 'April 2023',
    description: [
      'Trained 100 pupils from the Tarkwa Municipality in robotics and coding, fostering STEM education and digital literacy within the community.',
    ],
  },
  {
    organization: 'Festive Kids BootCamp',
    role: 'Robotics and Programming Trainer',
    period: 'September 2023',
    description: [
      'Trained 300 pupils from the Cape Coast Municipality in robotics and programming, fostering STEM education and digital literacy within the community.',
    ],
  },
  {
    organization: 'Inclusive Tech Group (DI-Hack)',
    role: 'Mentor & Graphic Designer',
    period: 'December 2022',
    description: [
      'Served as a mentor and graphic designer for the 2022 DI-Hack competition, providing guidance and support to participants in fostering innovation for accessibility.',
    ],
  },
];

const coCurricularActivitiesData = [
  {
    activity: 'Robotics Club',
    role: 'Organizer/Tutor',
    period: 'August 2021',
    description: ['Organized free robotics tutorials for children of Knowledge of Heaven Academy.'],
  },
  {
    activity: 'Tech Prodigies',
    role: 'Micro-controller Lead',
    period: 'May 2021',
    description: ['Selection of the required processor for any project.'],
  },
  {
    activity: 'Church Technical Team',
    role: 'Member',
    period: 'Ongoing',
    description: [],
  },
  {
    activity: 'Veivag Swimming Club',
    role: 'Member',
    period: 'Ongoing',
    description: [],
  },
  {
    activity: 'Community Football Team',
    role: 'Goal Keeper',
    period: 'Ongoing',
    description: [],
  },
];

const leadershipExperienceData = [
  {
    role: "President, St. Mary's Old Boys Association - UMaT",
    organization: 'SMOBA - UMaT',
    period: 'Sept 2023 - 2024',
    description: ['Showcasing strong leadership, training, and mentorship.'],
  },
  {
    role: 'Financial Secretary, Aaenics UMaT Robotics Club',
    organization: 'Aaenics UMaT Robotics Club',
    period: 'Jan 2023 - 2024',
    description: ["Created and managed the club's budget, ensuring expenses align with financial goals."],
  },
  {
    role: 'Organizing Secretary, Association of Computer Science and Engineering Student',
    organization: 'Association of Computer Science and Engineering Students, UMaT',
    period: 'Oct 2022 - 2023',
    description: [
      'Planned and coordinated club events, meetings, and activities, ensuring they run smoothly.',
      "Handled communication with members, managed event logistics, and may assist with scheduling and venue arrangements to facilitate the club's operations.",
    ],
  },
];

const publicationsData = [
  {
    title: "In-depth IoT-based Home Automation System for Ghana's Context",
    authors: 'Mohammed Y. Umaru, Emmanuel Effah, Minta Frederick, Essilfie Albert',
    journal: 'International Journal of Research and Scientific Innovation (IJRSI)',
    year: '2023',
  },
  {
    title: 'IoT-based Weather Monitoring System for Ghanaian Farmers',
    authors: 'Abdul-Majeed Osman, Albert Essilfie, George Essah Yaw Okai, Minta Frederick Kwame',
    journal: 'International Journal of Computer Application (IJCA)',
    year: '2024',
  },
];

const sampleDesignsData = [
  {
    title: 'Mobile App UI',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'mobile app ui',
    description: 'User interface design for a modern mobile application.'
  },
  {
    title: 'Branding & Logo',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'branding logo',
    description: 'Complete branding package and logo design for a startup.'
  },
  {
    title: 'Website Design',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'website design',
    description: 'Responsive website design for a corporate client.'
  },
  {
    title: 'Dashboard UI',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'dashboard ui analytics',
    description: 'Data visualization dashboard interface.'
  },
  {
    title: 'Flyer Design',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'flyer design event',
    description: 'Promotional flyer for an event.'
  },
];


export default function ResumeSection() {
  return (
    <section id="resume" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-headline font-bold text-center text-primary mb-4">
          My Resume
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A summary of my professional experience, education, skills, and achievements. You can also download the full PDF version.
        </p>

        <div className="text-center mb-12">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="/cv/ESSILFIE ALBERT_CV.pdf" download="EssilfieAlbert-Resume.pdf">
              <Download className="mr-2 h-5 w-5" />
              Download Resume (PDF)
            </a>
          </Button>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="flex items-center text-2xl font-headline font-semibold text-primary mb-6">
              <Briefcase className="mr-3 h-6 w-6 text-accent" />
              Work Experience
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {workExperience.map((exp, index) => (
                <AccordionItem key={`work-${index}`} value={`work-item-${index}`} className="bg-card shadow-sm rounded-lg mb-4">
                  <AccordionTrigger className="p-4 sm:p-6 text-left hover:no-underline">
                    <div className="flex-1">
                      <h4 className="text-lg font-headline font-medium text-foreground">{exp.role}</h4>
                      <p className="text-sm text-accent">{exp.company}</p>
                      <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 sm:p-6 pt-0">
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <h3 className="flex items-center text-2xl font-headline font-semibold text-primary mb-6">
              <GraduationCap className="mr-3 h-6 w-6 text-accent" />
              Education
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {education.map((edu, index) => (
                <AccordionItem key={`edu-${index}`} value={`edu-item-${index}`} className="bg-card shadow-sm rounded-lg mb-4">
                  <AccordionTrigger className="p-4 sm:p-6 text-left hover:no-underline">
                     <div className="flex-1">
                        <h4 className="text-lg font-headline font-medium text-foreground">{edu.degree}</h4>
                        <p className="text-sm text-accent">{edu.institution}</p>
                        <p className="text-xs text-muted-foreground mt-1">{edu.period}</p>
                      </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 sm:p-6 pt-0">
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <h3 className="flex items-center text-2xl font-headline font-semibold text-primary mb-6">
              <Star className="mr-3 h-6 w-6 text-accent" />
              Honors & Awards
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {honorsAndAwards.map((honor, index) => (
                <AccordionItem key={`honor-${index}`} value={`honor-item-${index}`} className="bg-card shadow-sm rounded-lg mb-4">
                  <AccordionTrigger className="p-4 sm:p-6 text-left hover:no-underline">
                     <div className="flex-1">
                        <h4 className="text-lg font-headline font-medium text-foreground">{honor.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{honor.date}</p>
                      </div>
                  </AccordionTrigger>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <h3 className="flex items-center text-2xl font-headline font-semibold text-primary mb-6">
              <FileBadge2 className="mr-3 h-6 w-6 text-accent" />
              Certifications
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {certifications.map((cert, index) => (
                <AccordionItem key={`cert-${index}`} value={`cert-item-${index}`} className="bg-card shadow-sm rounded-lg mb-4">
                  <AccordionTrigger className="p-4 sm:p-6 text-left hover:no-underline">
                     <div className="flex-1">
                        <h4 className="text-lg font-headline font-medium text-foreground">{cert.name}</h4>
                        <p className="text-sm text-accent">{cert.issuingOrganization}</p>
                        <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                      </div>
                  </AccordionTrigger>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <h3 className="flex items-center text-2xl font-headline font-semibold text-primary mb-6">
              <HeartHandshake className="mr-3 h-6 w-6 text-accent" />
              Volunteering Experience
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {volunteeringExperience.map((vol, index) => (
                <AccordionItem key={`vol-${index}`} value={`vol-item-${index}`} className="bg-card shadow-sm rounded-lg mb-4">
                  <AccordionTrigger className="p-4 sm:p-6 text-left hover:no-underline">
                    <div className="flex-1">
                      <h4 className="text-lg font-headline font-medium text-foreground">{vol.role}</h4>
                      <p className="text-sm text-accent">{vol.organization}</p>
                      <p className="text-xs text-muted-foreground mt-1">{vol.period}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 sm:p-6 pt-0">
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {vol.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <h3 className="flex items-center text-2xl font-headline font-semibold text-primary mb-6">
              <Activity className="mr-3 h-6 w-6 text-accent" />
              Co-curricular Activities
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {coCurricularActivitiesData.map((act, index) => (
                <AccordionItem key={`co-curr-${index}`} value={`co-curr-item-${index}`} className="bg-card shadow-sm rounded-lg mb-4">
                  <AccordionTrigger className="p-4 sm:p-6 text-left hover:no-underline">
                    <div className="flex-1">
                      <h4 className="text-lg font-headline font-medium text-foreground">{act.activity}</h4>
                      {act.role && <p className="text-sm text-accent">{act.role}</p>}
                      <p className="text-xs text-muted-foreground mt-1">{act.period}</p>
                    </div>
                  </AccordionTrigger>
                  {act.description && act.description.length > 0 && (
                    <AccordionContent className="p-4 sm:p-6 pt-0">
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {act.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <h3 className="flex items-center text-2xl font-headline font-semibold text-primary mb-6">
              <Award className="mr-3 h-6 w-6 text-accent" />
              Leadership Experience
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {leadershipExperienceData.map((lead, index) => (
                <AccordionItem key={`lead-${index}`} value={`lead-item-${index}`} className="bg-card shadow-sm rounded-lg mb-4">
                  <AccordionTrigger className="p-4 sm:p-6 text-left hover:no-underline">
                    <div className="flex-1">
                      <h4 className="text-lg font-headline font-medium text-foreground">{lead.role}</h4>
                      <p className="text-sm text-accent">{lead.organization}</p>
                      <p className="text-xs text-muted-foreground mt-1">{lead.period}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 sm:p-6 pt-0">
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {lead.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <h3 className="flex items-center text-2xl font-headline font-semibold text-primary mb-6">
              <BookOpen className="mr-3 h-6 w-6 text-accent" />
              Publications
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {publicationsData.map((pub, index) => (
                <AccordionItem key={`pub-${index}`} value={`pub-item-${index}`} className="bg-card shadow-sm rounded-lg mb-4">
                  <AccordionTrigger className="p-4 sm:p-6 text-left hover:no-underline">
                    <div className="flex-1">
                      <h4 className="text-lg font-headline font-medium text-foreground">{pub.title}</h4>
                      <p className="text-sm text-accent mt-1">{pub.journal}, {pub.year}</p>
                    </div>
                  </AccordionTrigger>
                   <AccordionContent className="p-4 sm:p-6 pt-0">
                    <p className="text-sm text-muted-foreground italic">Authors: {pub.authors}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <h3 className="flex items-center text-2xl font-headline font-semibold text-primary mb-6">
              <Palette className="mr-3 h-6 w-6 text-accent" />
              Sample Designs
            </h3>
            <div className="mb-6">
              <p className="text-md text-muted-foreground text-left">
                A few examples of my design work. More available on Behance.
              </p>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 4000,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {sampleDesignsData.map((design, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="overflow-hidden shadow-lg hover:shadow-xl smooth-transition">
                        <CardHeader className="p-0">
                          <div className="aspect-[4/3] relative w-full">
                            <Image
                              src={design.imageUrl}
                              alt={design.title}
                              fill
                              style={{ objectFit: 'cover' }}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              data-ai-hint={design.imageHint}
                            />
                          </div>
                        </CardHeader>
                        <CardContent className="p-4">
                          <CardTitle className="text-lg font-headline mb-1 text-foreground">{design.title}</CardTitle>
                          <p className="text-sm text-muted-foreground h-16 overflow-hidden">{design.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {/* CarouselPrevious and CarouselNext removed */}
            </Carousel>
            <div className="text-center mt-10">
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link href="https://www.behance.net/albertessilfie71" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  View More on Behance
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
