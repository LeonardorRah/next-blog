import Link from "next/link"
import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <h1>Blog</h1>
            </Link>
            
            <nav className={styles.nav}>
                <Link href="/" className={styles.navLink}>Inicio</Link>
                <Link href="/livros/em-alta" className={styles.navLink}>Em alta</Link>
                <Link href="/livros/mais-visto" className={styles.navLink}>Mais visto</Link>
            </nav>
        </header>
    );
}

export default Header;