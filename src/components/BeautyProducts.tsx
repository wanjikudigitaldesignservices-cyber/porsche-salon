import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingBag } from "lucide-react";
import styles from "./BeautyProducts.module.css";

const products = [
  { id: 1, name: "Argan Oil Hair Serum", price: "KES 2,500", rating: 5, category: "Hair Care", image: "/wig-1.jpg" },
  { id: 2, name: "Hydrating Facial Cleanser", price: "KES 1,800", rating: 4, category: "Skin Care", image: "/gallery-hair.jpg" },
  { id: 3, name: "Professional Edge Control", price: "KES 1,200", rating: 5, category: "Hair Care", image: "/wig-1.jpg" },
  { id: 4, name: "Luxury Wig Care Kit", price: "KES 4,500", rating: 5, category: "Accessories", image: "/gallery-hair.jpg" },
];

export default function BeautyProducts() {
  return (
    <section className="section-padding bg-light">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Beauty Essentials</h2>
          <Link href="/shop" className={styles.viewAll}>Shop All Beauty &rarr;</Link>
        </div>

        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.info}>
                <span className={styles.category}>{product.category}</span>
                <h4 className={styles.name}>{product.name}</h4>
                <div className={styles.rating}>
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} size={12} fill="#C5A059" color="#C5A059" />
                  ))}
                </div>
                <div className={styles.bottom}>
                  <span className={styles.price}>{product.price}</span>
                  <button className={styles.cartBtn} aria-label="Add to cart">
                    <ShoppingBag size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
