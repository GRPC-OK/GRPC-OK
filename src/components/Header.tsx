// src/components/Header.tsx
import styles from './Header.module.css';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <button onClick={() => router.push('/dashboard')}>Intellisia🥕</button>
      </div>
      <div className={styles.navRight}>
        <div className={styles.profile}></div>
      </div>
    </nav>
  );
}
