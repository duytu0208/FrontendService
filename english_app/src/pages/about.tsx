// pages/about.tsx
import Layout from '../components/Layout';
import styles from '../styles/About.module.css';

const AboutPage = () => {
    return (
        <Layout>
            <div className={styles.aboutContainer}>
                <h1 className={styles.aboutHeading}>About Me</h1>
                <p className={styles.aboutText}>
                    Hello! I'm a passionate developer with a love for technology and
                    continuous learning. This is the place where I introduce myself and
                    share my journey in the tech world.
                </p>
            </div>
        </Layout>
    );
};

export default AboutPage;
