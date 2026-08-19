"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.brandName}>Porsche Salon</span>
          </Link>
        </div>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.mobileOpen : ""}`}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Salon Services</Link>
          <Link href="/wigs" onClick={() => setMobileMenuOpen(false)}>Wigs</Link>
          <Link href="/shop" onClick={() => setMobileMenuOpen(false)}>Beauty Shop</Link>
          <Link href="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </nav>

        <div className={styles.actions}>
          <button className={styles.cartBtn} aria-label="Cart">
            <ShoppingCart size={20} />
            <span className={styles.cartBadge}>0</span>
          </button>
          <Link href="/book" className={styles.bookBtn}>
            Book Appointment
          </Link>
          <button className={styles.mobileToggle} onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
