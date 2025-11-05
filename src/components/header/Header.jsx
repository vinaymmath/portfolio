import HomeSvg from "../../assets/icons/home.svg"
import FolderSvg from "../../assets/icons/folder.svg"
import BusinessSvg from "../../assets/icons/business.svg"
import ToolsSvg from "../../assets/icons/tools.svg"
import ContactSvg from "../../assets/icons/contact.svg"
import ResumeSvg from "../../assets/icons/resume1.svg"
import { LINK_TO_RESUME } from "../../utils/constants";

const linksList = [
    {
        "id": "res1",
        "name": "Home",
        "img": HomeSvg,
        "alt": "Home",
        "link": "#home"
    },
    // {
    //     "id": "res2",
    //     "name": "Projects",
    //     "img": FolderSvg,
    //     "alt": "Projects",
    //     "link": "#projects"
    // },
    {
        "id": "res3",
        "name": "Experience",
        "img": BusinessSvg,
        "alt": "Experience",
        "link": "#experience"
    },
    {
        "id": "res4",
        "name": "Skills",
        "img": ToolsSvg,
        "alt": "Skills",
        "link": "#skills"
    },
    {
        "id": "res5",
        "name": "Contact",
        "img": ContactSvg,
        "alt": "Contact",
        "link": "#reachout"
    },
    {
        "id": "res6",
        "name": "Resume",
        "img": ResumeSvg,
        "alt": "Resume",
        "link": LINK_TO_RESUME,
        "newTab": true
    }
]

const elList = linksList.map((hook) => {
    return (
         <a className="resources__item" href={hook.link} key={hook.id} data-tooltip={hook.alt} target={hook.newTab ? "_blank": ""}>
            <img src={hook.img} alt={hook.alt}/>
        </a>
    )
})

export default function Header() {
    return (
        <>
            <div className="resources">
                {elList}
            </div>
        </>
    )
}