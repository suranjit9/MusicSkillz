import Animeted from "@/components/ui/Animeted/Animeted";
import FechartSection from "@/components/ui/FechartSection";
import HeroSection from "@/components/ui/HeroSection";
import ScrollAnimetion from "@/components/ui/Scroll-reveal/ScrollAnimetion";
import Testimonials from "@/components/ui/Testimonials/Testimonials";
import UpcomingWebinars from "@/components/ui/UpcomingWebinars/UpcomingWebinars";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroSection/>
    <FechartSection/>
    <ScrollAnimetion/>
    <Testimonials/>
    <UpcomingWebinars/>
    <Animeted/>
    </main>
  );
}
