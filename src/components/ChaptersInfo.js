import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ChaptersInfo = ({chapter}) => {

    const [episode, setEpisode] = useState({})

    useEffect(() => {
        axios.get(chapter)
            .then(res => setEpisode(res.data))
    },[chapter])

    return (
        <>
            <span className='badge bg-info text-dark me-2'> {episode.episode} </span>
        </>
    );
};

export default ChaptersInfo;