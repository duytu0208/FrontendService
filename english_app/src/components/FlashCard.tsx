// src/components/FlashCard.tsx
import React from 'react';
import styles from '../styles/FlashCard.module.css';

interface FlashCardProps {
    title: string;
    content: string;
}

const FlashCard: React.FC<FlashCardProps> = ({ title, content }) => {
    return (
        <div className={styles.card}>
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    );
};

export default FlashCard;
