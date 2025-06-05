// src/components/sections/resume-section.tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Download, Briefcase, GraduationCap, Star, FileBadge2, HeartHandshake } from 'lucide-react';

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
    organization: 'Agri-IoT',
    role: 'Contributor/Participant',
    period: 'August 2023',
    description: [
      'Involved in Agri-IoT initiatives.',
    ],
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
            {/* Placeholder link for resume download */}
            <a href="/placeholder-resume.pdf" download="EssilfieAlbert-Resume.pdf">
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

        </div>
      </div>
    </section>
  );
}
