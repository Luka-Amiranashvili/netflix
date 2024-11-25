import './share.css';
import { PermMedia as PermMediaIcon, Label, Room, EmojiEmotions } from '@mui/icons-material'

function Share() {
    return (
        <div className='share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareProfileImg' src="/assets/person/1.jpeg" alt="" />
                    <input placeholder="What's in your mind Luka?" className="shareInput" />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className='shareOption'>
                            <PermMediaIcon htmlColor='tomato' className='shareIcon' />
                            <span className="shareOptionText">
                                Photo or Video
                            </span>
                        </div>
                        <div className='shareOption'>
                            <Label htmlColor='blue' className='shareIcon' />
                            <span className="shareOptionText">
                                Tag
                            </span>
                        </div>
                        <div className='shareOption'>
                            <Room htmlColor='green' className='shareIcon' />
                            <span className="shareOptionText">
                                Location
                            </span>
                        </div>
                        <div className='shareOption'>
                            <EmojiEmotions htmlColor='gold' className='shareIcon' />
                            <span className="shareOptionText">
                                Feelings
                            </span>
                        </div>
                    </div>
                    <button className="shareButton">
                        Share
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Share