"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Your name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Your email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please specify a project or subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write a brief message about your project.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      // Simulate client processing time with clear feedback
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Successfully processed inquiry draft
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try emailing directly.");
    }
  };

  const mailtoHref = `mailto:tatheer@tatheer.dev?subject=${encodeURIComponent(
    formData.subject ? `[Inquiry] ${formData.subject}` : "Portfolio Inquiry"
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 p-6 sm:p-8 md:p-10 backdrop-blur-md shadow-xl">
      {status === "success" ? (
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center py-8"
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)]/15 text-[var(--color-accent)] border border-[var(--color-accent)]/30">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h3 className="mb-2 font-mono text-xl font-bold uppercase tracking-tight text-[var(--color-foreground)]">
            Inquiry Prepared
          </h3>
          <p className="mx-auto mb-6 max-w-md text-sm text-[var(--color-foreground-muted)]">
            Thank you, {formData.name}. Your details have been formatted. To ensure direct, uninterrupted delivery, click below to send via your email client or copy my direct address.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={mailtoHref}
              className="inline-flex items-center justify-center rounded-xl bg-[var(--color-accent)] px-6 py-3 text-xs font-semibold text-[var(--color-background)] transition-all hover:bg-[var(--color-accent)]/90"
            >
              Send via Email Client ↗
            </a>
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setFormData({ name: "", email: "", subject: "", message: "" });
              }}
              className="inline-flex items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-xs font-medium text-[var(--color-foreground-muted)] transition-colors hover:text-[var(--color-foreground)]"
            >
              Reset Form
            </button>
          </div>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-mono text-xs uppercase tracking-wider text-[var(--color-foreground-muted)]"
              >
                Name <span className="text-[var(--color-accent)]">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                disabled={status === "submitting"}
                placeholder="Ada Lovelace"
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className={`w-full rounded-xl border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] ${
                  errors.name
                    ? "border-red-500/60 bg-red-500/5 text-[var(--color-foreground)]"
                    : "border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] hover:border-[var(--color-border-hover)]"
                }`}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-mono text-xs uppercase tracking-wider text-[var(--color-foreground-muted)]"
              >
                Email <span className="text-[var(--color-accent)]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                disabled={status === "submitting"}
                placeholder="ada@example.com"
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`w-full rounded-xl border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] ${
                  errors.email
                    ? "border-red-500/60 bg-red-500/5 text-[var(--color-foreground)]"
                    : "border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] hover:border-[var(--color-border-hover)]"
                }`}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-400">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="mb-2 block font-mono text-xs uppercase tracking-wider text-[var(--color-foreground-muted)]"
            >
              Project / Subject <span className="text-[var(--color-accent)]">*</span>
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              disabled={status === "submitting"}
              placeholder="e.g. SaaS Architecture or Engineering Mentorship"
              aria-required="true"
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              className={`w-full rounded-xl border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] ${
                errors.subject
                  ? "border-red-500/60 bg-red-500/5 text-[var(--color-foreground)]"
                  : "border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] hover:border-[var(--color-border-hover)]"
              }`}
            />
            {errors.subject && (
              <p id="subject-error" className="mt-1.5 text-xs text-red-400">
                {errors.subject}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="mb-2 block font-mono text-xs uppercase tracking-wider text-[var(--color-foreground-muted)]"
            >
              Message <span className="text-[var(--color-accent)]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              disabled={status === "submitting"}
              placeholder="Tell me about your team, the problem you're addressing, and your preferred timeline..."
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`w-full resize-none rounded-xl border px-4 py-3 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)] ${
                errors.message
                  ? "border-red-500/60 bg-red-500/5 text-[var(--color-foreground)]"
                  : "border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] hover:border-[var(--color-border-hover)]"
              }`}
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          {/* Global error banner if any */}
          {status === "error" && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-400">
              {errorMessage}
            </div>
          )}

          {/* Submit button */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p className="text-xs text-[var(--color-foreground-subtle)]">
              Direct delivery to <code className="text-[var(--color-accent)] font-mono">tatheer@tatheer.dev</code>
            </p>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-accent)] px-7 py-3 text-xs font-semibold uppercase tracking-wider text-[var(--color-background)] transition-all hover:bg-[var(--color-accent)]/90 hover:shadow-[0_0_24px_rgba(200,169,110,0.3)] disabled:opacity-50"
            >
              {status === "submitting" ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <span aria-hidden="true">→</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
