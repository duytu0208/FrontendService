// src/components/VideoTree.tsx
import React, { useState } from 'react';
import VideoPopup from '../VideoPopup';
import styles from '../../styles/VideoTree.module.css'; // Import CSS styles

interface Video {
    id: string;
    title: string;
    url: string;
    description: string;
    isPlaying: boolean;
    children: Video[];
}

interface VideoTreeProps {
    videos: Video[];
    title: string;
}

const VideoTree: React.FC<VideoTreeProps> = ({ videos, title }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState<{ url: string; description: string; id: string } | null>(null);

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
                    <li key={video.id} >
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
            <h2>{title}</h2>
            {renderVideoTree(videos)}

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

export default VideoTree;
