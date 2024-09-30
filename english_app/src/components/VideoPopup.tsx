import React from 'react';
import styles from '../styles/VideoPopup.module.css'; // Đường dẫn tới file CSS của popup

interface VideoPopupProps {
    videoUrl: string; // URL đầy đủ của video
    description: string;
    onClose: () => void;
}

const VideoPopup: React.FC<VideoPopupProps> = ({ videoUrl, description, onClose }) => {
    // Kiểm tra và chuyển đổi URL nếu cần thiết
    let embedUrl = videoUrl;
    if (videoUrl.includes('drive.google.com')) {
        const fileIdMatch = videoUrl.match(/\/d\/([0-9A-Za-z_-]{10,})\//);
        if (fileIdMatch && fileIdMatch[1]) {
            const fileId = fileIdMatch[1];
            embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
        }
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <button className={styles.close} onClick={onClose}>X</button>
                <h3>Video Description</h3>
                <p>{description}</p>
                <iframe
                    src={embedUrl}
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
