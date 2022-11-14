import React from 'react';

import './Footer.css';

export const Footer = () => {
	return (
		<div className='footer-wrapper'>
			<div className='footer-wrapper-data'>
				<div className='footer-wrapper-data-text'>
					<h4>Dane kontaktowe</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi laborum nobis perspiciatis tempore!</p>
					<p>Zadzwoń : 555666777</p>
					<p>E-mail: <a href='mailto:sklep@vivi.pl'>sklep@vivi.pl</a></p>
				</div>

				<div className='footer-wrapper-data-text'>
					<h4>Informacje</h4>
					<p><a href='/polityka-prywatnosci'>Polityka prywatności</a></p>
					<p><a href='/regulamin'>Regulamin</a></p>
				</div>

				<div className='footer-wrapper-data-text'>
					<h4>Polecane strony</h4>
					<p><a href='https://www.aftermarket.pl/'>Cyfrostudnia</a></p>
					<p><a href='https://fundacjazanim.pl/'>Fundacja zaNim</a></p>
					<p><a href='http://vivisound.pl/'>ViVi Sound</a></p>
					<p><a href='http://witekwilk.pl/'>Witek Wilk</a></p>
				</div>
			</div>
			<div className='footer-wrapper-data-copyright'>
				<p>© ViVi 2022</p>
			</div>
		</div>
	)
}