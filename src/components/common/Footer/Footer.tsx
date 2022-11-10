import React from 'react';

import './Footer.css';

export const Footer = () => {
	return (
		<div className='footer-wrapper'>
			<div className='footer-wrapper-data'>
				<div className='footer-wrapper-data-text'>
					<h4>Dane kontaktowe</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi laborum nobis perspiciatis tempore! Aut delectus error, explicabo magnam optio quia reiciendis sed suscipit ullam, vel, vitae voluptates? Accusantium, aliquam eius!</p>
					<p>Zadzwoń : 555666777</p>
					<p>E-mail: sklep@vivi.pl</p>
				</div>

				<div className='footer-wrapper-data-text'>
					<h4>Informacje</h4>
					<p><a>Polityka prywatności</a></p>
					<p><a>Regulamin</a></p>
				</div>

				<div className='footer-wrapper-data-text'>
					<h4>Polecane strony</h4>
					<p><a>Cyfrostudnia</a></p>
					<p><a>Fundacja zaNim</a></p>
					<p><a>ViVi Sound</a></p>
					<p><a>Witek Wilk</a></p>
				</div>
			</div>
			<p>© ViVi 2022</p>
		</div>
	)
}