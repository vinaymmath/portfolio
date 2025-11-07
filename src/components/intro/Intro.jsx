// import SquarePrifileImg from "../../assets/profilePictures/square_profile_pic.png"
import SquarePrifileImg from "../../assets/profilePictures/sq_pic_2_compressed.jpg"
import ProfileResources from "./ProfileResource.jsx"
import { trackEvent } from "../../utils/analytics.js"
import { analyticsLocations } from "../../utils/constants"

import "./intro.scss";

export default function Intro(){
    return(
        <>
            <div className="intro-container">
                <div className="profile-img-container">
                    <img src={SquarePrifileImg} className="profile-img circle" alt="profile image" />
                </div>
                <h3 className="intro-name">
                    Vinay Mudiyappanavarmath
                </h3>
                <div className="resources-container">
                    <ProfileResources></ProfileResources>
                </div>
                <p className="intro-text">
                    Hi, I’m Vinay, I love creating maintainable, high-performance frontends, improving user experiences, and helping teams grow through collaboration and mentorship.
                </p>
                <div className="intro-reachout_btn-container">
                    <p className="intro-text_reachout">
                        Let’s create something impactful together, feel free to get in touch.
                    </p>
                    <a href="#reachout" 
                        className="intro-reachout_btn"
                        onClick={() => trackEvent(`click_contact`, {
                            location: analyticsLocations.intro
                        })}>
                        <button>
                            Reach Out
                        </button>
                    </a>
                </div>
            </div>
        </>
    )
}