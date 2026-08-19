"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";

const galleryImages = [
  { id: 1, category: "Wigs", src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop" },
  { id: 2, category: "Hair", src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop" },
  { id: 3, category: "Salon", src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop" },
  { id: 4, category: "Makeup", src: "https://images.unsplash.com/photo-1516975080661-46bce0a1492f?q=80&w=800&auto=format&fit=crop" },
  { id: 5, category: "Nails", src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop" },
  { id: 6, category: "Products", src: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?q=80&w=800&auto=format&fit=crop" },
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
