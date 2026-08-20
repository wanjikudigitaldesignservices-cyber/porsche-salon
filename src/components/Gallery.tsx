"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";

const galleryImages = [
  { id: 1, category: "Wigs", src: "/wig-1.jpg" },
  { id: 2, category: "Hair", src: "/gallery-hair.jpg" },
  { id: 3, category: "Salon", src: "/about.jpg" },
  { id: 4, category: "Makeup", src: "/gallery-hair.jpg" },
  { id: 5, category: "Nails", src: "/hero.jpg" },
  { id: 6, category: "Products", src: "/wig-1.jpg" },
];

const filters = ["All", "Hair", "Wigs", "Nails", "Makeup", "Products", "Salon"];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredImages = activeFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Our Work & Salon</h2>
          <div className={styles.filters}>
            {filters.map(filter => (
              <button 
                key={filter}
                className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.masonryGrid}>
          {filteredImages.map((image) => (
            <div key={image.id} className={styles.masonryItem}>
              <Image 
                src={image.src}
                alt={`${image.category} showcase`}
                fill
                className={styles.image}
              />
              <div className={styles.overlay}>
                <span>{image.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
