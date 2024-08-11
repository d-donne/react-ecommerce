import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import DescriptionBox from "../components/DescriptionBox";
import ProductsDisplay from "../components/ProductsDisplay";
import data_product from "../constants/data";
import ProductDetails from "../components/ProductDetails";

const Product = () => {
  const { all_product } = useContext(ShopContext);

  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className="grid gap-16">
      {product && (
        <>
          <Breadcrumbs
            productCategory={product.category}
            productName={product.name}
          />

          <ProductDetails {...product} />
          <DescriptionBox />
            
          <ProductsDisplay heading="related products" product_collection={data_product}  />
        </>
      )}
    </div>
  );
};

export default Product;
