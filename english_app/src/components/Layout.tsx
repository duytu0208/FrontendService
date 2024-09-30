// src/components/Layout.tsx
import React from 'react';
import Navbar from './Navbar';
import styles from '../styles/Layout.module.css';

type LayoutProps = {
    children: React.ReactNode; // Khai báo kiểu cho children
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;
