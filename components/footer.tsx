// components/Footer.tsx
import Link from 'next/link';
import styles from '../css/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">MY PORTFOLIO</Link>
        </div>

        <div className={styles.links}>
          <Link href="/about" className={styles.link}>ABOUT</Link>
          <Link href="/contact" className={styles.link}>CONTACT</Link>
        </div>

      

        <p className={styles.copyright}>© 2024 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
