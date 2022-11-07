import React, { useLayoutEffect, useRef, useState} from 'react';
import {FaGithub, FaPhoneAlt, FaFacebook, FaLinkedin} from 'react-icons/fa';

import './Home.css';
import {MdEmail} from "react-icons/md";

export const Home = () => {
	const refContainer = useRef<HTMLDivElement>(null);
	const [dimensions, setDimensions] = useState({height: 0});

	useLayoutEffect(() => {
		if (refContainer.current) {
			setDimensions({
				height: refContainer.current.offsetHeight,
			});
		}
	}, []);

	return (
		<>
			<div className='component-about' style={{height: dimensions.height + 200}}>
				<div className="about-wrap" ref={refContainer}>
					<div className="img-wrap">
						<img src="https://avatars.githubusercontent.com/u/40246937?v=4" alt="avatar"/>
						<div className="name">
							<h2>Rafał Kuchta</h2>
						</div>
						<div className='get-cv'>
							<a
								href="./cv.pdf"
								target="__blank">
								Pobierz CV
							</a>
						</div>
					</div>

					<div className="about-me-wrap">
						{/*<p className="about-me-title">O mnie</p>*/}
						<div className="about-me">
							<div>
								Od 2017 interesuję się programowaniem w JavaScript i lubię działać na front-endzie.
								Skończyłem kilka kursów na Udemy z front-endu (React, Angular).
								W między czasie pracowałem jako Specjalista ds. IT na 1 i 2 linii wsparcia.<br/>
								Konfigurowałem usługi na serwerach, zarządzałem Esetem, usługami o365, tworzeniem kopii
								zapasowych i odzyskiwaniem danych, itd.
							</div>
							<br/>

							<div>Każdą wolną chwilę poświęcam jednak na programowanie, to mnie najbardziej
								pochłania.<br/>
								Lubię tworzyć nowe programy i szukać rozwiązań niedziałającego kodu.
							</div>
							<br/>

							<div>Od czerwca 2021 uczestniczę w Mega Kursie JavaScriptu ( <a
								href="https://www.megak.pl/">www.megak.pl</a> ), przygotowującym do pracy jako Junior
								JavaScript developer.<br/>
								Kurs prowadzony jest przez Jakuba Króla, Bartka Borowczyka i Marcina Grygierka.<br/>
								Na kursie poznałem takie technologie: JavaScript, NodeJs, ExpressJS, mongoDB,
								TypeScript, React oraz NestJs.<br/>
								Nauczyłem się pracy z Gitem oraz poznałem technologię Scrum, w której tworzymy wraz z
								innymi kursantami projekt końcowy.
							</div>
							<br/>

							<div>
								<ul>
									<li>Link do GitHuba: <a
										href='https://github.com/RafalKuchta/'>github.com/RafalKuchta</a></li>
								</ul>
							</div>
							<br/>


							Projekt wykorzystujący Reacta i Express:<br/>
							<div>

								<ul>
									<li>Link: <a href='https://todo.networkmanager.pl/'>todo.networkmanager.pl</a></li>
									<li>Front: <a
										href='https://github.com/RafalKuchta/ToDoMegakFrontend'>github.com/RafalKuchta/ToDoMegakFrontend</a>
									</li>
									<li>Back: <a
										href='https://github.com/RafalKuchta/ToDoMegakBackend'>github.com/RafalKuchta/ToDoMegakBackend</a>
									</li>
								</ul>
							</div>
							<br/>

							<div>
								Projekt wykorzystujący React i NestJs, zawiera dodatkowo logowanie i (role admin i
								reader).
								Dodatkowo rozbudowany o Messenger oraz bramkę SMS do wysyłania<br/>
								pojedynczych smsów oraz do grup. <br/>
								Dodawanie numerów do bazy, edycje numerów:<br/>
								<ul>
									<li>Link: <a href='https://nest.networkmanager.pl/'>nest.networkmanager.pl</a></li>
									<li>Front: <a
										href='https://github.com/RafalKuchta/ToDoMegakFrontend-React-NestJs'>github.com/RafalKuchta/ToDoMegakFrontend-React-NestJs</a>
									</li>
									<li>Back: <a
										href='https://github.com/RafalKuchta/ToDoMegakBackend-NestJs'>github.com/RafalKuchta/ToDoMegakBackend-NestJs</a>
									</li>
								</ul>
							</div>
							<br/>

							Projekt napisany w React i Express, umożliwiajacy dodawanie ogłoszeń do bazy danych:
							<ul>
								<li><a href='https://mega.networkmanager.pl/'>mega.networkmanager.pl</a></li>
							</ul>
						</div>
						<br/>


						{/*<div>Skills:</div>*/}
						{/*Etapy kursu:*/}
						{/*ETAP 1 - JAVASCRIPT OD PODSTAW DO PROFESJONALISTY<br/>*/}
						{/*Pierwszy moduł dedykowanym jest osobom, które chcą zacząć swoją przygodę z JavaScriptem lub*/}
						{/*programowaniem w ogóle, jednak… nie chcą na tym poprzestać. Chcą być w nim najlepsze. Chcą znać*/}
						{/*go na wylot i potrafić stosować najlepsze praktyki i jego nowoczesne elementy. Solidne podstawy*/}
						{/*pozwolą Ci poczuć się swobodniej w koderskim świecie.*/}
						{/*<img src="./js.jpg" alt=""/><br/>*/}

						{/*ETAP 2 - NODE.JS OD PODSTAW DO PROFESJONALISTY<br/>*/}
						{/*Moduł Node.js pozwala programiście JavaScript na zanurzenie się w back-end pisany w nowoczesnym*/}
						{/*środowisku uruchomieniowym Node.js. To narzędzie, dzięki któremu nie tylko napiszesz back-end,*/}
						{/*przyda się także front-endowcowi czy devopsowi, pozwoli Ci w przyszłości pisać aplikacje na*/}
						{/*komputery czy urządzenia mobilne. Nauczysz się, w jaki sposób działa Node.js, jak z niego*/}
						{/*skorzystać, a także jak poradzić sobie z różnymi realnymi sytuacjami w zawodzie programisty.*/}
						{/*Poznamy większość elementów, bez i z dodatkowymi paczkami. Po to byś poznał(a) prawdziwą moc*/}
						{/*Node.js, a także jego wykorzystanie w praktyce.<br/>*/}

						{/*<img src="./node.js" alt=""/><br/>*/}

						{/*ETAP 3 - FRAMEWORK EXPRESS.JS<br/>*/}
						{/*Express.js to z pewnością najpopularniejszy framework aplikacji back-endowych dla Node.js. Jest*/}
						{/*nawet popularniejszy niż pisanie aplikacji w czystym Nodzie! To sprawia, że jest to narzędzie,*/}
						{/*którego poznanie jest obowiązkowe na ścieżce każdego back-end developera i full-stacka. Express*/}
						{/*uprzyjemni Twoją pracę i sprawi, że będziesz gotowy/-a do pisania prawdziwych aplikacji, co*/}
						{/*przećwiczymy już w tym module! To punkt kulminacyjny - od tej chwili uczymy się rzeczy, z*/}
						{/*których na co dzień korzystać będziesz jako programist(k)a.<br/>*/}

						{/*<img src="./express.jpg" alt=""/><br/>*/}

						{/*ETAP 4 - BAZY DANYCH - MYSQL & MONGODB<br/>*/}
						{/*Czym jest praca developera bez przechowywania prawdziwych danych? Moduł baz danych pozwoli Ci*/}
						{/*nie tylko na sprawne zarządzanie informacjami i ich zachowanie na dowolny czas, ale także na*/}
						{/*szybkie ich wyszukiwanie czy aktualizowanie. Dowiesz się również, jak zarządzać bazami w*/}
						{/*prawdziwym życiu - jest to wiedza, która nie jest oczywista a zwiększa Twoją wartość -*/}
						{/*szczególnie w pracach programistycznych, gdzie liczy się skalowanie. Wszystko to oprzemy na*/}
						{/*dwóch różnych typach baz: relacyjnej i nierelacyjnej, abyś miał(a) wiedzę potrzebną w różnych*/}
						{/*typach firm IT. Niezależnie od tego, do jakiej się dostaniesz, zwiększamy Twoją pewność siebie,*/}
						{/*ponieważ wiesz, jak dobrze budować i wykorzystywać bazy danych.<br/>*/}

						{/*<img src="./mongo.jpg" alt=""/><br/>*/}

						{/*ETAP 5 - TYPESCRIPT, CZYLI NADZBIÓR JAVASCRIPTU<br/>*/}
						{/*JavaScript to język, o którym mówimy, że ma niski próg wejścia. Tzn. łatwo się go nauczyć. Ale,*/}
						{/*jak pewnie już widzisz po poprzednich modułach, łatwo wpaść w jego pułapki. TypeScript to*/}
						{/*uprofesjonalnienie JavaScriptu. Reklamowany jako "JS, który się skaluje", pomoże Ci popełniać*/}
						{/*mniej błędów i sprawić, że front-end oraz back-end mogą łatwiej się ze sobą komunikować.*/}
						{/*Będziesz korzystać z narzędzi, które przez społeczność JavaScriptu uchodzą za bardziej*/}
						{/*profesjonalne i sam(a) zobaczysz, że korzystanie z nich ułatwia Ci pracę!<br/>*/}

						{/*<img src="./type.jpg" alt=""/><br/>*/}

						{/*ETAP 6 - FULL-STACK DEVELOPER - REACT<br/>*/}
						{/*Full-stack developer to wyjątkowy moduł, który pozwala Ci stać się uniwersalnym programistą lub*/}
						{/*uniwersalną programistką! Poznasz tu podstawy nowoczesnego front-endu, ale to nie wszystko.*/}
						{/*Zobaczysz, w jaki sposób wygląda komunikacja między frontem a backiem i jak ją sobie poukładać.*/}
						{/*Podczas tego modułu nauczysz się podstawowej biblioteki twórców interfejsów, jaką jest*/}
						{/*React.<br/>*/}

						{/*<img src="./react.jpg" alt=""/><br/>*/}

						{/*ETAP 7 - NODE.JS ADVANCED - PRAKTYKA I PRACA<br/>*/}
						{/*Poprzednie etapy pokazały Ci, w jaki sposób wykorzystywać dane biblioteki, frameworki czy*/}
						{/*technologie. Ten etap to mnóstwo praktyki - wstęp do testowania, deploymentu, architektury*/}
						{/*aplikacji. To właśnie tutaj przećwiczysz wszystkie poznane elementy i z chaosu powstanie dzieło*/}
						{/*- Twoje portfolio i faktyczna, większa aplikacja. Co da Ci ten etap? Prawdziwą praktykę,*/}
						{/*poukładanie sobie wiedzy i portfolio. To bardzo ważny element układanki w Twojej drodze do*/}
						{/*poszukiwania pracy.<br/>*/}

						{/*<img src="./advanced.jpg" alt=""/><br/>*/}

						{/*ETAP 8 - NestJS<br/>*/}
						{/*Ten etap to potężna dawka wiedzy i praktyki z jednego z najpopularniejszych framework'ów*/}
						{/*Node.js, którym jest NestJS. Pozwoli Ci ona tworzyć zaawansowany, wysokiej jakości kod.<br/>*/}

						{/*<img src="./nest.jpg" alt=""/><br/>*/}

					</div>

					<div className="contact">
						<a href='https://github.com/RafalKuchta/'><FaGithub className="github-ico"/></a>
						<a href="mailto:rafal.kuchta1@gmail.com"><MdEmail className="email-ico"/></a>
						<a href="tel:+48506971427"><FaPhoneAlt className="phone-ico"/></a>
						<a href='https://www.facebook.com/profile.php?id=100009293703366'><FaFacebook
							className="email-ico"/></a>
						<a href='https://pl.linkedin.com/in/rafa%C5%82-kuchta-80489a170'><FaLinkedin
							className="linkedin-ico"/></a>
					</div>

				</div>
			</div>
		</>
	);
};
