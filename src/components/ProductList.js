import React, { Component } from 'react';

import Title from './Title';
import Product from './Product';

export default class ProductList extends Component {
	render() {
		return(
			<React.Fragment>
				<div className="py-5">
					<div className="container">
						<Title name="our" title="products" />
					</div>
				</div>
			</React.Fragment>
		);
	}
}