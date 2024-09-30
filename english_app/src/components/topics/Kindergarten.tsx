// src/components/Kindergarten.tsx
import React, { useState } from 'react';
import VideoPopup from '../VideoPopup';
import styles from '../../styles/VideoTree.module.css'; // Import CSS styles

const videoData = [
    {
        id: 'A_VowelWord', // Thêm id cho video
        title: 'Vowel Word(Nguyên Âm)',
        url: '',
        description: 'a_e_i_o_u',
        isPlaying: false,
        children: [
            {
                id: 'ShortA', // Thêm id cho video con
                title: 'Short A',
                url: '/videos/01_Kindergarten/09_short_a.mp4',
                description: 'Đọc giống âm A tiếng việt',
                isPlaying: false,
                children: []
            },
            {
                id: 'ShortE', // Thêm id cho video con
                title: 'Short E',
                url: '/videos/01_Kindergarten/10_short_e.mp4',
                description: 'Đọc giống âm E tiếng việt',
                isPlaying: false,
                children: []
            },
            {
                id: 'ShortI', // Thêm id cho video con
                title: 'Short I',
                url: '/videos/01_Kindergarten/11_short_i.mp4',
                description: 'Đọc giống âm I tiếng việt nhưng lái qua âm Ê',
                isPlaying: false,
                children: []
            },
            {
                id: 'ShortO', // Thêm id cho video con
                title: 'Short O',
                url: '/videos/01_Kindergarten/12_short_o.mp4',
                description: 'Đọc giống âm O tiếng việt',
                isPlaying: false,
                children: []
            },
            {
                id: 'ShortU', // Thêm id cho video con
                title: 'Short U',
                url: '/videos/01_Kindergarten/12_short_u.mp4',
                description: 'Ơ mạnh, giơ 2 tay lên => Ơ',
                isPlaying: false,
                children: []
            },
            {
                id: 'LongA', // Thêm id cho video con
                title: 'Long A',
                url: '/videos/01_Kindergarten/23_Long_vowel_sounds_Long_a.mp4',
                description: 'Đọc AY',
                isPlaying: false,
                children: []
            },
            {
                id: 'LongE', // Thêm id cho video con
                title: 'Long E',
                url: '/videos/01_Kindergarten/24_Long_vowel_sounds_Long_e.mp4',
                description: '',
                isPlaying: false,
                children: []
            },
            {
                id: 'LongI', // Thêm id cho video con
                title: 'Long I',
                url: '/videos/01_Kindergarten/25_Long_vowel_sounds_Long_i.mp4',
                description: '',
                isPlaying: false,
                children: []
            },
            {
                id: 'LongO', // Thêm id cho video con
                title: 'Long O',
                url: '/videos/01_Kindergarten/26_Long_vowel_sounds_Long_o.mp4',
                description: '',
                isPlaying: false,
                children: []
            },
            {
                id: 'LongU', // Thêm id cho video con
                title: 'Long U',
                url: '/videos/01_Kindergarten/27_Long_vowel_sounds_Long_u.mp4',
                description: '',
                isPlaying: false,
                children: []
            },
            {
                id: 'BaiTap01', // Thêm id cho video con
                title: 'Bai Tap 01',
                url: '/videos/01_Kindergarten/13_z01_Spell the short vowel word.mp4',
                description: '',
                isPlaying: false,
                children: []
            },
            {
                id: 'BaiTap02', // Thêm id cho video con
                title: 'Bai Tap 02',
                url: '/videos/01_Kindergarten/14_z02_Read questions with short vowel words.mp4',
                description: '',
                isPlaying: false,
                children: []
            },
            {
                id: 'BaiTap03', // Thêm id cho video con
                title: 'Bai Tap 03',
                url: '/videos/01_Kindergarten/28_Short_and_Long_vowel_sounds_summary.mp4',
                description: '',
                isPlaying: false,
                children: []
            },
            {
                id: 'BaiTap04', // Thêm id cho video con
                title: 'Bai Tap 04',
                url: '/videos/01_Kindergarten/29_Decodable_texts_a_sounds.mp4',
                description: '',
                isPlaying: false,
                children: []
            }
        ]
    },
    {
        id: 'B_PhụÂm', // Thêm id cho video
        title: '(Phụ Âm)',
        url: '',
        description: '',
        isPlaying: false,
        children: [
            {
                id: 'B_No1', // Thêm id cho video con
                title: 'b-d-j-k-p-t-v-z',
                url: '/videos/01_Kindergarten/06_b-d-j-k-p-t-v-z.mp4',
                description: '',
                isPlaying: false,
                children: []
            },
            {
                id: 'B_No2', // Thêm id cho video con
                title: 'f-l-m-n-r-s',
                url: '/videos/01_Kindergarten/07_f-l-m-n-r-s.mp4',
                description: '',
                isPlaying: false,
                children: []
            },
            {
                id: 'B_No3', // Thêm id cho video con
                title: 'c-g-h-w',
                url: '/videos/01_Kindergarten/c-g-h-w.mp4',
                description: '',
                isPlaying: false,
                children: []
            }
        ]
    },
    {
        id: 'C_ConsonantDigraphs', // Thêm id cho video
        title: 'Consonant_digraphs',
        url: '',
        description: '',
        isPlaying: false,
        children: [
            {
                id: 'C_01', // Thêm id cho video con
                title: 'ch_th_sh',
                url: '/videos/01_Kindergarten/15_Consonant_digraphs_ch_th_sh.mp4',
                description: '',
                isPlaying: false,
                children: []
            },
            {
                id: 'C_02', // Thêm id cho video con
                title: '-ss_-ll_-ff_-zz_-ck.',
                url: '/videos/01_Kindergarten/16_Consonant_digraphs_-ss_-ll_-ff_-zz_-ck.mp4',
                description: '',
                isPlaying: false,
                children: []
            },
            {
                id: 'C_03', // Thêm id cho video con
                title: 'st_cl_sn_fl_tr_cr_fr',
                url: '/videos/01_Kindergarten/17_Consonant_blends_st_cl_sn_fl_tr_cr_fr.mp4',
                description: '',
                isPlaying: false,
                children: []
            },
            {
                id: 'C_04', // Thêm id cho video con
                title: 'sl_cr_tw_st_cl_fr_sw_bl_br_sm_sn_sp',
                url: '/videos/01_Kindergarten/18_Consonant_blends_sl_cr_tw_st_cl_fr_sw_bl_br_sm_sn_sp.mp4',
                description: '',
                isPlaying: false,
                children: []
            },
            {
                id: 'C_05', // Thêm id cho video con
                title: 'sp_dr_cl_st_cl_tr_fr',
                url: '/videos/01_Kindergarten/19_Consonant_blends_sp_dr_cl_st_cl_tr_fr.mp4',
                description: '',
                isPlaying: false,
                children: []
            },
            {
                id: 'C_06', // Thêm id cho video con
                title: 'nd_nt_sk_mp_ft_st_nk_lp',
                url: '/videos/01_Kindergarten/20_Consonant_blends_nd_nt_sk_mp_ft_st_nk_lp.mp4',
                description: '',
                isPlaying: false,
                children: []
            },
            {
                id: 'C_07', // Thêm id cho video con
                title: 'sp_dr_cl_st_cl_tr_fr',
                url: '/videos/01_Kindergarten/21_Consonant_blends_st_lf_nt_nd_mp_st_nt_nk_sk.mp4',
                description: '',
                isPlaying: false,
                children: []
            },
            {
                id: 'C_08', // Thêm id cho video con
                title: 'nd_st_nk_lt',
                url: '/videos/01_Kindergarten/22_Consonant_blends_nd_st_nk_lt_.mp4',
                description: '',
                isPlaying: false,
                children: []
            }
        ]
    }


    // Thêm các video khác vào đây
];

const Kindergarten = () => {
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
            <h2>Kindergarten</h2>
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

export default Kindergarten;
