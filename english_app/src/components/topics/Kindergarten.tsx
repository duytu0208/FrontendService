// src/components/Kindergarten.tsx
import React from 'react';
import VideoTree from './VideoTree';
import shortVowelWordData from '../../../public/english-data/kindergarten/01_ShortVowelWord.json';
import longVowelWordData from '../../../public/english-data/kindergarten/01_LongVowelWord.json';
import exerciseVowelsWordData from '../../../public/english-data/kindergarten/01_ExerciseVowelsWord.json';
import consonantWordData from '../../../public/english-data/kindergarten/02_ConsonantWord.json';
import consonantDigraphsData from '../../../public/english-data/kindergarten/03_ConsonantDigraphs.json';
import consonantBlendsData from '../../../public/english-data/kindergarten/04_ConsonantBlends.json';
import summaryData from '../../../public/english-data/kindergarten/05_Summary.json';


const Kindergarten = () => {
    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                <VideoTree videos={shortVowelWordData} title="Short Vowel Words" />
                <VideoTree videos={longVowelWordData} title="Long Vowel Words" />
                <VideoTree videos={exerciseVowelsWordData} title="Exercise Vowels" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                <VideoTree videos={consonantWordData} title="Consonant Words" />
                <VideoTree videos={consonantDigraphsData} title="Consonant Digraphs" />
                <VideoTree videos={consonantBlendsData} title="Consonant Blends" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                <VideoTree videos={summaryData} title="Summary" />
            </div>
        </div>
    );
};

export default Kindergarten;
