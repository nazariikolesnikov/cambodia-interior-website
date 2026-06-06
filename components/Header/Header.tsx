'use client';

import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <>
            <header className={styles.mainHeader}>
            <div className={styles.logoContainer}>
                    <Link href="/" className={styles.logoText}>Cambodia</Link>
                    <div className={styles.logoSubtextWrapper}>
                        <span className={styles.logoSubtext}>interior</span>
                        <div className={styles.logoLine}></div>
                    </div>
                </div>
                <nav className={styles.navMenu}>
                    <ul className={styles.navList}>
                    <li><Link href="/" className={styles.navItem}>Home page</Link></li>
                        <li><Link href="/about" className={styles.navLink}>About</Link></li>
                        <li><Link href="/servicea" className={styles.navLink}>Services</Link></li>
                        <li><Link href="/projects" className={styles.navLink}>Projects</Link></li>
                        <li><Link href="/carrier" className={styles.navLink}>Carrier</Link></li>
                        <li><Link href="/blog" className={styles.navLink}>Blog</Link></li>
                        <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
                    </ul>
                </nav>
                <div className={styles.socialsContainer}>
                    <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Instagram</Link>
                    <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Facebook</Link>
                    <Link href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Pinterest</Link>
                </div>
            </header>
        </>
    );
}