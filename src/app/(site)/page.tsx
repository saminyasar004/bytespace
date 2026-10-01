import { Hero, Partners } from "@/components/home/hero";
import {
  CreatorCta,
  DiscoverSkills,
  GrowthSection,
  LearningPathSection,
  PopularCourses,
  Testimonials,
} from "@/components/home/sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <DiscoverSkills />
      <PopularCourses />
      <LearningPathSection />
      <GrowthSection />
      <CreatorCta />
      <Testimonials />
    </>
  );
}
