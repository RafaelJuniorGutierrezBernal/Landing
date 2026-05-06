import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonial } from "@/components/sections/Testimonial";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";
import { useReveal } from "@/hooks/use-reveal";

import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: siteConfig.titleSEO },
      {
        name: "description",
        content: siteConfig.descriptionSEO,
      },
      { property: "og:title", content: siteConfig.titleSEO },
      {
        property: "og:description",
        content: siteConfig.descriptionSEO,
      },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
