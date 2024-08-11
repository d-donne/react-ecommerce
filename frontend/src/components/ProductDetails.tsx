import { Star } from "lucide-react";
import { productProps } from "./Item";
import { PRODUCT_SIZES } from "../constants/all_product";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

interface product extends productProps {}

const ProductDetails = ({ ...product }: product) => {

  const {addToCart} = useContext(ShopContext)

  return (
    <main className="container max-container -mt-8 gap-10">
      {/* PRODUCT IMAGES */}
      <div className="flex gap-4 w-6/12">
        <div className="flex flex-col gap-4 w-[20%]">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <img key={index} src={product.image} className="h-full w-full" />
            ))}
        </div>

        <div className="w-[80%] ">
          <img src={product.image} alt={product.name} className="h-full w-full" />
        </div>
      </div>

      {/* PRODUCT DETAILS */}
      <div className="flex flex-col gap-10 w-6/12">
        <h1 className="text-neutral-700 text-4xl font-bold  ">{product.name}</h1>
        <div className="flex items-center text-base text-zinc-900">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <Star className="text-red-500 fill-red-500" key={index} />
            ))}
          <Star /> 
          <p className="pl-2"> (122 reviews) </p>
        </div>

        <div className="flex gap-5 font-bold text-xl">
          <span className="text-zinc-500 line-through font-medium"> ${product.old_price} </span>
          <span className="text-red-500"> ${product.new_price} </span>
        </div>

        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni corporis esse officia ullam laudantium! Ullam corporis animi
          tempora excepturi repellendus atque provident adipisci quasi id dolorem perspiciatis, quae suscipit quaerat veritatis at
          reprehenderit eaque impedit dolore saepe dolor ea! Deleniti harum doloribus sunt explicabo doloremque!
        </p>

        <div className="grid gap-3">
          <h2 className="text-stone-500 font-semibold text-xl">Select size</h2>

          <div className="flex gap-5">
            {PRODUCT_SIZES.map((size) => (
              <button key={size} className="bg-zinc-50 border border-gray-200 py-4 px-6 rounded-sm">
                {size}
              </button>
            ))}
          </div>
        </div>

        <button onClick={()=>addToCart(product.id)} className="bg-red-500 hover:bg-red-500/90 px-12 font-semibold py-4 w-fit text-white active:bg-green-500">ADD TO CART</button>

        <p className="mt-12">
          <span className="">Category: </span> {product.category}, T-Shirt, Crop Top
        </p>
        <p className="-mt-7">
          <span className="">Tags: </span> {product.category}, Modern, Latest
        </p>
      </div>
    </main>
  );
};

export default ProductDetails;
