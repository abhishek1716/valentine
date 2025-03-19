"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Define the sections of your resume
const sections = [
  "summary",
  "skills",
  "experience",
  "education",
  "certifications",
  "interests",
];

export default function AbhishekResume() {
  const [activeSection, setActiveSection] = useState("summary");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header with profile */}
      <header className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold tracking-tight mb-4">
              Abhishek Upadhyay
            </h1>
            <h2 className="text-2xl font-medium mb-6">
              Senior Frontend Performance Engineer
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="https://www.linkedin.com/in/abhishek1716/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                linkedin.com/in/abhishek1716
              </a>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91-8377912129
              </span>
              <span className="hidden sm:inline">|</span>
              <a
                href="mailto:abi.upadhyay@gmail.com"
                className="flex items-center hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                abi.upadhyay@gmail.com
              </a>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Hyderabad, India
              </span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Navigation */}
      <div className="sticky top-0 bg-white shadow-md z-10">
        <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex overflow-x-auto py-4 space-x-8 text-sm sm:text-base">
            {sections.map((section) => (
              <li key={section}>
                <button
                  onClick={() => setActiveSection(section)}
                  className={`capitalize font-medium px-1 py-2 border-b-2 transition-colors ${
                    activeSection === section
                      ? "border-teal-500 text-teal-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <main className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Summary Section */}
        {activeSection === "summary" && (
          <motion.section
            key="summary"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-white shadow rounded-lg p-6 mb-6"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 border-gray-200"
            >
              Professional Summary
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-gray-700 leading-relaxed"
            >
              Performance-focused Frontend Engineer with 6.8+ years of expertise
              in React, Next.js, and Angular ecosystems. Specialized in
              server-side rendering strategies, Core Web Vitals optimization,
              and modern frontend architecture. Demonstrated success in reducing
              load times by 50%, optimizing bundle sizes, and implementing
              efficient rendering patterns. Strong track record of leading
              development teams and bridging the gap between design and
              engineering.
            </motion.p>
          </motion.section>
        )}

        {/* Skills Section */}
        {activeSection === "skills" && (
          <motion.section
            key="skills"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-white shadow rounded-lg p-6 mb-6"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 border-gray-200"
            >
              Technical Expertise
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Frontend Frameworks & Libraries
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "Next.js",
                    "Angular 2+",
                    "Svelte",
                    "Server Components",
                    "React Server Actions",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Performance Optimization
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Core Web Vitals",
                    "Lazy Loading",
                    "Code Splitting",
                    "Bundle Analysis",
                    "Hydration Strategies",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Languages & Styling
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "TypeScript",
                    "JavaScript (ES6+)",
                    "HTML5",
                    "CSS3",
                    "TailwindCSS",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="font-semibold text-gray-800 mb-2">
                  State Management & Data Fetching
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Redux Toolkit",
                    "Zustand",
                    "React Query",
                    "Tanstack Query",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Testing & Quality
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Vitest",
                    "Jest",
                    "React Testing Library",
                    "Cypress",
                    "Lighthouse",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="font-semibold text-gray-800 mb-2">
                  Build Tools & Infrastructure
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Webpack",
                    "Vite",
                    "SSR/SSG/ISR",
                    "Edge Runtime",
                    "CDN Optimization",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}

        {/* Experience Section */}
        {activeSection === "experience" && (
          <motion.section
            key="experience"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-white shadow rounded-lg p-6 mb-6"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 border-gray-200"
            >
              Professional Experience
            </motion.h2>

            <div className="space-y-8">
              {/* Job 1 */}
              <motion.div
                variants={itemVariants}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-teal-100"
              >
                <div className="absolute w-4 h-4 bg-teal-500 rounded-full left-[-8px] top-1.5"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Module Lead
                    </h3>
                    <p className="text-teal-600 font-medium">ValueLabs</p>
                  </div>
                  <p className="text-gray-500 text-sm mt-1 sm:mt-0">
                    Sept 2024 - Present
                  </p>
                </div>
                <p className="text-gray-600 italic mb-3">
                  Engineering lead for Next.js-based enterprise applications,
                  specializing in performance optimization and modern rendering
                  strategies.
                </p>
                <ul className="list-disc list-outside text-gray-700 ml-4 space-y-2">
                  <li>
                    <span className="font-medium">
                      Reduced Core Web Vital metrics by 50%
                    </span>{" "}
                    through implementation of Next.js SSR techniques and
                    optimized rendering strategies
                  </li>
                  <li>
                    <span className="font-medium">
                      Decreased module load times by 30%
                    </span>{" "}
                    via strategic code splitting, dynamic imports, and lazy
                    loading implementations
                  </li>
                  <li>
                    <span className="font-medium">
                      Led comprehensive performance audits
                    </span>{" "}
                    using Lighthouse, WebPageTest, and Chrome DevTools to
                    identify and resolve bottlenecks
                  </li>
                  <li>
                    <span className="font-medium">
                      Mentored a seven-member development team
                    </span>{" "}
                    on performance best practices, modern React patterns, and
                    SSR implementation
                  </li>
                  <li>
                    <span className="font-medium">
                      Collaborated with backend teams
                    </span>{" "}
                    to design optimized API contracts, reducing payload sizes
                    and improving client-side data handling
                  </li>
                  <li>
                    <span className="font-medium">
                      Implemented advanced caching strategies
                    </span>{" "}
                    at edge, CDN, and application levels to minimize repeat
                    resource downloads
                  </li>
                </ul>
                <p className="mt-3 text-sm text-gray-500">
                  <span className="font-semibold">Technologies:</span> React 18,
                  Next.js 14, TypeScript, TailwindCSS, Redux Toolkit, React Hook
                  Form, Server Actions, Server Components
                </p>
              </motion.div>

              {/* Job 2 */}
              <motion.div
                variants={itemVariants}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-teal-100"
              >
                <div className="absolute w-4 h-4 bg-teal-500 rounded-full left-[-8px] top-1.5"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Senior Frontend Engineer
                    </h3>
                    <p className="text-teal-600 font-medium">
                      Convosight Analytics Pvt Ltd
                    </p>
                  </div>
                  <p className="text-gray-500 text-sm mt-1 sm:mt-0">
                    Aug 2019 - Sept 2024
                  </p>
                </div>
                <p className="text-gray-600 italic mb-3">
                  Led frontend architecture decisions and performance
                  optimization initiatives for analytics platforms serving
                  enterprise customers.
                </p>
                <ul className="list-disc list-outside text-gray-700 ml-4 space-y-2">
                  <li>
                    <span className="font-medium">
                      Improved user experience metrics by 35%
                    </span>{" "}
                    through comprehensive Core Web Vitals optimization in both
                    Angular and React applications
                  </li>
                  <li>
                    <span className="font-medium">
                      Enhanced SEO performance by 25%
                    </span>{" "}
                    via rendering strategy optimization and technical SEO
                    implementations
                  </li>
                  <li>
                    <span className="font-medium">
                      Standardized frontend tech stack
                    </span>{" "}
                    with TailwindCSS and Zustand, improving code consistency and
                    reusability by 30%
                  </li>
                  <li>
                    <span className="font-medium">
                      Redesigned frontend logging architecture
                    </span>
                    , streamlining event tracking and improving analytics report
                    generation efficiency by 40%
                  </li>
                  <li>
                    <span className="font-medium">
                      Implemented micro-frontend architecture
                    </span>{" "}
                    to support multiple teams working on different parts of the
                    application simultaneously
                  </li>
                  <li>
                    <span className="font-medium">
                      Contributed to both frontend and backend
                    </span>{" "}
                    (Node.js, NestJS) development, demonstrating full-stack
                    versatility
                  </li>
                </ul>
                <p className="mt-3 text-sm text-gray-500">
                  <span className="font-semibold">Technologies:</span> React,
                  Next.js, TypeScript, Angular 2+, Node.js, NestJS, TailwindCSS,
                  Zustand, React Hook Form, Tanstack Query
                </p>
              </motion.div>

              {/* Job 3 */}
              <motion.div
                variants={itemVariants}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-teal-100"
              >
                <div className="absolute w-4 h-4 bg-teal-500 rounded-full left-[-8px] top-1.5"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Software Developer
                    </h3>
                    <p className="text-teal-600 font-medium">ISKPRO Pvt Ltd</p>
                  </div>
                  <p className="text-gray-500 text-sm mt-1 sm:mt-0">
                    May 2018 - Aug 2019
                  </p>
                </div>
                <p className="text-gray-600 italic mb-3">
                  Focused on modernizing legacy applications and establishing
                  robust frontend practices.
                </p>
                <ul className="list-disc list-outside text-gray-700 ml-4 space-y-2">
                  <li>
                    <span className="font-medium">
                      Increased maintainability and scalability by 30%
                    </span>{" "}
                    through establishing component architecture best practices
                  </li>
                  <li>
                    <span className="font-medium">
                      Improved application performance by 30%
                    </span>{" "}
                    by upgrading legacy Angular projects to modern standards
                  </li>
                  <li>
                    <span className="font-medium">
                      Reduced critical bugs by 60%
                    </span>{" "}
                    by implementing strict coding standards and review processes
                  </li>
                  <li>
                    <span className="font-medium">
                      Facilitated effective communication
                    </span>{" "}
                    between clients and development teams to ensure technical
                    solutions aligned with business requirements
                  </li>
                </ul>
                <p className="mt-3 text-sm text-gray-500">
                  <span className="font-semibold">Technologies:</span> Angular
                  2+, Firebase, HTML/CSS, WordPress
                </p>
              </motion.div>

              {/* Job 4 (Shortened) */}
              <motion.div
                variants={itemVariants}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-teal-100"
              >
                <div className="absolute w-4 h-4 bg-teal-500 rounded-full left-[-8px] top-1.5"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Sr. Engineer
                    </h3>
                    <p className="text-teal-600 font-medium">
                      Elann Drive and Automation
                    </p>
                  </div>
                  <p className="text-gray-500 text-sm mt-1 sm:mt-0">
                    May 2015 - Aug 2017
                  </p>
                </div>
                <p className="text-gray-600 italic mb-3">
                  Managed technical projects and developed digital solutions to
                  streamline business operations.
                </p>
                <ul className="list-disc list-outside text-gray-700 ml-4 space-y-2">
                  <li>
                    <span className="font-medium">
                      Increased online inquiries by 40%
                    </span>{" "}
                    through development and maintenance of company website using
                    WordPress
                  </li>
                  <li>
                    <span className="font-medium">
                      Reduced quote preparation time by 35%
                    </span>{" "}
                    by developing a VBA-based system for gearbox selection and
                    PDF report generation
                  </li>
                </ul>
                <p className="mt-3 text-sm text-gray-500">
                  <span className="font-semibold">Technologies:</span> WordPress
                  (Elementor), HTML/CSS/JS, VBA
                </p>
              </motion.div>
            </div>
          </motion.section>
        )}

        {/* Education Section */}
        {activeSection === "education" && (
          <motion.section
            key="education"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-white shadow rounded-lg p-6 mb-6"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 border-gray-200"
            >
              Education
            </motion.h2>

            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-teal-100"
              >
                <div className="absolute w-4 h-4 bg-teal-500 rounded-full left-[-8px] top-1.5"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Bachelor of Technology - Mechanical
                    </h3>
                    <p className="text-teal-600">UPTU University</p>
                  </div>
                  <div className="text-gray-500 text-sm mt-1 sm:mt-0">
                    <p>2010 - 2014</p>
                    <p>72.5%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-teal-100"
              >
                <div className="absolute w-4 h-4 bg-teal-500 rounded-full left-[-8px] top-1.5"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      12th Standard
                    </h3>
                    <p className="text-teal-600">Lord Mahavira School</p>
                  </div>
                  <div className="text-gray-500 text-sm mt-1 sm:mt-0">
                    <p>2009 - 2010</p>
                    <p>76.2%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-teal-100"
              >
                <div className="absolute w-4 h-4 bg-teal-500 rounded-full left-[-8px] top-1.5"></div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      10th Standard
                    </h3>
                    <p className="text-teal-600">Lord Mahavira School</p>
                  </div>
                  <div className="text-gray-500 text-sm mt-1 sm:mt-0">
                    <p>2007 - 2008</p>
                    <p>78.4%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}

        {/* Certifications Section */}
        {activeSection === "certifications" && (
          <motion.section
            key="certifications"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-white shadow rounded-lg p-6 mb-6"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 border-gray-200"
            >
              Certifications & Additional Training
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                variants={itemVariants}
                className="bg-teal-50 p-4 rounded-lg border border-teal-100"
              >
                <h3 className="font-semibold text-teal-800 mb-2">
                  Web Performance Optimization
                </h3>
                <p className="text-sm text-gray-600">Frontend Masters</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-cyan-50 p-4 rounded-lg border border-cyan-100"
              >
                <h3 className="font-semibold text-cyan-800 mb-2">
                  Advanced React Patterns and Performance
                </h3>
                <p className="text-sm text-gray-600">React Training</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-emerald-50 p-4 rounded-lg border border-emerald-100"
              >
                <h3 className="font-semibold text-emerald-800 mb-2">
                  Next.js Optimization Strategies
                </h3>
                <p className="text-sm text-gray-600">Vercel</p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-blue-50 p-4 rounded-lg border border-blue-100"
              >
                <h3 className="font-semibold text-blue-800 mb-2">
                  Modern JavaScript for the Impatient
                </h3>
                <p className="text-sm text-gray-600">O&apos;Reilly</p>
              </motion.div>
            </div>
          </motion.section>
        )}

        {/* Interests Section */}
        {activeSection === "interests" && (
          <motion.section
            key="interests"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-white shadow rounded-lg p-6 mb-6"
          >
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 border-gray-200"
            >
              Interests
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-b from-teal-50 to-teal-100 p-6 rounded-lg shadow-sm"
              >
                <div className="mx-auto mb-4 p-3 bg-white rounded-full w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-teal-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-teal-800 mb-2">
                  Sports
                </h3>
                <p className="text-sm text-gray-600">
                  Staying active and competitive
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-b from-cyan-50 to-cyan-100 p-6 rounded-lg shadow-sm"
              >
                <div className="mx-auto mb-4 p-3 bg-white rounded-full w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-cyan-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-cyan-800 mb-2">
                  Technology and Gadgets
                </h3>
                <p className="text-sm text-gray-600">
                  Exploring the latest tech innovations
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-b from-emerald-50 to-emerald-100 p-6 rounded-lg shadow-sm"
              >
                <div className="mx-auto mb-4 p-3 bg-white rounded-full w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-emerald-800 mb-2">
                  Tech Surfing
                </h3>
                <p className="text-sm text-gray-600">
                  Staying updated with emerging web technologies
                </p>
              </motion.div>
            </div>
          </motion.section>
        )}

        {/* Resume download card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg shadow-md p-6 text-white flex flex-col sm:flex-row items-center justify-between"
        >
          <div>
            <h3 className="font-bold text-xl mb-2">
              Want a copy of my resume?
            </h3>
            <p className="opacity-90">
              Download the PDF version or get in touch directly.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-4">
            <a
              href="/Abhishek_Upadhyay_Resume.pdf"
              download="Abhishek_Upadhyay_Resume.pdf"
              className="bg-white text-teal-600 font-medium py-2 px-4 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              Download PDF
            </a>
            <a
              href="mailto:abi.upadhyay@gmail.com"
              className="border border-white text-white font-medium py-2 px-4 rounded-lg hover:bg-white hover:text-teal-600 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-6 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} Abhishek Upadhyay. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/abhishek1716/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="mailto:abi.upadhyay@gmail.com"
              className="hover:text-white"
            >
              <span className="sr-only">Email</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
            {/* <a href="#" className="hover:text-white">
              <span className="sr-only">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a> */}
          </div>
        </div>
      </footer>

      {/* Performance stats animation */}
      {/* <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg p-3 text-xs font-mono text-gray-700 opacity-70 hover:opacity-100 transition-opacity">
        <p>⚡ LCP: 0.9s | FID: 12ms | CLS: 0.02</p>
      </div> */}
    </div>
  );
}
