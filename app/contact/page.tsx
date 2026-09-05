import { Header } from "@/components/header";
import { ContactSection } from "@/components/sections/contact-section";
import { FooterSection } from "@/components/sections/footer-section";

export const metadata = {
  title: "Contact | MONO",
  description:
    "Get in touch with MONO. Questions, support, partnerships — we're here to help.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Contact
          </p>
          <h1 className="text-5xl font-medium tracking-tighter text-foreground md:text-6xl lg:text-7xl">
            Let&apos;s talk.
          </h1>
          <p className="mt-6 max-w-lg text-muted-foreground text-lg leading-relaxed">
            Whether you have a question about features, pricing, or anything
            else — our team is ready to answer.
          </p>
        </div>
      </section>

      <ContactSection />
      <FooterSection />
    </main>
  );
}
