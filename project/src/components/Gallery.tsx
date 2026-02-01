import { motion } from 'framer-motion';
import { Image } from 'lucide-react';

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center mb-8">
            <motion.div
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_100%] rounded-full"
            >
              <span className="text-white font-medium text-sm">Coming Soon</span>
            </motion.div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#1D1D1F] mb-4 tracking-tight">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            A curated collection of moments and inspirations. Stay tuned for our
            visual journey through design and innovation.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-16 lg:p-24 shadow-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-3xl blur-3xl opacity-30"></div>
            <div className="relative flex flex-col items-center justify-center">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-32 h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-8"
              >
                <Image className="w-16 h-16 text-gray-300" strokeWidth={1} />
              </motion.div>
              <p className="text-gray-500 text-lg font-medium">
                Something beautiful is coming
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
