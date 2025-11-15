"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleProfileClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 600);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 py-3 md:py-4 bg-background/80 backdrop-blur-lg shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link
            href="/"
            onClick={handleProfileClick}
            className={`w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-border hover:border-primary transition-colors ${
              isSpinning ? "animate-spin-once" : ""
            }`}
          >
            <Image
              src="/Me.jpeg"
              alt="Tobi Odebo"
              width={48}
              height={48}
              className="object-cover w-full h-full"
            />
          </Link>

          <nav className="flex items-center gap-1 bg-card/50 backdrop-blur-sm rounded-full px-1 md:px-2 py-1.5 md:py-2 border border-border">
            <Link
              href="/#projects"
              className="px-3 md:px-5 py-1.5 md:py-2 rounded-full hover:bg-secondary transition-colors text-xs md:text-sm font-medium"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="px-3 md:px-5 py-1.5 md:py-2 rounded-full hover:bg-secondary transition-colors text-xs md:text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-3 md:px-5 py-1.5 md:py-2 rounded-full bg-secondary transition-colors text-xs md:text-sm font-medium"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <div className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
              Get In Touch
            </h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Have a question or want to work together? Fill out the form below
              and I'll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm md:text-base"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm md:text-base"
                placeholder="Tell me more about your project or inquiry..."
              />
            </div>

            {submitStatus === "success" && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600">
                Failed to send message. Please try again or email me directly at
                tobiodebo4@gmail.com
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm md:text-base"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-4 md:w-5 h-4 md:h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>

          <div className="mt-8 md:mt-12 pt-8 md:pt-12 border-t border-border text-center">
            <p className="text-muted-foreground mb-4 text-sm md:text-base">
              Or reach me directly at:
            </p>
            <a
              href="mailto:tobiodebo4@gmail.com"
              className="inline-flex items-center gap-2 text-primary hover:underline text-base md:text-lg"
            >
              <Mail className="w-4 md:w-5 h-4 md:h-5" />
              tobiodebo4@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
