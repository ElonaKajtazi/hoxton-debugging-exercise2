import { Product as ProductType } from "../../utils/types";
import Product from "../Product";
import "./style.css";

type Props = {
  products: ProductType[]
};

const ProductList = (props: Props) => {
  // if (!props.products) return <h1>Loading</h1>;
  return (
    <div>
      {props.products.map((product) => (
        <Product product={product} key={product.id}/>
      ))}
    </div>
  );
};

export default ProductList;
