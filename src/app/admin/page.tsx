"use client";

import Link from "next/link";
import { Users, ShoppingBag, Calendar, Settings, Package, Image as ImageIcon } from "lucide-react";
import styles from "./page.module.css";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Bookings", value: "142", trend: "+12%", positive: true },
    { label: "Wig Orders", value: "56", trend: "+5%", positive: true },
    { label: "Revenue (KES)", value: "450,000", trend: "+18%", positive: true },
    { label: "Pending Appointments", value: "14", trend: "-2%", positive: false },
  ];

  const menuItems = [
    { label: "Products & Wigs", icon: <Package size={24} />, href: "/admin/products" },
    { label: "Services", icon: <Settings size={24} />, href: "/admin/services" },
    { label: "Appointments", icon: <Calendar size={24} />, href: "/admin/appointments" },
    { label: "Orders", icon: <ShoppingBag size={24} />, href: "/admin/orders" },
    { label: "Customers", icon: <Users size={24} />, href: "/admin/customers" },
    { label: "Content & Gallery", icon: <ImageIcon size={24} />, href: "/admin/content" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Admin Dashboard</h1>
          <p className={styles.subtitle}>Welcome back, Manager</p>
        </div>
        <button className="btn-primary">View Live Site</button>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((stat, i) => (
          <div key={i} className={styles.statCard}>
            <p className={styles.statLabel}>{stat.label}</p>
            <h3 className={styles.statValue}>{stat.value}</h3>
            <span className={`${styles.statTrend} ${stat.positive ? styles.positive : styles.negative}`}>
              {stat.trend} this month
            </span>
          </div>
        ))}
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.mainContent}>
          <h2 className={styles.sectionTitle}>Management Modules</h2>
          <div className={styles.modulesGrid}>
            {menuItems.map((item, i) => (
              <Link key={i} href={item.href} className={styles.moduleCard}>
                <div className={styles.moduleIcon}>{item.icon}</div>
                <h3>{item.label}</h3>
                <p>Manage {item.label.toLowerCase()}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.sidebar}>
          <h2 className={styles.sectionTitle}>Recent Activity</h2>
          <div className={styles.activityList}>
            <div className={styles.activityItem}>
              <div className={styles.activityDot}></div>
              <div>
                <p><strong>New Booking:</strong> Sarah for Wig Install</p>
                <span>10 mins ago</span>
              </div>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityDot}></div>
              <div>
                <p><strong>Order Placed:</strong> Brazilian Body Wave</p>
                <span>1 hour ago</span>
              </div>
            </div>
            <div className={styles.activityItem}>
              <div className={styles.activityDot}></div>
              <div>
                <p><strong>Appointment Cancelled:</strong> Jane (Manicure)</p>
                <span>3 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
