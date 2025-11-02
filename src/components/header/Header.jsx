import HomeSvg from "../../assets/icons/home.svg"
import FolderSvg from "../../assets/icons/folder.svg"
import BusinessSvg from "../../assets/icons/business.svg"
import ToolsSvg from "../../assets/icons/tools.svg"
import ContactSvg from "../../assets/icons/contact.svg"
import ResumeSvg from "../../assets/icons/resume1.svg"
import "./header.scss"
export default function Header() {
    return (
        <>
            <div className="resource-container">
                <div className="redirection-menu-item">
                    <img src={HomeSvg} alt="Home"/>
                    {/* <p>Home</p> */}
                </div>
                
                <div className="redirection-menu-item">
                    <img src={FolderSvg} alt="Projects"/>
                    {/* <p>Projects</p> */}
                </div>

                <div className="redirection-menu-item">
                    <img src={BusinessSvg} alt="Services"/>
                    {/* <p>Services</p> */}
                </div>

                <div className="redirection-menu-item">
                    <img src={ToolsSvg} alt="Tools"/>
                    {/* <p>Tools</p> */}
                </div>

                <div className="redirection-menu-item">
                    <img src={ContactSvg} alt="Contact"/>
                    {/* <p>Contact</p> */}
                </div>
                {/* <div className="redirection-menu-item">
                    <img src={ResumeSvg} alt="Resume"/>
                    <p>Resume</p>
                </div> */}
            </div>
        </>
    )
}