import { siteConfig } from "@/config/site";
import { Star, Quote } from "lucide-react";

export function Testimonial() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="reveal relative bg-card rounded-3xl p-10 md:p-14 shadow-card border border-border">
          <Quote className="absolute -top-5 left-8 w-14 h-14 text-primary fill-primary" />
          <div className="flex gap-1 mb-5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={22} className="fill-primary text-primary" />
            ))}
          </div>
          <p className="text-xl md:text-2xl font-medium text-navy leading-relaxed">
            {siteConfig.testimonial.quote}
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-white font-extrabold text-lg">
              {siteConfig.testimonial.authorInitials}
            </div>
            <div>
              <div className="font-bold text-navy">{siteConfig.testimonial.authorName}</div>
              <div className="text-sm text-muted-foreground">{siteConfig.testimonial.authorRole}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
