import LinkedIn from "../../assets/icons/linkedIn.svg"
import Leetcode from "../../assets/icons/leetcode.svg"
import Github from "../../assets/icons/github.svg"
import GithubResume from "../../assets/icons/github-resume.svg"

const linksList = [
    {
        "id": "link1",
        "name": "LinkedIn",
        "img": LinkedIn,
        "alt": "Redirect to LinkedIn",
        "link": "https://www.linkedin.com/in/vinaymmath"
    },
    {
        "id": "link2",
        "name": "Leetcode",
        "img": Leetcode,
        "alt": "Redirect to Leetcode",
        "link": "https://leetcode.com/u/vinaymm"
    },
    {
        "id": "link3",
        "name": "Github",
        "img": Github,
        "alt": "Redirect to Github",
        "link": "https://github.com/vinaymmath"
    },
    {
        "id": "link4",
        "name": "GithubResume",
        "img": GithubResume,
        "alt": "Redirect to Github Resume",
        "link": "https://github.com/vinaymmath"
    }
]

const elList = linksList.map((hook) => {
    return (
         <a className="redirection-menu-item" href={hook.link} target="_blank" key={hook.id}>
            <img src={hook.img} alt={hook.alt}/>
        </a>
    )
})

export default function ProfileResources() {
    return(
        <>
            <div className="resource-container">
                { elList }
            </div>
        </>
    )
}