import Link from "next/link";
import styles from "./page.module.css";
import { Scissors, Sparkles, Wind } from "lucide-react";

const serviceCategories = [
  {
    title: "Hair Styling & Care",
    icon: <Scissors size={32} />,
    description: "Professional hair care tailored to your unique texture.",
    services: [
      { name: "Silk Press", price: "from KES 3,500" },
      { name: "Wash & Blowdry", price: "KES 1,500" },
      { name: "Hair Coloring", price: "from KES 5,000" },
      { name: "Deep Conditioning Treatment", price: "KES 2,000" },
      { name: "Relaxer Touch-up", price: "KES 2,500" },
    ]
  },
  {
    title: "Braiding & Locs",
    icon: <Wind size={32} />,
    description: "Protective styles done with precision and care.",
    services: [
      { name: "Knotless Braids (Medium)", price: "KES 4,500" },
      { name: "Knotless Braids (Small)", price: "KES 6,000" },
      { name: "Faux Locs", price: "from KES 5,500" },
      { name: "Cornrows (Simple)", price: "KES 1,500" },
      { name: "Dreadlocks Retouch", price: "KES 2,000" },
    ]
  },
  {
    title: "Wig Services",
    icon: <Sparkles size={32} />,
    description: "Expert wig installation, customization, and maintenance.",
    services: [
      { name: "Wig Installation (Frontal)", price: "KES 3,500" },
      { name: "Wig Installation (Closure)", price: "KES 2,500" },
      { name: "Wig Revamp / Wash", price: "KES 2,000" },
      { name: "Custom Wig Making", price: "from KES 8,000" },
      { name: "Wig Coloring", price: "from KES 4,000" },
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Salon Services</h1>
        <p className={styles.subtitle}>Explore our comprehensive menu of premium beauty services.</p>
      </div>

      <div className={styles.grid}>
        {serviceCategories.map((category, idx) => (
          <div key={idx} className={styles.categoryCard}>
            <div className={styles.categoryHeader}>
              <div className={styles.iconWrapper}>
                {category.icon}
              </div>
              <h2>{category.title}</h2>
              <p>{category.description}</p>
            </div>
            
            <ul className={styles.serviceList}>
              {category.services.map((service, sIdx) => (
                <li key={sIdx} className={styles.serviceItem}>
                  <span className={styles.serviceName}>{service.name}</span>
                  <span className={styles.servicePrice}>{service.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className={styles.ctaSection}>
        <h2>Ready for your transformation?</h2>
        <p>Book your appointment today and let our expert stylists take care of you.</p>
        <Link href="/book" className="btn-primary">Book Now</Link>
      </div>
    </div>
  );
}
