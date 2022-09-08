import Product from "../product/Product";
import "./productList.css";

const ProductList = () => {
	return (
		<div className="pl">
			<div className="pl-texts">
				<h1 className="pl-title">Create & inspire</h1>
				<p className="pl-desc">
					Cutting edge developments for your business
				</p>
			</div>
			<div className="pl-list">
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
		</div>
	);
};

export default ProductList;
