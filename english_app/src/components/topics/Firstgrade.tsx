// src/components/Firstgrade.tsx
import React from 'react';
import VideoTree from './VideoTree';
import syllablesData from '../../../public/english-data/firstgrade/B_Syllables.json';
import rhymingData from '../../../public/english-data/firstgrade/C_Rhyming.json';
import blendingAndSegmentingData from '../../../public/english-data/firstgrade/D_BlendingAndSegmenting.json';
import silentEData from '../../../public/english-data/firstgrade/P_SilentE.json';
import vowelTeamsData from '../../../public/english-data/firstgrade/Q_VowelTeams.json';
import rControlledVowelsData from '../../../public/english-data/firstgrade/S_R-ControlledVowels.json';
import diphthongsData from '../../../public/english-data/firstgrade/T_Diphthongs.json';
import twoSyllableWordsData from '../../../public/english-data/firstgrade/U_Two-syllableWords.json';
import decodableTextsData from '../../../public/english-data/firstgrade/W_DecodableTexts.json';


const Firstgrade = () => {
    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                <VideoTree videos={syllablesData} title="Syllables" />
                <VideoTree videos={rhymingData} title="Rhyming" />
                <VideoTree videos={blendingAndSegmentingData} title="Blending and Segmenting" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                <VideoTree videos={silentEData} title="Silent E" />
                <VideoTree videos={vowelTeamsData} title="Vowel Teams" />
                <VideoTree videos={rControlledVowelsData} title="R-Controlled Vowels" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                <VideoTree videos={diphthongsData} title="Diphthongs" />
                <VideoTree videos={twoSyllableWordsData} title="Two-Syllable Words" />
                <VideoTree videos={decodableTextsData} title="Decodable Texts" />
            </div>
        </div>
    );
};

export default Firstgrade;
