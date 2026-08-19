import Image from "next/image";
import Link from "next/link";
import styles from "./Location.module.css";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Location() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>Visit Us in Kilimani</h2>
            <p className={styles.description}>
              Experience luxury beauty treatments in our modern, relaxing salon environment located in the heart of Nairobi.
            </p>
            
            <div className={styles.detailsList}>
              <div className={styles.detailItem}>
                <div className={styles.iconWrapper}><MapPin size={24} /></div>
                <div>
                  <h4>Address</h4>
                  <p>Argwings Kodhek Rd, Kilimani<br/>Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className={styles.detailItem}>
                <div className={styles.iconWrapper}><Clock size={24} /></div>
                <div>
                  <h4>Opening Hours</h4>
                  <p>Monday - Saturday: 8:00 AM - 8:00 PM<br/>Sunday: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
              
              <div className={styles.detailItem}>
                <div className={styles.iconWrapper}><Phone size={24} /></div>
                <div>
                  <h4>Contact</h4>
                  <p>+254 700 000 000<br/>hello@porschesalon.com</p>
                </div>
              </div>
            </div>
            
            <div className={styles.actions}>
              <Link href="https://maps.google.com" target="_blank" className="btn-primary">
                Get Directions
              </Link>
              <Link href="/book" className="btn-secondary">
                Book Appointment
              </Link>
            </div>
          </div>
          
          <div className={styles.mapWrapper}>
            <div className={styles.mapPlaceholder}>
              <MapPin size={48} color="var(--color-gold)" />
              <h3>Interactive Map</h3>
              <p>Google Maps integration goes here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
