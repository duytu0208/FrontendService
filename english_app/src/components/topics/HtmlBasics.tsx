// src/components/HtmlBasics.tsx
import React, { useState } from 'react';
import VideoPopup from '../VideoPopup';
import styles from '../../styles/VideoTree.module.css'; // Import CSS styles

const videoData = [
    {
        id: 'video-1', // Thêm id cho video
        title: 'HTML Introduction',
        url: '/videos/01_Kindergarten/01_a.mp4',
        description: 'Learn the basics of HTML.',
        isPlaying: false,
        children: [
            {
                id: 'video-1-1', // Thêm id cho video con
                title: 'HTML Elements',
                url: '/videos/html-elements.mp4',
                description: 'Explore different HTML elements.',
                isPlaying: false,
                children: []
            },
            {
                id: 'video-1-2', // Thêm id cho video con
                title: 'HTML Attributes',
                url: '/videos/html-attributes.mp4',
                description: 'Understand how to use attributes.',
                isPlaying: false,
                children: []
            }
        ]
    },
    // Thêm các video khác vào đây
];

const HtmlBasics = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState<{ url: string; description: string; id: string } | null>(null);
    const [videoList, setVideoList] = useState(videoData); // Trạng thái để quản lý danh sách video

    const handleOpenVideo = (video: { url: string; description: string; id: string }) => {
        setSelectedVideo(video);
        setIsOpen(true);
    };

    const handleCloseVideo = () => {
        setIsOpen(false);
        setSelectedVideo(null);
    };

    const renderVideoTree = (videos: typeof videoList) => {
        return (
            <ul className={styles.videoTree}>
                {videos.map((video, index) => (
                    <li key={index}>
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
            <h2>HTML Basics</h2>
            {renderVideoTree(videoList)}

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

export default HtmlBasics;
