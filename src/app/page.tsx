// src/app/page.tsx
import Header from "../components/layout/Header";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ContactSection from "../components/sections/ContactSection";
import FooterSection from "../components/sections/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
