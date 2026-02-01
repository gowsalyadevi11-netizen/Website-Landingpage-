import { motion } from 'framer-motion';
import { Shirt, Scissors, Gift, BookOpen, Home, Zap, Wrench, Sparkles } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Fashion & Craft',
    description: 'Premium clothing and professional tailoring or sewing accessories.',
    icon: Scissors, // Matches professional tailoring
    tags: ['Clothing', 'Tailoring', 'Sewing']
  },
  {
    id: 2,
    name: 'Lifestyle & Gifts',
    description: 'A unique fancy store selection, toys, stationery, and thoughtful gifts.',
    icon: Gift, // Matches gifts and fancy store
    tags: ['Fancy Store', 'Toys', 'Stationery']
  },
  {
    id: 3,
    name: 'Home & Technical',
    description: 'Essential household goods, electrical, hardware, and specialized plumbing.',
    icon: Home, // Matches household and technical
    tags: ['Electrical', 'Hardware', 'Plumbing']
  },
];

const Products = () => {
  return (
    <section id="products" className="py-24 px-6 lg:px-8 bg-[#FBFBFD]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">Coming Soon</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1D1D1F] mb-6 tracking-tight">
            Our Collection
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We offer a thoughtfully curated collection of high-quality products designed to cater to various styles and occasions.
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, transition: { duration: 0.4, ease: "easeOut" } }}
              className="group relative bg-white rounded-[2.5rem] p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 border border-gray-50"
            >
              {/* Icon Container */}
              <div className="flex items-center justify-center w-16 h-16 bg-[#F5F5F7] rounded-2xl mb-8 group-hover:scale-110 group-hover:bg-[#1D1D1F] transition-all duration-500">
                <category.icon className="w-8 h-8 text-[#1D1D1F] group-hover:text-white transition-colors duration-500" strokeWidth={1.2} />
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-4 tracking-tight">
                {category.name}
              </h3>
              <p className="text-gray-500 mb-8 leading-relaxed text-sm lg:text-base">
                {category.description}
              </p>

              {/* Subtle Tag List */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-50">
                {category.tags.map((tag) => (
                  <span key={tag} className="text-[11px] font-medium px-3 py-1 bg-gray-50 text-gray-400 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Overlay for "Coming Soon" Feel */}
              <div className="absolute top-6 right-8">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-gray-400">
            For immediate requirements, reach us at our given phone numbers. Available 24/7.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;