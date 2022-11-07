import React, {useState} from 'react';
import './Header.css';
import {useNavigate} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom';
import {getAxiosData} from "../../common/Axios-api/Axios.api";

export const Header = ({setIsLogined}: any) => {
	const [isActive, setIsActive] = useState(false);
	const [isChecked, setIsChecked] = useState(false);

	const navigate = useNavigate();

	const handleClick = () => {
		setIsActive(current => !current);
		// setIsChecked(false)
	};

	const onHandleChecked = () => {
		setIsChecked(current => !current);
	}

	const logout = async () => {
		await getAxiosData({
			url: "/auth/logout",
			method: "GET",
		});
		setIsLogined.setIsLogined({
			isLogined: false,
			email: "",
			role: '',
		});
		navigate('/sms', {replace: true})
	}


	const editSettings = () => {
		setIsActive(current => !current);
		navigate('/users-list', {replace: true})
	}

	const registerUser = () => {
		navigate('/register', {replace: true});
	}


	return (
		<>
			<div className="top"></div>
			<section className="top-nav">
				<div>
					<NavLink to='/' className="logo">MegaApp</NavLink>
				</div>
				<input id="menu-toggle" type="checkbox" onChange={onHandleChecked} checked={isChecked}/>
				<label className='menu-button-container' htmlFor="menu-toggle">
					<div className='menu-button'></div>
				</label>
				<ul className="menu">
					<li><NavLink onClick={onHandleChecked} to='/'
					             className={({isActive}) => (isActive ? "about active" : "about")}>O mnie</NavLink></li>
					<li><NavLink onClick={onHandleChecked} to='/sms'
					             className={({isActive}) => (isActive ? "sms active" : "sms")}>Bramka Sms</NavLink></li>
					<li><NavLink onClick={onHandleChecked} to='/sent'
					             className={({isActive}) => (isActive ? "sent active" : "sent")}>Wysłane smsy</NavLink>
					</li>
					<li><NavLink onClick={onHandleChecked} to='/numbers-list'
					             className={({isActive}) => (isActive ? "numbers-list active" : "numbers-list")}>Lista
						numerów</NavLink></li>
					{setIsLogined.roles === 'admin' ?<li><NavLink onClick={onHandleChecked} to='/chat'
					                                               className={({isActive}) => (isActive ? "chat active" : "chat")}>Chat</NavLink></li> : null}
					{setIsLogined.roles === 'admin' ? <li><NavLink onClick={onHandleChecked} to='/todo'
					                                               className={({isActive}) => (isActive ? "todo active" : "todo")}>To
						Do</NavLink></li> : null}
				</ul>
				<div className='user'
				     unselectable="on"
				>
					<p onClick={handleClick}>{setIsLogined.email} ({setIsLogined.roles})
						<FontAwesomeIcon className='ico' icon={faAngleDown}/>
					</p>

					{isActive ?
						<ul className='logoutSettingButtons'>
							<li>
								<button className='logout' onClick={() => logout()}>Wyloguj</button>
							</li>
							{setIsLogined.roles === 'admin'
								?
								<>
									<li>
										<button className='settings' onClick={() => editSettings()}>Ustawienia</button>
									</li>
									<li>
										<button className='settings' onClick={() => registerUser()}>Dodaj użytkownika
										</button>
									</li>
								</>
								:
								null}
						</ul>
						: null}
				</div>

			</section>
		</>
	);
};