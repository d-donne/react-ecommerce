import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Product from "../pages/Product";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const CartItems = () => {
  const { all_product, cartItems, addToCart, reduceCart, removeFromCart, cartTotal } = useContext(ShopContext);
  return (
    <main className="container max-container flex-col gap-16 mt-10">
      <table className="w-11/12 mx-auto">
        {/* 
          TO DO: MAKE TABLE HEADER STICKY
         */}
        <thead className="bg-red-100 h-12">
          <tr>
            <th className="w-[20%]">Product Image</th>
            <th className="w-[40%]">Product Title</th>
            <th className="w-[10%]">Unit Price</th>
            <th className="w-[10%]">Quantity</th>
            <th className="w-[10%]">Total</th>
            <th className="w-[10%]">Action</th>
          </tr>
        </thead>
        <tbody>
          {all_product.map(
            (product) =>
              cartItems[product.id] > 0 && (
                <tr key={product.id}>
                  <td>
                    <Link to={`/product/${product.id}`}>
                      <img src={product.image} alt={Product.name} className="w-full mx-auto max-h-60" />
                    </Link>
                  </td>
                  <td className="px-1 text-center">
                    <Link to={`/product/${product.id}`} className="hover:text-blue-700">
                      {" "}
                      {product.name}{" "}
                    </Link>
                  </td>
                  <td>₡{product.new_price}</td>
                  <td>
                    <div className="flex gap-3 justify-center">
                      <Minus
                        size={27}
                        onClick={() => reduceCart(product.id)}
                        className={`text-red-500 bg-zinc-200 cursor-pointer ${
                          cartItems[product.id] <= 1 && "pointer-events-none bg-zinc-50 text-red-500/60"
                        }`}
                      />
                      {cartItems[product.id]}
                      <Plus size={27} onClick={() => addToCart(product.id)} className="text-green-500 bg-zinc-200 cursor-pointer" />
                    </div>
                  </td>
                  <td>₡{product.new_price * cartItems[product.id]}</td>
                  <td>
                    <Trash2
                      size={27}
                      onClick={() => removeFromCart(product.id)}
                      className="text-red-500 transition-all duration-300 active:animate-bounce hover:size-8 mx-auto cursor-pointer hover:text-red-500"
                    />
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>

      <section className="w-11/12 mx-auto flex gap-[10%]">
        <div className="w-6/12 flex flex-col gap-10">
          <h1 className="font-bold text-4xl uppercase ">cart summary</h1>

          <div className="grid gap-3">
            <div className="summary-item">
              <span>Subtotal</span> <span>${cartTotal()}</span>
            </div>
            <div className="summary-item">
              <span>Shipping Fee</span> <span>Free</span>
            </div>
            <div className="summary-item border-none text-lg font-bold">
              <span>Total</span> <span>${cartTotal()}</span>
            </div>
          </div>

          <Link to="/cart" className="uppercase bg-red-500 hover:bg-red-500/90 px-12 font-semibold py-4 w-fit text-white">
            Proceed to checkout
          </Link>
        </div>

        <div className="w-6/12 text-base text-zinc-600">
          <p className="text-neutral-600">If you have a promo code, Enter it here</p>
          <div className="flex mt-5">
            <input type="text" placeholder="promo code" className="uppercase w-6/12 bg-gray-200 px-5 py-3 outline-none" />
            <input type="submit" value="Submit" className=" bg-black text-white px-8 py3" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default CartItems;
