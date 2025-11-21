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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
      value: "hello@purevisuals.com",
      link: "mailto:hello@purevisuals.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New York, NY 10001",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-[#EFECE3] to-[#F9F8F6]">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-wider text-black/60 mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's Create
            <span className="block text-black/80">
              Something Amazing
            </span>
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
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 group cursor-pointer bg-[#EFECE3] border-black/10">
                <a href={info.link} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-black flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{info.label}</h3>
                    <p className="text-sm text-black/70">{info.value}</p>
                  </div>
                </a>
              </Card>
            ))}

            {/* Social Links */}
            <Card className="p-6 bg-[#EFECE3] border-black/10">
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {["Instagram", "Twitter", "Dribbble", "LinkedIn"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-lg border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 text-sm"
                  >
                    {social.charAt(0)}
                  </a>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="p-8 bg-[#EFECE3] border-black/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#F9F8F6] border border-black/10 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#F9F8F6] border border-black/10 rounded-lg focus:outline-none focus:border-black transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#F9F8F6] border border-black/10 rounded-lg focus:outline-none focus:border-black transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#F9F8F6] border border-black/10 rounded-lg focus:outline-none focus:border-black transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group">
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}