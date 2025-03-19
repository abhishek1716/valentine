import "../../../../public/styles/resume.css";

export default function AbhishekResumeV2() {
  return (
    <>
      <div className="resume-container">
        <header className="header">
          <h1 className="name">ABHISHEK UPADHYAY</h1>
          <h2 className="title">SENIOR FRONTEND PERFORMANCE ENGINEER</h2>
          <div className="contact">
            <a href="https://www.linkedin.com/in/abhishek1716/" target="_blank">
              linkedin.com/in/abhishek1716
            </a>
            <span>|</span>
            <span>+91-8377912129</span>
            <span>|</span>
            <a href="mailto:abi.upadhyay@gmail.com">abi.upadhyay@gmail.com</a>
            <span>|</span>
            <span>Hyderabad, India</span>
          </div>
        </header>

        <section className="section">
          <h3 className="section-heading">Professional Summary</h3>
          <p className="summary">
            Performance-focused Frontend Engineer with 6.8+ years of expertise
            in React, Next.js, and Angular ecosystems. Specialized in
            server-side rendering strategies, Core Web Vitals optimization, and
            modern frontend architecture. Demonstrated success in reducing load
            times by 50%, optimizing bundle sizes, and implementing efficient
            rendering patterns. Strong track record of leading development teams
            and bridging the gap between design and engineering.
          </p>
        </section>

        <section className="section">
          <h3 className="section-heading">Technical Expertise</h3>
          <div className="skills-container">
            <div className="skill-category">
              <h4 className="skill-category-name">
                Frontend Frameworks & Libraries:
              </h4>
              <div className="skill-list">
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">Angular 2+</span>
                <span className="skill-tag">Svelte</span>
                <span className="skill-tag">Server Components</span>
                <span className="skill-tag">React Server Actions</span>
              </div>
            </div>

            <div className="skill-category">
              <h4 className="skill-category-name">Performance Optimization:</h4>
              <div className="skill-list">
                <span className="skill-tag">Core Web Vitals</span>
                <span className="skill-tag">Lazy Loading</span>
                <span className="skill-tag">Code Splitting</span>
                <span className="skill-tag">Bundle Analysis</span>
                <span className="skill-tag">Hydration Strategies</span>
              </div>
            </div>

            <div className="skill-category">
              <h4 className="skill-category-name">Languages & Styling:</h4>
              <div className="skill-list">
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">JavaScript (ES6+)</span>
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">TailwindCSS</span>
              </div>
            </div>

            <div className="skill-category">
              <h4 className="skill-category-name">
                State Management & Data Fetching:
              </h4>
              <div className="skill-list">
                <span className="skill-tag">Redux Toolkit</span>
                <span className="skill-tag">Zustand</span>
                <span className="skill-tag">React Query</span>
                <span className="skill-tag">Tanstack Query</span>
              </div>
            </div>

            <div className="skill-category">
              <h4 className="skill-category-name">Testing & Quality:</h4>
              <div className="skill-list">
                <span className="skill-tag">Vitest</span>
                <span className="skill-tag">Jest</span>
                <span className="skill-tag">React Testing Library</span>
                <span className="skill-tag">Cypress</span>
                <span className="skill-tag">Lighthouse</span>
              </div>
            </div>

            <div className="skill-category">
              <h4 className="skill-category-name">
                Build Tools & Infrastructure:
              </h4>
              <div className="skill-list">
                <span className="skill-tag">Webpack</span>
                <span className="skill-tag">Vite</span>
                <span className="skill-tag">SSR/SSG/ISR</span>
                <span className="skill-tag">Edge Runtime</span>
                <span className="skill-tag">CDN Optimization</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h3 className="section-heading">Professional Experience</h3>

          <div className="job">
            <div className="job-header">
              <div>
                <span className="job-title">MODULE LEAD</span>
                <span> | </span>
                <span className="job-company">VALUELABS</span>
              </div>
              <div className="job-duration">Sept 2024 - Present</div>
            </div>
            <p className="job-description">
              Engineering lead for Next.js-based enterprise applications,
              specializing in performance optimization and modern rendering
              strategies.
            </p>
            <ul className="achievements">
              <li className="achievement">
                <strong>Reduced Core Web Vital metrics by 50%</strong> through
                implementation of Next.js SSR techniques and optimized rendering
                strategies
              </li>
              <li className="achievement">
                <strong>Decreased module load times by 30%</strong> via
                strategic code splitting, dynamic imports, and lazy loading
                implementations
              </li>
              <li className="achievement">
                <strong>Led comprehensive performance audits</strong> using
                Lighthouse, WebPageTest, and Chrome DevTools to identify and
                resolve bottlenecks
              </li>
              <li className="achievement">
                <strong>Mentored a seven-member development team</strong> on
                performance best practices, modern React patterns, and SSR
                implementation
              </li>
              <li className="achievement">
                <strong>Collaborated with backend teams</strong> to design
                optimized API contracts, reducing payload sizes and improving
                client-side data handling
              </li>
              <li className="achievement">
                <strong>Implemented advanced caching strategies</strong> at
                edge, CDN, and application levels to minimize repeat resource
                downloads
              </li>
            </ul>
            <p className="technologies">
              <span className="tech-stack">Technologies:</span> React 18,
              Next.js 14, TypeScript, TailwindCSS, Redux Toolkit, React Hook
              Form, Server Actions, Server Components
            </p>
          </div>

          <div className="job">
            <div className="job-header">
              <div>
                <span className="job-title">SENIOR FRONTEND ENGINEER</span>
                <span> | </span>
                <span className="job-company">
                  CONVOSIGHT ANALYTICS PVT LTD
                </span>
              </div>
              <div className="job-duration">Aug 2019 - Sept 2024</div>
            </div>
            <p className="job-description">
              Led frontend architecture decisions and performance optimization
              initiatives for analytics platforms serving enterprise customers.
            </p>
            <ul className="achievements">
              <li className="achievement">
                <strong>Improved user experience metrics by 35%</strong> through
                comprehensive Core Web Vitals optimization in both Angular and
                React applications
              </li>
              <li className="achievement">
                <strong>Enhanced SEO performance by 25%</strong> via rendering
                strategy optimization and technical SEO implementations
              </li>
              <li className="achievement">
                <strong>Standardized frontend tech stack</strong> with
                TailwindCSS and Zustand, improving code consistency and
                reusability by 30%
              </li>
              <li className="achievement">
                <strong>Redesigned frontend logging architecture</strong>,
                streamlining event tracking and improving analytics report
                generation efficiency by 40%
              </li>
              <li className="achievement">
                <strong>Implemented micro-frontend architecture</strong> to
                support multiple teams working on different parts of the
                application simultaneously
              </li>
              <li className="achievement">
                <strong>Contributed to both frontend and backend</strong>{" "}
                (Node.js, NestJS) development, demonstrating full-stack
                versatility
              </li>
            </ul>
            <p className="technologies">
              <span className="tech-stack">Technologies:</span> React, Next.js,
              TypeScript, Angular 2+, Node.js, NestJS, TailwindCSS, Zustand,
              React Hook Form, Tanstack Query
            </p>
          </div>

          <div className="job">
            <div className="job-header">
              <div>
                <span className="job-title">SOFTWARE DEVELOPER</span>
                <span> | </span>
                <span className="job-company">ISKPRO PVT LTD</span>
              </div>
              <div className="job-duration">May 2018 - Aug 2019</div>
            </div>
            <p className="job-description">
              Focused on modernizing legacy applications and establishing robust
              frontend practices.
            </p>
            <ul className="achievements">
              <li className="achievement">
                <strong>
                  Increased maintainability and scalability by 30%
                </strong>{" "}
                through establishing component architecture best practices
              </li>
              <li className="achievement">
                <strong>Improved application performance by 30%</strong> by
                upgrading legacy Angular projects to modern standards
              </li>
              <li className="achievement">
                <strong>Reduced critical bugs by 60%</strong> by implementing
                strict coding standards and review processes
              </li>
              <li className="achievement">
                <strong>Facilitated effective communication</strong> between
                clients and development teams to ensure technical solutions
                aligned with business requirements
              </li>
            </ul>
            <p className="technologies">
              <span className="tech-stack">Technologies:</span> Angular 2+,
              Firebase, HTML/CSS, WordPress
            </p>
          </div>

          <div className="job">
            <div className="job-header">
              <div>
                <span className="job-title">SR. ENGINEER</span>
                <span> | </span>
                <span className="job-company">ELANN DRIVE AND AUTOMATION</span>
              </div>
              <div className="job-duration">May 2015 - Aug 2017</div>
            </div>
            <p className="job-description">
              Managed technical projects and developed digital solutions to
              streamline business operations.
            </p>
            <ul className="achievements">
              <li className="achievement">
                <strong>Increased online inquiries by 40%</strong> through
                development and maintenance of company website using WordPress
              </li>
              <li className="achievement">
                <strong>Reduced quote preparation time by 35%</strong> by
                developing a VBA-based system for gearbox selection and PDF
                report generation
              </li>
              <li className="achievement">
                <strong>Improved project completion rates by 25%</strong>{" "}
                through end-to-end project lifecycle management
              </li>
              <li className="achievement">
                <strong>Enhanced customer satisfaction scores by 30%</strong>{" "}
                through responsive technical support and service
              </li>
            </ul>
            <p className="technologies">
              <span className="tech-stack">Technologies:</span> WordPress
              (Elementor), HTML/CSS/JS, VBA
            </p>
          </div>
        </section>

        <section className="section">
          <h3 className="section-heading">Education</h3>
          <div className="education-item">
            <div>
              <span className="degree">
                Bachelor of Technology - Mechanical
              </span>
              <span> | </span>
              <span className="school">UPTU University</span>
            </div>
            <div className="graduation-details">72.5% | 2010-2014</div>
          </div>
          <div className="education-item">
            <div>
              <span className="degree">12th Standard</span>
              <span> | </span>
              <span className="school">Lord Mahavira School</span>
            </div>
            <div className="graduation-details">76.2% | 2009-2010</div>
          </div>
          <div className="education-item">
            <div>
              <span className="degree">10th Standard</span>
              <span> | </span>
              <span className="school">Lord Mahavira School</span>
            </div>
            <div className="graduation-details">78.4% | 2007-2008</div>
          </div>
        </section>

        <section className="section">
          <h3 className="section-heading">
            Certifications & Additional Training
          </h3>
          <ul className="certifications-list">
            <li className="certification">
              Web Performance Optimization (Frontend Masters)
            </li>
            <li className="certification">
              Advanced React Patterns and Performance
            </li>
            <li className="certification">Next.js Optimization Strategies</li>
            <li className="certification">
              Modern JavaScript for the Impatient
            </li>
          </ul>
        </section>

        <section className="section">
          <h3 className="section-heading">Interests</h3>
          <div className="interests">
            <span className="interest">Sports</span>
            <span className="interest">Technology and Gadgets</span>
            <span className="interest">Tech Surfing</span>
          </div>
        </section>
      </div>
    </>
  );
}
