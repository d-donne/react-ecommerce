import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductsDisplay from "../components/ProductsDisplay";
import { ChevronDown } from "lucide-react";

type shopCategoryProps = {
  category: string;
  banner_img: string;
};
const ShopCategory = ({ category, banner_img }: shopCategoryProps) => {
  const { all_product } = useContext(ShopContext);

  return (
    <main className="max-container flex-col gap-16">
      <img
        src={banner_img}
        alt="banner"
      />

      <div className="container max-container items-center justify-between -mb-28">
        <p className="">
          <span className="font-semibold">Showing 1 -12</span> out of {all_product.length} products
        </p>
        <button className="flex items-center border border-zinc-500 rounded-full px-4 py-2 cursor-pointer">
          Sort by <ChevronDown />
        </button>
      </div>

      <ProductsDisplay
        product_collection={all_product}
        category={category}
      />

      <button className="w-fit mx-auto rounded-full text-lg text-neutral-500 bg-gray-200 py-3 px-7">Show More ...</button>
    </main>
  );
};

export default ShopCategory;
