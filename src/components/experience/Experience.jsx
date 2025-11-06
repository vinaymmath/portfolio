import "./experience.scss"
import Arrow from "../../assets/icons/arrow.svg";

export default function Experience() {
    return(
        <>
					<div className="page__experience">
						<h3 className="page__about-title">
							<span className="page__about-title--primary">8 YEARS OF </span>	
							<span className="page__about-title--secondary">EXPERIENCE </span>	
						</h3>
						<a className="section__item" href="https://www.linkedin.com/company/zetasuite/" target="_blank">
							<div>
								<div className="section__item__header">
									<h3 className="section__item-title">Zeta</h3>
									<img className="section__item-action" src={Arrow} alt="arrow to indicate link"/>
								</div>
								<ul className="section__item-list">
									<li className="section__item-list-item">
										<span className="section__item-list-item-highlisht">Led micro-frontend architecture </span>for flagship products, reducing deployment time by 30% and enabling three teams to deploy independently.
									</li>
									<li className="section__item-list-item">
										<span className="section__item-list-item-highlisht">Optimized BFF APIs </span>to aggregate data from five microservices, improving data load performance by 60%.
									</li>
									<li className="section__item-list-item">
										<span className="section__item-list-item-highlisht">Developed and published </span>a shared component library adopted by three teams, standardizing UI and cutting duplicate effort by 60%.
									</li>
									<li className="section__item-list-item">
										<span className="section__item-list-item-highlisht">Added 100+ Jest unit tests </span>(90% coverage), reducing regression bugs by 25%.
									</li>
									<li className="section__item-list-item">
										<span className="section__item-list-item-highlisht">Implemented lazy loading </span>on data-heavy dashboards, cutting load time by 70% and improving Lighthouse score from 65 to 80.
									</li>
									<li className="section__item-list-item">
										<span className="section__item-list-item-highlisht">Mentored 5+ developers, </span> improving code quality and reducing review turnaround time by 20%.
									</li>
									<li className="section__item-list-item">
										<span className="section__item-list-item-highlisht">Piloted refactoring efforts, </span>reducing technical debt by 40% and onboarding time by 25%.
									</li>
									<li className="section__item-list-item">
										<span className="section__item-list-item-highlisht">Built pixel-perfect, </span>responsive dashboards using Vanilla JS (MVC architecture), improving load times by 30%.
									</li>
								</ul>
								<h3 className="section__item-footer">June 2017 - May 2025</h3>
							</div>
						</a>
					</div>
				</>
    )
}