import './rightbar.css';
import {Users} from '../../dummyData';
import Online from '../online/Online';

function Rightbar({profile}) {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className='birthdayImg' src="/assets/gift.png" alt="" />
                    <span className="birthdayText"><b>Pola</b> Foster and <b>3 other friends</b> have a birthday today. 
                    </span>
                </div>
                <img src="/assets/harmony.jpeg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className='rightbarTitle'>User Information
                </h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">
                            City:
                        </span>
                        <span className="rightbarInfoValue">
                            New York
                        </span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">
                            From:
                        </span>
                        <span className="rightbarInfoValue">
                            Madrid
                        </span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">
                            Relationship:
                        </span>
                        <span className="rightbarInfoValue">
                            Single
                        </span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">
                            John Carter
                        </span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">
                            Kevin Durant
                        </span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">
                            Stephen Curry
                        </span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">
                            Kobe Bryant
                        </span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">
                            Michael Jordan
                        </span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
               {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}

export default Rightbar
