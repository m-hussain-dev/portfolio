"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "@/components/home/WhatsApp";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Create a loading toast that will be updated based on the response
    const loadingToast = toast.loading("Sending your message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        // Update loading toast to success
        toast.success("Message sent successfully!", { id: loadingToast });
        // Reset form
        setForm({ name: "", email: "", message: "" });
      } else {
        // Update loading toast to error
        toast.error(`Failed to send: ${data.error}`, { id: loadingToast });
      }
    } catch (err) {
      // Update loading toast to error
      toast.error("Something went wrong. Please try again.", {
        id: loadingToast,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-6 py-16 relative">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-white text-center mt-10 mb-10"
      >
        Get in Touch
      </motion.h1>

      {/* Contact Form Card */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white/20 space-y-5"
      >
        <div>
          <label className="block text-gray-200 mb-2 font-medium">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
            required
          />
        </div>

        <div>
          <label className="block text-gray-200 mb-2 font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition"
            required
          />
        </div>

        <div>
          <label className="block text-gray-200 mb-2 font-medium">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Your message..."
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-3 rounded-lg bg-white/5 border border-white/20 text-gray-100 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none transition resize-none"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg font-semibold text-lg bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </motion.form>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}
