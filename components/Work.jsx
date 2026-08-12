import { assets } from "@/assets/assets";
import React from "react";
import { motion } from "motion/react";

const projects = [
  {
    title: "Online Shopping Website",
    description:
      "Built full-stack e-commerce platform. Implemented authentication & authorization, created admin dashboard for product management, and integrated REST APIs.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit"],
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://online-shopping-frontend-seven.vercel.app/",
  },
  {
    title: "CoinPulse - Real-Time Crypto Analytics",
    description:
      "Built full-stack crypto platform featuring live token market tracking, interactive price charts, user authentication, and watchlist management.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop",
    link: "https://crypto-trading-website-orpin.vercel.app/",
  },
  {
    title: "Frontend Of E-Commerce Website",
    description:
      "Created a responsive eCommerce frontend UI with product pages, interactive cart interface, and mobile-first design system.",
    tech: ["HTML5", "CSS3", "JavaScript (ES6)"],
    image:
      "https://plus.unsplash.com/premium_photo-1683141052679-942eb9e77760?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://ecommerce-frontend-part.vercel.app/",
  },
];

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo text-slate-400">
        What I Build
      </h4>
      <h2 className="text-center text-5xl font-Ovo text-white mb-12">
        My Projects
      </h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="border border-slate-800 bg-slate-900/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between h-full group"
          >
            <div>
              {/* Project Image Banner using standard <img> */}
              <div className="w-full h-48 relative overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 font-Ovo">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-Ovo mb-6">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-medium bg-slate-800 text-blue-400 border border-slate-700/60 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Preview Button Footer */}
            <div className="px-6 pb-6 pt-0">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group/link"
              >
                Live Preview
                <span className="group-hover/link:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;