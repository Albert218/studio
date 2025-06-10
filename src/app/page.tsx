
import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import ProjectsSection from '@/components/sections/projects-section';
import ResumeSection from '@/components/sections/resume-section';
import ContactSection from '@/components/sections/contact-section';
// import ElevatorPitchGenerator from '@/components/sections/elevator-pitch-generator'; // Removed

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ProjectsSection />
        <ResumeSection />
        {/* <ElevatorPitchGenerator /> */} {/* Removed */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
