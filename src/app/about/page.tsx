import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>About Porsche Salon</h1>
        <p className={styles.subtitle}>Redefining beauty and elegance in the heart of Nairobi.</p>
      </div>

      <div className={styles.content}>
        <div className={styles.imageSection}>
          <div className={styles.mainImageWrapper}>
            <Image 
              src="/about.jpg" 
              alt="Porsche Salon Interior" 
              fill 
              className={styles.image}
            />
          </div>
        </div>
        
        <div className={styles.textSection}>
          <h2>Our Story</h2>
          <p>
            Founded with a passion for premium beauty, Porsche Salon Kilimani has grown into one of Nairobi's most trusted destinations for hair, wigs, and comprehensive beauty services.
          </p>
          <p>
            We believe that every client deserves to feel confident, beautiful, and pampered. Our team of highly trained professionals is dedicated to providing personalized care tailored to your unique style and preferences.
          </p>
          
          <div className={styles.values}>
            <h3>Why Choose Us?</h3>
            <ul className={styles.valueList}>
              <li>
                <CheckCircle2 className={styles.checkIcon} size={20} />
                <span><strong>Expert Stylists:</strong> Years of experience in modern styling and traditional care.</span>
              </li>
              <li>
                <CheckCircle2 className={styles.checkIcon} size={20} />
                <span><strong>Premium Products:</strong> We only use top-tier, salon-grade products.</span>
              </li>
              <li>
                <CheckCircle2 className={styles.checkIcon} size={20} />
                <span><strong>Luxury Ambience:</strong> Relax in our beautiful, comfortable Kilimani space.</span>
              </li>
              <li>
                <CheckCircle2 className={styles.checkIcon} size={20} />
                <span><strong>Client-First Approach:</strong> Your satisfaction is our absolute priority.</span>
              </li>
            </ul>
          </div>
          
          <div className={styles.actions}>
            <Link href="/book" className="btn-primary">Book an Appointment</Link>
            <Link href="/services" className="btn-secondary">View Our Services</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
