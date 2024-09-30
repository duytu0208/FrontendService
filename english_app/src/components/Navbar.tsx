// components/NavBar.tsx
import Link from 'next/link';
import styles from '../styles/NavBar.module.css'; // CSS cho nav

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/knowledge">Knowledge</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
