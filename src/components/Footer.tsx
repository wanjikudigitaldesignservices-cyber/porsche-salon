import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h3 className={styles.brandName}>Porsche Salon</h3>
            <p className={styles.description}>
              Premium salon services, beautiful wigs, and quality beauty products — all under one roof in Kilimani, Nairobi.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
            </div>
          </div>

          <div className={styles.linksColumn}>
            <h4>Quick Links</h4>
            <Link href="/about">About Us</Link>
            <Link href="/services">Salon Services</Link>
            <Link href="/wigs">Shop Wigs</Link>
            <Link href="/shop">Beauty Products</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/book">Book Appointment</Link>
          </div>

          <div className={styles.linksColumn}>
            <h4>Customer Care</h4>
            <Link href="/contact">Contact Us</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/shipping">Shipping Policy</Link>
            <Link href="/returns">Returns & Exchanges</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>

          <div className={styles.contactColumn}>
            <h4>Visit Us</h4>
            <div className={styles.contactItem}>
              <MapPin size={18} />
              <span>Kilimani, Nairobi, Kenya</span>
            </div>
            <div className={styles.contactItem}>
              <Phone size={18} />
              <span>+254 700 000 000</span>
            </div>
            <div className={styles.contactItem}>
              <Mail size={18} />
              <span>hello@porschesalon.com</span>
            </div>
            <div className={styles.hours}>
              <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
              <p>Sun: 10:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Porsche Salon Kilimani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
