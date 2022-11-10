import React from 'react';

import {Btn} from "../Btn/Btn";
import './Products.css';
import {ProductsType} from "../SectionShop/SectionShop";

export const Products = ({products}: any) => {

	return (
		<>

			<div className='products-wrapper'>
				<img src={products[0].img} alt=""/>
				<div className='products-title'>{products[0].title}</div>
				<div className='products-price'>{products[0].price}</div>
				<Btn text='Wybierz opcje'/>
			</div>

		</>
	)
}