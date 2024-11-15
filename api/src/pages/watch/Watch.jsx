import React, { useEffect } from 'react';
import { ArrowBackOutlined } from '@mui/icons-material';
import './watch.scss';
import { Link, useLocation } from 'react-router-dom';

function Watch() {
    const location = useLocation();
    const movie = location.state?.movie;
    useEffect(() => {
        const videoElement = document.getElementById('myVideo');
        
        // Check if the video is muted and unmute it if necessary
        if (videoElement.muted) {
            videoElement.muted = false; // Unmute if it is muted
            console.log("Video was muted; now it is unmuted.");
        } else {
            console.log("Video is already unmuted.");
        }
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div className='watch'>
            <Link to='/'>
                <div className="back">
                    <ArrowBackOutlined />
                    Home
                </div>
                <video 
                    className='video' 
                    id='myVideo' 
                    controls 
                    autoPlay
                    src={movie?.video}
                />
            </Link>
        </div>
    );
}

export default Watch;