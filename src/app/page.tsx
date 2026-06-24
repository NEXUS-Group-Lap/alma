import { Header } from "@/components/header";
import { ThankYouHero } from "@/components/thank-you-hero";
import { AboutSection } from "@/components/about-section";
import { PlatformsSection } from "@/components/platforms-section";
import { InstagramSection } from "@/components/instagram-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ThankYouHero />
        <AboutSection />
        <PlatformsSection />
        <InstagramSection />
      </main>
      <Footer />
    </>
  );
}
