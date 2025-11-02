// import SquarePrifileImg from "../../assets/profilePictures/square_profile_pic.png"
import SquarePrifileImg from "../../assets/profilePictures/sq_pic_2-min.png"
import ProfileResources from "./ProfileResource.jsx"
import "./intro.scss";

export default function Intro(){
    return(
        <>
            <div className="intro-container">
                <div className="profile-img-container">
                    <img src={SquarePrifileImg} className="profile-img circle" alt="profile image" />
                </div>
                <h3>
                    Vinay M
                </h3>
                <div className="resources-container">
                    <ProfileResources></ProfileResources>
                </div>
                <p className="intro-text">
                    Hi, I'm Vinay, a creative web developer. 
                    <br />
                    I love creating visually stunning web applications.

                </p>
            </div>
        </>
    )
}