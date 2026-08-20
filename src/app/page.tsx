"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, MapPin, Calendar, ShoppingBag } from "lucide-react";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import BeautyProducts from "@/components/BeautyProducts";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";

export default function Home() {
  return (
    <div className={styles.main}>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <Image 
          src="/hero.jpg"
          alt="Premium salon experience"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroContent}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.locationBadge}>
              <MapPin size={16} />
              <span>Kilimani, Nairobi</span>
            </div>
            <h1 className={styles.heroTitle}>Beauty. Style.<br/>Confidence.</h1>
            <p className={styles.heroSubtitle}>
              Premium salon services, beautiful wigs, and quality beauty products — all under one roof in Kilimani, Nairobi.
            </p>
            <div className={styles.heroActions}>
              <Link href="/book" className="btn-primary">
                Book an Appointment
              </Link>
              <Link href="/wigs" className="btn-secondary">
                Shop Wigs
              </Link>
            </div>
            <div className={styles.heroSecondaryLink}>
              <Link href="/shop">Explore Beauty Products &rarr;</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Quick Service Categories */}
      <section className={`${styles.quickServices} section-padding`}>
        <div className="container">
          <div className={styles.quickGrid}>
            <div className={styles.quickCard}>
              <h3>Salon</h3>
              <p>Professional hair and beauty services.</p>
              <Link href="/services">Explore Services &rarr;</Link>
            </div>
            <div className={styles.quickCard}>
              <h3>Wigs</h3>
              <p>Premium wigs, human hair, and stylish ready-to-wear options.</p>
              <Link href="/wigs">Shop Wigs &rarr;</Link>
            </div>
            <div className={styles.quickCard}>
              <h3>Beauty Products</h3>
              <p>Quality products for hair, skin, nails, and everyday beauty.</p>
              <Link href="/shop">Shop Beauty &rarr;</Link>
            </div>
            <div className={styles.quickCard}>
              <h3>Appointments</h3>
              <p>Book your preferred salon service.</p>
              <Link href="/book">Book Now &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Section */}
      <section className={`${styles.about} section-padding`}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImageWrapper}>
              <Image 
                src="/about.jpg"
                alt="Porsche Salon Kilimani Interior"
                fill
                className={styles.aboutImage}
              />
            </div>
            <div className={styles.aboutContent}>
              <h2 className={styles.sectionTitle}>About Porsche Salon Kilimani</h2>
              <p className={styles.sectionDescription}>
                Porsche Salon Kilimani is a modern beauty destination offering professional salon services alongside a curated selection of premium wigs and beauty products.
              </p>
              <ul className={styles.aboutFeatures}>
                <li>Professional stylists</li>
                <li>Quality products</li>
                <li>Personalized customer service</li>
                <li>Modern beauty techniques</li>
              </ul>
              
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>5+</span>
                  <span className={styles.statLabel}>Years Experience</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>1k+</span>
                  <span className={styles.statLabel}>Happy Clients</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>20+</span>
                  <span className={styles.statLabel}>Beauty Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Wigs */}
      <section className={`${styles.featuredWigs} section-padding`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Find Your Perfect Wig</h2>
            <Link href="/wigs" className={styles.viewAll}>View All Wigs &rarr;</Link>
          </div>
          
          <div className={styles.productGrid}>
            {[
              { name: "Brazilian Body Wave", price: "KES 18,500", badge: "New", image: "/wig-1.jpg" },
              { name: "Straight Lace Front", price: "KES 22,000", badge: "Best Seller", image: "/wig-1.jpg" },
              { name: "Curly Bob Wig", price: "KES 15,000", badge: "Sale", image: "/wig-1.jpg" },
              { name: "Deep Wave Blonde", price: "KES 25,000", badge: "Premium", image: "/wig-1.jpg" },
            ].map((wig, i) => (
              <div key={i} className={styles.productCard}>
                <div className={styles.productImageWrapper}>
                  <Image 
                    src={wig.image}
                    alt={wig.name}
                    fill
                    className={styles.productImage}
                  />
                  <div className={styles.productBadge}>{wig.badge}</div>
                </div>
                <div className={styles.productInfo}>
                  <h4>{wig.name}</h4>
                  <div className={styles.productRating}>
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#C5A059" color="#C5A059" />)}
                  </div>
                  <div className={styles.productPrice}>
                    <span className={styles.currentPrice}>{wig.price}</span>
                  </div>
                  <button className={styles.addToCartBtn}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Beauty Products */}
      <BeautyProducts />

      {/* 6. Testimonials */}
      <Testimonials />

      {/* 7. Gallery */}
      <Gallery />

      {/* 8. Location */}
      <Location />

      {/* WhatsApp FAB */}
      <a href="https://wa.me/254700000000" className={styles.whatsappFab} target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </a>
    </div>
  );
}
