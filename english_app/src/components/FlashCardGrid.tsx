// src/components/FlashCardGrid.tsx
import React, { useState, useEffect } from 'react';
import FlashCard from './FlashCard';
import styles from '../styles/FlashCard.module.css';

interface FlashCardData {
    title: string;
    content: string;
}

const FlashCardGrid: React.FC<{ flashCards: FlashCardData[] }> = ({ flashCards }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const cardsPerPage = 6; // Số lượng card trên mỗi trang
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const totalPages = Math.ceil(flashCards.length / cardsPerPage);
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    const currentCards = flashCards.slice(startIndex, endIndex);

    return (
        <div>
            <div className={styles.cardGrid}>
                {currentCards.map((card, index) => (
                    <FlashCard key={index} title={card.title} content={card.content} />
                ))}
            </div>
            <div className={styles.pagination}>
                <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 0))} disabled={currentPage === 0}>
                    Previous
                </button>
                <span>{`${currentPage + 1} / ${totalPages}`}</span>
                <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages - 1))} disabled={currentPage === totalPages - 1}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default FlashCardGrid;
