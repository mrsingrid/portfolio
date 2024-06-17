import './Home.css';
import githubSvg from '../assets/github.svg';
import linkedinSvg from '../assets/linkedin.svg';
import logoPng from '../assets/logo.png';
import developerJpg from '../assets/developer.jpg'

export function Home() {
	return (
		<main>
			<header className="header" id='header'>
				<img
					src={logoPng}
					width="90"
					alt=""
				/>
				<nav>
					<ul className='nav-block'>
						<li className='nav-block__option'><a href='#header'>Início</a></li>
						<li className='nav-block__option'><a href='#header'>Sobre</a></li>
						<li className='nav-block__option'><a href='#teck-stack'>Tecnologias Utilizadas</a></li>
						<li className='nav-block__option'><a>Projetos</a></li>
						<li className='nav-block__option'><a>Contato</a></li>
						<li className='nav-block__option nav-block__option--social-media'>
							<a href='https://github.com/mrsingrid'>
								<img
										src={githubSvg}
										alt=""
									/>
							</a>

							<a href='https://www.linkedin.com/in/ingrid-ara%C3%BAjo-9b2aa9154/' target='_blank' >
								<img
										src={linkedinSvg}
										alt=""
									/>
							</a>
						</li>
					</ul>
				</nav>
			</header>

			<section className="about">
				<h1 className='about__title'>
					Olá,<br />
					Meu nome é <br />
					Ingrid Araújo <br />
					Eu crio coisas para internet
				</h1>

				<div className="about__image">
					<img
						src={developerJpg}
						alt=""
					/>
				</div>
			</section>

			<section className="teck-stack" id='teck-stack'>
				<h2 className='teck-stack__title'>
					Tecnologias que utilizo
				</h2>
			</section>
		</main>
)}