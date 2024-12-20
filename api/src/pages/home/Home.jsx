import { useEffect, useState } from 'react'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'
import axios from 'axios'

const Home = ({type}) => {
  const [lists,setLists] = useState([]);
  const [genre, setGenre] = useState(null)

  useEffect(()=>{
    const getRandomLists = async () =>{
      try{
        const res = await axios.get(`http://localhost:8800/api/lists${type ? "?&type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
          headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MmI5ZDljNmUzNGMzN2M4ZjQwNjU2OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczMTE1ODMyOCwiZXhwIjoxNzMxNTkwMzI4fQ.YAEdsGiNhVU1xAVaSMGIE1337VLiA4s-9a5np8bTCkk "
          }
        });
        console.log(res.data)
        setLists(res.data);
      }catch(err){
        console.log(err)
      }
    };
    getRandomLists();
  },[type,genre])
  return (
    <div className='home'>
        <Navbar />
        <Featured type={type} />
        {lists.map(list=>(
          <List key={list._id} list={list}/>
        ))}
    </div>
  )
}

export default Home
