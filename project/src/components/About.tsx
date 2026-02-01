import { motion } from 'framer-motion';
import { Sparkles, Award, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge design',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Uncompromising standards in every detail',
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building lasting relationships through excellence',
    },
  ];

  return (
    <section id="about" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1D1D1F] mb-6 tracking-tight">
              Philosophy in
              <br />
              Every Detail
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
Established in February 2025, CMS Group was founded on the principle of being a true one-stop-shop for the modern lifestyle. We believe that quality and convenience should exist in perfect harmony. What started as a vision for a local hub has grown into a curated destination where every product is selected for its excellence and utility.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
At CMS Group, we go beyond retail by providing essential digital and financial services to our community. From seamless recharges and Bharath bill payments to convenient micro ATM services, we ensure your daily needs are met with a single visit.

We understand that some requirements are urgent. That is why we remain available 24x7 for any immediate product needs via our dedicated support lines.
            </p>
            <div className="flex items-center gap-8">
              <div>
                <div className="text-4xl font-bold text-[#1D1D1F] mb-1">1+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#1D1D1F] mb-1">5k+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#1D1D1F] mb-1">100%</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-14 h-14 bg-white rounded-2xl shadow-sm">
                    <value.icon className="w-7 h-7 text-[#1D1D1F]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1D1D1F] mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
