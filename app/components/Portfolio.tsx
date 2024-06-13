import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Our Portfolio</h1>
        <p>We provide the Perfect Solution to your business growth</p>
      </header>
      <section className={styles.portfolio}>
        <div className={styles.project}>
          <Image src="/image1.jpg" alt="Project 1" width={500} height={300} />
          <h2>Digital Marketing Agency Website</h2>
          <p>This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Across all platforms. This is a website rebrand</p>
        </div>
        <div className={styles.project}>
          <Image src="/image2.jpg" alt="Project 2" width={500} height={300} />
          <h2>Digital Marketing Agency Website</h2>
          <p>This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Across all platforms. This is a website rebrand</p>
        </div>
        <div className={styles.project}>
          <Image src="/image3.jpg" alt="Project 3" width={500} height={300} />
          <h2>Digital Marketing Agency Website</h2>
          <p>This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Across all platforms. This is a website rebrand</p>
        </div>
        <div className={styles.project}>
          <Image src="/image4.jpg" alt="Project 4" width={500} height={300} />
          <h2>Digital Marketing Agency Website</h2>
          <p>This is a website for a client who want to achieve their goals and meet their users needs while also increasing their reach. Across all platforms. This is a website rebrand</p>
        </div>
      </section>
    </div>
  );
}