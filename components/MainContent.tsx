// components/MainContent.jsx
import React from 'react';
import styles from '../css/MainContent.module.css';

const MainContent = () => {
  return (
    <main className={styles.mainContent}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>WELCOME TO MY PORTFOLIO</h1>
          <p>Crafting beautiful, responsive, and performant websites tailored to your needs.</p>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <h2>ABOUT ME</h2>
        <p>
          I am a passionate web developer with experience in creating functional and visually appealing
          websites. My goal is to bring your ideas to life in the digital world with clean, modern designs.
        </p>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>WHAT I OFFER</h2>
        <div className={styles.featureCards}>
          <div className={styles.featureCard}>
            <h3>RESPONSIVE DESIGN</h3>
            <p>Beautiful designs that adapt perfectly to any screen size.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>FAST PERFORMANCE</h3>
            <p>Optimized code to ensure fast loading and a smooth experience.</p>
          </div>
          <div className={styles.featureCard}>
            <h3>SEO FRIENDLY</h3>
            <p>Ensuring your site is visible to search engines from day one.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
