import React from 'react';

import {Btn} from "../Btn/Btn";
import './Products.css';

export const Products = ({products}: any) => {
	return (
		<>

			{
				products.map((product: any, i: number) => {
					return (
						<div key={i} className='products-wrapper'>
							<div className='products-img-title-price'>
								<img src={product.img} alt=""/>
								<div className='products-title'>{product.title}</div>
								<div className='products-price'>{product.price}</div>
							</div>
							<div className='products-button'>
								<Btn text='Wybierz opcje'/>
							</div>
						</div>
					)
				})
			}
		</>
	)
}