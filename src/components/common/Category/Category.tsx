import React from 'react';

import './Category.css';

export const Category = () => {
	return (
		<div className="category-wrapper">
			<h3>Kategorie</h3>
			<ul>
				<li>
					<a href="/kategoria-produktów/wydawnictwo">Wydawnictwo</a><p>(9)</p>
				</li>
				<li>
					<a href="/kategoria-produktów/wydawnictwo/audiobook">Audiobook</a><p>(7)</p>
				</li>
				<li>
					<a href="/kategoria-produktów/wydawnictwo/dvd">DVD</a><p>(1)</p>
				</li>
				<li>
					<a href="/kategoria-produktów/wydawnictwo/muzyka">Muzyka</a><p>(1)</p>
				</li>
			</ul>
		</div>
	)
}