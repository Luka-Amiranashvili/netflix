import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import './featured.scss'
import { useEffect, useState } from 'react'
import axios from 'axios';

function Featured({type}) {
    const [content, setContent] = useState({});

    useEffect(()=>{
       const getrandomContent = async () =>{
        try{
            const res = await axios.get(`http://localhost:8800/api/movies/random?type=${type}`, {
                headers:{
                  token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MmI5ZDljNmUzNGMzN2M4ZjQwNjU2OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczMTE1ODMyOCwiZXhwIjoxNzMxNTkwMzI4fQ.YAEdsGiNhVU1xAVaSMGIE1337VLiA4s-9a5np8bTCkk "
                }
              });
            setContent(res.data[0]);
        }catch(err){
            console.log(err)
        }
       };
       getrandomContent();
    },[type])
    return (
        <div className='featured'>
            {type && (
                <div className="category">
                    <span>{type === 'movies' ? 'Movies' : 'Series'}</span>
                    <select name="genre" id="genre">
                        <option value='genre'>Genre</option>
                        <option value='adventure'>Adventure</option>
                        <option value='comedy'>Comedy</option>
                        <option value='crime'>Crime</option>
                        <option value='fantasy'>Fantasy</option>
                        <option value='historical'>Historical</option>
                        <option value='horror'>Horror</option>
                        <option value='romance'>Romance</option>
                        <option value='sci-fi'>Sci-fi</option>
                        <option value='thriller'>Thriller</option>
                        <option value='western'>Western</option>
                        <option value='animation'>Animation</option>
                        <option value='drama'>Drama</option>
                        <option value='documentary'>Documentary</option>
                    </select>
                </div>
            )}
            <img src={content.img} alt=""/>
            <div className="info">
                <img src={content.imgTitle} alt="" />
                <span className="desc">{content.desc}</span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
