// components/Layout.tsx
import NavBar from './NavBar';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            <main className={styles.layout}>{children}</main>
        </div>
    );
};

export default Layout;
