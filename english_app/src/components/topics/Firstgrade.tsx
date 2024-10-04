// src/components/Kindergarten.tsx
import React, { useState } from 'react';
import VideoPopup from '../VideoPopup';
import styles from '../../styles/VideoTree.module.css'; // Import CSS styles
import syllablesData from '../../../public/english-data/firstgrade/B_Syllables.json';
import rhymingData from '../../../public/english-data/firstgrade/C_Rhyming.json';
import blendingAndSegmentingData from '../../../public/english-data/firstgrade/D_BlendingAndSegmenting.json';
import silentEData from '../../../public/english-data/firstgrade/P_SilentE.json';
import vowelTeamsData from '../../../public/english-data/firstgrade/Q_VowelTeams.json';
import rControlledVowelsData from '../../../public/english-data/firstgrade/S_R-ControlledVowels.json';
import diphthongsData from '../../../public/english-data/firstgrade/T_Diphthongs.json';
import twoSyllableWordsData from '../../../public/english-data/firstgrade/U_Two-syllableWords.json';
import decodableTextsData from '../../../public/english-data/firstgrade/W_DecodableTexts.json';



interface Video {
    id: string;
    title: string;
    url: string;
    description: string;
    isPlaying: boolean;
    children: Video[];
}

const Firstgrade = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState<{ url: string; description: string; id: string } | null>(null);

    // Sử dụng dữ liệu từ file JSON
    const syllables: Video[] = syllablesData;
    const rhyming: Video[] = rhymingData;
    const blendingAndSegmenting: Video[] = blendingAndSegmentingData;

    const silentE: Video[] = silentEData;
    const vowelTeams: Video[] = twoSyllableWordsData;
    const rControlledVowels: Video[] = rControlledVowelsData;

    const diphthongs: Video[] = diphthongsData;
    const twoSyllableWords: Video[] = twoSyllableWordsData;
    const decodableTexts: Video[] = decodableTextsData;

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
            <h2>Firstgrade</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                {renderVideoTree(syllables)}
                {renderVideoTree(rhyming)}
                {renderVideoTree(blendingAndSegmenting)}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                {renderVideoTree(silentE)}
                {renderVideoTree(vowelTeams)}
                {renderVideoTree(rControlledVowels)}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                {renderVideoTree(diphthongs)}
                {renderVideoTree(twoSyllableWords)}
                {renderVideoTree(decodableTexts)}
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

export default Firstgrade;

// #!/bin/bash  echo "VERCEL_ENV: $VERCEL_ENV"  if [[ "$VERCEL_ENV" == "production" ]] ; then   # Proceed with the build   echo "✅ - Build can proceed"   exit 1;  else   # Don't build   echo "🛑 - Build cancelled"   exit 0; fi
