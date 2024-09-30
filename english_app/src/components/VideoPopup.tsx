// src/components/VideoPopup.tsx
import React from 'react';
import styles from '../styles/VideoPopup.module.css'; // Đường dẫn tới file CSS của popup

interface VideoPopupProps {
    videoUrl: string;
    description: string;
    onClose: () => void;
}

const VideoPopup: React.FC<VideoPopupProps> = ({ videoUrl, description, onClose }) => {
    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <button className={styles.close} onClick={onClose}>X</button>
                <h3>Video Description</h3>
                <p>{description}</p>
                <iframe
                    src={videoUrl}
                    title="Video"
                    className={styles.videoFrame}
                    frameBorder="0"
                    allowFullScreen
                    style={{ width: '100%', height: '100%' }} // Đặt chiều rộng và chiều cao là 100%
                ></iframe>
            </div>
        </div>
    );
};

export default VideoPopup;
