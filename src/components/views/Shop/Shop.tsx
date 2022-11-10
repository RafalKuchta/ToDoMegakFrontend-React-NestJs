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
				<h2><span>vivi</span> shop</h2>

				<div className='shop-nav'>
					<ul>
						<li>Sklep</li>
						<li>Moje konto</li>
						<li>Zamówienie</li>
						<li>0,00zł</li>
						<li>
							<FontAwesomeIcon
								icon={faBasketShopping}
								className="icon"
							/>
						</li>
					</ul>
				</div>
			</div>

			<Category/>
			<Footer />
		</>
	)
}