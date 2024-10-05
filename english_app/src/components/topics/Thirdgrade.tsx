// src/components/Kindergarten.tsx
import React from 'react';
import VideoTree from './VideoTree';
import shortAndLongVowelsData from '../../../public/english-data/thirdgrade/A_ShortAndLongVowels.json';
import blendsDigraphsAndTrigraphsData from '../../../public/english-data/thirdgrade/B_BlendsDigraphsAndTrigraphs.json';
import multisyllabicWordsData from '../../../public/english-data/thirdgrade/C_MultisyllabicWords.json';
import variantDiphthongAndRVowelPatternsData from '../../../public/english-data/thirdgrade/D_VariantDiphthongAndRVowelPatterns.json';
import irregularWordsData from '../../../public/english-data/thirdgrade/E_IrregularWords.json';



const Thirdgrade = () => {
    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                <VideoTree videos={shortAndLongVowelsData} title="A_ShortAndLongVowels" />
                <VideoTree videos={blendsDigraphsAndTrigraphsData} title="B_BlendsDigraphsAndTrigraphs" />
                <VideoTree videos={multisyllabicWordsData} title="C_MultisyllabicWords" />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                <VideoTree videos={variantDiphthongAndRVowelPatternsData} title="D_VariantDiphthongAndRVowelPatterns" />
                <VideoTree videos={irregularWordsData} title="E_IrregularWords" />
            </div>
        </div>
    );
};

export default Thirdgrade;
