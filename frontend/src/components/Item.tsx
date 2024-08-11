import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

export interface productProps {
  id: number;
  image: string;
  name: string;
  category?: string;
  old_price: number;
  new_price: number;
}
const Item = ({ id, image, name, old_price, new_price }: productProps) => {
  const {addToCart} = useContext(ShopContext)
  return (
    <div className="max-w-[21.875rem] hover:scale-105 transition-all duration-500 hover:bg-white hover:z-10 cursor-pointer mx-auto">
      <Link to={`/product/${id}`}>
        <img onClick={() => window.scrollTo({ top: 59, left: 0, behavior: "smooth" })} src={image} alt={name} className="w" />
        <p className="my-[6px]">{name}</p>
      </Link>

      <div className="flex items-center gap-5 text-lg">
        <div className="text-gray-700 font-semibold"> ₡{new_price} </div>

        <div className="text-neutral-400 font-medium line-through">₡{old_price}</div>
        <button onClick={() => addToCart(id)} className="bg-red-500 text-white font-semibold px-2 ml-auto active:bg-green-500 ">Add to Cart</button>
      </div>
    </div>

    // TODO
    // add new product indicator
    //add add to cart quantity with +/- buttons
  );
};

export default Item;
