"use client";

import { useState } from "react";

const contactInfo = [
  {
    label: "Email",
    value: "hello@mono.design",
    href: "mailto:hello@mono.design",
  },
  {
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    label: "Address",
    value: "123 Design District\nSan Francisco, CA 94102",
    href: "#",
  },
];

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "YouTube", href: "#" },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="bg-background">
      {/* Contact Grid */}
      <div className="grid grid-cols-1 border-t border-border lg:grid-cols-2">
        {/* Left - Info */}
        <div className="border-b border-border p-8 md:p-12 lg:p-16 lg:border-b-0 lg:border-r">
          <div className="sticky top-24">
            <h2 className="text-4xl font-medium tracking-tighter text-foreground md:text-5xl lg:text-6xl">
              Get in
              <br />
              touch.
            </h2>
            <p className="mt-6 max-w-sm text-muted-foreground leading-relaxed">
              Have a question about our products, need support, or want to
              explore a partnership? We&apos;d love to hear from you.
            </p>

            {/* Contact Details */}
            <div className="mt-12 space-y-8">
              {contactInfo.map((info) => (
                <div key={info.label}>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    {info.label}
                  </p>
                  <a
                    href={info.href}
                    className="text-foreground text-lg leading-relaxed hover:text-muted-foreground transition-colors whitespace-pre-line"
                  >
                    {info.value}
                  </a>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Follow Us
              </p>
              <div className="flex items-center gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="p-8 md:p-12 lg:p-16">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[500px] text-center">
              <div className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-background"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-medium tracking-tight text-foreground">
                Message Sent
              </h3>
              <p className="mt-3 text-muted-foreground max-w-sm">
                Thank you for reaching out. We&apos;ll get back to you within
                24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-8 px-6 py-3 text-sm font-medium rounded-full border border-border text-foreground hover:bg-secondary transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-xs uppercase tracking-widest text-muted-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-xs uppercase tracking-widest text-muted-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-xs uppercase tracking-widest text-muted-foreground"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Product Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="press">Press & Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs uppercase tracking-widest text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 text-sm font-medium rounded-full bg-foreground text-background hover:opacity-80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
