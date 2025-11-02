export default function Navbar() {
    return (
        <>
            <div className="container-fluid">
                <nav className="nav-bar">
                <div className="nav-left">
                    <h3>Vinay M</h3>
                </div>
                <div className="nav-right">
                    <div className="nav-bar-cont">
                    <ul className="navbar-list">
                        <li className="navbar-list-item">
                        About
                        </li>
                        <li className="navbar-list-item">
                        Experience
                        </li>
                        <li className="navbar-list-item">
                        Work
                        </li>
                        <li className="navbar-list-item">
                        Contact
                        </li>
                    </ul>
                    </div>
                    <div className="resume-btn-cont">
                    <button className="resume-btn">
                        Resume
                    </button>
                    </div>
                </div>
                </nav>
            </div>
        </>
    )
}