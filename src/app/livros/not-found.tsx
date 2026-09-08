// src/app/not-found.tsx
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import styles from './page.module.css';

export default function NotFound() {
  return (
    <>
      <Header />
      
      <main className={styles.main}>
        <div className={styles.notFound}>
          <h1 className={styles.errorCode}>404</h1>
          <h2 className={styles.errorTitle}>Página não encontrada</h2>
          <p className={styles.errorMessage}>
            O post que você está procurando não existe ou foi removido.
          </p>
          <Link href="/" className={styles.voltar}>
            ← Voltar para o início
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}