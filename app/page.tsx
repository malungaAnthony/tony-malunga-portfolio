'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowDown, ArrowDownRight, ArrowUpRight, ChevronLeft, ChevronRight, Mail } from 'lucide-react';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const whatsappUrl =
  'https://wa.me/260974681450?text=Hi%20Tony%2C%20I%27d%20like%20to%20talk%20about%20a%20project.';

const portraits = [
  {
    src: '/image/tony-hero.png',
    alt: 'Tony Malunga in a cinematic city portrait',
    width: 1024,
    height: 1536,
    position: 'center 36%',
  },
  {
    src: '/image/tony-portrait-outdoor.jpg',
    alt: 'Tony Malunga wearing sunglasses outdoors',
    width: 768,
    height: 1024,
    position: 'center 28%',
  },
  {
    src: '/image/tony-portrait-studio.jpg',
    alt: 'Black-and-white studio portrait of Tony Malunga in a suit',
    width: 768,
    height: 768,
    position: 'center 38%',
  },
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: FaLinkedin },
  { label: 'Instagram', href: 'https://instagram.com', icon: FaInstagram },
];

const interests = [
  'Digital experiences',
  'Brand identity',
  'Web design',
  'Creative Design',
];

export default function Home() {
  const [activePortrait, setActivePortrait] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActivePortrait((current) => (current + 1) % portraits.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  const showPreviousPortrait = () => {
    setActivePortrait((current) => (current - 1 + portraits.length) % portraits.length);
  };

  const showNextPortrait = () => {
    setActivePortrait((current) => (current + 1) % portraits.length);
  };

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Tony Malunga, home">
          TM<span>.</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Selected work</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-contact" href={whatsappUrl} target="_blank" rel="noreferrer">
          <FaWhatsapp aria-hidden="true" />
          <span>Let&apos;s talk</span>
          <ArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            DESIGNER · DEVELOPER · LUSAKA, ZM
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Making
            <br />
            good ideas
            <br />
            <span>feel</span> real.
          </motion.h1>
          <motion.p
            className="hero-intro"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            I&apos;m Tony — a creative designer and developer building expressive digital
            experiences with a story behind them.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a className="button button-primary" href="#work">
              Explore my work <ArrowDownRight aria-hidden="true" />
            </a>
            <a className="button button-text" href="#about">
              Meet the designer <ArrowDownRight aria-hidden="true" />
            </a>
          </motion.div>
          <div className="hero-socials" aria-label="Social profiles">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer">
                <Icon aria-hidden="true" />
              </a>
            ))}
            <span className="social-divider" />
            <span>Available for select projects</span>
          </div>
        </div>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, scale: 0.96, rotate: 1.5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          role="group"
          aria-roledescription="carousel"
          aria-label="Portraits of Tony Malunga"
        >
          <div className="portrait-slides" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                className="portrait-slide"
                key={activePortrait}
                initial={{ opacity: 0, scale: 1.025 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
              >
                <Image
                  src={portraits[activePortrait].src}
                  alt={portraits[activePortrait].alt}
                  width={portraits[activePortrait].width}
                  height={portraits[activePortrait].height}
                  priority={activePortrait === 0}
                  sizes="(max-width: 760px) 90vw, 42vw"
                  style={{ objectPosition: portraits[activePortrait].position }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="portrait-caption">
            <span>THE DESIGNER</span>
            <span>EST. LUSAKA</span>
          </div>
          <div className="portrait-controls" aria-label="Slideshow controls">
            <button
              className="portrait-arrow"
              type="button"
              onClick={showPreviousPortrait}
              aria-label="Show previous portrait"
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <div className="portrait-dots">
              {portraits.map((portrait, index) => (
                <button
                  className={`portrait-dot${activePortrait === index ? ' is-active' : ''}`}
                  key={portrait.src}
                  type="button"
                  onClick={() => setActivePortrait(index)}
                  aria-label={`Show portrait ${index + 1} of ${portraits.length}`}
                  aria-current={activePortrait === index ? 'true' : undefined}
                />
              ))}
            </div>
            <span className="portrait-count">
              0{activePortrait + 1} / 0{portraits.length}
            </span>
            <button
              className="portrait-arrow"
              type="button"
              onClick={showNextPortrait}
              aria-label="Show next portrait"
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>
          <div className="portrait-sticker" aria-hidden="true">
            <span>IDEAS</span>
            <ArrowDown aria-hidden="true" />
            <span>INTO IMPACT</span>
          </div>
        </motion.div>

        <a className="scroll-cue" href="#about">
          SCROLL TO EXPLORE <ArrowDown aria-hidden="true" />
        </a>
      </section>

      <section className="about-section" id="about">
        <div className="section-wrap about-grid">
          <div className="about-heading">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>
              Curious by
              <br />
              nature. <span>Creative</span>
              <br />
              by design.
            </h2>
          </div>
          <div className="about-copy">
            <p className="about-lead">
              I don&apos;t just design interfaces — I bring ideas to life through thoughtful
              visuals, playful details, and code.
            </p>
            <p>
              Based in Lusaka, I work across digital design and front-end development to create
              online experiences that feel distinct, intuitive, and alive.
            </p>
            <div className="interest-list">
              <p className="eyebrow">THINGS I LOVE TO CREATE</p>
              <div>
                {interests.map((interest, index) => (
                  <span key={interest}>
                    <span className="interest-index">0{index + 1}</span> {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="work-section section-wrap" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A FEW THINGS I&apos;VE MADE</p>
            <h2>Selected work<span>.</span></h2>
          </div>
          <p>Good work starts with a good story.</p>
        </div>

        <motion.article
          className="project-card"
          whileHover={{ y: -6 }}
          transition={{ duration: 0.25 }}
        >
          <a
            className="project-image"
            href="#contact"
            aria-label="Discuss the Creativestack branding project"
          >
            <Image
              src="/creativestack01.png"
              alt="Creativestack branded van on a bright orange background"
              width={1024}
              height={1024}
              sizes="(max-width: 760px) 100vw, 72vw"
            />
            <span className="project-image-label">BRAND IDENTITY · 2026</span>
            <span className="project-arrow">
              <ArrowUpRight aria-hidden="true" />
            </span>
          </a>
          <div className="project-details">
            <div>
              <h3>Creativestack</h3>
              <p>Branding for Cyberstack&apos;s creative division.</p>
            </div>
            <span className="project-number">01 / 01</span>
          </div>
        </motion.article>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <p className="eyebrow">HAVE A GOOD ONE IN MIND?</p>
          <h2>
            Let&apos;s make
            <br />
            <span>something matter.</span>
          </h2>
          <p className="contact-note">
            Have an idea, a project, or just want to say hello? I&apos;d love to hear from you.
          </p>
          <div className="contact-actions">
            <a className="button button-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">
              <FaWhatsapp aria-hidden="true" /> Chat on WhatsApp
              <ArrowUpRight aria-hidden="true" />
            </a>
            <span className="phone-number">+260 974 681 450</span>
          </div>
          <a className="email-link" href="mailto:tony@malunga.design">
            <Mail aria-hidden="true" /> tony@malunga.design
          </a>
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home" aria-label="Back to top">
          TM<span>.</span>
        </a>
        <p>Designed with intention in Lusaka, Zambia.</p>
        <span>© 2026 Tony Malunga</span>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Tony on WhatsApp"
      >
        <FaWhatsapp aria-hidden="true" />
      </a>
    </main>
  );
}
