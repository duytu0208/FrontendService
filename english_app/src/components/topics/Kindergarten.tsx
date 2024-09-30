// src/components/Kindergarten.tsx
import React, { useState } from 'react';
import VideoPopup from '../VideoPopup';
import styles from '../../styles/VideoTree.module.css'; // Import CSS styles
import shortVowelWordData from '../../../public/english-data/kindergarten/01_ShortVowelWord.json';
import longVowelWordData from '../../../public/english-data/kindergarten/01_LongVowelWord.json';
import exerciseVowelsWordData from '../../../public/english-data/kindergarten/01_ExerciseVowelsWord.json';

import consonantWordData from '../../../public/english-data/kindergarten/02_ConsonantWord.json';
import consonantDigraphsData from '../../../public/english-data/kindergarten/03_ConsonantDigraphs.json';
import consonantBlendsData from '../../../public/english-data/kindergarten/04_ConsonantBlends.json';

import summaryData from '../../../public/english-data/kindergarten/05_Summary.json';

interface Video {
    id: string;
    title: string;
    url: string;
    description: string;
    isPlaying: boolean;
    children: Video[];
}

const Kindergarten = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState<{ url: string; description: string; id: string } | null>(null);

    // Sử dụng dữ liệu từ file JSON
    const shortVowelWord: Video[] = shortVowelWordData;
    const longVowelWord: Video[] = longVowelWordData;
    const exerciseVowelsWord: Video[] = exerciseVowelsWordData;

    const consonantWord: Video[] = consonantWordData;
    const consonantDigraphs: Video[] = consonantDigraphsData;
    const consonantBlends: Video[] = consonantBlendsData;

    const summary: Video[] = summaryData;

    const handleOpenVideo = (video: { url: string; description: string; id: string }) => {
        setSelectedVideo(video);
        setIsOpen(true);
    };

    const handleCloseVideo = () => {
        setIsOpen(false);
        setSelectedVideo(null);
    };

    const renderVideoTree = (videos: Video[]) => {
        return (
            <ul className={styles.videoTree}>
                {videos.map((video) => (
                    <li key={video.id}>
                        <button onClick={() => handleOpenVideo(video)}>
                            {video.title}
                        </button>
                        {video.children && video.children.length > 0 && (
                            <div className={styles.children}>
                                {renderVideoTree(video.children)}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            <h2>Kindergarten</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                {renderVideoTree(shortVowelWord)}
                {renderVideoTree(longVowelWord)}
                {renderVideoTree(exerciseVowelsWord)}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                {renderVideoTree(consonantWord)}
                {renderVideoTree(consonantDigraphs)}
                {renderVideoTree(consonantBlends)}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                {renderVideoTree(summary)}
            </div>

            {isOpen && selectedVideo && (
                <VideoPopup
                    videoUrl={selectedVideo.url}
                    description={selectedVideo.description}
                    onClose={handleCloseVideo}
                />
            )}
        </div>
    );
};

export default Kindergarten;
