"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    id: 1,
    name: "Amina K.",
    review: "The wig quality was amazing and the installation was even better. I absolutely loved the final look. Highly recommended!",
    service: "Wig Installation",
    rating: 5,
    image: "/gallery-hair.jpg"
  },
  {
    id: 2,
    name: "Sarah M.",
    review: "Porsche Salon has the best stylists in Kilimani. They treat your natural hair with so much care before braiding.",
    service: "Knotless Braids",
    rating: 5,
    image: "/gallery-hair.jpg"
  },
  {
    id: 3,
    name: "Joy W.",
    review: "I bought their Brazilian Body Wave wig and the hair is so soft and doesn't tangle. The customer service was also top notch.",
    service: "Wig Purchase",
    rating: 5,
    image: "/gallery-hair.jpg"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={`${styles.section} section-padding`}>
      <div className="container">
        <h2 className={styles.title}>Client Love</h2>
        
        <div className={styles.carousel}>
          <button className={styles.navBtn} onClick={prev} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>
          
          <div className={styles.card}>
            <div className={styles.rating}>
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={18} fill="#C5A059" color="#C5A059" />
              ))}
            </div>
            <p className={styles.review}>&quot;{testimonials[currentIndex].review}&quot;</p>
            
            <div className={styles.author}>
              <div className={styles.avatarWrapper}>
                <Image 
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  className={styles.avatar}
                />
              </div>
              <div className={styles.authorInfo}>
                <h4>{testimonials[currentIndex].name}</h4>
                <span>{testimonials[currentIndex].service}</span>
              </div>
            </div>
          </div>
          
          <button className={styles.navBtn} onClick={next} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
