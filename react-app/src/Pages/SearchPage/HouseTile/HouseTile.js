import React from "react";

import './HouseTile.css';

const HouseTile = ({ image, title, price }) => (
	<div className="houses-list__tile">
		<div className="houses-list__tile__image" style={{ backgroundImage: `url(${image})` }} />
		<h3 title={title.en}>{title.en}</h3>
		<p className='houses-list__tile__price'>&euro;{price} <small>per month</small></p>
	</div>
);

export default HouseTile;
