// src/components/Kindergarten.tsx
import React from 'react';
import VideoTree from './VideoTree';
import consonantDigraphsData from '../../../public/english-data/secondgrade/D_ConsonantDigraphs.json';
import digraphsBlendSilentLettersData from '../../../public/english-data/secondgrade/F_Digraphs-Blend-Silent-Letters.json';
import vowelTeamsData from '../../../public/english-data/secondgrade/I_VowelTeams.json';
import longVowelPatternsData from '../../../public/english-data/secondgrade/K_LongVowelPatterns.json';
import rControlledVowelsData from '../../../public/english-data/secondgrade/L_R-controlledVowels.json';
import diphthongsData from '../../../public/english-data/secondgrade/M_Diphthongs.json';
import variantVowelsData from '../../../public/english-data/secondgrade/N_VariantVowels.json';
import softGandCData from '../../../public/english-data/secondgrade/O_SoftGandC.json';
import openAndClosedSyllablesData from '../../../public/english-data/secondgrade/P_OpenAndClosedSyllables.json';
import twoSyllableWordsData from '../../../public/english-data/secondgrade/Q_Two-syllableWords.json';
import consonantLEData from '../../../public/english-data/secondgrade/R_Consonant-l-e.json';



const Secondgrade = () => {
    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                <VideoTree videos={consonantDigraphsData} title="D_ConsonantDigraphs" />
                <VideoTree videos={digraphsBlendSilentLettersData} title="F_Digraphs-Blend-Silent-Letters" />
                <VideoTree videos={vowelTeamsData} title="I_VowelTeams" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                <VideoTree videos={longVowelPatternsData} title="K_LongVowelPatterns" />
                <VideoTree videos={rControlledVowelsData} title="L_R-controlledVowels" />
                <VideoTree videos={diphthongsData} title="M_Diphthongs" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                <VideoTree videos={variantVowelsData} title="N_VariantVowels" />
                <VideoTree videos={softGandCData} title="O_SoftGandC" />
                <VideoTree videos={openAndClosedSyllablesData} title="P_OpenAndClosedSyllables" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                <VideoTree videos={twoSyllableWordsData} title="Q_Two-syllableWords" />
                <VideoTree videos={consonantLEData} title="R_Consonant-l-e" />
            </div>
        </div>
    );
};

export default Secondgrade;
