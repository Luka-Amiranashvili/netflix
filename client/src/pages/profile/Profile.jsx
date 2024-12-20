import { Feed } from '@mui/icons-material';
import Sidebar from '../../components/sidebar/Sidebar';
import Topbar from '../../components/topbar/Topbar';
import './profile.css';
import Rightbar from '../../components/rightbar/Rightbar';

function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className='profileCoverImg' src="/assets/post/3.jpeg" alt="" />
                            <img className='profileUserImg' src="/assets/person/7.jpeg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Luka Amiranashvili</h4>
                            <span className='profileInfoDesc'>Hello my friends!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">  
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
