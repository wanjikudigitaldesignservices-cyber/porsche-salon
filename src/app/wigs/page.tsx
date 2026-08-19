"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingBag, Filter } from "lucide-react";
import styles from "./page.module.css";
import { useState } from "react";

const wigs = [
  { id: 1, name: "Brazilian Body Wave", price: "KES 18,500", rating: 5, category: "Human Hair", image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Straight Lace Front", price: "KES 22,000", rating: 4, category: "Lace Front", image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Curly Bob", price: "KES 15,000", rating: 5, category: "Bob", image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Blonde Highlights Deep Wave", price: "KES 25,000", rating: 5, category: "Colored", image: "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "Glueless Straight", price: "KES 19,500", rating: 4, category: "Glueless", image: "https://images.unsplash.com/photo-1620330132338-232145e3c79a?q=80&w=800&auto=format&fit=crop" },
  { id: 6, name: "Burgundy Deep Curly", price: "KES 21,000", rating: 5, category: "Colored", image: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?q=80&w=800&auto=format&fit=crop" },
];

const categories = ["All", "Human Hair", "Lace Front", "Glueless", "Bob", "Colored"];

export default function WigsShop() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWigs = activeCategory === "All" 
    ? wigs 
    : wigs.filter(wig => wig.category === activeCategory);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Premium Wigs</h1>
        <p className={styles.subtitle}>Discover our collection of high-quality, luxurious wigs.</p>
      </div>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.filterSection}>
            <div className={styles.filterHeader}>
              <Filter size={20} />
              <h3>Categories</h3>
            </div>
            <ul className={styles.categoryList}>
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    className={`${styles.categoryBtn} ${activeCategory === cat ? styles.active : ""}`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className={styles.main}>
          <div className={styles.grid}>
            {filteredWigs.map((wig) => (
              <div key={wig.id} className={styles.card}>
                <Link href={`/wigs/${wig.id}`}>
                  <div className={styles.imageWrapper}>
                    <Image 
                      src={wig.image}
                      alt={wig.name}
                      fill
                      className={styles.image}
                    />
                  </div>
                </Link>
                <div className={styles.info}>
                  <span className={styles.category}>{wig.category}</span>
                  <Link href={`/wigs/${wig.id}`}>
                    <h4 className={styles.name}>{wig.name}</h4>
                  </Link>
                  <div className={styles.rating}>
                    {[...Array(wig.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="#C5A059" color="#C5A059" />
                    ))}
                  </div>
                  <div className={styles.bottom}>
                    <span className={styles.price}>{wig.price}</span>
                    <button className={styles.cartBtn} aria-label="Add to cart">
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
