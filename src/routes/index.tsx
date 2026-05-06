import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonial } from "@/components/site/Testimonial";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Denti Smile · Odontología en Barranquilla" },
      {
        name: "description",
        content:
          "Consultorio odontológico en Barranquilla. Atención profesional, cálida y amigable para toda la familia. Agenda tu cita por WhatsApp.",
      },
      { property: "og:title", content: "Denti Smile · Odontología en Barranquilla" },
      {
        property: "og:description",
        content:
          "Tu sonrisa, nuestra pasión. Clínica dental 5 estrellas, ambiente inclusivo en el barrio Metropolitana.",
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
