"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { Calendar as CalendarIcon, Clock, User, CheckCircle } from "lucide-react";

export default function BookAppointment() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={styles.container}>
        <div className={styles.successMessage}>
          <CheckCircle size={64} color="var(--color-gold)" />
          <h2>Your appointment request has been received.</h2>
          <p>We will contact you shortly to confirm your booking.</p>
          <button className="btn-primary" onClick={() => window.location.href = '/'}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Book Appointment</h1>
        <p className={styles.subtitle}>Select your preferred service, date, and time.</p>
      </div>

      <div className={styles.bookingLayout}>
        <div className={styles.formSection}>
          <form onSubmit={handleSubmit} className={styles.form}>
            
            <div className={styles.formGroup}>
              <label>1. Select Service</label>
              <select required className={styles.input}>
                <option value="">-- Choose a service --</option>
                <optgroup label="Hair">
                  <option value="braiding">Braiding - from KES 3,500</option>
                  <option value="wig_install">Wig Installation - KES 2,500</option>
                  <option value="haircut">Haircut - KES 1,000</option>
                  <option value="styling">Hair Styling - KES 1,500</option>
                </optgroup>
                <optgroup label="Nails & Makeup">
                  <option value="manicure">Manicure - KES 1,000</option>
                  <option value="pedicure">Pedicure - KES 1,200</option>
                  <option value="makeup">Full Face Makeup - KES 4,500</option>
                </optgroup>
              </select>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label><CalendarIcon size={16}/> Preferred Date</label>
                <input type="date" required className={styles.input} />
              </div>
              
              <div className={styles.formGroup}>
                <label><Clock size={16}/> Preferred Time</label>
                <select required className={styles.input}>
                  <option value="">-- Time --</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label><User size={16}/> Preferred Stylist (Optional)</label>
              <select className={styles.input}>
                <option value="">-- Any Available Stylist --</option>
                <option value="sarah">Sarah</option>
                <option value="joy">Joy</option>
                <option value="mercy">Mercy</option>
              </select>
            </div>

            <div className={styles.divider}></div>
            <h3>Your Details</h3>

            <div className={styles.formGroup}>
              <label>Full Name</label>
              <input type="text" required placeholder="Jane Doe" className={styles.input} />
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>Phone Number</label>
                <input type="tel" required placeholder="07xx xxx xxx" className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label>Email Address</label>
                <input type="email" required placeholder="jane@example.com" className={styles.input} />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Additional Notes</label>
              <textarea placeholder="Any special requests or details..." className={styles.textarea}></textarea>
            </div>

            <button type="submit" className={`btn-primary ${styles.submitBtn}`}>
              Confirm Booking
            </button>
          </form>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.card}>
            <h3>Need Help?</h3>
            <p>If you have any questions or need to book multiple services, you can also book via WhatsApp.</p>
            <a href="https://wa.me/254700000000?text=Hello%20Porsche%20Salon%20Kilimani,%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn}>
              Book via WhatsApp
            </a>
          </div>

          <div className={styles.card}>
            <h3>Cancellation Policy</h3>
            <p>Please provide at least 24 hours notice if you need to cancel or reschedule your appointment.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
