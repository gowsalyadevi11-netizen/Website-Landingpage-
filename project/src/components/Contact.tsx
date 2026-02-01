import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'cmsgroup.2025@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 91595 55507',
      Val02: "04259 225507"
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Somandurai Chittur',
      a:'https://maps.app.goo.gl/oPN3QbtZ3RYDvUQ38',
      text:"CLick me to G-Map"
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 lg:px-8 bg-[#FBFBFD]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1D1D1F] mb-4 tracking-tight">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question or want to work together? We'd love to hear from you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-sm text-center"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mx-auto mb-4">
                <info.icon className="w-6 h-6 text-[#1D1D1F]" strokeWidth={1.5} />
              </div>
              <div className="text-sm text-gray-500 mb-1">{info.title}</div>
              <div className="text-base font-medium text-[#1D1D1F]">{info.value}</div>
              {info.Val02 && <div className="text-base font-medium text-[#1D1D1F]">{info.Val02}</div>}
              {info.a && <a href={info.a} target="_blank" rel="noopener noreferrer" className=" hover:underline">{info.text}</a>}
            </motion.div>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#1D1D1F] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all text-[#1D1D1F]"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#1D1D1F] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all text-[#1D1D1F]"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-[#1D1D1F] mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all resize-none text-[#1D1D1F]"
              placeholder="Tell us about your project..."
              required
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full md:w-auto px-8 py-4 bg-[#1D1D1F] text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            Send Message
            <Send className="w-5 h-5" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
