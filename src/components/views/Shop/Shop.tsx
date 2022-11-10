import React from 'react';
import {faBasketShopping} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './Shop.css';
import {Category} from "../../common/Category/Category";
import {Footer} from "../../common/Footer/Footer";

export const Shop = () => {
	return (
		<>
			<div className='shop-wrapper'>
				<div className='shop-nav'>
					<div className='shop-nav-sec1'>
						<ul>
							<li><a href='/moje-konto'>Moje konto</a></li>
							<li><a href='/zamowienia'>Zamówienie</a></li>
						</ul>

					</div>
					<div className='shop-nav-sec2'>
						<ul>
							<a href="/koszyk">
								<li>
									<FontAwesomeIcon
										icon={faBasketShopping}
										className="icon"
									/>
								</li>
								<li>0,00zł</li>
							</a>
						</ul>
					</div>
				</div>
			</div>

			<Category/>
			<Footer/>
		</>
	)
}