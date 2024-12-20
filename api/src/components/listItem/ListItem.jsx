import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import './listItem.scss'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListItem({index, item}) {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    useEffect(()=>{
        const getMovie = async () => {
            try{
                const res = await axios.get('http://localhost:8800/api/movies/find/'+item, {
                    headers:{
                      token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MmI5ZDljNmUzNGMzN2M4ZjQwNjU2OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczMTE1ODMyOCwiZXhwIjoxNzMxNTkwMzI4fQ.YAEdsGiNhVU1xAVaSMGIE1337VLiA4s-9a5np8bTCkk "
                    }
                  });
                  setMovie(res.data)

            }catch(err){
                console.log(err)
            }
        };
        getMovie();
    },[item]);

    return (
        <Link to={{pathname: '/watch',state: {movie} }}>
            <div 
                className='listItem'
                style={{left: isHovered && index * 225 - 50 + index * 2.5}}
                onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}
            >
                <img src={movie.img} alt='' />    
            {isHovered && (
                    <>
                        <video src={item.trailer} autoPlay={true} loop />
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrow className='icon'/>
                                <Add className='icon'/>
                                <ThumbUpAltOutlined className='icon'/>
                                <ThumbDownAltOutlined className='icon'/>
                            </div>
                            <div className="itemInfoTop">
                                <span>{movie.duration}</span>
                                <span className='limit'>{movie.limit}</span>
                                <span>{movie.year}</span>
                            </div>
                            <div className="desc">
                                {movie.desc}
                            </div>
                            <div className="genre">{movie.genre}</div>
                        </div>
                    </>
                )}
            </div>
        </Link>
    )
}

export default ListItem
