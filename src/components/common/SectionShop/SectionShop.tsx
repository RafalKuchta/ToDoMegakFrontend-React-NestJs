import React, {useState} from 'react';

import './SectionShop.css';
import {Products} from "../Products/Products";

export interface ProductsType {
	img: string,
	title: string,
	price: string,
}

export const SectionShop = () => {
	const [products, setProducts] = useState<ProductsType[]>([
		{
			img: 'https://vivishop.pl/wp-content/uploads/2020/04/witek-wilk-wilkolasce-1.jpg',
			title: 'Witek Wilk – WilkoŁASCE cz. 1',
			price: '19,90 zł - 24,90 zł'
		},
		{
			img: 'https://vivishop.pl/wp-content/uploads/2020/04/witek-wilk-wilkolasce-2-768x768-1.jpg',
			title: 'Witek Wilk – WilkoŁASCE cz. 2',
			price: '18,90 zł - 25,90 zł'
		},
		{
			img: 'https://vivishop.pl/wp-content/uploads/2020/09/50428.jpg',
			title: 'Alfred Dudek – Duch Święty',
			price: '18,90 zł - 25,90 zł'
		},
		{
			img: 'https://vivishop.pl/wp-content/uploads/2020/06/alfred-moc.jpg',
			title: 'Alfred Dudek – Moc błogosławieństwa i przekleństwa',
			price: '18,90 zł - 25,90 zł'
		},
		{
			img: 'https://vivishop.pl/wp-content/uploads/2020/04/alfred-dudek-przebaczenie.jpg',
			title: 'Alfred Dudek – Przebaczenie w Chrystusie Jezusie Panu Naszym',
			price: '24,90 zł'
		},
		{
			img: 'https://vivishop.pl/wp-content/uploads/2020/04/witek-wilk-wilkolasce-2-768x768-1.jpg',
			title: 'Witek Wilk – WilkoŁASCE cz. 2',
			price: '18,90 zł - 25,90 zł'
		},
		{
			img: 'https://vivishop.pl/wp-content/uploads/2020/09/50428.jpg',
			title: 'Alfred Dudek – Duch Święty',
			price: '18,90 zł - 25,90 zł'
		},
		{
			img: 'https://vivishop.pl/wp-content/uploads/2020/06/alfred-moc.jpg',
			title: 'Alfred Dudek – Moc błogosławieństwa i przekleństwa',
			price: '18,90 zł - 25,90 zł'
		},
		{
			img: 'https://vivishop.pl/wp-content/uploads/2020/04/alfred-dudek-przebaczenie.jpg',
			title: 'Alfred Dudek – Przebaczenie w Chrystusie Jezusie Panu Naszym',
			price: '24,90 zł'
		}
	]);
	return (
		<div className='section-shop-wrapper'>
			<h2>Sklep</h2>
			<form action="">
				<select name="orderby" id="orderby" className='section-shop-wrapper-orderby'>
					<option value="menu_order">Domyślne sortowanie</option>
					<option value="popularity">Sortuj wg popularności</option>
					<option value="date">Sortuj od najnowszych</option>
					<option value="price">Sortuj po cenie od najniższej</option>
					<option value="price-desc">Sortuj po cenie od najwyższej</option>
				</select>
				<p>Wyświetlanie wszystkich wyników: 9</p>
			</form>
			<div className='section-shop-products'>
				<Products products={products}/>
			</div>
		</div>
	)
}