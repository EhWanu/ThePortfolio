import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";

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
				{products.map((item) => (
					<Product
						img={item.img}
						key={item.id}
						link={item.link}
					/>
				))}
			</div>
		</div>
	);
};

export default ProductList;
