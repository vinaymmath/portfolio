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
                    Hi, I'm Vinay, a creative frontend engineer. 
                    Over 8 years of my professional career, I have delivered numerous scalable web applications.
                    I am skilled in micro-frontend architecture, reusable component libraries, and UI performance optimization and I expertise in delivering scalable, performant UIs through modern frontend architecture.
                </p>
                <div className="intro-reachout_btn-container">
                    <p className="intro-text_reachout">
                        Let us work together, please reachout here.
                    </p>
                    <a href="#reachout" className="intro-reachout_btn">
                        <button>
                            Reachout
                        </button>
                    </a>
                </div>
                {/* <div className="intro-reachout_btn-container">
                    <p className="intro-text_reachout">
                       Download my resume, here.
                    </p>
                    <a href="#reachout" className="intro-reachout_btn">
                        <button>
                            Reachout
                        </button>
                    </a>
                </div> */}
            </div>
        </>
    )
}