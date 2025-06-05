
// src/components/sections/resume-section.tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Download, Briefcase, GraduationCap } from 'lucide-react';

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
];

const education = [
  {
    degree: 'BSc. Computer Science and Engineering (First Class Honours)',
    institution: 'University of Mines and Technology, Ghana',
    period: '2020 - Nov. 2024 (Expected)',
    description: 'Undergraduate Capstone Project: Smart Navigation Device for the visually impaired. Relevant coursework: Data Structures & Algorithms, Software Engineering, AI, HCI, Embedded Systems, Database Management.',
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
          A summary of my professional experience, education, and skills. You can also download the full PDF version.
        </p>

        <div className="text-center mb-12">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            {/* Placeholder link for resume download */}
            <a href="/placeholder-resume.pdf" download="EssilfieAlbert-Resume.pdf">
              <Download className="mr-2 h-5 w-5" />
              Download Resume (PDF)
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="flex items-center text-2xl font-headline font-semibold text-primary mb-6">
              <Briefcase className="mr-3 h-6 w-6 text-accent" />
              Work Experience
            </h3>
            <Accordion type="single" collapsible className="w-full">
              {workExperience.map((exp, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card shadow-sm rounded-lg mb-4">
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
                <AccordionItem key={index} value={`item-${index}`} className="bg-card shadow-sm rounded-lg mb-4">
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
        </div>
      </div>
    </section>
  );
}
