// src/components/HtmlBasics.tsx
import React from 'react';
import FlashCardGrid from '../FlashCardGrid';

const flashCardData = [
    { title: 'HTML Introduction', content: 'Learn the basics of HTML.' },
    { title: 'HTML Elements', content: 'Explore different HTML elements.' },
    { title: 'HTML Attributes', content: 'Understand how to use attributes.' },
    // Thêm các flash cards khác ở đây
];

const HtmlBasics = () => {
    return (
        <div>
            <h2>HTML Basics</h2>
            <FlashCardGrid flashCards={flashCardData} />
        </div>
    );
};

export default HtmlBasics;
