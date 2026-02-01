import { motion } from 'framer-motion';
import { ArrowRight, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold text-[#1D1D1F] leading-tight tracking-tight mb-6"
            >
              Quality
              <br />
              <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
                First
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg lg:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Premium quality crafted for those who appreciate the finer details. From high-end fashion to household essentials, we curate the best of everything, all in one place.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a 
              href="https://api1.vyaparapp.in/store/cmsgarments"
              className="group px-8 py-4 bg-[#1D1D1F] text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Shop Now (Garments)
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
              href="https://api1.vyaparapp.in/store/cmsagencies"
              className="group px-8 py-4 bg-[#1D1D1F] text-white rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Shop Now (Agencies)
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="flex-1 relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl blur-3xl opacity-50"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-12 flex items-center justify-center aspect-square">
                <Smartphone className="w-48 h-48 text-gray-300" strokeWidth={1} />
              </div>
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
              >
                <div className="text-sm font-semibold text-[#1D1D1F]">New Arrival</div>
                <div className="text-xs text-gray-500">Limited Edition</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
