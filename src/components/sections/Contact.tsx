"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@acmedia.ma",
      link: "mailto:contact@acmedia.ma",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+212 +++++++++",
      link: "tel:+212+++++++++",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Casablanca, Morocco",
      link: "",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-[#EFECE3] to-[#F9F8F6]"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's Create
            <span className="block text-black/80">Something Amazing</span>
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message
            and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-20"
          >
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 group cursor-pointer bg-[#EFECE3] border-black/10"
              >
                <a href={info.link} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.label}</h3>
                    <p className="text-sm text-black/70">{info.value}</p>
                  </div>
                </a>
              </Card>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            {/* ✅ pointer-events-auto pour le formulaire */}
            <Card className="p-8 bg-[#EFECE3] border-black/10 pointer-events-auto">
              <form onSubmit={handleSubmit} className="space-y-6 pointer-events-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#F9F8F6] border border-black/10 rounded-lg focus:outline-none focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#F9F8F6] border border-black/10 rounded-lg focus:outline-none focus:border-black"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#F9F8F6] border border-black/10 rounded-lg focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-[#F9F8F6] border border-black/10 rounded-lg resize-none focus:outline-none focus:border-black"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="ml-2 w-5 h-5" />
                </Button>

                {success && (
                  <p className="text-green-600 text-sm">
                    ✅ Message sent successfully
                  </p>
                )}

                {error && (
                  <p className="text-red-600 text-sm">❌ {error}</p>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
