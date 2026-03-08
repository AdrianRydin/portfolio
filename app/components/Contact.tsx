import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert("Yo");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
      value: "adrian.rydin@gmail.com",
      href: "mailto:adrian.rydin@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+46 (722) 246-422",
      href: "tel:+46722246422",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Uddevalla, Sweden",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-4">
            Get In <span style={{ color: "#e94560" }}>Touch</span>
          </h2>
          <div
            className="w-20 h-1 mx-auto mb-12"
            style={{ backgroundColor: "#e94560" }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 0, x: -50 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl mb-6">Let&apos;s Talk</h3>
              <p className="text-muted-foreground mb-8">
                {" "}
                I&apos;m always interested in hearing about new projects and
                opportunities. Don&apos;t hesitate to reach out if you want to
                discuss something or just say hello.
              </p>
            </div>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: "rgba(233, 69, 96, 0.1)" }}
                  >
                    <info.icon
                      className="w-6 h-6"
                      style={{ color: "#e94560" }}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{info.label}</h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-[#e94560] transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 0, x: 50 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Smith"
                  className="w-full px-4 py-4 rounded-lg bg-background border border-border focus:border-[#e94560] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-[#e94560] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-[#e94560] focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 rounded-lg text-white font-medium flex items-center justify-center gap-2"
                style={{ backgroundColor: "#e94560" }}
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
