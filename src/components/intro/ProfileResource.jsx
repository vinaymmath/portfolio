import LinkedIn from "../../assets/icons/linkedIn.svg"
import Leetcode from "../../assets/icons/leetcode.svg"
import Github from "../../assets/icons/github.svg"
import GithubResume from "../../assets/icons/github-resume.svg"
import { LINK_TO_RESUME } from "../../utils/constants"
import { trackEvent } from "../../utils/analytics"
import { analyticsLocations } from "../../utils/constants"

const linksList = [
    {
        "id": "link1",
        "name": "LinkedIn",
        "img": LinkedIn,
        "alt": "LinkedIn",
        "link": "https://www.linkedin.com/in/vinaymmath"
    },
    {
        "id": "link2",
        "name": "Leetcode",
        "img": Leetcode,
        "alt": "Leetcode",
        "link": "https://leetcode.com/u/vinaymm"
    },
    {
        "id": "link3",
        "name": "Github",
        "img": Github,
        "alt": "Github",
        "link": "https://github.com/vinaymmath"
    },
    {
        "id": "link4",
        "name": "Resume",
        "img": GithubResume,
        "alt": "Resume",
        "link": LINK_TO_RESUME
    }
]

const elList = linksList.map((hook) => {
    return (
         <a 
            className="resources__item"
            href={hook.link}
            target="_blank"
            key={hook.id}
            data-tooltip={hook.alt}
            onClick={() => trackEvent(`click_${hook.name.toLowerCase()}`, {
                location: analyticsLocations.intro
            })}
        >
            <img src={hook.img} alt={hook.alt}/>
        </a>
    )
})

export default function ProfileResources() {
    return(
        <>
            <div className="resources">
                { elList }
            </div>
        </>
    )
}